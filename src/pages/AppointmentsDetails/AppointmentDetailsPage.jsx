import { useParams } from "react-router-dom";
import CommonPageLayout from "../../components/layouts/CommonPageLayout";
import PageHeader from "../../components/texts/PageHeader";
import useApiCall from "../../hooks/useApiCall";
import apiList from "../../constants/apiList";
import { Card, Grid, Typography, Box, Skeleton } from "@mui/material";
import { formatDate } from "../../utils/formatDate";

const AppointmentDetailsPage = () => {
  const { id } = useParams();

  const { data, loading } = useApiCall({
    ...apiList.APPOINTMENTS.GET_BY_ID,
    url: apiList.APPOINTMENTS.GET_BY_ID.url.replace(":id", id),
  });

  const appointment = data?.data?.appointment || {};
  const personalDetails = data?.data?.personalDetails || {};

  if (loading) {
    return (
      <CommonPageLayout>
        <Skeleton variant="rectangular" height={40} sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {[1, 2, 3].map((i) => (
            <Grid item xs={12} md={6} key={i}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
          ))}
        </Grid>
      </CommonPageLayout>
    );
  }

  return (
    <CommonPageLayout>
      <PageHeader title="Appointment Details" subtitle={`Appointment ID: ${appointment.customId}`} />
      
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Appointment Information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Date</Typography>
                <Typography variant="body1" fontWeight={500}>
                  {formatDate({ dateStr: appointment.appointmentDate, format: "MMM. DD YYYY", options: { includePrefix: false } })}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Time Slot</Typography>
                <Typography variant="body1" fontWeight={500}>
                  {appointment.slotStart} ({appointment.slotDuration} min)
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Problem</Typography>
                <Typography variant="body1" fontWeight={500}>{appointment.problem}</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Patient Details
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Name</Typography>
                <Typography variant="body1" fontWeight={500}>{appointment.accountDetails?.fullName}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Email</Typography>
                <Typography variant="body1" fontWeight={500}>{appointment.accountDetails?.email}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Phone</Typography>
                <Typography variant="body1" fontWeight={500}>{personalDetails.phone || "N/A"}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Age</Typography>
                <Typography variant="body1" fontWeight={500}>{personalDetails.age || "N/A"}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Gender</Typography>
                <Typography variant="body1" fontWeight={500}>{personalDetails.gender || "N/A"}</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Address
            </Typography>
            {appointment.address ? (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">Address Line</Typography>
                  <Typography variant="body1" fontWeight={500}>{appointment.address.line1 || "-"}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">City</Typography>
                    <Typography variant="body1" fontWeight={500}>{appointment.address.city || "-"}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">State</Typography>
                    <Typography variant="body1" fontWeight={500}>{appointment.address.state || "-"}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Postal Code</Typography>
                    <Typography variant="body1" fontWeight={500}>{appointment.address.postalCode || "-"}</Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Typography variant="body1" color="text.secondary" sx={{ fontStyle: "italic" }}>
                No address information available
              </Typography>
            )}
          </Card>
        </Grid>
      </Grid>
    </CommonPageLayout>
  );
};

export default AppointmentDetailsPage;
