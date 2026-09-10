import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/", requestHeaders = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html", ...requestHeaders },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

const routes = [
  ["/", /Our mission: to uplift the community/],
  ["/about", /Who We/],
  ["/team", /Alyssa Guo/],
  ["/join", /Open to students, 6th grade and above/],
  ["/news", /July 22nd, 2025: The Kensington/],
  ["/news/kensington", /July 22nd, 2025: The Kensington/],
  ["/news/arcadia-living", /Updated: Jul 24, 2025/],
  ["/news/ivy-park-san-marino", /Ivy Park at San Marino/],
  ["/news/arcadia-retirement-village", /first event in 2025/],
  ["/news/glenn-park-event-2", /Glenn Park Event #2/],
  ["/news/glenn-park-event-1", /Music and laughter filled the halls/],
  ["/news/faith-united-methodist-church", /Faith United Methodist Church/],
  ["/contact", /Subject/],
  ["/about-us", /Who We/],
  ["/our-team", /Alyssa Guo/],
  ["/join-us", /Interest Form/],
  ["/contact-us", /Email Us/],
  ["/blog", /July 22nd, 2025: The Kensington/],
];

test("server-renders every redesigned Hope of Harmony page", async () => {
  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, expected, pathname);
    assert.match(html, /Hope of Harmony/);
    assert.match(html, /Our mission: to uplift the community/);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
  }
});

test("keeps Speak Your Truth hidden", async () => {
  for (const pathname of ["/speak-your-truth", "/general-7"]) {
    const response = await render(pathname);
    assert.equal(response.status, 404, pathname);
  }

  const response = await render("/");
  const html = await response.text();
  assert.doesNotMatch(html, /href="\/speak-your-truth"/);
  assert.doesNotMatch(html, /Speak Your Truth/);
});

test("preserves the source content and project-local editorial assets", async () => {
  const [data, speak, css, form, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/site-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/speak-your-truth/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/contact-form.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(data, /The use of AI is strictly prohibited/);
  assert.match(speak, /First-place recipients will receive a \$100 award/);
  assert.match(data, /July 20th, 2025: Arcadia Living/);
  assert.match(data, /May 14, 2023: Performance at Faith United Methodist Church/);
  assert.match(css, /--forest-deep:\s*#12271f/i);
  assert.match(css, /@media \(max-width: 820px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(form, /Thanks for submitting!/);
  assert.match(layout, /openGraph/);
  assert.doesNotMatch(layout, /http:\/\/localhost:3000/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  const assets = [
    "harmony-monogram.png",
    "harmony-logo.png",
    "editorial/speak-your-truth.png",
    "editorial/visual-art.jpg",
    "editorial/music.jpg",
    "editorial/writing.jpg",
    "editorial/photography.jpg",
    "editorial/kensington-1.jpg",
    "editorial/arcadia-1.jpg",
    "editorial/ivy-park-1.jpg",
    "editorial/arcadia-retirement-1.jpg",
    "editorial/glenn-park-1-1.jpg",
    "editorial/glenn-park-2-1.jpg",
    "editorial/faith-united-1.jpg",
    "../og.png",
  ];
  await Promise.all(
    assets.map((asset) => access(new URL(`../public/assets/${asset}`, import.meta.url))),
  );
});

test("uses the canonical production origin for absolute metadata URLs", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(html, /content="https:\/\/hopeofharmony\.org\/og\.png"/);
  assert.doesNotMatch(html, /http:\/\/localhost:3000/);
});

test("opens every Google Form CTA safely in a new tab", async () => {
  for (const pathname of ["/", "/join"]) {
    const response = await render(pathname);
    const html = await response.text();
    const formLinks = html.match(
      /<a\b[^>]*href="https:\/\/(?:forms\.gle|docs\.google\.com\/forms)[^"]*"[^>]*>/g,
    ) ?? [];

    assert.ok(formLinks.length > 0, `Google Form CTA missing on ${pathname}`);
    for (const link of formLinks) {
      assert.match(link, /target="_blank"/);
      assert.match(link, /rel="noopener noreferrer"/);
      assert.match(link, /aria-label="[^"]*opens in a new tab[^"]*"/i);
    }
  }
});
