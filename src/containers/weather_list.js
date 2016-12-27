import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {

    renderWeather(cityData) {

        const temperatures = cityData.list.map(weather => weather.main.temp - 272.15);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const mapStyle = {
            width: 100 + 'px',
            height: 100 + 'px'
        };

        return (
            <tr key={cityData.city.id}>
                <td style={mapStyle}>
                    <Map lat={parseFloat(cityData.city.coord.lat).toFixed(3)}
                         lng={parseFloat(cityData.city.coord.lon).toFixed(3)}/>
                </td>
                <td>
                    <Chart data={temperatures} color="blue" units="&#186;C"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="orange" units="%"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (Celsius)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    // { weather} === const weather = state.weather
    return {weather};
    // { weather } === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);