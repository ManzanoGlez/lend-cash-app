import React from "react";
import PropTypes from "prop-types";

export const IconApp = ({iconClassName, color, onClick = () => {}, isClickable = false}) => {


    let styleIcon = {};

    if(color){  styleIcon.color = color;  }
    if(isClickable){ styleIcon.cursor = "pointer";  }
   

    return (
        <i
            className={iconClassName}
            aria-hidden="true"
            style={styleIcon}
            onClick={onClick}
        ></i>
    );
};

IconApp.propTypes = {
    iconClassName: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
};
