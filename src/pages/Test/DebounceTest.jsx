import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Stack } from "@mui/material";
import useDebounce from "../../hooks/useDebounce";
import Button from "../../components/global/buttons/Button";
import CommonPageLayout from "../../components/layouts/CommonPageLayout";

const TestPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  // This is the magic! useDebounce waits 500ms after user stops typing
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setUsers([]);
      return;
    }

    fetch(`https://dummyjson.com/users/search?q=${debouncedSearchTerm}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.users || []))
      .catch(() => setUsers([]));
  }, [debouncedSearchTerm]);

  return (
    <CommonPageLayout>
      <Typography variant="h4" gutterBottom>
        useDebounce Test
      </Typography>

      {/* Search Input */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search users..."
          variant="outlined"
        />
        <Button onClick={() => setSearchTerm("")}>Clear</Button>
      </Stack>

      {/* Show what's happening */}
      <Box sx={{ mb: 3, p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
        <Typography variant="body2">You typed: "{searchTerm}"</Typography>
        <Typography variant="body2">
          API searches for: "{debouncedSearchTerm}"
        </Typography>
      </Box>

      {/* Results */}
      {users.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Found {users.length} users:
          </Typography>
          {users.map((user) => (
            <Box
              key={user.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                mb: 1,
                border: "1px solid #ddd",
                borderRadius: 1,
              }}
            >
              <img
                src={user.image}
                alt={user.firstName}
                style={{ width: 40, height: 40, borderRadius: "50%" }}
              />
              <Box>
                <Typography variant="subtitle2">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {user.email}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* No results message */}
      {debouncedSearchTerm && users.length === 0 && (
        <Typography color="text.secondary" sx={{ textAlign: "center", py: 2 }}>
          No users found for "{debouncedSearchTerm}"
        </Typography>
      )}
    </CommonPageLayout>
  );
};

export default TestPage;
