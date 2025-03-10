import Home from "../page/Home";
import Detail from "../page/Detail";
import Read from "../page/Read";

interface RouteConfig {
  path: string;
  component: React.FC;
  layout?: React.FC | null;
}

const router: RouteConfig[] = [
  { path: "/", component: Home },
  {
    path: "/manga/:id",
    component: Detail,
  },
  { path: "/read/:id", component: Read, layout: null },
];

export default router;
