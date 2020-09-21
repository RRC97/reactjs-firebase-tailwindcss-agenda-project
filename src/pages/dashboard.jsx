import React from "react";
import Navbar from "../components/navbar"

class Dashboard extends React.Component {

    user = {
        id: 0,
        name: "Guest",
        email: "guest@guest",
        token: "token-123",
        password: '123'
    }

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="flex grid grid-cols-4 gap4">
                <div className="col-span-1">
                    asdf
                </div>
                <div className="col-span-3">
                    <Navbar></Navbar>
                    <div className="flex">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;