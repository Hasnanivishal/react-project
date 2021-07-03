import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { register, validateEmail } from "../api-service/axios-config";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Formik using Class component
class Register extends Component {
    render() {
        return (
            <div className="card m-3">
                <h5 className="card-header">Registration Form</h5>
                <div className="card-body">
                    <Formik
                        initialValues={{
                            title: '',
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            acceptTerms: false
                        }}
                        validationSchema={Yup.object().shape({
                            title: Yup.string()
                                .required('Title is required'),
                            firstName: Yup.string()
                                .required('First Name is required'),
                            lastName: Yup.string()
                                .required('Last Name is required'),
                            email: Yup.string()
                                .email('Email is invalid')
                                .required('Email is required')
                                .test('Unique Email','Email already in use', 
                                // async validation
                                function(value){
                                    return new Promise((resolve) => {
                                        validateEmail(value).then((res) => {
                                            resolve(res);
                                        }).catch(() => resolve(false));
                                })}
                            ),
                            password: Yup.string()
                                .min(3, 'Password must be at least 3 characters')
                                .required('Password is required'),
                            confirmPassword: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                .required('Confirm Password is required'),
                            acceptTerms: Yup.bool()
                                .oneOf([true], 'Accept T&C is required')
                        })}
                        onSubmit={async (fields, { setSubmitting }) => {
                            const response = await register(fields);
                            setSubmitting(false);
                            this.props.onFormSubmit(fields.email, fields.password);
                            this.props.history.push("/login");
                        }}
                     >
                        {({ errors, touched, isSubmitting }) => (
                            <Form>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label>Title</label>
                                        <Field name="title" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                            <option value=""></option>
                                            <option value="Mr">Mr</option>
                                            <option value="Mrs">Mrs</option>
                                            <option value="Miss">Miss</option>
                                            <option value="Ms">Ms</option>
                                        </Field>
                                        <ErrorMessage name="title" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group col-5">
                                        <label htmlFor="firstName">First Name</label>
                                        <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group col-5">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                        <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label htmlFor="password">Password</label>
                                        <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                        <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                    </div>
                                </div>
                                <div className="form-group form-check">
                                    <Field type="checkbox" name="acceptTerms" id="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                    <label htmlFor="acceptTerms" className="form-check-label">Accept Terms and Conditions</label>
                                    <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    disabled={isSubmitting}
                                    >
                                    {isSubmitting ? "Please wait..." : "Submit"}
                                    </button>
                                </div>
                                <div>
                                    Already having an Account?<Link to="/login"> Click to login</Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        email : state.email,
        password: state.password
    }
}; 

const mapDispachToProps = (dispatch) => {
    return {
        onFormSubmit: (email, password) => dispatch({type: 'UPPDATE_LOGIN', payload: {
            email: email,
            password: password
        }})
    }
};

export default connect(mapStateToProps, mapDispachToProps)(Register);