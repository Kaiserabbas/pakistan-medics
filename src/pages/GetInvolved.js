import React from 'react';
import { Formik, Form, Field } from 'formik';

const GetInvolved = () => (
  <div>
    <h2>Get Involved</h2>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field name="name" placeholder="Your Name" />
        <Field name="email" placeholder="Your Email" />
        <Field name="message" placeholder="Your Message" component="textarea" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default GetInvolved;
