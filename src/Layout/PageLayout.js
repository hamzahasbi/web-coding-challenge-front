import React from 'react';
import Shop from '../components/Shop';
import Header from '../components/Header';
import Routes from '../helpers/routes';
import {withRouter} from 'react-router-dom';

  const items = [
    Routes.APP_SHOPS, Routes.APP_PREFFERED_SHOPS
  ];

class PageLayout extends React.Component {

    render() {

        return(
            <>
            <Header items={items}/>
            <div className="container">

                <h1 className="my-4">{this.props.name}
                    {/* <small>Secondary Text</small> */}
                </h1>
                <div className="row">
                    {this.props.shops.map((item, idx) => {
                    return (
                        <Shop key={item.key || idx} data={item}/>
                    );
                    })}
                </div>
            </div>
            </>
        );
    }
}

export default withRouter(PageLayout);