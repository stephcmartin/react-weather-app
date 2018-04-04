import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>    
        {this.props.city && this.props.country && <p>{this.props.city}, {this.props.country}</p>}
        {this.props.city && this.props.country && <p>{this.props.temperature} &#8451;</p>}
        {this.props.city && this.props.country && <p>Humidity: {this.props.humidity} %</p>}
        {this.props.city && this.props.country && <p>{this.props.description.toUpperCase()}</p>}
        {this.props.sunrise && this.props.sunset && <p>Sunrise: {this.props.sunrise}, Sunset: {this.props.sunset}</p>}
        {this.props.error && <p>{this.props.error}</p>}     
            </div>
        );
    }
}

export default Weather;