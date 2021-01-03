import React, { Component } from 'react';
import RoomJoinPage from"./RoomJoinPage";
import RoomCreatePage from "./RoomCreatePage";
import Room from "./Room";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <Router>
            <Switch>
                <Route exact path="/"><p>This is the home page!</p></Route>
                <Route path="/join" component={RoomJoinPage}/>
                <Route path="/create-room" component={RoomCreatePage}/>
                <Route path="/room/:roomCode" component={Room} />
            </Switch>
        </Router>;
    }
}