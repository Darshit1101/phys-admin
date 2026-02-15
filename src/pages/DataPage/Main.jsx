import { Stack, TextField } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommonPageLayout from "../../components/layouts/CommonPageLayout";
import PageHeader from "../../components/texts/PageHeader";
import apiList from "../../constants/apiList";
import useApiCall from "../../hooks/useApiCall";
import useDebounce from "../../hooks/useDebounce";
import AppointmentsTable from "./components/AppointmentsTable";

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const search = searchParams.get("search") || "";
  const debouncedSearch = useDebounce(search, 500);

  const { data, loading, apiCall } = useApiCall({
    ...apiList.APPOINTMENTS.GET_ALL,
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
    <CommonPageLayout>
      <PageHeader title="Appointments" subtitle="View all appointment details here." />
      <Stack sx={{ flexDirection: { xs: "column", md: "row" }, gap: 2, mb: 2 }}>
        <TextField
          placeholder="Search appointments..."
          size="small"
          fullWidth
          value={search}
          onChange={handleSearch}
          sx={{ "& .MuiOutlinedInput-notchedOutline": { boxShadow: "none !important" } }}
        />
      </Stack>
      <AppointmentsTable data={data} loading={loading} handlePageChange={handlePageChange} />
    </CommonPageLayout>
  );
};

export default Main;