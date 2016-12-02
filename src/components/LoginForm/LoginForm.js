/**
 * Created by sang on 12/1/16.
 */
import React, { PropTypes } from 'react';
import { Form, Button } from 'reactstrap';
import { Field } from 'redux-form';
import { renderField } from '../../utils';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit(props.onSubmit)}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <Button type="submit" color="info">Submit</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default LoginForm;
