import CommonPageLayout from "../../components/layouts/CommonPageLayout";
import PageHeader from "../../components/texts/PageHeader";
import apiList from "../../constants/apiList";
import useApiCall from "../../hooks/useApiCall";
import UsersTable from "./components/UsersTable";
import { Stack, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

const CustomersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const search = searchParams.get("search") || "";
  const debouncedSearch = useDebounce(search, 500);

  const { data, loading, apiCall } = useApiCall({
    ...apiList.USERS.GET_ALL,
    autoFetch: false,
    params: { page, limit, search },
  });

  const updateQuery = useCallback(
    (updates) => {
      const newParams = new URLSearchParams(searchParams);
      Object.keys(updates).forEach((key) => {
        if (updates[key] === "" || updates[key] == null) {
          newParams.delete(key);
        } else {
          newParams.set(key, updates[key]);
        }
      });
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  useEffect(() => {
    apiCall({ params: { page, limit, search: debouncedSearch } });
  }, [page, limit, debouncedSearch]);

  const handlePageChange = (_, newPage) => {
    updateQuery({ page: newPage });
  };

  const handleSearch = (e) => {
    updateQuery({ search: e.target.value, page: 1 });
  };

  return (
    <div>
      <CommonPageLayout>
        <PageHeader
          title="Users Details"
          subtitle="Check all the details of your customers here."
        />
        <Stack
          sx={{ flexDirection: { xs: "column", md: "row" }, gap: 2, mb: 2 }}
        >
          <TextField
            placeholder="Search users..."
            size="small"
            fullWidth
            value={search}
            onChange={handleSearch}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: "none !important",
              },
            }}
          />
        </Stack>
        <UsersTable
          data={data}
          loading={loading}
          handlePageChange={handlePageChange}
          apiCall={apiCall}
          updateQuery={updateQuery}
        />
      </CommonPageLayout>
    </div>
  );
};

export default CustomersPage;
