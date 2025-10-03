import "./Weather.css"

// we can add default values to props, just like regular JS functions
function Weather({city, temperature, condition = 'Sunny'}) {
    const weatherIcons = {
        'sunny': '/img/sun.png',
        'partly cloudy': '/img/sun-clouds.png',
        'cloudy': '/img/sun-clouds.png',
        'rainy': '/img/clouds-rain.png',
        'stormy': '/img/storm.png'
    };

    const iconSrc = weatherIcons[condition.toLowerCase()];

    // get the CSS class for coloring the temperature
    function getTemperatureColor(temp) {
        if (temp >= 80) return 'hot';
        if (temp >= 65) return 'warm';
        if (temp >= 45) return 'cool';
        return 'cold';
    }

    return (
        <>
            <div className="weather-card">
                <h2>{city}</h2>
                <img 
                    src={iconSrc} 
                    alt={`${condition} weather`}
                    className="weather-icon"
                />
                <div className={`temperature ${getTemperatureColor(temperature)}`}>
                    {temperature}°F
                </div>
                <p className="condition">{condition}</p>
            </div>
        </>
    );
}

export default Weather