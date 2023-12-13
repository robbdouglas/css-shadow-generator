// ShadowGenerator.tsx
import React, { useState } from "react";

const ShadowGenerator: React.FC = () => {
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [inset, setInset] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [shape, setShape] = useState("ellipse");
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [copied, setCopied] = useState(false);

  const boxStyle: React.CSSProperties = {
    boxShadow: `${
      inset ? "inset " : ""
    }${positionX}px ${positionY}px ${blur}px ${spread}px ${color}`,
    opacity: opacity,
    borderRadius: shape === "ellipse" ? "50%" : "0%",
  };

  const cssCode = `box-shadow: ${
    inset ? "inset " : ""
  }${positionX}px ${positionY}px ${blur}px ${spread}px ${color};\nopacity: ${opacity};\nborder-radius: ${
    shape === "ellipse" ? "50%" : "0%"
  };`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);


    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-3xl font-bold mb-4">CSS Shadow Generator</h1>
      <div
        className="w-32 h-32 bg-gray-300 border border-gray-400 m-4"
        style={boxStyle}
      ></div>
      <label className="flex items-center mb-2">
        Horizontal:
        <input
          type="range"
          min="-50"
          max="50"
          value={horizontal}
          onChange={(e) => {
            setHorizontal(Number(e.target.value));
            setPositionX(Number(e.target.value));
            setCopied(false);
          }}
          className="ml-2"
        />
        <span className="ml-2">{horizontal}</span>
      </label>
      <label className="flex items-center mb-2">
        Vertical:
        <input
          type="range"
          min="-50"
          max="50"
          value={vertical}
          onChange={(e) => {
            setVertical(Number(e.target.value));
            setPositionY(Number(e.target.value));
            setCopied(false);
          }}
          className="ml-2"
        />
        <span className="ml-2">{vertical}</span>
      </label>
      <label className="flex items-center mb-2">
        Blur:
        <input
          type="range"
          min="0"
          max="50"
          value={blur}
          onChange={(e) => setBlur(Number(e.target.value))}
          className="ml-2"
        />
        <span className="ml-2">{blur}</span>
      </label>
      <label className="flex items-center mb-2">
        Spread:
        <input
          type="range"
          min="0"
          max="50"
          value={spread}
          onChange={(e) => setSpread(Number(e.target.value))}
          className="ml-2"
        />
        <span className="ml-2">{spread}</span>
      </label>
      <label className="flex items-center">
        Color:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="ml-2"
        />
        <span className="ml-2">{color}</span>
      </label>
      <label className="flex items-center mb-2">
        Inset:
        <input
          type="checkbox"
          checked={inset}
          onChange={() => setInset(!inset)}
          className="ml-2"
        />
      </label>
      <label className="flex items-center mb-2">
        Opacity:
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
          className="ml-2"
        />
        <span className="ml-2">{opacity}</span>
      </label>
      <label className="flex items-center mb-2">
        Shape:
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value)}
          className="ml-2"
        >
          <option value="ellipse">Ellipse</option>
          <option value="rectangle">Rectangle</option>
        </select>
      </label>
      <div className="mt-4">
        <p>Generierter CSS-Code:</p>
        <pre>{cssCode}</pre>
        <button
          onClick={copyToClipboard}
          className={`mt-2 px-4 py-2 rounded ${
            copied ? "bg-green-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {copied
            ? "In Zwischenablage kopiert"
            : "In die Zwischenablage kopieren"}
        </button>
      </div>
    </div>
  );
};

export default ShadowGenerator;
