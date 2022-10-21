import React from "react";
import Breadcrumb from "../../../components/commons/Breadcrumb";
import Card from "./../../../components/commons/Card/index";

const Services = () => {
  const breadcrumbs = [
    { link: "!#", text: "Home", active: true },
    { link: "!#", text: "Dashboard", active: false },
  ];
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
                    Añadir Doctor
                  </button>
                }
                body={
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        {/* <th style={{ width: 10 }}>#</th> */}
                        <th>Servicio</th>
                        <th style={{ width: 180 }}>Usuario</th>
                        <th>Estado</th>
                        <th>bla bla</th>
                        <th>bla bla</th>
                        <th>bla bla</th>
                        <th>bla bla</th>
                        <th>Acciones</th>
                        {/* <th style={{ width: 40 }}>Label</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {/* <td></td> */}
                        <td className="">
                          <a className="btn btn-app bg-lightblue cursor-pointer">
                            <i className="fas fa-tint"></i> Agua
                          </a>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn btn-primary disabled btn-xs px-3 mr-2 pe-none"
                          >
                            201
                          </button>
                          <button
                            type="button"
                            class="btn btn btn-secondary disabled btn-xs px-3 mr-2 pe-none"
                          >
                            202
                          </button>
                          <button
                            type="button"
                            class="btn btn bg-orange disabled btn-xs px-3 mr-2 pe-none"
                          >
                            301
                          </button>
                          <button
                            type="button"
                            class="btn btn bg-teal disabled btn-xs px-3 mr-2 pe-none"
                          >
                            302
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-block btn-success btn-sm"
                          >
                            Completo
                          </button>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          {/* <button
                            type="button"
                            className="btn btn-warning btn-xs mr-1"
                            data-toggle="modal"
                            data-target="#modal-edit-doctor"
                          > */}
                            <i className="nav-icon fas fa-pen btn-xl"></i>
                          {/* </button> */}
                          {/* <button
                            type="button"
                            className="btn btn-danger btn-xs"
                            onClick={() => {}}
                          > */}
                            <i className="fa fa-trash btn-xl danger"></i>
                          {/* </button> */}
                        </td>
                      </tr>
                      <tr>
                        {/* <td></td> */}
                        <td className="">
                          <a className="btn btn-app bg-success">
                            <i class="fas fa-file-invoice-dollar"></i> Arbitrios
                          </a>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn btn-secondary disabled btn-xs px-3 mr-2"
                          >
                            202
                          </button>
                          <button
                            type="button"
                            class="btn btn bg-orange disabled btn-xs px-3 mr-2"
                          >
                            301
                          </button>
                          <button
                            type="button"
                            class="btn btn bg-teal disabled btn-xs px-3 mr-2"
                          >
                            302
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-block btn-danger btn-sm"
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
                        {/* <td></td> */}
                        <td className="">
                          <a className="btn btn-app bg-warning">
                            <i class="fas fa-building"></i> Comunes
                          </a>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn btn-secondary disabled btn-xs px-3 mr-2"
                          >
                            202
                          </button>
                          <button
                            type="button"
                            class="btn btn bg-orange disabled btn-xs px-3 mr-2"
                          >
                            301
                          </button>
                          <button
                            type="button"
                            class="btn btn bg-teal disabled btn-xs px-3 mr-2"
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
                          <button type="button" class="btn btn-xs btn-warning btn-block"><i class="fa fa-pen"></i> Agregar</button>
                          <button type="button" class="btn btn-xs btn-danger btn-block"><i class="fa fa-trash"></i> Borrar</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                }
              />
            </section>
            {/* <section className='col-lg-6 connectedSortable'>
                <Card title={'Compras'} body={'asdfg'} />
              </section> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
