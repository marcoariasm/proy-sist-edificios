import { useState, useEffect } from "react";
// import Breadcrumb from "../../../components/commons/Breadcrumb";
import DuesTabs from '../components/tabs/DuesTabs';
import useFetch from "../hooks/useFetch";

const Dues = () => {
  const [servicesData, setServicesData] = useState();

  const { data } = useFetch('/dues');  
  
  useEffect(() => {
    const getServicesData = (data) => {
      setServicesData(data);
    }
    getServicesData(data);
  }, [data]);

  return (
    <div className="content-wrapper">

    <div className="content-header">
      <div className="container-fluid">

        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Cuotas</h1>
          </div>

          {/* <Breadcrumb /> */}

        </div>
        

      </div>
    </div>

    <section className="content">
      <div className="container-fluid">

        {/* <div className="row">
          <section className="col lg-12 connectedSortable">

            <div className="card">
              <div className="card-body">
                <Pagination monthList={months} setMonthSelected={setMonthSelected}/>
              </div>
            </div>
            
          </section>
        </div> */}

        <div className="row">
          <div className="col-12">

            <DuesTabs servicesData={servicesData} />
            
          </div>
        </div>

      </div>
    </section>
  </div>
  )
}

export default Dues