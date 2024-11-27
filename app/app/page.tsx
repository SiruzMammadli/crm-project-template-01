import { DashboardCharts, DashboardDataTable, DashboardHeader, DashboardStatsCards } from "@/pages/dashboard";

export default () => {
  return (
    <>
      <DashboardHeader />
      <DashboardStatsCards />
      <DashboardCharts />
      <DashboardDataTable />
    </>
  );
};
