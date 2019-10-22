import React from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import validation from '../helpers/validation';
import '../styles/style.css';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { login } from '../actions';
import Routes from '../helpers/routes';

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    sign_in: (credentials) => dispatch(login(credentials)),
  }
}

const token = localStorage.getItem('token');

class Login extends React.Component {

    render() {
        if (token !== undefined && token !== null) {
            return <Redirect to='/shops'/>
        }
        return (
            <div>
                <Formik 
                initialValues = {
                    {
                        username: '',
                        password: ''
                    }
                }
                validationSchema={validation.validationLogin}
                onSubmit = {(values, actions) => {
                    this.props.sign_in(values); 
                }}> 
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form onSubmit={handleSubmit} className="text-center border border-light p-5 login-form">
                            <p className="h4 mb-4">Sign in</p>
                            <Field type="email" placeholder="Email *"
                            onChange={handleChange}
                            className="form-control mb-4"
                            name="username"
                            value={values.username} />
                        
                            <ErrorMessage className="is-invalid" name="username" > 
                                {msg => <div className="invalid-feedback feedback"> <i className="fa fa-times-circle"></i> {msg} </div>}
                            </ErrorMessage>
                            <Field type="password" onChange={handleChange} name="password"
                            value={values.password}
                            className="form-control mb-4"
                            placeholder="Password *" />
                            <ErrorMessage className="is-invalid" name="password" > 
                                {msg => <div className="invalid-feedback feedback"> <i className="fa fa-times-circle"></i> {msg} </div>}
                            </ErrorMessage>
                            <button className="btn btn-info btn-block my-4" type="submit">Log In </button>
                            <h6> 
                                <a className="text-dark" href={Routes.APP_ACCOUNT.path}>Not a member</a>
                            </h6>
                        </Form>
                        
                    )
                } 
                </Formik>  
            </div>
        );
    };

}


export default connect(null, mapDispatchToProps)(withRouter(Login));
