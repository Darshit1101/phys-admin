import {
  LayoutDashboard,
  Settings,
  Users,
  CalendarCheck,
  WashingMachine,
} from "lucide-react";

export const SIDEBAR_MENUS = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Customers",
    icon: Users,
    path: "/customers",
  },
  // {
  //   title: "Settings",
  //   icon: Settings,
  //   path: "/settings",
  // },
  {
    title: "Data",
    icon: CalendarCheck,
    path: "/data",
  }
];
