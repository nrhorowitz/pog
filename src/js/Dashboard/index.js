import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
        }
        this.resolveClick = this.resolveClick.bind(this);
    }

    resolveClick(type) {
        if (type === "CreateRoom") {
            if (true) { //TODO: check token
                this.setState({redirect: '/createroom'});
            }
        } else if (type === "Room") {
            if (true) { //TODO: check token and id
                const id = '0xFFFFFFFF'//TODO: set to actual id
                const pathId = '/room?id=' + id;
                this.setState({redirect: pathId});
            }
        }
    }

    render() {
        if (this.state.redirect !== '') {
            return (
                <Redirect push to={this.state.redirect}></Redirect>
            )
        } else {
            return (
                <div>
                    <Typography variant="h1">DASHBOARD</Typography>
                    <Button variant="contained" color="primary" onClick={()=>this.resolveClick("Room")}>Existing room 1</Button>
                    <Button variant="contained" color="primary" onClick={()=>this.resolveClick("Room")}>Existing room 2</Button>
                    <Button variant="contained" color="primary" onClick={()=>this.resolveClick("Room")}>Existing room 3</Button>
                    <Button variant="contained" color="secondary" onClick={()=>this.resolveClick("CreateRoom")}>CREATE NEW ROOM</Button>
                </div>
            )
        }
    }
}

export default Dashboard;