/**
 * Created by sang on 12/1/16.
 */
import React, { PropTypes } from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export function setTitle(title) {
  document.title = title;
}

export function renderField({ input, label, type, name, meta: { touched, error } }) {
  return (
    <FormGroup color={`${touched && error ? "danger" : ""}`}>
      <Label for={name}>{label}</Label>
      <Input type={type} name={name} id={name} placeholder={label} {...input} state={`${touched && error ? "danger" : ""}`} />
      {touched && ((error &&
        <FormFeedback>{error}</FormFeedback>
      ))}
    </FormGroup>
  );
}

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  meta: PropTypes.object,
}
