import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import NavBar from './component/nevBar';

export default class App extends Component {
    render(){
        return(
            <Fragment>
                <NavBar />
                <div className="container">
                    <div className="h1 mb-3">
                    Welcome to React Bootstrap dev-kit .
                    </div>

                    <div className="h6 p-3 bg-dark rounded mb-3">
                        This application base on React with Next.js <br/>
                        And used Bootstrap4 to be base CSS Framwork .
                    </div>

                    <div className="p-2 d-flex justify-content-around">
                        <span><a href="https://nextjs.org/docs/">Next JS ( Documentation )</a></span>
                        <span><a href="https://reactjs.org/docs/getting-started.html">React JS ( Documentation )</a></span>
                        <span><a href="https://getbootstrap.com/docs/4.2/getting-started/introduction/">Bootstrap4 ( Documentation )</a></span>
                    </div>
                </div>
            </Fragment>
        )
    }
}