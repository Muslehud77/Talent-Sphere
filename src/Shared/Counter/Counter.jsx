import { useEffect } from "react";
import { useState } from "react";


const Counter = ({date}) => {



  const targetDate = new Date(date).getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        years: "00",
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const oneYear = 31536000000; // milliseconds in a year
    const oneDay = 86400000; // milliseconds in a day
    const oneHour = 3600000; // milliseconds in an hour
    const oneMinute = 60000; // milliseconds in a minute

    const years = padWithZero(Math.floor(difference / oneYear));
    const days = padWithZero(Math.floor((difference % oneYear) / oneDay));
    const hours = padWithZero(Math.floor((difference % oneDay) / oneHour));
    const minutes = padWithZero(Math.floor((difference % oneHour) / oneMinute));
    const seconds = padWithZero(Math.floor((difference % oneMinute) / 1000));

    return { years, days, hours, minutes, seconds };
  }

  function padWithZero(value) {
    return value.toString().padStart(2, "0");
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdown);
  }, [date]);






  return (
    <div>
      <div>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.years }}></span>
            </span>
            years
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className=" font-mono text-5xl">
              <span >{timeLeft.days}</span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.hours }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.minutes }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.seconds }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
