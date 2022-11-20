import React, { useState } from "react";

const Tabs = ({setService}) => {
  // const [service, setService] = useState('agua');
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
    console.log('change active')
  }
  // const [activeClass, addActiveClass] = useState(' show')

  return (
    <div className="card card-tabs">
      <div className="card-header p-0 pt-1">
        <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
          <li className="nav-item col-3" onClick={() => setService('agua')}>
            <a
              className={`nav-link ${active ? 'active' : ''} btn btn-app btn-block bg-lightblue`}
              id="custom-tabs-one-home-tab"
              data-toggle="pill"
              href="#custom-tabs-one-home"
              role="tab"
              aria-controls="custom-tabs-one-home"
              aria-selected="true"
            >
              <i className="fas fa-tint"></i> Agua
            </a>
            {/* <a className="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Home</a> */}
          </li>
          <li className="nav-item col-3" onClick={() => setService('arbitrios')}>
            <a
              className={`nav-link ${active ? 'active' : ''} btn btn-app btn-block bg-success`}
              id="custom-tabs-one-profile-tab"
              data-toggle="pill"
              href="#custom-tabs-one-profile"
              role="tab"
              aria-controls="custom-tabs-one-profile"
              aria-selected="false"
            >
              <i className="fas fa-file-invoice-dollar"></i> Arbitrios
            </a>
            {/* <a className="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill" href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false">Profile</a> */}
          </li>
          <li className="nav-item col-3" onClick={() => setService('mantenimiento')}>
            <a
              className={`nav-link ${active ? 'active' : ''} btn btn-app btn-block bg-warning`}
              id="custom-tabs-one-messages-tab"
              data-toggle="pill"
              href="#custom-tabs-one-messages"
              role="tab"
              aria-controls="custom-tabs-one-messages"
              aria-selected="false"
            >
              <i className="fas fa-building"></i> Mantenimiento
            </a>
            {/* <a className="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Messages</a> */}
          </li>
          <li className="nav-item col-3" onClick={() => setService('otros')}>
            <a
              className={`nav-link ${active ? 'active' : ''} btn btn-app btn-block bg-danger`}
              id="custom-tabs-one-settings-tab"
              data-toggle="pill"
              href="#custom-tabs-one-settings"
              role="tab"
              aria-controls="custom-tabs-one-settings"
              aria-selected="false"
            >
              <i className="fas fa-building"></i> Otros
            </a>
            {/* <a className="nav-link" id="custom-tabs-one-settings-tab" data-toggle="pill" href="#custom-tabs-one-settings" role="tab" aria-controls="custom-tabs-one-settings" aria-selected="false">Settings</a> */}
          </li>
        </ul>
      </div>

      <div className="card-body">
        <div className="tab-content" id="custom-tabs-one-tabContent">
          <div
            className="tab-pane fade show active"
            id="custom-tabs-one-home"
            role="tabpanel"
            aria-labelledby="custom-tabs-one-home-tab"
          >
            <h3 className="card-title">Agua</h3>

            <div className="card-tools float-right">
              <button type="button" className="btn btn-success btn-sm mb-1">
                Añadir Lectura
              </button>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  {/* <th style={{ width: 10 }}>#</th> */}
                  {/* <th>Servicio</th> */}
                  <th>Usuario</th>
                  <th>Mes</th>
                  <th>Periodo</th>
                  <th>Inicial</th>
                  <th>Final</th>
                  {/* <th>bla bla</th> */}
                  <th>Consumo</th>
                  <th>Monto</th>
                  <th>Acciones</th>
                  {/* <th style={{ width: 40 }}>Label</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td></td> */}
                  {/* <td className="">
                              <a className="btn btn-app bg-lightblue cursor-pointer">
                                <i className="fas fa-tint"></i> Agua
                              </a>
                            </td> */}
                  <td>
                    <button
                      type="button"
                      className="btn btn btn-outline-primary disabled btn-sm px-3 mr-2 pe-none"
                    >
                      201
                    </button>
                    {/* <button
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
                              </button> */}
                  </td>
                  <td>
                    {/* <button
                                type="button"
                                className="btn btn-block bg-gradient-success btn-sm"
                                >
                                Completo
                              </button> */}
                    Setiembre - 2022
                  </td>
                  <td>6-may al 5-jun</td>
                  <td>12.59</td>
                  <td>15.67</td>
                  <td>3.08 m3</td>
                  <td>S/ 8.00</td>
                  <td>
                    {/* <button
                                type="button"
                                className="btn btn-warning btn-xs mr-1"
                                data-toggle="modal"
                                data-target="#modal-edit-doctor"
                              > */}
                    {/* <i className="nav-icon fas fa-pen btn-xl"></i> */}
                    {/* </button> */}
                    {/* <button
                                type="button"
                                className="btn btn-danger btn-xs"
                                onClick={() => {}}
                              > */}
                    {/* <i className="fa fa-trash btn-xl danger"></i> */}
                    {/* </button> */}
                    {/* <button
                                type='button'
                                className='btn btn-success btn-sm mr-1'
                                data-toggle='modal'
                                data-target='#modal-edit-doctor'
                              >
                                <i className="nav-icon fas fa-plus"></i>
                              </button> */}
                    <button
                      type="button"
                      className="btn btn-warning btn-sm mr-1"
                      data-toggle="modal"
                      data-target="#modal-edit-doctor"
                    >
                      <i className="nav-icon fas fa-pen"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn btn-outline-secondary disabled btn-sm px-3 mr-2 pe-none"
                    >
                      202
                    </button>
                  </td>
                  <td>Setiembre - 2022</td>
                  <td>6-may al 5-jun</td>
                  <td>12.59</td>
                  <td>15.67</td>
                  <td>3.08 m3</td>
                  <td>S/ 8.00</td>
                  <td>
                    {/* <button
                                type='button'
                                className='btn btn-success btn-sm mr-1'
                                data-toggle='modal'
                                data-target='#modal-edit-doctor'
                              >
                                <i className="nav-icon fas fa-plus"></i>
                              </button> */}
                    <button
                      type="button"
                      className="btn btn-warning btn-sm mr-1"
                      data-toggle="modal"
                      data-target="#modal-edit-doctor"
                    >
                      <i className="nav-icon fas fa-pen"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="custom-tabs-one-profile"
            role="tabpanel"
            aria-labelledby="custom-tabs-one-profile-tab"
          >
            Mauris tincidunt mi at erat gravida, eget tristique urna bibendum.
            Mauris pharetra purus ut ligula tempor, et vulputate metus
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus
            interdum, nisl ligula placerat mi, quis posuere purus ligula eu
            lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere
            nec nunc. Nunc euismod pellentesque diam.
          </div>
          <div
            className="tab-pane fade"
            id="custom-tabs-one-messages"
            role="tabpanel"
            aria-labelledby="custom-tabs-one-messages-tab"
          >
            Morbi turpis dolor, vulputate vitae felis non, tincidunt congue
            mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus
            faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac
            tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum.
            Suspendisse ut velit condimentum, mattis urna a, malesuada nunc.
            Curabitur eleifend facilisis velit finibus tristique. Nam vulputate,
            eros non luctus efficitur, ipsum odio volutpat massa, sit amet
            sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida
            fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel
            metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare
            magna.
          </div>
          <div
            className="tab-pane fade"
            id="custom-tabs-one-settings"
            role="tabpanel"
            aria-labelledby="custom-tabs-one-settings-tab"
          >
            Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque
            magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget
            blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod
            molestie tristique. Vestibulum consectetur dolor a vestibulum
            pharetra. Donec interdum placerat urna nec pharetra. Etiam eget
            dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et
            felis ut nisl commodo dignissim. In hac habitasse platea dictumst.
            Praesent imperdiet accumsan ex sit amet facilisis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
