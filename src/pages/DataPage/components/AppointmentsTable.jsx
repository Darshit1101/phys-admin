import DataTable from "../../../components/global/tables/DataTable";
import { formatDate } from "../../../utils/formatDate";
import { Box, Pagination, Typography } from "@mui/material";

const AppointmentsTable = ({ data, loading, handlePageChange }) => {
  const columns = [
    {
      id: "customId",
      label: "Appointment ID",
      render: (row) => (
        <Typography sx={{ fontSize: "14px", color: "primary.main", fontWeight: 500 }}>
          {row?.customId}
        </Typography>
      ),
    },
    {
      id: "patientName",
      label: "Patient Name",
      render: (row) => (
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
          {row?.patientProfile?.fullName}
        </Typography>
      ),
    },
    {
      id: "patientEmail",
      label: "Patient Email",
      render: (row) => (
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
          {row?.patientProfile?.email}
        </Typography>
      ),
    },
    {
      id: "appointmentDate",
      label: "Appointment Date",
      render: (row) => (
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
          {formatDate({ dateStr: row?.appointmentDate, format: "MMM. DD YYYY", options: { includePrefix: false } })}
        </Typography>
      ),
    },
    {
      id: "slotStart",
      label: "Time Slot",
      render: (row) => (
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
          {row?.slotStart} ({row?.slotDuration} min)
        </Typography>
      ),
    },
    {
      id: "problem",
      label: "Problem",
      render: (row) => (
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
          {row?.problem}
        </Typography>
      ),
    },
  ];

  const rows = data?.data?.appointments || [];
  const pagination = data?.data?.pagination || null;

  return (
    <>
      <DataTable columns={columns} rows={rows} loading={loading} getRowId={(row) => row._id} />
      {pagination && (
        <Box display="flex" justifyContent={{ xs: "center", md: "end" }} mt={2}>
          <Pagination color="primary" page={pagination?.page} count={pagination?.totalPages} onChange={handlePageChange} />
        </Box>
      )}
    </>
  );
};

export default AppointmentsTable;
