import React, { useState } from "react";
import { Months } from "../../../../../types/time";

interface MonthProps {
  month: Months;
  resetAllActive: VoidFunction;
};

const Month: React.FC<MonthProps> = ({ month, resetAllActive }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = (month: Months) => {
    const prev = month.month;
    console.log('click prev->', month.month);
    resetAllActive();
    month.active = true;
    setActive(month.active);
    console.log('click->', month.month);
  };  

  return (
    <li
      key={`${month.year}-${month.month}`}
      className={`page-item${month.active ? " active" : ""}`}
      onClick={() => handleClick(month)}
    >
      <a className="page-link" href="#">
        <p className="page-month">{month.month}</p>
        <p className="page-year">{month.year}</p>
      </a>
    </li>
  );
};

export default Month;
