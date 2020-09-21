import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import Main from './pages/main'
import Login from './pages/login'
import Dashboard from './pages/dashboard'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)

firebase.initializeApp({
    apiKey: "AIzaSyAhw1qEqqV4Pwawqyj8nIqGO3MB2ImqvHs",
    authDomain: "training-agendaproject.firebaseapp.com",
    databaseURL: "https://training-agendaproject.firebaseio.com",
    projectId: "training-agendaproject",
    storageBucket: "training-agendaproject.appspot.com",
    messagingSenderId: "588302643098",
    appId: "1:588302643098:web:783d2251e3386a762d1423"
});