/**
 * Created by sang on 12/1/16.
 */
import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export function setTitle(title) {
  document.title = title;
}

export function splitName(name) {
  return name.split(" ")[0][0];
}

export function quote(string, length = 15) {
  if (string.length <= length) return string;
  const words = string.split(" ");
  let result = "";
  let count = 0;
  while (true) {
    const temp = result + words[count];
    if (temp.length < length) {
      result = temp;
      count += 1;
    } else {
      break;
    }
  }
  result += "...";
  return result;
}

export function renderField(props) {
  const { input, label, type, name, meta: { touched, error } } = props;
  const status = (touched && error) ? 'error' : null;
  return (
    <FormGroup validationState={status}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type={type} name={name} id={name} placeholder={label} {...input} />
      {touched && ((error &&
        <FormControl.Feedback />
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
};
