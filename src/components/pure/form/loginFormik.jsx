import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup"



export default function LoginFormik() {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email("Invalid email format")
                    .required("Email is required"),
            password: Yup.string().required("Password is required")
    
        }
    )

    const initialCredentials = {
        email: "",
        password: ""
    }

  return (
    <div>
        <h1>Login Formik</h1>
        <Formik 
            initialValues={initialCredentials}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 5000));
                alert(JSON.stringify(values, null, 2));
            }}
        >

        <Form >
        <label htmlFor="email">Email</label>
        <Field id="email" type="email" name="email" placeholder="example@gmail.com"/>

        <label htmlFor="password">Last Name</label>
        <Field id="password" type="password" name="password" placeholder="....." />

        <button type="submit">Submit</button>
        </Form>

        </Formik>
    </div>
    

  )
}
