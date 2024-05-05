import React, { useState } from "react";
import WorldMap from "react-svg-worldmap";

function Map() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.2);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => Math.max(0.2, prevZoomLevel - 0.2));
  };

  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];

  return (
    <div className="App">
      <div>
        <button onClick={handleZoomIn}>Zoom In (+)</button>
        <button onClick={handleZoomOut}>Zoom Out (-)</button>
      </div>
      <WorldMap
        color="red"
        title="Top 10 Populous Countries"
        valueSuffix="people"
        size="lg"
        data={data}
        zoomLevel={zoomLevel}
      />
    </div>
  );
}

export default Map;

// import WorldMap from "react-svg-worldmap";

// function Map() {
//   const data = [
//     { country: "cn", value: 1389618778 }, // china
//     { country: "in", value: 1311559204 }, // india
//     { country: "us", value: 331883986 }, // united states
//     { country: "id", value: 264935824 }, // indonesia
//     { country: "pk", value: 210797836 }, // pakistan
//     { country: "br", value: 210301591 }, // brazil
//     { country: "ng", value: 208679114 }, // nigeria
//     { country: "bd", value: 161062905 }, // bangladesh
//     { country: "ru", value: 141944641 }, // russia
//     { country: "mx", value: 127318112 }, // mexico
//   ];
//   return (
//     <div className="App">
//       <WorldMap
//         color="red"
//         title="Top 10 Populous Countries"
//         value-suffix="people"
//         size="lg"
//         data={data}
//       />
//     </div>
//   );
// }

// export default Map;
