import React, { useState } from "react";
import { Months } from "../../../../../types/time";
import Month from "./month";

interface PaginationProps {
  monthList: Months[];
  setMonthSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Pagination: React.FC<PaginationProps> = ({ monthList, setMonthSelected }) => {
  const [active, setActive] = useState(false);

  const handleClickMonth = (month: Months) => {
    setActive(false);
    setMonthSelected(`${String(month.year)}-${String(month.month)}`);
    if (!active) setActive(true);
  };

  const resetAllActive = () => {
    console.log(monthList);
    monthList.forEach((m) => m.active = false);
  }


  return (
    <ul className="pagination pagination-month justify-content-center">
      <li key="cero" className="page-item" onClick={() => console.log('click en pasado')}>
        <a className="page-link" href="#">
          «
        </a>
      </li>
      {monthList.map((month) => {
        return <Month month={month} resetAllActive={resetAllActive} />;
      })}
      <li
        key="infinito"
        className="page-item"
        onClick={() => console.log("click en futuro")}
      >
        <a className="page-link" href="#">
          »
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
