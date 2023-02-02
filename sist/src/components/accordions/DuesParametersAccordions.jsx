const DuesParametersAccordions = () => {
  return (
    <>
      <div className="col-md-12">
        <div className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">Configurar cuotas generales</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus" />
              </button>
            </div>
          </div>
          <div className="card-body" style={{ display: "block" }}>
            The body of the card
          </div>
        </div>
      </div>

      <div className="col-md-12 connectedSortable ui-sortable">
        <div className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">Configurar cuotas de servicios</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus" />
              </button>
            </div>
          </div>
          <div className="card-body ui-sortable-handle" style={{ display: "block" }}>
            <ul className="todo-list ui-sortable" data-widget="todo-list">
              <li className="done">
                <span className="handle ui-sortable-handle">
                  <i className="fas fa-ellipsis-v" />
                  <i className="fas fa-ellipsis-v" />
                </span>
                <div className="icheck-primary d-inline ml-2">
                  <input
                    type="checkbox"
                    defaultValue
                    name="todo2"
                    id="todoCheck2"
                    defaultChecked
                  />
                  <label htmlFor="todoCheck2" />
                </div>
                <span className="text">Make the theme responsive</span>
                <small className="badge badge-info">
                  <i className="far fa-clock" /> 4 hours
                </small>
                <div className="tools">
                  <i className="fas fa-edit" />
                  <i className="fas fa-trash-o" />
                </div>
              </li>
              <li className style={{}}>
                <span className="handle ui-sortable-handle">
                  <i className="fas fa-ellipsis-v" />
                  <i className="fas fa-ellipsis-v" />
                </span>
                <div className="icheck-primary d-inline ml-2">
                  <input
                    type="checkbox"
                    defaultValue
                    name="todo1"
                    id="todoCheck1"
                  />
                  <label htmlFor="todoCheck1" />
                </div>
                <span className="text">Design a nice theme</span>
                <small className="badge badge-danger">
                  <i className="far fa-clock" /> 2 mins
                </small>
                <div className="tools">
                  <i className="fas fa-edit" />
                  <i className="fas fa-trash-o" />
                </div>
              </li>
              <li>
                <span className="handle ui-sortable-handle">
                  <i className="fas fa-ellipsis-v" />
                  <i className="fas fa-ellipsis-v" />
                </span>
                <div className="icheck-primary d-inline ml-2">
                  <input
                    type="checkbox"
                    defaultValue
                    name="todo3"
                    id="todoCheck3"
                  />
                  <label htmlFor="todoCheck3" />
                </div>
                <span className="text">Let theme shine like a star</span>
                <small className="badge badge-warning">
                  <i className="far fa-clock" /> 1 day
                </small>
                <div className="tools">
                  <i className="fas fa-edit" />
                  <i className="fas fa-trash-o" />
                </div>
              </li>
              <li>
                <span className="handle ui-sortable-handle">
                  <i className="fas fa-ellipsis-v" />
                  <i className="fas fa-ellipsis-v" />
                </span>
                <div className="icheck-primary d-inline ml-2">
                  <input
                    type="checkbox"
                    defaultValue
                    name="todo4"
                    id="todoCheck4"
                  />
                  <label htmlFor="todoCheck4" />
                </div>
                <span className="text">Let theme shine like a star</span>
                <small className="badge badge-success">
                  <i className="far fa-clock" /> 3 days
                </small>
                <div className="tools">
                  <i className="fas fa-edit" />
                  <i className="fas fa-trash-o" />
                </div>
              </li>
              <li>
                <span className="handle ui-sortable-handle">
                  <i className="fas fa-ellipsis-v" />
                  <i className="fas fa-ellipsis-v" />
                </span>
                <div className="icheck-primary d-inline ml-2">
                  <input
                    type="checkbox"
                    defaultValue
                    name="todo5"
                    id="todoCheck5"
                  />
                  <label htmlFor="todoCheck5" />
                </div>
                <span className="text">
                  Check your messages and notifications
                </span>
                <small className="badge badge-primary">
                  <i className="far fa-clock" /> 1 week
                </small>
                <div className="tools">
                  <i className="fas fa-edit" />
                  <i className="fas fa-trash-o" />
                </div>
              </li>
              <li>
                <span className="handle ui-sortable-handle">
                  <i className="fas fa-ellipsis-v" />
                  <i className="fas fa-ellipsis-v" />
                </span>
                <div className="icheck-primary d-inline ml-2">
                  <input
                    type="checkbox"
                    defaultValue
                    name="todo6"
                    id="todoCheck6"
                  />
                  <label htmlFor="todoCheck6" />
                </div>
                <span className="text">Let theme shine like a star</span>
                <small className="badge badge-secondary">
                  <i className="far fa-clock" /> 1 month
                </small>
                <div className="tools">
                  <i className="fas fa-edit" />
                  <i className="fas fa-trash-o" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">
              Coonfigurar cuotas por porcentaje o por m2
            </h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus" />
              </button>
            </div>
          </div>
          <div className="card-body" style={{ display: "block" }}>
            The body of the card
          </div>
        </div>
      </div>
    </>
  );
}

export default DuesParametersAccordions