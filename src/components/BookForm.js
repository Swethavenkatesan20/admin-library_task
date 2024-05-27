import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit, isEditing }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required')
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
            <label>Title</label>
            <Field name="title" type="text" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Author</label>
            <Field name="author" type="text" className="form-control" />
            <ErrorMessage name="author" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>ISBN</label>
            <Field name="isbn" type="text" className="form-control" />
            <ErrorMessage name="isbn" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Publication Date</label>
            <Field name="publicationDate" type="date" className="form-control" />
            <ErrorMessage name="publicationDate" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isEditing ? 'Update' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
