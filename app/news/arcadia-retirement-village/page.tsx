import { NewsPostArticle } from "../../components/news-post-article";
import { getNewsPost } from "../../site-data";

export default function ArcadiaRetirementVillagePage() {
  return <NewsPostArticle post={getNewsPost("arcadia-retirement-village")!} />;
}
