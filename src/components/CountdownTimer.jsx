import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-6 text-white text-center mt-6">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="bg-blue-700 rounded-xl px-4 py-3 shadow-md w-20">
          <div className="text-xl font-bold">{timeLeft[unit] ?? "00"}</div>
          <div className="text-xs uppercase">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
