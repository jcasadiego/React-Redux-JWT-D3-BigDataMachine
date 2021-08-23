//Packages
import React, { useState } from 'react';

//Components
import { Button, Form } from 'react-bootstrap';

//Redux
import { connect, useDispatch } from 'react-redux'
import { userActions } from '../redux/action';

function Login({ state }) {

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: '',
        password: '',
        submitted: false
    });

    const [validated, setValidated] = useState(false);

    const handleInputDatos = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const clearState = () => {
        setUser({
            username: '',
            password: '',
            submitted: false
        });
    };

    const enviarDatos = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        clearState();
        if (user.username && user.password) {
            let sub = dispatch(userActions.login(user.username, user.password));
            if (sub) {
                setUser({ submitted: true });
            } else {
                setValidated(true);
            }
        };
    };

    return (
        <Form onSubmit={enviarDatos}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>

                <Form.Control
                    required
                    name="username"
                    type="text"
                    placeholder="Ingresa Usuario"
                    onChange={handleInputDatos}
                    isInvalid={validated}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control
                    required
                    isInvalid={validated}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleInputDatos}
                />

                <Form.Control.Feedback type='invalid'>
                    Usuario o Password invalidos
                </Form.Control.Feedback>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Recordarme"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

function mapStateToProps(state) {
    return {
        state
    };
};

export default connect(mapStateToProps)(Login);