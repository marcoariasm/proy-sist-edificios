import { useState } from "react";
// import { Link } from 'react-router-dom';
import DuesAccordions from "../accordions/DuesParametersAccordions";
// import ExtraordinaryTable from '../tables/ExtraordinaryTable';
import ServicesTable from '../tables/ServicesTable';
import { titleCase } from '../../utils/string';
import './dues.css';

const ParametersTabContent = [
  {id: 0, title: 'cuotas', icon:'fas fa-tint', element: DuesAccordions},
  {id: 1, title: 'unidades', icon:'fas fa-building', element: ServicesTable},
  // {id: 2, title: 'extraordinarias', icon:'fas fa-calendar-plus', element: ExtraordinaryTable},
  // {id: 3, title: 'individuales', icon:'fas fa-key', element: ExtraordinaryTable},
  // {id: 4, title: 'recargos', icon:'fas fa-money-bill-wave', element: ExtraordinaryTable},
];

const ParametersTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClickTab = (title, key) => {
    // setService(title);
    setActiveTab(key);
  }

  return (
    <div className="card card-tabs">
      <div className="bg-warning card-header p-0 pt-1">
        <ul className="nav nav-tabs" id="dues-tabs" role="tablist">
          {ParametersTabContent.map((tab, idx) => { return(
            <li
              key={idx}
              className="nav-item"
              onClick={() => handleClickTab(tab.title, tab.id)}
            >
              <a
                // ref={node}
                key={tab.id}
                className={`nav-link ${idx === 0 ? 'active' : ""}`}
                id={`dues-tabs-${tab.title}-tab`}
                data-toggle="pill"
                href={`#dues-tabs-${tab.title}`}
                role="tab"
                aria-controls={`dues-tabs-${tab.title}`}
                aria-selected="false"
              >
                <i className={tab.icon}></i>
                {` ${titleCase(tab.title)}`}
              </a>
            </li>)
          })}
        </ul>
      </div>

      <div className="card-body">
        {ParametersTabContent.map((tab, idx) => {return(
          <div key={idx} className="tab-content" id={`dues-tabs-${tab.title}-tabContent`}>
          <div
            className={`tab-pane fade ${idx === activeTab ? 'active show' : ''}`}
            id={`dues-tabs-${tab.title}`}
            role="tabpanel"
            aria-labelledby={`dues-tabs-${tab.title}-tab`}
          >
            <tab.element tab={tab}/>
            </div>
          </div>
          )})}

        </div>
      </div>
  );
};

export default ParametersTabs;
