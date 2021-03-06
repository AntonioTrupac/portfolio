import React from 'react';
import {Formik, useField, Form, Field} from "formik";
import * as Yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

//motion
import {motion} from 'framer-motion';
import {fadeLeft, fadeRight, fadeAbove} from "../Animation";


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
            onSubmit={(values, actions) => {
                fetch("/", {
                    method: "POST",
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: encode({
                        "form-name": "formik",
                        ...values
                    })
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(response.status);
                        } else if (response.ok) {
                            alert('success');
                            actions.resetForm();
                        } else {
                            alert('Something went wrong');
                        }
                        return response;
                    })
                    .catch((error) => {
                        alert(error);
                    })
                    .finally(() => actions.setSubmitting(false))
            }}
        >
            {props => (
                <Form name="formik" data-netlify={true}>
                    <input type="hidden" name="form-name" value="formik"/>
                    <div className='contact-form'>
                        <motion.h1
                            variants={fadeAbove}
                            initial='hidden'
                            animate='visible'
                            transition={{duration: 0.7}}
                        >Contact me!</motion.h1>
                        <CustomTextInput className='input' label="Name" name="name" type="text"
                                         placeholder="Enter your name" style={{fontSize: '20px'}}/>
                        <CustomTextInput className='input' label="Email" name="email" type="email"
                                         placeholder="Enter your email" style={{fontSize: '20px'}}/>
                        <CustomTextArea className='textarea' label="Description" name="description" type="textarea"
                                        placeholder="Message me" style={{fontSize: '20px'}}/>
                        <button style={{fontSize: '20px'}}
                                       type="submit"
                        >{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                    </div>
                    <div className='links'>
                        <motion.a
                            variants={fadeLeft}
                            initial='hidden'
                            animate='visible'
                            transition={{duration: 0.7}}
                            href='mailto: antonio.trupac@gmail.com' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                            <span className='font'>Gmail</span>
                        </motion.a>
                        <motion.a
                            variants={fadeRight}
                            initial='hidden'
                            animate='visible'
                            transition={{duration: 0.7}}
                            href='https://github.com/AntonioTrupac?tab=repositories' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub} className='icon'/>
                            <span className='font'>Github</span>
                        </motion.a>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm;