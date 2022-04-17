import React from "react";
import { Helmet } from "react-helmet"

const Seo = ({ metadata }) => {
    return (
    <Helmet>
        <title>{metadata.title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content={metadata.description}></meta>
        {/* <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
    </Helmet>)
}

export default Seo;