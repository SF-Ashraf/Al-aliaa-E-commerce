import Analysis from "../components/Dashboard/Analysis";
import BestSellingBooks from "../components/Dashboard/BestSellingBooks";
import BookAnalysis from "../components/Dashboard/BookAnalysis";
import Performance from "../components/Dashboard/Performance";

import Statistic from "../components/Dashboard/Statistic";
import StatisticActive from "../components/Dashboard/StatisticActive";
import TopFive from "../components/Dashboard/TopFive";
import UsersGrowth from "../components/Dashboard/UsersGrowth";

const Reports = () => {
  return (
    <div className="">
      <div className="container mx-auto font-cairo bg-whete shadow-2xl px-3 py-4 rounded-lg">
        {/* start hero */}

        <Statistic />

        {/* end hero */}
      </div>

      <div className="">
        <Analysis />
      
      </div>



      <div>
        <UsersGrowth />
      </div>


      <div>
        <BestSellingBooks />
      </div>



      <div>
        <StatisticActive />
      </div>


      <div>
        <Performance />
      </div>


      <div>
        <BookAnalysis />
      </div>

      <div>
        <TopFive />
      </div>
    </div>
  );
};

export default Reports;
