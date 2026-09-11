import { Outlet } from "react-router-dom";
import HeaderDash from "../components/Dashboard/HeaderDash";
import ListDash from "../components/Dashboard/ListDash";
import ListDashScreenLg from "../components/Dashboard/ListDashScreenLg";

function Dashboard() {
  return (
    <div className="font-cairo" dir="rtl">
      {/* Start Header */}
      <div>
        <HeaderDash />
      </div>
      {/* End Header */}

      <div className="">
        <div className="container mx-auto">
          <div className="grid grid-cols-1  lg:grid-cols-[1fr_11fr] items-start mt-9 gap-19 ">
            <div className="  bg-whete min-hh-screen rounded-lg sticky top-2 hidden lg:block">
              <ListDash />
            </div>

            <div className="  lg:hidden">
              <ListDashScreenLg />
            </div>

            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
