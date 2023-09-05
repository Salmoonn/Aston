import { useEffect, useState } from "react";
import "./ActionTime.css";

export const ActionTime = (): JSX.Element => {
  const time = new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000;
  const [timer, setTimer] = useState(new Date(time - +new Date()));

  useEffect(() => {
    setInterval(() => setTimer(new Date(time - +new Date())), 1000);
  }, []);

  return (
    <div className="timer">
      <div className="caption-space">Auction end in:</div>
      <div className="timer-body">
        <div className="timer-time">
          <div className="space-mono h3">{timer.getUTCHours()}</div>
          <div className="caption-space">Hours</div>
        </div>
        <div className="space-mono h4">:</div>
        <div className="timer-time">
          <div className="space-mono h3">{timer.getMinutes()}</div>
          <div className="caption-space">Minutes</div>
        </div>
        <div className="space-mono h4">:</div>
        <div className="timer-time">
          <div className="space-mono h3">{timer.getSeconds()}</div>
          <div className="caption-space">Seconds</div>
        </div>
      </div>
      <button
        className="timer-button work-sans"
        style={{ cursor: "not-allowed" }}
      >
        Place Bid
      </button>
    </div>
  );
};
