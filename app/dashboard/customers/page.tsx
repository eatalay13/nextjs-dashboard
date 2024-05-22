import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Müşteriler',
  description:
    'Müşterilerinizi görüntüleyin ve yönetin. Müşterilerinizi düzenleyin, silin ve oluşturun.',
};

interface CustomerProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function Page({ searchParams }: CustomerProps) {
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center"></div>
    </div>
  );
}
