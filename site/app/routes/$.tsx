import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import { supabase } from "~/lib/supabase.server";

interface PageData {
  id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  body_sections: Array<{
    type: string;
    content: string;
  }>;
  intro_text: string | null;
  cta_label: string;
  cta_url: string;
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  const slug = params["*"];
  const url = new URL(request.url);
  const isPreview = url.searchParams.get("preview") === "true";

  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  // Build query - skip status check in preview mode
  const { data: page, error } = isPreview
    ? await supabase
        .from("pf_site_pages")
        .select("*")
        .eq("slug", slug)
        .maybeSingle()
    : await supabase
        .from("pf_site_pages")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

  if (error || !page) {
    throw new Response("Not Found", { status: 404 });
  }

  return { page, isPreview };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.page) {
    return [{ title: "Page Not Found | ProspectFly" }];
  }

  return [
    { title: data.page.meta_title || `${data.page.title} | ProspectFly` },
    { name: "description", content: data.page.meta_description || "" },
  ];
};

function renderSection(section: { type: string; content: string }, index: number) {
  switch (section.type) {
    case "text":
      return (
        <div
          key={index}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      );
    case "bullets":
      return (
        <ul key={index} className="list-disc list-inside space-y-2 text-gray-700">
          {section.content.split("\n").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "cta":
      return (
        <div key={index} className="my-8">
          <a
            href="/contact"
            className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
          >
            {section.content || "Get Started"}
          </a>
        </div>
      );
    default:
      return null;
  }
}

export default function DynamicPage() {
  const { page, isPreview } = useLoaderData<typeof loader>();

  return (
    <div className="py-16">
      {isPreview && (
        <div className="fixed top-4 left-4 z-50 bg-amber-500 text-black px-3 py-1.5 rounded text-xs font-medium shadow-lg">
          Preview
        </div>
      )}
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{page.title}</h1>

        {page.intro_text && (
          <p className="text-xl text-gray-600 mb-8">{page.intro_text}</p>
        )}

        <div className="space-y-6">
          {page.body_sections?.map((section: { type: string; content: string }, index: number) =>
            renderSection(section, index)
          )}
        </div>

        {page.cta_label && (
          <div className="mt-12 p-8 bg-gray-50 rounded-xl text-center">
            <a
              href={page.cta_url || "/contact"}
              className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-600 transition-colors"
            >
              {page.cta_label}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
