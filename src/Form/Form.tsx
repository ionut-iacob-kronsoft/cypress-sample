import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import './Form.scss';
import { IForm, ImageGeneratorRequest, CATEGORY_LIST, FILTERS } from "../const";

function Form(props: IForm) {
  const { valueChanges } = props;
  return (
    <div className="Form">
      <h1 data-cy="title">Awesome Image<br/><span>Generator</span></h1>

      <Formik
        initialValues={
          { label: "", category: '', filter: '' }
        }
        onSubmit={async (values) => {
          valueChanges(values as ImageGeneratorRequest);
        }}
        validationSchema={
          Yup.object().shape({
            label: Yup.string().required("Required").min(5, 'Title length should be at least 5 characters!'),
            category: Yup.mixed().oneOf(Object.values(CATEGORY_LIST), 'Wrong category').required("Required"),
            filter: Yup.mixed().oneOf(Object.values(FILTERS), 'Wrong filter').required("Required"),
          })
        }
      >
        {(props) => {
          const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset, } = props;
          return (
            <form onSubmit={handleSubmit}>
              <fieldset>
                <label htmlFor="label" style={{ display: "block" }} className={errors.label && touched.label ? "error" : ""}>Label</label>
                <input id="label"
                  data-cy="label-input"
                  placeholder="Enter your text"
                  type="text"
                  value={values.label}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.label && touched.label ? "text-input error" : "text-input"}
                />
                {errors.label && touched.label && (
                  <div className="error-feedback" data-cy="label-input-error">{errors.label}</div>
                )}
              </fieldset>

              <fieldset>
                <label htmlFor="category" style={{ display: "block" }} className={errors.category && touched.category ? "error" : ""}>Category</label>
                <select id="category"
                  placeholder="Choose category"
                  data-cy="category-select"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.category && touched.category ? "text-input error" : "text-input"}
                >
                  <option disabled></option>
                  {Object.values(CATEGORY_LIST).map(category => <option>{category}</option>)}
                </select>
                {errors.category && touched.category && (
                  <div className="error-feedback" data-cy="category-select-error">{errors.category}</div>
                )}

                <label htmlFor="filter" style={{ display: "block" }} className={errors.filter && touched.filter ? "error" : ""}>Filter</label>
                <select id="filter"
                  placeholder="Choose filter"
                  data-cy="filter-select"
                  value={values.filter}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.filter && touched.filter ? "text-input error" : "text-input"}
                >
                  <option disabled></option>
                  {Object.values(FILTERS).map(filter => <option>{filter}</option>)}
                </select>
                {errors.filter && touched.filter && (
                  <div className="error-feedback" data-cy="filter-select-error">{errors.filter}</div>
                )}
              </fieldset>

              <button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</button>
              <button type="submit" disabled={isSubmitting}>Generate</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Form;
