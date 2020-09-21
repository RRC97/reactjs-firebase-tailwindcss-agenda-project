import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="flex flex-col bg-login-welcome bg-center bg-cover">
                <div className="flex flex-col bg-blue-600 bg-opacity-75">
                    <div className="flex text-white">
                        <a className="flex items-center text-2xl px-4" href="#">Agenda Digital</a>
                        <ul className="flex ml-auto h-16 flex-row-reverse">
                            <li><a className="flex px-4 items-center h-full" href="#">Ivermectina</a></li>
                            <li><a className="flex px-4 items-center h-full" href="#">Teste</a></li>
                            <li><a className="flex px-4 items-center h-full" href="#">Teste</a></li>
                            <li><a className="flex px-4 items-center h-full" href="#">Teste</a></li>
                        </ul>
                    </div>
                    <input className="flex mx-32 px-4 py-2 rounded-full my-10" type="text"></input>
                </div>
                
            </div>
        );
    }
}

export default Navbar;