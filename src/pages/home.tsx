import { useEffect, useState } from "react";

const getWeatherOfTheDay = () => {
  return "sunny";
};

function Home() {
  const [weather, setWeather] = useState(null as string | null);

  useEffect(() => {
    const weatherOfTheDay = getWeatherOfTheDay();

    setWeather(weatherOfTheDay);
  }, []);

  return (
    <>
      <h1>Hello from Home</h1>

      {weather != null && <p>Today is a {weather} day</p>}
    </>
  );
}

export default Home;
