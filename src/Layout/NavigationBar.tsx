import * as React from 'react';
import { Link  } from 'react-router';

import NavigationItem from './NavigationItem';


export default class NavigationBar extends React.Component<any, any>{
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link  to="/" className="navbar-brand">Karthik Chintala</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <NavigationItem to="/">Home</NavigationItem>
                            <NavigationItem to="about">About Us</NavigationItem>
                            <NavigationItem to="contact">Contact Us</NavigationItem>
                            <NavigationItem to="counter">Counter</NavigationItem>
                        </ul>
                        <ul className="nav navbar-nav navbar-right hide">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
