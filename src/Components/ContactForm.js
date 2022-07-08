import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = (props) => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(true);
  const nameHandeler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const emailHandeler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onContactFormHandler({ name, email });
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3  ms-5 me-5 mt-3 " controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          value={name}
          placeholder="Enter name"
          onChange={nameHandeler}
        />
      </Form.Group>
      <Form.Group className="mb-3 ms-5 me-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={emailHandeler}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 ms-5 me-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          placeholder="Password"
          onChange={passwordHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3 ms-5 me-5" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </Form.Group>
      <Button className=" ms-5 me-5" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
