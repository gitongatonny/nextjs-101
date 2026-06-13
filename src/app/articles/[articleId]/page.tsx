import Link from "next/link";

// Async server component — params and searchParams are Promises in Next.js 15+
export default async function NewsArticle({
  params,
  searchParams,
}: {
  // Dynamic route segment e.g. /articles/breaking-news-123
  params: Promise<{ articleId: string }>;
  // Optional query param e.g. ?lang=fr — defaults to "en" if omitted
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
  // Await both promises before accessing values
  const { articleId } = await params;
  const { lang = "en" } = await searchParams; // Destructure with "en" as fallback

  return (
    <div>
      <h1>Breaking News: {articleId}</h1>
      <p>Language: {lang}</p>

      {/* Language switcher — rerenders page with same articleId, different lang param */}
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>
    </div>
  );
}
