import React from 'react';
import Menu, {MenuItem} from 'rc-menu';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import Routes from '../helpers/routes';
import '../styles/style.css';


class Header extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    navList(items, selectedKeys) {
        return items.map((item, index) => this.getItems(item, index, selectedKeys));
    }

    getItems(item, idx, selectedKeys) {
        let itemClasses = "nav-link " + (selectedKeys.includes(item.key) ? "selected" : "");
        return (
            <MenuItem className="nav-item" key={item.key || item.path || idx}>
                <span><a className={itemClasses} href={item.path}>{item.name}</a></span>
            </MenuItem>
        );
    }


    render() {
        const currentPathName = this.props.location.pathname;
        const getMatchedRoute = (
            Object.values(Routes).find((route) => {
                return (route.path) === currentPathName
            }) || {
                key: ''
            }
        );
        const selectedKeys = getMatchedRoute.menuMatchPath ? [getMatchedRoute.menuMatchPath.key] : [getMatchedRoute.key];
        console.log(selectedKeys);
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light shadow" >
                <div className="collapse navbar-collapse" id="navbarCollapse" >
                    <Menu mode="horizontal" selectedKeys={selectedKeys} className="navbar-nav ml-auto">
                        {this.navList(this.props.items, selectedKeys)}   
                    </Menu>             
                </div>
            </nav>
        );
    }
    
}

export default withRouter(Header);