import { NewsPostArticle } from "../../components/news-post-article";
import { getNewsPost } from "../../site-data";

export default function GlennParkEventOnePage() {
  return <NewsPostArticle post={getNewsPost("glenn-park-event-1")!} />;
}
