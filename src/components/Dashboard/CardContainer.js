import React from 'react'
import { Card } from 'react-bootstrap';
import PropTypes from "prop-types";

export const CardContainer = ({children,title}) => {
    return (
        <Card className="animate__animated animate__fadeIn animate__faster">
            <Card.Header>{title}</Card.Header>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
}



CardContainer.propTypes = {
    title: PropTypes.string.isRequired,
 };