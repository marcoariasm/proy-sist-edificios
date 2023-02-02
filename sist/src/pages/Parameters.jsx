import ParametersTabs from "../components/tabs/ParametersTabs";

const Parameters = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          
          <div className="row mb-2">
            <div className="col-12">
              <h1 className="m-0">Parámetros</h1>
            </div>
            {/* <Breadcrumb /> */}
          </div>
          
        </div>
      </div>


      <section className="content">
        <div className="container-fluid">

          <div className="row">
            <div className="col-12">
              <ParametersTabs />
            </div>
          </div>

        </div>
      </section>
   </div>
  );
}

export default Parameters