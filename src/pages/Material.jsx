import React from "react";

const Materials = () => {
  return (
    <section>
      <h2>Study Materials</h2>
      <p>Download study resources:</p>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Computer Science Notes</h5>
              <p className="card-text">
                Download notes and guides for Computer Science.
              </p>
              <a href="#" className="btn btn-primary">
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Mathematics Practice</h5>
              <p className="card-text">
                Get access to solved problems and formulas.
              </p>
              <a href="#" className="btn btn-primary">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
