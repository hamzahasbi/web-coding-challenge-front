import React from 'react';
import {Helmet} from 'react-helmet';
import '../styles/errors.css';
import {Link, withRouter} from 'react-router-dom';
function Error() {
    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900|Roboto:100,300,400,500,700,900" rel="stylesheet" />
            </Helmet>
            <div className="container">
                    <div className="error-wrapper">
                        <div className="man-icon"></div>
                        <h3 className="title">Something Went Wrong</h3>
                        <p className="info">Oh! Page not found</p>
                        <Link to="/" type="button" className="home-btn mx-auto">HOME</Link>
                    </div>
            </div>
        </>
    );
}

export default withRouter(Error);