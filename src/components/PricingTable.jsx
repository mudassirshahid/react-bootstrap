import React from 'react'


function PricingTable() {
  return (
    <>
      <div
  className="container-fluid p-4"
  style={{ background: "linear-gradient(to right, rgba(32, 40, 119, 0.95), rgba(55, 46, 149, 0.95), rgba(83, 49, 177, 0.90), rgba(114, 48, 205, 0.85), rgba(150, 41, 230, 0.95))" }}
>
  <div className="container p-md-5 p-3">
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card2 bg-white h-100 shadow-lg">
          <div className="card-body">
            <div className="text-center p-3">
              <h5 className="card-title">Basic</h5>
              <small>Individual</small>
              <br />
              <br />
              <span className="h2">$8</span>/month
              <br />
              <br />
            </div>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Cras justo odio
            </li>
            <li className="list-group-item">
              Dapibus ac facilisis
            </li>
            <li className="list-group-item">
             Vestibulum at eros
            </li>
          </ul>
          <div className="card-body text-center">
            <button
              className="btn btn-outline-primary btn-lg"
              style={{ borderRadius: 30 }}
            >
              Select
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card2 bg-white h-100 shadow-lg">
          <div className="card-body">
            <div className="text-center p-3">
              <h5 className="card-title">Standard</h5>
              <small>Small Business</small>
              <br />
              <br />
              <span className="h2">$20</span>/month
              <br />
              <br />
            </div>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Cras justo odio
            </li>
            <li className="list-group-item">
              Dapibus ac facilisis
            </li>
            <li className="list-group-item">
              Vestibulum at eros
            </li>
          </ul>
          <div className="card-body text-center">
            <button
              className="btn btn-outline-primary btn-lg"
              style={{ borderRadius: 30 }}
            >
              Select
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card2 bg-white h-100 shadow-lg">
          <div className="card-body">
            <div className="text-center p-3">
              <h5 className="card-title">Premium</h5>
              <small>Large Companies</small>
              <br />
              <br />
              <span className="h2">$40</span>/month
              <br />
              <br />
            </div>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Cras justo odio
            </li>
            <li className="list-group-item">
              Dapibus ac facilisis
            </li>
            <li className="list-group-item">
              Vestibulum at eros
            </li>
          </ul>
          <div className="card-body text-center">
            <button
              className="btn btn-outline-primary btn-lg"
              style={{ borderRadius: 30 }}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default PricingTable
