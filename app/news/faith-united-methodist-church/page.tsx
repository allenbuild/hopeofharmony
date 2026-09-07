import { NewsPostArticle } from "../../components/news-post-article";
import { getNewsPost } from "../../site-data";

export default function FaithUnitedMethodistChurchPage() {
  return <NewsPostArticle post={getNewsPost("faith-united-methodist-church")!} />;
}
