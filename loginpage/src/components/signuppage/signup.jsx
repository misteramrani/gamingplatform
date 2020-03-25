import React from 'react';
import '../login.scss';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            showError: true,
            signupSuccessful: true,
            showPasswordError: true

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // console.log(event.target.type)
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

        const value = this.state.password;
        const checkPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const isPassOk = checkPassword.test(value);
        if (!isPassOk) {
            console.log(value)

            return this.showPasswordError();

        }

        fetch("http://localhost:8000/signup",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ email: this.state.email, password: this.state.password })
            })
            .then(res => {
                if (res.status === 200) {
                    this.signupSuccessful();
                    setTimeout(() => window.location.reload(), 2000);

                } else if (res.status === 400) {
                    this.showError()
                }
            })
    }

    showError() {
        this.setState({
            showError: false
        })
    }

    signupSuccessful() {
        this.setState({
            signupSuccessful: false
        })
    }

    showPasswordError() {
        this.setState({
            showPasswordError: false
        })
    }

    render() {

        return (
            <div className='signup_main'>

                <h3 className={this.state.signupSuccessful ? 'hiddenSignupSuccessful' : 'signupSuccessful'}>Registratie is gelukt! Je kunt nu inloggen.</h3>
                <h3 className={this.state.showError ? 'hidden' : 'errormessage'}>User already exists. Please try again.</h3>
                <h3 className={this.state.showPasswordError ? 'hiddenpassworderrormessage' : 'passworderrormessage'}>Your password is too weak. Please try again.</h3>


                <form className='login_main_form' onSubmit={this.handleSubmit}>
                    <div><p>E-mailadres:</p> <input className='login_form_field' type="email" name="email" value={this.state.email} onChange={this.handleChange} /></div>
                    <div><p>Wachtwoord:</p> <input className='login_form_field' type="password" name="password" value={this.state.password} onChange={this.handleChange} /></div>
                    <input className='login_form_button' type="submit" value="REGISTREER" />
                </form>

            </div>
        )

    }
}

export default SignupForm;

