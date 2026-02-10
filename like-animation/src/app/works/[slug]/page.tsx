import { notFound } from "next/navigation";
import { ALL_WORKS } from "@/data/works-data";
import WorkDetailPageContent from "@/components/work-detail/WorkDetailPageContent";

export async function generateStaticParams() {
    return ALL_WORKS.map((work) => ({
        slug: work.slug,
    }));
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const work = ALL_WORKS.find((w) => w.slug === slug);

    if (!work) {
        notFound();
    }

    return <WorkDetailPageContent work={work} />;
}
