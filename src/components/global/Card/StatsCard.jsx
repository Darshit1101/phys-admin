import { Card, Typography, Box } from "@mui/material";

const StatsCard = ({ title, count, icon }) => {
  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="h4" fontWeight={600}>
            {count}
          </Typography>
        </Box>
        {icon && <Box sx={{ fontSize: 40, color: "primary.main" }}>{icon}</Box>}
      </Box>
    </Card>
  );
};

export default StatsCard;
