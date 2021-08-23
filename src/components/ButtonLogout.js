//Packages
import React from 'react';

//Components
import { Button } from 'react-bootstrap';

//Redux
import { connect, useDispatch } from 'react-redux';
import { userActions } from '../redux/action';

function ButtonLogout() {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        console.log('aqui estoy', event)
        dispatch(userActions.logout());
    }

    return (
        <Button variant="danger" type="submit" onClick={handleSubmit}>
            Logout
        </Button>
    );
};

function mapStateToProps(state) {
    return {
        state
    };
};

export default connect(mapStateToProps)(ButtonLogout);