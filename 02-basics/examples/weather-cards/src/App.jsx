import Weather from './weather/Weather'

function App() {
  return (
      <div>
        <h1>Weather Forecast</h1>
        <div className="weather-grid">
          <Weather 
            city="Miami" 
            temperature={85} 
          />
          <Weather 
            city="London" 
            temperature={72}             
            condition="Cloudy" 
          />
          <Weather 
            city="Seattle" 
            temperature={63} 
            condition="Rainy" 
          />
          <Weather 
            city="Denver" 
            temperature={45} 
            condition="Stormy" 
          />
        </div>
      </div>
  )
}

export default App
