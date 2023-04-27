
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@shared/ui/navbar";
import Sidebar from "@shared/ui/sidebar";
import { useEffect, useState } from 'react'
import routes from '../../routes'

export function AdminLayout(props: { [x: string]: any }) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes: RoutesType[]): string | boolean => {
    let activeRoute = "Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.includes(routes[i].name.toLowerCase())) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };

  const getRoutes = (routes: RoutesType[]) => {
    return routes.map((prop, key) => {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
    });
  };

  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full min-h-screen bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              brandText={currentRoute}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
