import React from "react"
import { Redirect } from "react-router-dom";

class Main extends React.Component {
    constructor(props) {
        super(props);
        const userToken = localStorage.getItem('user_token');
        if(userToken) {
            
        } else {
            this.props.history.push('/login');
        }
    }
}

export default Main;