import { NewsPostArticle } from "../../components/news-post-article";
import { getNewsPost } from "../../site-data";

export default function ArcadiaLivingPage() {
  return <NewsPostArticle post={getNewsPost("arcadia-living")!} />;
}
