import React from 'react';
import {Helmet} from 'react-helmet';
import '../styles/errors.css';
import {withRouter} from 'react-router-dom';
import Routes from '../helpers/routes';
function Loading() {

    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900|Roboto:100,300,400,500,700,900" rel="stylesheet" />
            </Helmet>
            <div className="container">
                    <div className="error-wrapper">
                        <div className="man-icon"></div>
                        <h3 className="title">you've authenticated successfully</h3>
                        <p className="info">Oh! You can visit you're Dashboard'</p>
                        <a href={Routes.APP_SHOPS.path} type="button" className="home-btn mx-auto">Dashboard</a>
                    </div>
            </div>
        </>
    );
}

export default withRouter(Loading);