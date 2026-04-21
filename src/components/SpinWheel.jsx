import { useState, useRef } from "react";
import "./SpinWheel.css";

const offers = [
  { label: "10% OFF", color: "#FF6B6B", dark: "#C0392B" },
  { label: "20% OFF", color: "#FECA57", dark: "#F39C12" },
  { label: "Free Dessert 🍰", color: "#48DBFB", dark: "#0984E3" },
  { label: "No Luck 😢", color: "#A29BFE", dark: "#6C5CE7" },
  { label: "Free Delivery 🚚", color: "#55EFC4", dark: "#00B894" },
  { label: "Buy 1 Get 1", color: "#FD79A8", dark: "#E84393" },
];

const NUM = offers.length;
const ANGLE = 360 / NUM;
const R = 140;
const CX = 160;
const CY = 160;

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function slicePath(cx, cy, r, startAngle, endAngle) {
  const s = polarToCartesian(cx, cy, r, startAngle);
  const e = polarToCartesian(cx, cy, r, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M${cx},${cy} L${s.x},${s.y} A${r},${r} 0 ${large} 1 ${e.x},${e.y} Z`;
}

function labelPos(cx, cy, r, startAngle) {
  const mid = startAngle + ANGLE / 2;
  const p = polarToCartesian(cx, cy, r * 0.65, mid);
  return { x: p.x, y: p.y, angle: mid - 90 };
}

export default function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const totalRotation = useRef(0);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    const winIndex = Math.floor(Math.random() * NUM);
    const sliceMidAngle = winIndex * ANGLE + ANGLE / 2;

    const needed = (360 - sliceMidAngle) % 360;
    const extra = 360 * 6;

    totalRotation.current =
      totalRotation.current +
      extra +
      needed -
      (totalRotation.current % 360);

    setRotation(totalRotation.current);

    setTimeout(() => {
      setResult(offers[winIndex]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">🎉 Spin & Win</h1>
        <p className="sub">Try your luck for exclusive Paradise offers!</p>

        <div className="wheelOuter">
          <div className="pointer"></div>

          <svg
            width="320"
            height="320"
            viewBox="0 0 320 320"
            className="wheel"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: spinning
                ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 1)"
                : "none",
            }}
          >
            {offers.map((offer, i) => {
              const start = i * ANGLE;
              const end = start + ANGLE;
              const lp = labelPos(CX, CY, R, start);

              return (
                <g key={i}>
                  <path
                    d={slicePath(CX, CY, R, start, end)}
                    fill={offer.color}
                    stroke="white"
                    strokeWidth="2"
                  />

                  <g
                    transform={`translate(${lp.x},${lp.y}) rotate(${lp.angle})`}
                  >
                    <text className="sliceText">
                      {offer.label.length > 12
                        ? offer.label.slice(0, 11) + "…"
                        : offer.label}
                    </text>
                  </g>
                </g>
              );
            })}

            <circle cx={CX} cy={CY} r="28" className="centerCircle" />
            <text x={CX} y={CY} className="centerIcon">
              🍽
            </text>
          </svg>
        </div>

        <button onClick={spin} disabled={spinning} className="btn">
          {spinning ? "Spinning..." : "Spin Now 🎰"}
        </button>

        {result && (
          <div
            className="result"
            style={{
              background: result.color + "30",
              borderColor: result.color,
            }}
          >
            <div className="resultEmoji">🎊</div>
            <div className="resultText">You won:</div>
            <div
              className="resultOffer"
              style={{ color: result.dark }}
            >
              {result.label}
            </div>
            <div className="resultNote">
              Show this to our staff to redeem!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}