import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/index';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import { addDays, format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.min.css";


import { Link } from 'react-router-dom';


export class areaFilter extends Component {
    state = {
        area: '',
        value: '',
        valueArea: {},
        startDate: new Date()
    }

    handleChange = (event) => {
        this.setState({ valueArea: event.target.value });
    };

    onDateChange = (date) => this.setState({ startDate: date });





    render() {
        const showdate = format(this.state.startDate, 'dd.MM.yyyy')
        const today = new Date()

        console.log(showdate)
        return (
            <div style={{ textAlign: "center", marginTop: "10px", marginBottom: " 8px" }}>
                <div>

                    <select style={{ marginBottom: "10px", marginRight: " 3px", padding: "5px", borderRadius: "5px" }}

                        onChange={e => this.setState({ valueArea: e.target.value, validationError: e.target.value === "" ? "select area" : "" })}
                    > {this.props.listOfAreas.map((team) => <option key={team.ID} value={team.ID}>{team.Name}</option>)}
                    </select>


                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.onDateChange}
                        minDate={today}
                        maxDate={addDays(today, 7)}
                        showDisabledMonthNavigation
                    />

                </div>




                <Link
                    style={{ textDecoration: "none" }}
                    to="/movies"
                    onClick={() =>
                        this.props.fetchMovie(
                            this.state.valueArea,
                            showdate
                        )
                    }
                ><button style={{ marginTop: "1px" }}> FILTER</button>

                </Link>

            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    listOfAreas: state.movieList.areaList,
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(areaFilter)
