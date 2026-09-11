import Header from "@/components/layouts/Header";
import { Shell } from "@/components/layouts/Shell";
import CollectionsCard from "@/features/collections/components/CollectionsCard";
import { getAllCollectionsCached } from "@/lib/storefront/collections-list";
import { Metadata } from "next";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "All Collections",
  description:
    "Browse saree collections at Priya Sarees — silk, cotton, wedding and festive weaves.",
  alternates: {
    canonical: "/collections",
  },
  openGraph: {
    title: "All Collections | Priya Sarees",
    description: "Browse silk, cotton, wedding and festive collections at Priya Sarees.",
    url: "/collections",
  },
};

export default async function AllCollectionsPage() {
  const collectionsCollection = await getAllCollectionsCached();
  const collections = collectionsCollection?.edges ?? [];

  return (
    <Shell>
      <Header heading="Product Categories" />

      {collections.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No collections yet. Check back soon.
        </p>
      ) : (
        <section className="grid grid-cols-2 gap-3 py-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {collections.map(({ node }) => (
            <CollectionsCard key={node.id} collection={node} />
          ))}
        </section>
      )}
    </Shell>
  );
}
