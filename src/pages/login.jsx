import React from 'react'
import Base64 from 'crypto-js/enc-base64'
import SHA512 from 'crypto-js/sha512'
import MD5 from 'crypto-js/md5'

import * as firebase from 'firebase/app'
import 'firebase/auth'


class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    onLogin = () => {
        const email = (document.getElementById('email')).value;
        const inputPassword = (document.getElementById('password')).value;

        const cryptoKey = 'b4byc0m3b4kk1';
        const cryptoKeyMD5 = MD5(cryptoKey);
        const password = Base64.stringify(SHA512(inputPassword, cryptoKeyMD5));
        
        console.log(password);
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
            if(error.errorCode) {
                console.log(error.message);
            }
        }).then(res => {
            localStorage.setItem('user_token', res.user.uid);
            this.props.history.push('/dashboard');
            /*if(res.user) {
                localStorage.setItem('user_token', res.user.uid);
            }*/
        })
    }

    render() {
        return (
            <div className="grid grid-cols-3 min-h-screen">
                <div className="col-span-2 flex justify-center bg-login-welcome bg-cover bg-center items-center h-full">
                    <div className="flex bg-black bg-opacity-50 h-full w-full text-white items-center justify-center">
                        <span className="text-2xl pr-4">
                        Bem vindo a sua<br></br>
                        </span>
                        <h1 className="text-5xl font-bold">
                            Agenda Virtual!
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col h-full justify-center">
                    <form className="flex flex-col shadow-md rounded-lg overflow-hidden bg-blue-100 mx-48">
                            <h2 className="text-2xl bg-blue-500 p-4 text-white">Agenda</h2>
                            <div className="px-4 flex flex-col">
                                
                                <input id="email" className="p-2 mt-4 border-2 rounded focus:border-blue-500" type="email"/>
                                <input id="password" className="p-2 mt-4 border-2 rounded focus:border-blue-500" type="password"/>
                                <a href="#" className="text-left mt-2 mb-8 ml-2">Esqueceu a senha?</a>
                                <button onClick={this.onLogin} className="bg-gray-800 p-2 font-bold text-white rounded hover:bg-black">Entrar</button>
                                <button className="my-8">Não possue conta? Clique aqui</button>
                            </div>
                            
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;