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
        this.setState({
            liked: true,
            disliked: false
        });
        UserService.postLikeShop(currentToken, this.props.data.id)
        .then((response) => {
        }).catch((error) => {
            console.log(error.response);
        });

    };
    dislike = (e) => {
        e.preventDefault();
        this.setState({
            liked: false,
            disliked: true
        })
    };
    render() {
        const data = this.props.data;
        const display = "col-md-4 " + (this.state.liked ? "d-none" : "");
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