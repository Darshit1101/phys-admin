import { useParams } from "react-router-dom";
import CommonPageLayout from "../../components/layouts/CommonPageLayout";
import PageHeader from "../../components/texts/PageHeader";
import apiList from "../../constants/apiList";
import useApiCall from "../../hooks/useApiCall";
import { Box, Card, CardContent, Grid, Typography, CircularProgress } from "@mui/material";

const CustomerDetailsPage = () => {
  const { userId } = useParams();

  const { data, loading } = useApiCall({
    ...apiList.USERS.GET_BY_ID,
    url: apiList.USERS.GET_BY_ID.url.replace(":id", userId),
  });

  const user = data?.data?.user;
  const personalDetails = data?.data?.personalDetails;

  if (loading) {
    return (
      <CommonPageLayout>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress />
        </Box>
      </CommonPageLayout>
    );
  }

  return (
    <CommonPageLayout>
      <PageHeader
        title="Customer Details"
        subtitle="View detailed information about the customer."
      />
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>User Information</Typography>
              <Box sx={{ mt: 2 }}>
                <InfoRow label="Custom ID" value={user?.customId} />
                <InfoRow label="Full Name" value={user?.fullName} />
                <InfoRow label="Email" value={user?.email} />
                <InfoRow label="Created" value={new Date(user?.createdAt).toLocaleString()} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Personal Details</Typography>
              <Box sx={{ mt: 2 }}>
                <InfoRow label="Age" value={personalDetails?.age} />
                <InfoRow label="Gender" value={personalDetails?.gender} />
                <InfoRow label="Phone" value={personalDetails?.phone} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </CommonPageLayout>
  );
};

const InfoRow = ({ label, value }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5, alignItems: "flex-start" }}>
    <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>{label}:</Typography>
    <Typography variant="body2" fontWeight={500} sx={{ textAlign: "right" }}>{value || 'N/A'}</Typography>
  </Box>
);

export default CustomerDetailsPage;
