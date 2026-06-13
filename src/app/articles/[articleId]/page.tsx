import Link from "next/link";

export default async function NewsArticle({

    params,
    searchParams,

}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;
    return (
    <div>
      <h1>Breaking News: {articleId}</h1>
      <p>Language: {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>

        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>

        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        
      </div>
    </div>
  );
}
