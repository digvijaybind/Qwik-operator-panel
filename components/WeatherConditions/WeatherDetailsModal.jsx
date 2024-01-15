import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherDetailsModal = ({ currentAircraftData, setCurrentAircraftData }) => {
  const [weatherDetails, setWeatherDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentAircraftData?.location) {
      setLoading(true);
      axios(process.env.NEXT_PUBLIC_OPEN_WEATHER_API_URL + "/weather", {
        method: "GET",
        params: {
          q: currentAircraftData?.location,
          appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
        },
      })
        .then(({ data }) => {
          console.log(data);
          setWeatherDetails(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentAircraftData]);

  return (
    <div
      className={`${
        currentAircraftData ? "block" : "hidden"
      } w-[100vw] h-[100vh] absolute top-0 left-0`}
    >
      <div className="w-[100vw] h-[100vh] bg-white opacity-[50%] z-[200] absolute top-0 left-0 z-100"></div>
      <div
        className={`bg-white shadow-md  absolute top-[80px]  z-[300] left-[50%] transform translate-x-[-50%]  w-[500px] px-[30px] px-[40px] sm:w-[310px]`}
      >
        <div onClick={() => setCurrentAircraftData(null)}>
          <img
            src="./images/crossIcon.svg"
            className="absolute cursor-pointer top-[10px] right-[10px]"
            alt="cross icon"
          />
        </div>

        <h1 className="text-[26px] my-[20px] sm:text-[26px] mb-4">Weather Details</h1>
        {loading ? (
          <div className="py-10 flex justify-center">
            <img src="./images/loadingIcon.svg" className="animate-spin w-5 h-5" alt="loading icon" />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 mb-2">
              <div>
                <p className="font-semibold">Weather</p>
                <p>{weatherDetails?.weather[0]?.main}</p>
                <p className="text-xs">({weatherDetails?.weather[0]?.description})</p>
              </div>
              <div>
                <p className="font-semibold">Humidity</p>
                <p>{weatherDetails?.main?.humidity}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <div>
                <p className="font-semibold">Temperature</p>
                <p>{weatherDetails?.main?.temp} °F</p>
              </div>
              <div>
                <p className="font-semibold">Feels Like</p>
                <p>{weatherDetails?.main?.feels_like} °F</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <div>
                <p className="font-semibold">Visibility</p>
                <p>{weatherDetails?.visibility}</p>
              </div>
              <div>
                <p className="font-semibold">Wind Speed</p>
                <p>{weatherDetails?.wind?.speed} km/h</p>
              </div>
            </div>
          </div>
        )}

        <div className="w-[100%] mt-5">
          <button
            className="w-[100%] text-[14px] text-[#11211] font-semibold py-[8px] mb-[20px] bg-[#40D1F0] rounded-[4px]"
            onClick={() => {
              setCurrentAircraftData(null);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetailsModal;
