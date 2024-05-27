import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit, isEditing }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required')
  });

  useEffect(() => {
    if (isEditing) {
      // Logic to handle form reset if necessary when switching to edit mode
    }
  }, [isEditing]);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="mb-3">
          <div className="form-group">
            <label>Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <Field name="birthDate" type="date" className="form-control" />
            <ErrorMessage name="birthDate" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Biography</label>
            <Field name="biography" as="textarea" className="form-control" />
            <ErrorMessage name="biography" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isEditing ? 'Update' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
