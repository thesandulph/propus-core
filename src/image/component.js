import React from 'react';
import PropTypes from 'prop-types';
import {makeImage} from './utility';

const Image = ({alt, source, webp, className, ...props}) => {
    const image_props = makeImage(source, webp, alt);
    if (image_props) {
        return (
            <img
                className={className}
                {...props}
                {...image_props}
            />
        );
    }
    return null;
};

Image.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    source: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
    webp: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
};

Image.defaultProps = {
    webp: null,
    className: null,
};

export default Image;
