import React from 'react';
import '../stylesheets/FormContact.css';
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
                    <h1>Contact me!</h1>
                    <CustomTextInput label="Name" name="name" type="text" placeholder="Enter your name"/>
                    <CustomTextInput label="Email" name="email" type="email" placeholder="Enter your email"/>
                    <CustomTextInput label="Message" name="message" type="text" placeholder="Message me"/>
                    <button type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm;