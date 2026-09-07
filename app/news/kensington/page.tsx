import { NewsPostArticle } from "../../components/news-post-article";
import { getNewsPost } from "../../site-data";

export default function KensingtonPage() {
  return <NewsPostArticle post={getNewsPost("kensington")!} />;
}
