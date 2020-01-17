import React from 'react';
import PropTypes from 'prop-types';

const Topbar = (props) => {
  const { showBar } = props;
  const HeaderCss = showBar ? "navbar" : "navbar d-none";

  return (
    <div className={HeaderCss}>
      <div className="page-titel"> Select A Vehicle to Compare </div>
      <div className="btn-group">
        <button type="button" className="btn btn-default toggle-button active"> 2016 </button>
        <button type="button" className="btn btn-default toggle-button"> 2017 </button>
        <button type="button" className="btn btn-primary marginL10"> <i className="fa fa-print"></i> FILTER MODELS </button>
      </div>
    </div>
  );
};

Topbar.propTypes = {
  showBar: PropTypes.bool
};

Topbar.defaultProps = {
  showBar: true
};

export default Topbar;
