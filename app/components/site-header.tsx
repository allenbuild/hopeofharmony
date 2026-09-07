import Image from "next/image";
import Link from "next/link";
import { navigation } from "../site-data";

export function SiteHeader({ active }: { active: string }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Hope of Harmony home">
          <span className="wordmark-mark" aria-hidden="true">
            <Image
              src="/assets/harmony-monogram.png"
              alt=""
              width={1080}
              height={1080}
              priority
              unoptimized
            />
          </span>
          <span>Hope of Harmony</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.key}
              className={active === item.key ? "active" : undefined}
              href={item.href}
              aria-current={active === item.key ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Navigation menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.key}
                className={active === item.key ? "active" : undefined}
                href={item.href}
                aria-current={active === item.key ? "page" : undefined}
              >
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
