import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  return (
    <>
      <Card className="position-absolute top-50 start-50 translate-middle bg-dark text-primary">
        <Card.Header><h3>Log In</h3></Card.Header>
        <Form className='mx-3 my-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Card.Footer className="text-muted">Your data is safe with us.</Card.Footer>
      </Card>
    </>
  );
};

function Account() {
  return (
    <>
      <LoginForm />
    </>
  );
}

export default Account;