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
                {/* <div className="row">
                    <div className="col-md-7">
                        <a href="/">
                            <img className="img-fluid rounded mb-3 mb-md-0" src={data.image} alt=""/>
                        </a>
                    </div>
                    <div className="col-md-5">
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
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
                </div> */}
                <div class="card border-info mb-3 col-md-4" style={{"maxWidth": "20rem"}}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Info card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <hr/>
            </>
        );
    }
}

export default Shop;