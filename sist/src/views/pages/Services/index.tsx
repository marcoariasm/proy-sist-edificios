import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/commons/Breadcrumb/index.jsx";
import Card from "../../../components/commons/Card/index";
import Tabs from "./components/Tabs/index";
import { login } from './services/fetch';
import { Months } from "../../../types/time";
import Pagination from "./components/Pagination";

const Services = () => {

  const [monthSelected, setMonthSelected] = useState<string>('10');
  const [service, setService] = useState('agua');
  const [active, setActive] = useState(false);

  // const toggleClass = () => {
  //   setActive(!active);
  //   console.log('change active');
  // }

  let months: Months[] = [
    {month: "1", year:"2022", active: false},
    {month: "2", year:"2022", active: false},
    {month: "3", year:"2022", active: false},
    {month: "4", year:"2022", active: false},
    {month: "5", year:"2022", active: false},
    {month: "6", year:"2022", active: false},
    {month: "7", year:"2022", active: false},
    {month: "8", year:"2022", active: false},
    {month: "9", year:"2022", active: false},
    {month: "10", year:"2022", active: false},
    {month: "11", year:"2022", active: false},
    {month: "12", year:"2022", active: false},
  ];

  const handleMonthSelected = (month) => {
    setMonthSelected(month);
    setActive(!active);
    // months[month-1].active = !months[month-1].active;
  };

  const breadcrumbs = [
    { link: "!#", text: "Home", active: true },
    { link: "!#", text: "Dashboard", active: false },
  ];

  console.log('month selected->', monthSelected);

  useEffect(() => {
    console.log('service now is->', service);
    const fetchWater = async ({month, service}) => {
      const data = await login({month, service});
    };
    fetchWater({month: monthSelected, service});
  }, [service])
  
  return (
    <div className="content-wrapper">

      <div className="content-header">
        <div className="container-fluid">

          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Servicios</h1>
            </div>
            <Breadcrumb breadcrumbs={breadcrumbs} />
          </div>

        </div>
      </div>

      <section className="content">
        <div className="container-fluid">

          <div className="row">
            <section className="col lg-12 connectedSortable">

              <div className="card">
                <div className="card-body">
                  {/* <ul className="pagination pagination-month justify-content-center">
                    <li key='cero' className="page-item">
                      <a className="page-link" href="#">
                        «
                      </a>
                    </li>
                    {
                      months.map(month => {return (
                        <li key={month.name} className={`page-item${active ? ' active' : ''}`} onClick={() => handleMonthSelected(month.number)} >
                          <a className="page-link" href="#">
                            <p className="page-month">{month.name}</p>
                            <p className="page-year">2022</p>
                          </a>
                        </li>    
                      )})
                    }
                    <li key='infinito' className="page-item" onClick={() => console.log('click en futuro')}>
                      <a className="page-link" href="#">
                        »
                      </a>
                    </li>
                  </ul> */}
                  <Pagination monthList={months} setMonthSelected={setMonthSelected}/>
                </div>
              </div>
              
            </section>
          </div>

          <div className="row">
            <div className="col-12">

              <Tabs setService={setService}/>
              
            </div>
          </div>



          {/* <div className="row">
            <section className="col-lg-12 connectedSortable">
              <Card
                title={"Lectura de Servicios"}
                tools={
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    data-toggle="modal"
                    data-target="#modal-add-doctor"
                  >
                    Añadir Lectura
                  </button>
                }
                body={
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Servicio</th>
                        <th>Periodo</th>
                        <th style={{ width: 180 }}>Usuario</th>
                        <th>Estado</th>
                        <th>bla bla</th>
                        <th>bla bla</th>
                        <th>bla bla</th>
                        <th>bla bla</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="">
                          <a className="btn btn-app bg-lightblue cursor-pointer">
                            <i className="fas fa-tint"></i> Agua
                          </a>
                        </td>
                        <td>6-may al 5-jun</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn btn-outline-primary disabled btn-xs px-3 mr-2 pe-none"
                          >
                            201
                          </button>
                          <button
                            type="button"
                            className="btn btn btn-outline-secondary disabled btn-xs px-3 mr-2 pe-none"
                          >
                            202
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-success disabled btn-xs px-3 mr-2 pe-none"
                          >
                            301
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger disabled btn-xs px-3 mr-2 pe-none"
                          >
                            302
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-block bg-gradient-success btn-sm"
                          >
                            Completo
                          </button>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>

                          <i className="nav-icon fas fa-pen btn-xl"></i>

                          <i className="fa fa-trash btn-xl danger"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <a className="btn btn-app bg-success">
                            <i className="fas fa-file-invoice-dollar"></i> Arbitrios
                          </a>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn btn-secondary disabled btn-xs px-3 mr-2"
                          >
                            202
                          </button>
                          <button
                            type="button"
                            className="btn btn bg-orange disabled btn-xs px-3 mr-2"
                          >
                            301
                          </button>
                          <button
                            type="button"
                            className="btn btn bg-teal disabled btn-xs px-3 mr-2"
                          >
                            302
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-block bg-gradient-danger btn-sm"
                          >
                            Incompleto
                          </button>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="">
                          <a className="btn btn-app bg-warning">
                            <i className="fas fa-building"></i> Comunes
                          </a>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn btn-secondary disabled btn-xs px-3 mr-2"
                          >
                            202
                          </button>
                          <button
                            type="button"
                            className="btn btn bg-orange disabled btn-xs px-3 mr-2"
                          >
                            301
                          </button>
                          <button
                            type="button"
                            className="btn btn bg-teal disabled btn-xs px-3 mr-2"
                          >
                            302
                          </button>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-xs btn-warning btn-block"
                          >
                            <i className="fa fa-pen"></i> Agregar
                          </button>
                          <button
                            type="button"
                            className="btn btn-xs btn-danger btn-block"
                          >
                            <i className="fa fa-trash"></i> Borrar
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                }
              />
            </section>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
