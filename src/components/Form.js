// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTodo } from "../actions/index";
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import PropTypes from "prop-types";
const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    };
};
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        {
            title !== "" ?
                (this.props.addTodo({ title, id }),
                    this.setState({ title: "" })) : ""
        }

    }
    render() {
        const { title } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col xl="10">
                        <FormGroup className="todo-input">
                            <Input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={this.handleChange}
                                placeholder="+ Add task"
                            />
                        </FormGroup>
                    </Col>
                    <Col xl="2">
                        <Button type="submit" className="add-btn">
                            Add
                    </Button>
                    </Col>
                </Row>
            </Form>

        );
    }
}
const FormInput = connect(null, mapDispatchToProps)(ConnectedForm);
ConnectedForm.propTypes = {
    addTodo: PropTypes.func.isRequired
};
export default FormInput;