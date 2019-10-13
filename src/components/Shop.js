import React from 'react';

class Shop extends React.Component {

    state = {
        liked: false,
        disliked: false
    }

    render() {
        const data = this.props.data;
        return (
            <>
                <div className="col-md-4">
                    <div className="card mb-4 border-info">
                        <img className="card-img-top" src="//placeimg.com/290/180/any" alt="Card cap" />
                        <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}</p>
                         <div className="mt-3" >
                            <button type="button" className="btn btn-danger btn-width">
                                <span> 
                                    <i className="fa fa-thumbs-down"></i> Dislike 
                                </span>
                            </button>
                            <button type="button" className="btn btn-success ml-2 btn-width" > 
                                <span>
                                    <i className="fa fa-thumbs-up"></i> Like
                                </span>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Shop;