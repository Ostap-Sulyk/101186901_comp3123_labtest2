import "./Card.css";
export default function Card({ data }) {
  console.log(data);
  const { name } = data;
  const { feels_like, humidity, pressure, temp, temp_max, temp_min } =
    data.main;
  const { icon } = data.weather[0];

  return (
    <table className="card">
      <thead>
        <tr>
          <th className="city">{name}</th>
          <td>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
            />
          </td>
        </tr>
      </thead>
      <tbody className="card-body">
        <tr className="row">
          <th className="left">Feels like</th>
          <td className="right">{feels_like}</td>
        </tr>
        <tr className="row">
          <th className="left">Humidity</th>
          <td className="right">{Math.round(humidity)}%</td>
        </tr>
        <tr className="row">
          <th className="left">Pressure</th>
          <td className="right">{pressure}mb</td>
        </tr>
        <tr className="row">
          <th className="left">Temp</th>
          <td className="right">{Math.round(temp)}&deg;</td>
        </tr>
        <tr className="row">
          <th className="left">Todays High</th>
          <td className="right">{Math.round(temp_max)}&deg;</td>
        </tr>
        <tr className="row">
          <th className="left">Todays Low</th>
          <td className="right">{Math.round(temp_min)}&deg;</td>
        </tr>
      </tbody>
    </table>
  );
}
