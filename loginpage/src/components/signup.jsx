/* eslint-disable no-useless-escape */
// import { Router, hashHistory as history } from 'react-router';
// // Your routes.js file
import React from 'react';
import './login.scss';



// export default () =>  {

//     return ( 
//         <div>
//             <h1>hallo</h1>
//             {/* <Router routes={routes} history={history} /> */}
//         </div>
//     )
// }
class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                    alert('status code = 403')

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
                <h1>rey-giestrir</h1>

                <form onSubmit={this.handleSubmit}>
                    <div><p>ie-meel:</p> <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /></div>
                    <div><p>Wagtwort:</p> <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /></div>
                    <input className='as' type="submit" value="Klik hiero" />
                </form>
            </div>
        )

    }
}

export default SignupForm;

// class Login extends Component {

//     constructor() {
//         this.state = {
//             isLive: true
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <h1>hallo</h1>
//             </div>
//         )
//     }
// }