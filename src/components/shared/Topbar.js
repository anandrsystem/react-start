import React from 'react';

const Topbar = () => {
  return (
    <div className="navbar">
      <div className="page-titel"> Select A Vehicle to Compare </div>
      <div className="btn-group">
        <button type="button" className="btn btn-default toggle-button active"> 2016 </button><button type="button" className="btn btn-default toggle-button"> 2017 </button>
        <button type="button" className="btn btn-primary marginL10"> <i className="fa fa-print"></i> FILTER MODELS </button>
      </div>
    </div>
  );
};

export default Topbar;
