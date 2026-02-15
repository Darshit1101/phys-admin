import React from "react";
import CommonPageLayout from "../../components/layouts/CommonPageLayout";
import PageHeader from "../../components/texts/PageHeader";
import { Grid, Skeleton } from "@mui/material";
import StatsCard from "./StatsCard";
import useApiCall from "../../hooks/useApiCall";
import apiList from "../../constants/apiList";
import { People, CalendarMonth } from "@mui/icons-material";
import { Users, CalendarCheck } from "lucide-react";

const DashboardPage = () => {
  const { data, loading } = useApiCall(apiList.DASHBOARD.GET_STATS);

  const stats = data?.data || {};

  return (
    <>
      <CommonPageLayout>
        <PageHeader
          title="Dashboard"
          subtitle="Welcome to the dashboard! Here you can find an overview of all the important metrics and insights related to your business. Stay updated with real-time data and make informed decisions to drive your success."
        />
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            {loading ? (
              <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 1 }} />
            ) : (
              <StatsCard title="Total Users" count={stats.userCount || 0} icon={<Users size={30} />} />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {loading ? (
              <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 1 }} />
            ) : (
              <StatsCard title="Total Appointments" count={stats.appointmentCount || 0} icon={<CalendarCheck size={30} />} />
            )}
          </Grid>
        </Grid>
      </CommonPageLayout>
    </>
  );
};

export default DashboardPage;
