export default function Day({ data, dayNum }) {
    var hourlyData = []
    var variables = ["cloudcover", "precipitation", "precipitation_probability", "relativehumidity_2m", "snow_depth", "snowfall", "soil_temperature_0cm", "surface_pressure", "temperature_2m", "visibility", "weathercode", "winddirection_10m", "windspeed_10m"]
    
    if(data != null) {

        for(let i = (dayNum * 24); i < (dayNum * 24) + 24; i++) {
            let obj = {}

            variables.forEach((v) => {
                obj[v] = data["hourly"][v][i]
            })
            
            hourlyData.push(obj)
        }

    }

    return(
        <div className="dayContainer">

            { JSON.stringify(hourlyData) }

        </div>
    )

}