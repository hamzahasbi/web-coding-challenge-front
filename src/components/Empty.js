import React from 'react';

class Empty extends React.Component {


    render() {
        return(
            <div className="container mt-4">
                    <div className="alert alert-dismissible alert-danger">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Oh snap!</strong> This list is currently empty.
                    </div>
            </div>
        );
    }
}

export default Empty;