import React from 'react';
import {Formik, useField, Form, Field} from "formik";
import * as Yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

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

function ContactForm() {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                description: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string().min(3, 'You must enter atleast 3 characters')
                    .max(15, 'You can enter only up to 15 characters')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                description: Yup.string().min(3, 'You must enter atleast 3 characters').required('Required')
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
                    <div className='contact-form'>
                        <h1>Contact me!</h1>
                        <CustomTextInput className='input' label="Name" name="name" type="text"
                                         placeholder="Enter your name" style={{fontSize:'20px'}}/>
                        <CustomTextInput className='input' label="Email" name="email" type="email"
                                         placeholder="Enter your email" style={{fontSize:'20px'}}/>
                        <CustomTextArea className='textarea' label="Description" name="description" type="textarea"
                                        placeholder="Message me" style={{fontSize:'20px'}}/>
                        <button style={{fontSize:'20px'}} type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                    </div>
                    <div className='links'>
                        <a href='mailto: antonio.trupac@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                            <span className='font'>Gmail</span>
                        </a>
                        <a href='mailto: antonio.trupac@gmail.com'>
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