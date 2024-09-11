import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { principalFont } from "@/app/ui/fonts";
import { Suspense } from "react";
import {
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
  CardsSkeleton,
} from "@/app/ui/skeletons";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darshboard",
};

export default async function Page() {
  // const revenue = await fetchRevenue();
  /*
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData();
   */
  // const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <h1 className={`${principalFont.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* 
        <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
        */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue} /> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
