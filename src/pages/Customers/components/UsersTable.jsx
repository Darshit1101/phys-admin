import DataTable from "../../../components/global/tables/DataTable";
import { formatDate } from "../../../utils/formatDate";
import { Box, Pagination, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const UsersTable = (props) => {
  const {
    data,
    loading,
    handlePageChange,
  } = props;

  const navigate = useNavigate();

  const columns = [
    {
      id: "customId",
      label: "Custom Id",
      render: (row) => (
        <Typography
          onClick={() => navigate(`/customers/${row?._id}`)}
          sx={{
            fontSize: "14px",
            textDecoration: "none",
            color: "primary.main",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {row?.customId}
        </Typography>
      ),
    },
    {
      id: "name",
      label: "Name",
      render: (row) => (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {row?.fullName}
        </Typography>
      ),
    },
    {
      id: "email",
      label: "Email",
      render: (row) => (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {row?.email}
        </Typography>
      ),
    },
    {
      id: "created_at",
      label: "Created At",
      render: (row) => (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {formatDate({
            dateStr: row?.createdAt,
            format: "MMM. DD YYYY",
            options: { includePrefix: false },
          })}
        </Typography>
      ),
    },
  ];

  const rows = data?.data?.users || [];
  const pagination = data?.data?.pagination || null;

  return (
    <div>
      <>
        <DataTable
          columns={columns}
          rows={rows}
          loading={loading}
          getRowId={(row) => row.id}
        />
        {pagination && (
          <Box
            display="flex"
            justifyContent={{ xs: "center", md: "end" }}
            mt={2}
          >
            <Pagination
              color="primary"
              page={pagination?.page}
              count={pagination?.totalPages}
              onChange={handlePageChange}
            />
          </Box>
        )}
      </>
    </div>
  );
};

export default UsersTable;
