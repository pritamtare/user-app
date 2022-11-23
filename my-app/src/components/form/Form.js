import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormComp = ({handleSubmit, handleChange}) => {


  return (
<>

    <Form handleSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="forFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text"
                onChange={handleChange}
                
        placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="forFirstName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"
                onChange={handleChange}
                
        placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="forFirstName">
        <Form.Label>Semester</Form.Label>
        <Form.Control type="text"
                onChange={handleChange}
                
        placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="forFirstName">
        <Form.Label>Hoby</Form.Label>
        <Form.Control type="text"
                onChange={handleChange}
                
        placeholder="Enter email" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>


  </>

    )
}

export default FormComp