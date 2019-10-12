import React from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import validation from '../helpers/validation';
import '../styles/style.css';
class Login extends React.Component {

    render() {
        return (
            <div>
                <Formik 
                initialValues = {
                    {
                        email: '',
                        password: ''
                    }
                }
                validationSchema={validation.validationLogin}
                onSubmit = {(values, actions) => {
                    // Send data + manage state;
                    console.log(values, actions);
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
                            name="email"
                            value={values.email} />
                        
                            <ErrorMessage name="email" > 
                                {msg => <div className="error-msg"> <i className="fa fa-times-circle"></i> {msg} </div>}
                            </ErrorMessage>
                            <Field type="password" onChange={handleChange} name="password"
                            value={values.password}
                            className="form-control mb-4"
                            placeholder="Password *" />
                             <ErrorMessage name="password" > 
                                {msg => <div className="error-msg"> <i className="fa fa-times-circle"></i> {msg} </div>}
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

export default Login;
