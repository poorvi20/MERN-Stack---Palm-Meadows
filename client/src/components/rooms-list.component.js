import React, { Component } from 'react';

import axios from 'axios';

const Rooms = props => {
    return (
        <tr>
            <td>{props.roomslist.roomno}</td>
            <td>{props.roomslist.status}</td>
           
        </tr>
    )

}

export default class RoomsList extends Component {
    constructor(props) {
        super(props);

       
        this.state = {

            roomslist: []
        };

    }

    componentDidMount() {
        axios.get('/roomslist/')
            .then(response => {
                this.setState({ roomslist: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    

    roomsList() {
        return this.state.roomslist.map(currentroomslist => {
            return <Rooms roomslist={currentroomslist} key={currentroomslist._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3> Rooms List and Booking</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Rooms List</th>
                            <th>Status</th>
                                                     
                               
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.roomsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
