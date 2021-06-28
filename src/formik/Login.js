import { useFormik } from "formik";
import { Link , Redirect} from "react-router-dom";
import * as Yup from "yup";
import { login } from "../api-service/axios-config";

// Formik for Functional Component
function Login(props) {

    const formik = useFormik({
            initialValues: {
                email: '',
                password: ''
            },
            validationSchema: Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().min(3, 'Password must be at least 3 characters').required('Required')
            }),
            onSubmit: async (values, {setSubmitting}) => {
                let res = await login(values);
                setSubmitting(false);
                if (res) {
                    props.history.push("/");
                }
            }
    });

    return (
        <div className="card m-3">
            <h5 className="card-header">Login Form</h5>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="text" {...formik.getFieldProps('email')}
                                className={'form-control' + (formik.errors.email && formik.touched.email ? ' is-invalid' : '')} />
                                { formik.touched.email && formik.errors.email ? 
                                    (
                                        <div className="invalid-feedback">{formik.errors.email}</div>
                                    ) : null 
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" {...formik.getFieldProps('password')}
                                className={'form-control' + (formik.errors.password && formik.touched.password ? ' is-invalid' : '')} />
                                { formik.touched.password && formik.errors.password ? 
                                    (
                                        <div className="invalid-feedback">{formik.errors.password}</div>
                                    ) : null 
                                }
                            </div>
                            <div className="form-group">
                                    <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    disabled={formik.isSubmitting}
                                    >
                                    {formik.isSubmitting ? "Please wait..." : "Submit"}
                                    </button>
                            </div>
                            <div>
                                    Don't have an account?<Link to="/"> Click to SignUp!</Link>
                            </div>
                    </form>
                </div>
        </div>)
}

export default Login;