// src/Enquiries.js
import Heading from "@/components/heading/Heading";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Enquiries = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="enquiries py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Heading headTitle="Equires" />
            <Form
              onSubmit={handleSubmit}
              className="bg-light p-4 rounded shadow-sm"
            >
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formProperty">
                <Form.Label>Property</Form.Label>
                <Form.Control
                  as="select"
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a property</option>
                  <option value="property1">Property 1 </option>
                  <option value="property2">Property 2 </option>
                  <option value="property3">Property 3 </option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
                <Button type="submit" className="w-50 mt-3 bg-golden border-0">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Enquiries;
