import React, { Component } from 'react';
import axios from 'axios';

export default class CreateGuest extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            contactno: '',
            email: '',
            guests:[]
        }
        
    }

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeContactno(e) {
        this.setState({
            contactno: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const guest = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            contactno:this.state.contactno,
            email:this.state.email
        }
    
        console.log(guest)

        axios.post('/guests/add',guest)
        .then(res => console.log(res.data));

        this.setState({
            firstname: '',
            lastname: '',
            contactno: '',
            email: ''
        })
    }

    
        
    render() {
    return (
        <div>
            <h3>Enter new Guest details</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> First Name:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.firstname}
                        onChange={this.onChangeFirstname}
                    />
                </div>

                <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangeLastname}
                            />
                </div>

                <div className="form-group">
                        <label> Contact Number:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.contactno}
                            onChange={this.onChangeContactno}
                            />
                </div>

                <div className="form-group">
                        <label> Email ID: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                </div>

                <div className="form-group">
                        <br />
                        <input type="submit" value="Save Guest Details" className="btn btn-primary" />
                </div>

            </form>
        </div>
        )
    }

}

    
