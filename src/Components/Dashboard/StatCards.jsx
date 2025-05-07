import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

function StatCards() {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$120,054.23"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Jul 31st"
        
        
      />
      <Card
        title="Avg Order"
        value="$28.99"
        pillText="1.01%"
        trend="down"
        period="From Jan 1st - Jul 31st"
      
        
      />
      <Card
        title="Trailing Year"
        value="$278,098.99"
        pillText="60.45%"
        trend="up"
        period="Previous 365 days"
        
        
      />
    </>
  );
}

const Card = ({ title, value, pillText, trend, period, backgroundColor, textColor, valueColor }) => {
  return (
    <div
      className='p-4 rounded border border-neutral-100 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 col-span-12 lg:col-span-4'
    >
      <div className='flex mb-8 gap-2 items-start justify-between flex-col lg:flex-row'>
        <div>
            <h3 className="mb-2 text-sm text-neutral-800 dark:text-neutral-300">{title}</h3>
            <p className="text-2xl font-semibold text-neutral-950 dark:text-white">{value}</p>
        </div>
        <span className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-lime-100 text-lime-700"
              : "bg-red-100 text-red-700"
          }`}
        >
        {trend === "up" ? <FiTrendingUp/> : <FiTrendingDown/> }{pillText}
        </span>
      </div>
      <p className="text-xs text-neutral-800 dark:text-neutral-300">{period}</p>
    </div>
  );
};

export default StatCards;