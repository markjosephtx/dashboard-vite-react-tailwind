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
        backgroundColor="#F1F3F6"
        textColor="##90a1b9"
        valueColor="#0c0a09"
      />
      <Card
        title="Avg Order"
        value="$28.99"
        pillText="1.01%"
        trend="down"
        period="From Jan 1st - Jul 31st"
        backgroundColor="#F1F3F6"
        textColor="##90a1b9"
        valueColor="#0c0a09"
      />
      <Card
        title="Trailing Year"
        value="$278,098.99"
        pillText="60.45%"
        trend="up"
        period="Previous 365 days"
        backgroundColor="#5160FD"
        textColor="#FFFFFF"
        valueColor="#FFFFFF"
      />
    </>
  );
}

const Card = ({ title, value, pillText, trend, period, backgroundColor, textColor, valueColor }) => {
  return (
    <div
      className='p-4 rounded border border-stone-100 col-span-12 lg:col-span-4 '
      style={{ backgroundColor }}
    >
      <div className='flex mb-8 gap-2 items-start justify-between flex-col lg:flex-row'>
        <div>
            <h3 className="mb-2 text-sm" style={{ color:textColor }}>{title}</h3>
            <p className="text-2xl font-semibold" style={{ color:valueColor }}>{value}</p>
        </div>
        <span className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
        {trend === "up" ? <FiTrendingUp/> : <FiTrendingDown/> }{pillText}
        </span>
      </div>
      <p className="text-xs"style={{ color:textColor }}>{period}</p>
    </div>
  );
};

export default StatCards;