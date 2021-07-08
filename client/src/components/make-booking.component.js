import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class MakeBooking extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRoomno = this.onChangeRoomno.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            roomno: '',
            duration: '',
            date: new Date(),
            bookings:[]
        }
        
    }

    componentDidMount() {
        axios.get('/availableRooms/')
        .then(response => {
            if(response.data.length > 0) {
                console.log(response.data)
                this.setState({
                    bookings: response.data
                 
                   
                })
            }
        })              

    }      


    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    
    onChangeRoomno(e) {
        this.setState({
            roomno: e.target.value
        });
    }

    
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        
        
        const booking = {
            name:this.state.name,
            roomno:this.state.roomno,
            duration:this.state.duration,
            date:this.state.date
        }

        console.log(booking)       

        
        axios.post('/bookings/add',booking)
        .then(res => console.log(res.data));
        
       
        window.location = "/";
    }
        render() {
        return (
            <div>
                <h3>Create a new Booking</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Guest Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Room Number: </label>
                        <select ref="bookingInput"
                            required
                            className="form-control"
                            value={this.state.roomno}
                            onChange={this.onChangeRoomno}>

                                {    
                                                                    
                                    this.state.bookings.map(function(booking) {
                                        return <option
                                        key={booking}
                                        value={booking}>{booking.roomno}
                                        </option>;
                                    })
                                }
                        </select>               
                    </div>

                    <div className="form-group">
                        <label> Duration of Stay:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            />
                    </div>

                    <div className="form-group">
                        <label> Date of Check in: </label>
                       <div>
                           <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <br />
                        <input type="submit" value="Confirm Booking" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
 