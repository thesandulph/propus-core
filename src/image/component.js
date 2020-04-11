import React from 'react';
import PropTypes from 'prop-types';
import {makeImage} from './utility';

const Image = ({
   alt, source, webp, ...props
}) => {
    const image_props = makeImage(source, webp, alt);
    if (image_props) {
        return (
            <img
                {...props}
                {...image_props}
            />
        );
    }
    return null;
};

Image.propTypes = {
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
};

export default Image;
