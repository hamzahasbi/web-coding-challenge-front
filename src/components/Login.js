import React from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import validation from '../helpers/validation';
import '../styles/style.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { login } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    sign_in: (credentials) => dispatch(login(credentials)),
  }
}
class Login extends React.Component {

    render() {
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
                    
                    console.log(this.props);
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
                        
                            <ErrorMessage name="username" > 
                                {msg => <div className="invalid-feedback"> {msg} </div>}
                            </ErrorMessage>
                            <Field type="password" onChange={handleChange} name="password"
                            value={values.password}
                            className="form-control mb-4"
                            placeholder="Password *" />
                             <ErrorMessage name="password" > 
                                {msg => <div className="invalid-feedback"> {msg} </div>}
                            </ErrorMessage>
                            <button className="btn btn-info btn-block my-4" type="submit">Log In </button>
                            <h6> 
                                <a className="text-dark" href="/">Not a member</a>
                            </h6>
                        </Form>
                        
                    )
                } 
                </Formik>  
            </div>
        );
    };

}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  status: state.auth.error
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
