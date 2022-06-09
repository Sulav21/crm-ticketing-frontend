import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Login = ({handleOnChange,email,password,handleOnSubmit,frmSwitcher}) => {
    
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <a href="#" onClick={()=>frmSwitcher('reset')}>Forget Password?</a>
        </Col>
      </Row>
    </Container>
  );
};
