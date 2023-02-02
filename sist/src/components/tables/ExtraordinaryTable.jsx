// import BootstrapTable from 'react-bootstrap-table-next';
// import cellEditFactory from 'react-bootstrap-table2-editor';
// import { Type } from 'react-bootstrap-table2-editor';
import { titleCase } from '../../utils/string';

// function rankFormatter(cell, row, rowIndex, formatExtraData) {
//   return (
//     <i className={ formatExtraData[cell] } />
//   );
// }

const MaintenanceTable = ({tab}) => {
  // const columns = [
  //   {
  //     dataField: 'unit',
  //     text: 'Unidad',
  //   },
  //   {
  //     dataField: 'percentage',
  //     text: 'Porcentaje %',
  //   },
  //   {
  //     dataField: 'date',
  //     text: 'Fecha Emisión',
  //   },
  //   {
  //     dataField: 'period',
  //     text: 'Mes-Año',
  //   },
  //   {
  //     dataField: 'maintenance',
  //     text: 'Cuota Mantenimiento S/',
  //     // formatter: rankFormatter,
  //     // formatExtraData: {
  //     //   up: 'glyphicon glyphicon-chevron-up',
  //     //   down: 'glyphicon glyphicon-chevron-down'
  //     // }
  //   },
  // ];
  return (
    <>
      <h3 className="card-title">{titleCase(tab.title)}</h3>

      <div className="card-tools float-right">
        <button type="button" className="btn btn-success mb-1">
          Cargar datos Mes Actual
        </button>
      </div>

      {/* <BootstrapTable
        keyField="id"
        data={ [{unit: 'Sección 1', maintenance: '345.26', period: 'Enero-2023', date: '31/01/2023', percentage: 14.26}] }
        columns={ columns }
        cellEdit={ cellEditFactory({ mode: 'click' }) }
      /> */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Mes</th>
            <th>Periodo</th>
            <th>Inicial</th>
            <th>Final</th>
            <th>Consumo</th>
            <th>Monto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button
                type="button"
                className="btn btn btn-outline-primary disabled btn-sm px-3 mr-2 pe-none"
              >
                201
              </button>
            </td>
            <td>
              Setiembre - 2022
            </td>
            <td>6-may al 5-jun</td>
            <td>12.59</td>
            <td>15.67</td>
            <td>3.08 m3</td>
            <td>S/ 8.00</td>
            <td>
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
    </>
  );
}

export default MaintenanceTable