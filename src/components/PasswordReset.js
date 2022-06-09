import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({handleOnChange,email,handleOnReset,frmSwitcher}) => {
    
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnReset}>
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

            <Button type="submit" className="mt-3">
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <a href="#" onClick={()=>frmSwitcher('login')}>Login Now?</a>
        </Col>
      </Row>
    </Container>
  );
};
