import React from "react";
import List from "./components/List";
import FormInput from "./components/Form";
import { Container, Row, Col } from 'reactstrap';

const App = () => (
  <Container>
    < Row>
      <Col xl="12">
        <div className="form-wrapper">
          <h2 className="text-center">Add a new todo</h2>
          <FormInput />
        </div>
      </Col>
    </Row>
    <Row>
        <List />
    </Row>
  </Container>
);
export default App;