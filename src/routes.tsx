import { GraphPage } from '@pages/graph'
import { DashboardPage } from "@pages/dashboard";

import {
  MdHome,
  MdOutlineAutoGraph,
} from "react-icons/md";

const routes: RoutesType[] = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    link: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <DashboardPage />,
  },
  {
    name: "Graph",
    layout: "/admin",
    path: "graph/:counter?",
    link: "graph/all",
    icon: <MdOutlineAutoGraph className="h-6 w-6" />,
    component: <GraphPage />,
  },
];
export default routes;
