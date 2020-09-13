import React from 'react'
import PropTypes from "prop-types";

export const IconApp = ({iconClassName}) => {
    return <i className={iconClassName} aria-hidden="true"></i>;
}


IconApp.propTypes = {
    iconClassName: PropTypes.string.isRequired,
};