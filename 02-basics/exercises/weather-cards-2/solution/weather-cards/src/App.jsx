import Weather from './weather/Weather'
import weatherData from './sampleData.js'

function App() {
  return (
      <div>
        <h1>Weather Forecast</h1>
        <div className="weather-grid">
          { weatherData.map(data => (
            <Weather 
              city={data.city} 
              temperature={data.temperature} 
              condition={data.condition} />
          ))}
        </div>
      </div>
  )
}

export default App
