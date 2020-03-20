/* eslint-disable no-useless-escape */
// import { Router, hashHistory as history } from 'react-router';
// // Your routes.js file
import React from 'react';
import './login.scss';
import logo from '../mvidia_logo.jpg';
import gamingicon from '../icon-game-library.svg';
import SignupForm from './signup'



class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            signupmodulevisible: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchBetweenLoginSignup = this.switchBetweenLoginSignup.bind(this);
    }

    switchBetweenLoginSignup() {
        this.setState({
            signupmodulevisible: true
        })
    }

    handleChange(event) {
        console.log(event.target.type)
        if (event.target.type === 'email') {
            this.setState({
                email: event.target.value
            }
            );
        }
        else if (event.target.type === 'password') {
            this.setState({
                password: event.target.value
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.email)

        fetch("http://localhost:8000/login",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ email: this.state.email, password: this.state.password })
            })
            .then(response => {
                if (response.status === 200) {
                    this.props.history.push('/academy');

                } else if (response.status === 403) {
                    alert('User/password-combination is incorrect. Try again.')

                }
                else {
                    alert(response.status)
                }
            })

        // const { value } = this.state;

        // const re = new RegExp("(?=.*[0-9])");
        // const isOk = re.test(value);

        // console.log(isOk);

        // if (!isOk) {
        //     return alert('je paswoort is zwakjes');
        // }

        // alert('A password was submitted that was ' + value.length + ' characters long.');
    }

    render() {
        return (

            <div>
                <img src={logo} alt="" />
                <div className='login_header'>
                    <img className='login_header_icon' src={gamingicon} alt="" />
                    <h1>BEGIN MET GAMEN</h1>
                    <p className='login_header_description'>Er staan al meer dan 1 van de leukste gratis games op mVidia Playground voor je klaar, dus je hoeft geen enkele aankoop te doen om vandaag al te kunnen beginnen met gamen. Log hieronder in om te gamen!</p>
                </div>
                <form className='login_main_form' onSubmit={this.handleSubmit}>
                    <div><p>E-mailadres:</p> <input className='login_form_field' type="email" name="email" value={this.state.email} onChange={this.handleChange} /></div>
                    <div><p>Wachtwoord:</p> <input className='login_form_field' type="password" name="password" value={this.state.password} onChange={this.handleChange} /></div>
                    <input className='login_form_button' type="submit" value="LOG IN" />
                </form>
                <div className='login_header'>
                    <h1>NOG GEEN MVIDIA-ACOUNT? </h1>
                    {/* <p>Klik dan <a href={'./signup'}><span>hier</span></a> om je te registreren.</p> */}
                    <p>Klik dan<button onClick={this.switchBetweenLoginSignup}>hier</button>om je te registreren.</p>
                    {this.state.signupmodulevisible ? <SignupForm /> : null}

                    {/* Regel 113 is hetzelfde als:
                    
                    if (this.state.ezel) {
                            <SignupForm />
                        } else {
                            null
                        }*/}
                </div>
            </div>
        )

    }
}


export default LoginForm;

