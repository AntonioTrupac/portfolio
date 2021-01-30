import React from 'react';
import {Formik, useField, Form, Field} from "formik";
import * as Yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label className='label' htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null} {/*has the input field been touched?*/}
        </>
    )
}

const CustomTextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label className='label' htmlFor={label}>{label}</label>
            <Field as='textarea' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

function ContactForm() {
    return (
        <Formik
            initialValues={{
                ime: '',
                email: '',
                description: '',
            }}
            validationSchema={Yup.object({
                ime: Yup.string().min(3, 'You must enter atleast 3 characters')
                    .max(15, 'You can enter only up to 15 characters')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                description: Yup.string().min(3, 'You must enter atleast 3 characters').required('Required')
            })}
            onSubmit={(values, actions) => {
                    fetch("/", {
                        method: "POST",
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        body: encode({
                            "form-name": "formik",
                            ...values
                        })
                    })
                        .then(() => {
                            alert('Success');
                            actions.resetForm();
                        })
                        .catch(() => {
                            alert('Error');
                        })
                        .finally(() => actions.setSubmitting(false))
            }}
        >
            {props => (
                <Form name="formik" data-netlify={true}>
                    <div className='contact-form'>
                        <h1>Contact me!</h1>
                        <CustomTextInput className='input' label="Name" name="ime" type="text"
                                         placeholder="Enter your name" style={{fontSize: '20px'}}/>
                        <CustomTextInput className='input' label="Email" name="email" type="email"
                                         placeholder="Enter your email" style={{fontSize: '20px'}}/>
                        <CustomTextArea className='textarea' label="Description" name="description" type="textarea"
                                        placeholder="Message me" style={{fontSize: '20px'}}/>
                        <button style={{fontSize: '20px'}}
                                type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                    </div>
                    <div className='links'>
                        <a href='mailto: antonio.trupac@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                            <span className='font'>Gmail</span>
                        </a>
                        <a href='https://github.com/AntonioTrupac?tab=repositories'>
                            <FontAwesomeIcon icon={faGithub} className='icon'/>
                            <span className='font'>Github</span>
                        </a>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm;