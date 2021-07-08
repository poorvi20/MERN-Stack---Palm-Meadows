import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditBooking extends Component {
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
      duration: 0,
      date: new Date(),
      booking: []
    }
  }

  componentDidMount() {
    axios.get('/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          roomno: response.data.roomno,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('/bookings/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            booking: response.data.map( booking => booking.name),
            
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeRoomno(e) {
    this.setState({
      roomno: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const booking = {
      name: this.state.name,
      roomno: this.state.roomno,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(booking);

    axios.post('/bookings/update/' + this.props.match.params.id, booking)
      .then(res => console.log(res.data));

    window.location = '/';
  }
        render() {
        return (
            <div>
                <h3>Edit a Booking</h3>
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
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.roomno}
                            onChange={this.onChangeRoomno}
                            />            
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
                        <input type="submit" value="Edit Booking" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
 
 