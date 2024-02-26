 import * as React from 'react';
 import WelcomeContent from './WelcomeContent';
 import {request,setTokentoken} from '../axios_helper';

import LoginForm from './LoginForm';
 
 export default class AppContent extends React.Component{
    render() {
        return (
            <div>
                <WelcomeContent/>
                <LoginForm/>
            
            </div>
        );
    }
}