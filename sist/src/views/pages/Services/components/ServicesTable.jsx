import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Type } from 'react-bootstrap-table2-editor';
import { titleCase } from './../../../../utils/string';

function rankFormatter(cell, row, rowIndex, formatExtraData) {
  return (
    <i className={ formatExtraData[cell] } />
  );
}

const ServicesTable = ({tab}) => {

  const columns = [
    {
      dataField: 'unit',
      text: 'Unidad',
      editable: false,
    },
    {
      dataField: 'percentage',
      text: 'Porcentaje %',
      editable: false,
    },
    {
      dataField: 'date',
      text: 'Fecha Emisión',
      editable: false,
    },
    {
      dataField: 'period',
      text: 'Mes-Año',
    },
    {
      dataField: 'maintenance',
      text: 'Cuota Mantenimiento S/',
      // formatter: rankFormatter,
      // formatExtraData: {
      //   up: 'glyphicon glyphicon-chevron-up',
      //   down: 'glyphicon glyphicon-chevron-down'
      // }
    },
  ];
  return (
    <>
      {/* <h3 className="card-title"></h3> */}

      <div className="card-tools float-right">
        <button type="button" className="btn btn-primary mb-1 mr-2">
          Cargar Mes Actual
        </button>
        <button type="button" className="btn btn-outline-primary mb-1">
          Cargar Otro Mes
        </button>
      </div>

      <BootstrapTable
        keyField="id"
        data={ [{unit: 'Sección 1', maintenance: '345.26', period: 'Enero-2023', date: '31/01/2023', percentage: 14.26}] }
        // data={[]}
        columns={ columns }
        cellEdit={ cellEditFactory({ mode: 'click' }) }
        noDataIndication={"La tabla está vacía"}
      />

      <div className="float-right">
        <button type="button" className="btn btn-success mb-1">
        <i className="fa-sharp fa-solid fa-check"></i>&nbsp;Grabar
        </button>
      </div>


    </>
  );
}

export default ServicesTable