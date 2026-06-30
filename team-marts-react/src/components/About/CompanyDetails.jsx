import React from 'react'

const CompanyDetails = () => {
  return (
    <section className="company-details">
      <div className="container ">
        <div className="short-desc-wrapper">
          <h2 className="highlited-p"><span className="green">TEAM MARTS LIMITED</span> IS A PRIVATE LIMITED COMPANY
            REGISTRATION NUMBER C-195977.</h2>
          <div className="row company-wrapper">
            <div className="col-md-6 col-sm-12 offset-md-6 offset-sm-0">
              <div className="stat-details">
                <p className="company-stat-p bold">Production Lead Time</p>
                <p className="company-stat-p">35 Days to 120 Days (Based on fabric availability) </p>
              </div>
              <div className="stat-details">
                <p className="company-stat-p bold">Quick Response</p>
                <p className="company-stat-p">60 Days for Local fabric without commitment.</p>
              </div>
              <div className="stat-details">
                <p className="company-stat-p bold">Product Category</p>
                <div>
                  <p className="company-stat-p">Denims</p>
                  <p className="company-stat-p">Non-Denims</p>
                  <p className="company-stat-p">Knits</p>
                  <p className="company-stat-p">Knitwear</p>
                </div>
              </div>
              <div className="stat-details read-more">
                <div className="arrow-wrapper box-hover" data-bs-toggle="modal" data-bs-target="#readmoreModal">
                  <div className="arrow green"><i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </div>
                  <p className="ripple-p">Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyDetails