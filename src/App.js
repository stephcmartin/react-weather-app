import React from 'react';
import Main from './components/Main'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '17d64fbf486977e98eab022736f2793e';

class App extends React.Component{
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        sunrise: undefined,
        sunset: undefined
    }

    getWeather = async (e) => {
        // This is needed for SPA
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if( city && country ) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                sunrise: data.main.sunrise,
                sunset: data.main.sunset,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Oops! It seems like you did not enter a location.',
                sunrise: undefined,
                sunset: undefined
            });
        }
    }

    render(){
        return(
            <div>
               <div class="wrapper">
                 <div class="main">
                   <div class="container">
                    <div class="row">
                      <div class="col-xs-5 title-container">
                        <Main />
                      </div>
                      <div class="col-xs-7 form-container">
                        <Form getWeather={this.getWeather}/>
                        <Weather temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        sunrise={this.state.sunrise}
                        sunset={this.state.sunset}
                        error={this.state.error}
                        />
                      </div>
                    </div>
                   </div>
                 </div>
               </div>
            </div>
        );
    }
}





export default App;
