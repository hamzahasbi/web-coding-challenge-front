import React from 'react';
import Shop from '../components/Shop';
import Header from '../components/Header';
import Routes from '../helpers/routes';
import {withRouter, Redirect} from 'react-router-dom';
import UserService from '../Services/UserService';
import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Empty from '../components/Empty';


const items = [
    Routes.APP_SHOPS, Routes.APP_PREFFERED_SHOPS, Routes.APP_LOG_OUT
];
const currentToken = localStorage.getItem('token');

class PageLayout extends React.Component {
    
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            'loading' : true,
            'shops'   : [],
            'error'   : '', 
            'status'  : '',
            'liked'   : this.props.location.pathname !== '/shops',
            'hasMore' : false,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        const likedLayout = this.props.location.pathname !== '/shops';
        UserService.getShops(currentToken, likedLayout).then((response) => {
            if (this._isMounted) {
                this.setState({
                    ...this.state,
                    'shops'   : response.data,
                    'status'  : response.status, 
                    'loading' : false, 
                });
            }
        }).catch((error) => {
            if (this._isMounted) {
                this.setState({
                    ...this.state,
                    'error'  : error.response.data.message,
                    'status' : error.response.status, 
                    'loading': false,
                });
                UserService.disconnectUser(error.response.status);
            }
        });
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    renderShops = () => {
        if (!this.state.loading) {
            if (this.state.shops.length === 0) return <Empty/>;
            else return(
                <div className="row">
                    {this.state.shops.map((item, idx) => {
                    return (
                        <Shop key={item.id || idx} data={item} 
                        preferredLyout={this.state.liked}/>
                    );
                    })}
                </div>
            );
        }
    }
    render() {
        const h1 = this.state.liked ? 'Preffered Shops' : 'Listing of Shops';
        const loading = this.state.loading;
        if (this.state.error !== '') return <Redirect to='/' />
        return(
            <>
            <Header items={items}/>
            <div className="container">

                <h1 className="my-4">{h1}</h1>
                <LoadingOverlay
                    active={loading}
                    spinner={<ScaleLoader color={'#FF0039'} />}
                    >
                    {this.renderShops()}
         
                </LoadingOverlay>
                
            </div>
            </>
        );
    }
}

export default withRouter(PageLayout);