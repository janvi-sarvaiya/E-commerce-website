import Countdown from "react-countdown";

export default function CountDownTimer() {
  const targetDate = new Date("2026-02-21T23:59:59");
  return (
    <div>
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <h1 className="text-orange font-bold text-3xl">Expired Time!</h1>
            );
          } else {
            return (
              <div className="flex text-center gap-3 items-baseline-last">
                <TimeBox label="Days" time={days} />
                <span className="text-4xl text-orange">:</span>
                <TimeBox label="Hours" time={hours} />
                <span className="text-4xl text-orange">:</span>
                <TimeBox label="Minutes" time={minutes} />
                <span className="text-4xl text-orange">:</span>
                <TimeBox label="Seconds" time={seconds} />
              </div>
            );
          }
        }}
      />
    </div>
  );
}

function TimeBox({ label, time }) {
  return (
    <div>
      <p className="text-sm">{label}</p>
      <h1 className="text-[32px] font-semibold">
        {String(time).padStart(2, "0")}
      </h1>
    </div>
  );
}
