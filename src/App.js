//Packages
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import "./App.css";

//Router
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

//componets
import HomeContainer from "./screens/HomeContainer";
import LoginContainer from "./screens/LoginContainer";
import Container from "./components/Container";

//Redux
import { connect } from 'react-redux';
import PrivateRouter from "./components/PrivateRouter";

function App({state}) {

    return (
        <BrowserRouter>
            <Container>
                <Switch>
                    <PrivateRouter exact path='/Home' component={HomeContainer} />
                    <Route exact path="/">
                        <LoginContainer />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );

};


//export default hot(module)(App);

function mapStateToProps(state){
    return {
        state
    };
};

export default  connect(mapStateToProps)(App);