import {
  LayoutDashboard,
  Settings,
  Users,
  Van,
  WashingMachine,
} from "lucide-react";
export const SIDEBAR_MENUS = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Jobs",
    icon: WashingMachine,
    path: "/jobs",
  },
  {
    title: "Driver Management",
    icon: Van,
    path: "/driver-management",
  },
  {
    title: "Customers",
    icon: Users,
    path: "/customers",
  },
  {
    title: "Laundromats",
    icon: WashingMachine,
    path: "/laundromats",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
