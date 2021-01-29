import React from 'react';
import {Formik, useField, Form} from "formik";
import * as Yup from 'yup';

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null} {/*has the input field been touched?*/}
        </>
    )
}

function ContactForm() {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string().min(3, 'You must enter atleast 3 characters')
                    .max(15, 'You can enter only up to 15 characters')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                message: Yup.string().min(3, 'You must enter atleast 3 characters').required('Required')
            })}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false);
                }, 3000)
            }}
        >
            {props => (
                <Form>
                    <div className='form-container'>
                        <div className='contact-info'>
                            <div>
                                <h2>Contact me!</h2>
                                <ul className='info'>
                                    <li>
                                        <span><img src='../images/location.png' alt='location'/></span>
                                        <span>Donja Švarča 43 <br/>
                                            Karlovac, Croatia <br/>
                                            47000</span>
                                    </li>
                                    <li>
                                        <span><img src='../images/mail.png' alt='mail'/></span>
                                        <span>antonio.trupac@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <CustomTextInput className='text-input' label="Name" name="name" type="text" placeholder="Enter your name"/>
                    <CustomTextInput label="Email" name="email" type="email" placeholder="Enter your email"/>
                    <CustomTextInput label="Message" name="message" type="text" placeholder="Message me"/>
                    <button type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm;