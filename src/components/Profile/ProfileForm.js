/**
 * Created by sang on 12/7/16.
 */
import React, { PropTypes } from 'react';
import { Form, Button } from 'reactstrap';
import { Field } from 'redux-form';
import { renderField } from '../../utils';

const ProfileForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit(props.onSubmit)}>
      <Field name="display_name" type="text" component={renderField} label="Họ tên" />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Button type="submit" color="info">Submit</Button>
    </Form>
  );
}

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default ProfileForm;
