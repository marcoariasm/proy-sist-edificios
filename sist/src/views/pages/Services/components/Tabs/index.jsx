import { useState } from "react";
import MaintenanceTable from './../MaintenanceTable';
import ExtraordinaryTable from './../ExtraordinaryTable';
import ServicesTable from './../ServicesTable';
import './custom.css';
import { titleCase } from './../../../../../utils/string';
import { Link } from 'react-router-dom';

const TabContent = [
  {id: 0, title: 'mantenimiento', icon:'fas fa-building', element: MaintenanceTable},
  {id: 1, title: 'extraordinarias', icon:'fas fa-calendar-plus', element: ExtraordinaryTable},
  {id: 2, title: 'servicios', icon:'fas fa-tint', element: ServicesTable},
  {id: 3, title: 'individuales', icon:'fas fa-key', element: ExtraordinaryTable},
  {id: 4, title: 'recargos', icon:'fas fa-money-bill-wave', element: ExtraordinaryTable},
];

const Tabs = ({setService}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClickTab = (title, key) => {
    setService(title);
    setActiveTab(key);
  }

  return (
    <div className="card card-tabs">
      <div className="bg-lightblue palette-color card-header p-0 pt-1">
        <ul className="nav nav-tabs" id="dues-tabs" role="tablist">
          {TabContent.map((tab, idx) => { return(
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
          <li className="ml-auto mr-2 mt-2">
            <Link to="/management/parameters">
              <i class="fa-solid fa-gear"></i>&nbsp;<strong>Configurar Cuotas</strong>
            </Link>
          </li>
        </ul>
      </div>

      <div className="card-body">
        {TabContent.map((tab, idx) => {return(
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

export default Tabs;
