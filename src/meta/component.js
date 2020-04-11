import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {
    isUrl,
    isPath,
} from '@propus/utility';
import {When} from '@propus/control';
import {useTextContext} from '../text';
import {makeKeywords} from './utility';

const Meta = ({
    direction, language, title, description, keywords, canonical, url, image,
}) => {
    const {text} = useTextContext();
    return (
        <Fragment>
            <When condition={direction}>
                <Helmet>
                    <html dir={direction} />
                </Helmet>
            </When>
            <When condition={language}>
                <Helmet>
                    <html lang={language} />
                </Helmet>
            </When>
            <When condition={title}>
                <Helmet>
                    <title>{text.format(title)}</title>
                    <meta property="og:title" content={text.format(title)}/>
                    <meta name="twitter:title" content={text.format(title)}/>
                </Helmet>
            </When>
            <When condition={description}>
                <Helmet>
                    <meta name="description" content={text.format(description)}/>
                    <meta property="og:description" content={text.format(description)}/>
                    <meta name="twitter:description" content={text.format(description)}/>
                </Helmet>
            </When>
            <When condition={keywords}>
                <Helmet>
                    <meta name="keywords" content={makeKeywords(keywords, keyword => text.format(keyword))}/>
                </Helmet>
            </When>
            <When condition={isUrl(image) || isPath(image)}>
                <Helmet>
                    <meta property="og:image" content={image}/>
                    <meta name="twitter:image" content={image}/>
                </Helmet>
            </When>
            <When condition={isUrl(canonical) || isPath(canonical)}>
                <Helmet>
                    <link rel="canonical" href={canonical}/>
                </Helmet>
            </When>
            <When condition={isUrl(url) || isPath(url)}>
                <Helmet>
                    <meta property="og:url" content={url}/>
                    <meta name="twitter:url" content={url}/>
                </Helmet>
            </When>
        </Fragment>
    );
};

Meta.propTypes = {
    direction: PropTypes.string,
    language: PropTypes.string,
    canonical: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.any,
    title: PropTypes.string,
    url: PropTypes.string,
};

Meta.defaultProps = {
    canonical: null,
    description: null,
    image: null,
    keywords: null,
    title: null,
    url: null,
};

export default Meta;
