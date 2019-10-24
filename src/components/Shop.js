import React from 'react';
import UserService from '../Services/UserService';

const currentToken = localStorage.getItem('token');

class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            disliked: false
        }
    }

    like = (e) => {
        e.preventDefault();
        UserService.postLikeShop(currentToken, this.props.data.id)
        .then((response) => {
            this.setState({
                liked: true,
                disliked: false
            });
        }).catch((error) => {
        });

    };
    dislike = (e) => {
        e.preventDefault();
        UserService.deleteShopfromList(currentToken, this.props.data.id)
        .then((response) => {
            this.setState({
                liked: false,
                disliked: true
            });

        }).catch((error) => {
        });
    };
    render() {
        const data = this.props.data;
        const toHide = this.state.liked || (this.props.preferredLyout && this.state.disliked);
        const display = "col-md-4 " + ( toHide ? "d-none" : "");
        const likeClasses = this.props.preferredLyout ? 'd-none' : 'btn btn-success ml-2 btn-width';
        return (
            <>
                <div className={display}>
                    <div className="card mb-4 border-info">
                        <img className="card-img-top" src={data.thumbnail} alt="Card cap" />
                        <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}</p>
                         <div className="mt-3" >
                            <button type="button" onClick={this.dislike} className='btn btn-danger btn-width'>
                                <span> 
                                    <i className="fa fa-thumbs-down"></i> Dislike 
                                </span>
                            </button>
                            <button type="button" onClick={this.like} className={likeClasses} > 
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