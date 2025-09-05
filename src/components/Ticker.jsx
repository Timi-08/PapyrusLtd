import React, { useEffect, useState } from "react";

const Ticker = () => {
  const [location, setLocation] = useState("Fetching location...");
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "medium",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(
        new Date().toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "medium",
        })
      );
    }, 1000);

    navigator.geolocation?.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await res.json();

          const city = data.state || data.locality || "Unknown City";
          const country = data.countryName || "Unknown Country";

          setLocation(`${city}, ${country}`);
        } catch (error) {
          console.error("Error fetching location:", error);
          setLocation("Location unavailable");
        }
      },
      () => setLocation("Location unavailable")
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker ">
      {currentDate} | 📍 {location}
    </div>
  );
};

export default Ticker;
