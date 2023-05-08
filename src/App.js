import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Day from './components/day/day';

function App() {
  const [ data, setData ] = useState(undefined)
  const [ lat, setLat ] = useState(40.730610)
  const [ lon, setLon ] = useState(-73.935242)

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      var _lat = pos.coords.latitude
      var _lon = pos.coords.longitude
      
      setLat(Math.round(_lat * (10 ** 2)) / (10 ** 2))
      setLon(Math.round(_lon * (10 ** 2)) / (10 ** 2))
    })
  }

  useEffect(() => {
    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,snowfall,snow_depth,weathercode,surface_pressure,cloudcover,visibility,windspeed_10m,winddirection_10m,soil_temperature_0cm`)
      .then(response => {
        setData(response.data)
        console.log(response.data)
    })
  }, [lat, lon])
  return (
    <div className="App">
      <Day dayNum="0" data={data}/>
      <Day dayNum="1" data={data}/>
      <Day dayNum="2" data={data}/>
      <Day dayNum="3" data={data}/>
      <Day dayNum="4" data={data}/>
      <Day dayNum="5" data={data}/>
      <Day dayNum="6" data={data}/>
    </div>
  );
}

export default App;