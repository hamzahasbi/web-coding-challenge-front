import React from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import validation from '../helpers/validation';
import '../styles/style.css';
import UserService from '../Services/UserService';
import {withRouter} from 'react-router-dom';
class Account extends React.Component {

    render() {
        return (
            <div>
                <Formik 
                initialValues = {
                    {
                        email    : '',
                        password : '',
                        confirm   : '',
                        longitude : '',
                        latitude : ''
                    }
                }
                validationSchema={validation.validationAccount}
                onSubmit = {(values, actions) => {
                
                    UserService.postAccountCreation(values).then((response) => {
                        this.props.history.push('/');
                    }).catch((error) => {
                        this.props.history.push('error');
                    }) ;     
                    
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
                            <p className="h4 mb-4">Sign up</p>
                            <Field type="email" placeholder="Email *"
                            onChange={handleChange}
                            className="form-control mb-4"
                            name="email"
                            value={values.email} />
                        
                            <ErrorMessage className="is-invalid" name="email" > 
                                {msg => <div className="invalid-feedback feedback"> <i className="fa fa-times-circle"></i> {msg} </div>}
                            </ErrorMessage>
                            <Field type="password" onChange={handleChange} name="password"
                            value={values.password}
                            className="form-control mb-4 has-danger"
                            placeholder="Password *" />
                            <ErrorMessage className="is-invalid" name="password" > 
                                {msg => <div className="invalid-feedback feedback"> <i className="fa fa-times-circle"></i> {msg} </div>}
                            </ErrorMessage>
                            <Field type="password" onChange={handleChange} name="confirm"
                            value={values.confirm}
                            className="form-control mb-4"
                            placeholder="Password confirmation *" />
                            <ErrorMessage className="is-invalid" name="confirm" > 
                                {msg => <div className="invalid-feedback feedback"> <i className="fa fa-times-circle"></i> {msg} </div>}
                            </ErrorMessage>
                          
                            {/* <Field type="text" onChange={handleChange} name="longitude"
                            value={values.longitude}
                            className="form-control mb-4"
                            placeholder="Current longitude *" />
                            <ErrorMessage className="is-invalid" name="longitude" > 
                                {msg => <div className="invalid-feedback feedback"> <i className="fa fa-times-circle"></i> {msg} </div>}
                            </ErrorMessage>
                            <Field type="text" onChange={handleChange} name="latitude"
                            value={values.latitude}
                            className="form-control mb-4"
                            placeholder="Current latitude *" />
                            <ErrorMessage name="latitude" > 
                                {msg => <div className="invalid-feedback"> {msg} </div>}
                            </ErrorMessage> */}
                        
                            <button className="btn btn-info btn-block my-4" type="submit">Create </button>
                        
                        </Form>
                        
                    )
                } 
                </Formik>  
            </div>
        );
    };

}

export default withRouter(Account);
