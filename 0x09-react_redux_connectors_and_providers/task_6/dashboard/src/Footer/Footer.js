import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';
import PropTypes from "prop-types";
import { connect } from "react-redux";

export function Footer({ user }) {
  return (

    <div className="footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && <a href="#">Contact us</a>}
    </div>

  );
}

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: null,
};

export const mapStateToProps = (state) => {
  return { user: state["user"] };
};

// export default Footer;
export default connect(mapStateToProps)(Footer);
