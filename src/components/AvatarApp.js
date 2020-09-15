import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Image, Spinner } from "react-bootstrap";

export const AvatarApp = ({ img, textToGenerateAvatar, size = 40,maxHeight= 300 }) => {
    const [loading, setLoading] = useState(true);

    const imageLoaded = () => {
        setLoading(false);
    };

    const styleAvatar = {
        marginRight: 10,
        marginLeft: 10,
        maxHeight: maxHeight,
        objectFit: "contain",
    };

    return (
        <Fragment>
            {loading && <Spinner animation="grow" style={styleAvatar} />}

            <Image
                src={
                    img
                        ? img
                        : `https://api.adorable.io/avatars/${size}/${textToGenerateAvatar}`
                }
                roundedCircle
                onLoad={imageLoaded}
                style={{
                    ...styleAvatar,
                    display: loading ? "none" : "initial",
                    
                }}
            />
        </Fragment>
    );
};

AvatarApp.propTypes = {
    img: PropTypes.string,
    textToGenerateAvatar: PropTypes.string.isRequired,
    size: PropTypes.number,
    maxHeight: PropTypes.number,
};
