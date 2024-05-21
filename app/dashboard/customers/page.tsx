import Table from "@/app/ui/customers/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Müşteriler",
    description: "Müşterilerinizi görüntüleyin ve yönetin. Müşterilerinizi düzenleyin, silin ve oluşturun.",
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';

    return (
        <div className="w-full">
            <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
                <Table query={query} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">

            </div>
        </div>
    );
}