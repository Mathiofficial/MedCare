import React, { useState, useEffect, useRef } from "react";

const Reminder = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [running, setRunning] = useState(false);
  const [alarmPlaying, setAlarmPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && running) {
      setRunning(false);

      // Show popup message
      alert("Time's up! Take your tablet.");

      // Play alarm continuously until stopped
      if (audioRef.current) {
        audioRef.current.loop = true;
        audioRef.current
          .play()
          .then(() => setAlarmPlaying(true))
          .catch((error) => console.log("Autoplay blocked: ", error));
      }
    }
    return () => clearInterval(timer);
  }, [running, time]);

  const startTimer = () => {
    if (time > 0) {
      setRunning(true);

      // Grant permission for future playback
      if (audioRef.current) {
        audioRef.current.play().catch((error) => console.log("Autoplay issue:", error));
      }
    }
  };

  const stopTimer = () => {
    setRunning(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset sound
      setAlarmPlaying(false);
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Reminder Alarm</h1>
      <p className="mt-2 text-gray-600">
        Set a timer to remind you to take your tablets on time.
      </p>

      <div className="mt-4">
        <input
          type="number"
          className="border p-2 rounded w-24"
          placeholder="Time (s)"
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value) || 0)}
          disabled={running}
        />
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={startTimer}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={running || time <= 0}
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          disabled={!running && !alarmPlaying}
        >
          Stop
        </button>
      </div>

      <h2 className="mt-4 text-xl font-semibold">{time} seconds remaining</h2>

      {/* Ensure audio element is inside the DOM */}
      <audio ref={audioRef} controls>
        <source src="/alarm.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Reminder;
