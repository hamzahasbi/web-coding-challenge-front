import React from 'react';
import Shop from '../components/Shop';
import Header from '../components/Header';
import Routes from '../helpers/routes';
import {withRouter} from 'react-router-dom';
import UserService from '../Services/UserService';

const items = [
    Routes.APP_SHOPS, Routes.APP_PREFFERED_SHOPS
];
const currentToken = localStorage.getItem('token');

class PageLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'shops'  : [],
            'error' : '', 
            'status' : '',
            'liked'  : this.props.location.pathname !== '/shops' 
        };
    }

    componentDidMount() {
        const likedLayout = this.props.location.pathname !== '/shops';
        UserService.getShops(currentToken, likedLayout).then((response) => {
            this.setState({
                ...this.state,
                'shops' : response.data,
                'error' : '',
                'status' : response.status,  
            });
        }).catch((error) => {
            this.setState({
                ...this.state,
                'shops'  : [],
                'error'  : error.response.data.message,
                'status' : error.response.status, 
            });

        });
    }

    render() {
        const h1 = this.state.liked ? 'Preffered Shops' : 'Listing of Shops';
        return(
            <>
            <Header items={items}/>
            <div className="container">

                <h1 className="my-4">{h1}
                    {/* <small>Secondary Text</small> */}
                </h1>
                <div className="row">
                    {this.state.shops.map((item, idx) => {
                    return (
                        <Shop key={item.id || idx} data={item} preferredLyout={this.state.liked}/>
                    );
                    })}
                </div>
            </div>
            </>
        );
    }
}

export default withRouter(PageLayout);