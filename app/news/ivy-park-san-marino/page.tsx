import { NewsPostArticle } from "../../components/news-post-article";
import { getNewsPost } from "../../site-data";

export default function IvyParkPage() {
  return <NewsPostArticle post={getNewsPost("ivy-park-san-marino")!} />;
}
