'use client'
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import usStatesData from '../data/us-states-output.json';
import usStatesStatsData from '../data/us-states-stats.json';

const Legend = ({ hoveredStateColor }: { hoveredStateColor: string }) => {
  return (
    <div className="p-4 flex justify-start">
      <div
        className="w-20 h-20 rounded-full"
        style={{
          // style the box based on the hovered state color
          backgroundColor: hoveredStateColor,
        }}
      ></div>
    </div>
  );
};

const StateInformation = ({ stateId, selectedDataSet }) => {
  // Find the state data based on the state ID
  const stateData = usStatesStatsData.find((data) => data.name === stateId);

  // Check if state data exists and extract the desired information
  if (stateData) {
    const { per, total } = stateData.dates[selectedDataSet];
    return (
      <div className="">
        <h2>{stateData.name}</h2>
        <p>{per} per 100,000</p>
        <p>{total}</p>
      </div>
    );
  }

  // Default content if state data is not found
  return (
    <div className="hidden">
      <h2>No Data Selected</h2>
    </div>
  );
};

const StateMap = () => {
  const [selectedDataSet, setSelectedDataSet] = useState('2021');
  const [hoveredState, setHoveredState] = useState('');
  const [hoveredStateColor, setHoveredStateColor] = useState('#ccc');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const calculateFillColor = (stateId: string) => {
    const stateData = usStatesStatsData.find((data) => data.name === stateId);
    if (stateData && stateData.dates && stateData.dates[selectedDataSet]) {
      const per = stateData.dates[selectedDataSet].per;
      // Calculate the fill color based on the "per" value
      const maxPer = 33;
      const minPer = 7;
      const normalizedPer = (per - minPer) / (maxPer - minPer);
      const startColor = '#99f6e4'; // Pastel teal
      const endColor = '#075985'; // Teal
      const r =
        Math.round(
          parseInt(startColor.substr(1, 2), 16) +
            normalizedPer *
              (parseInt(endColor.substr(1, 2), 16) -
                parseInt(startColor.substr(1, 2), 16))
        );
      const g =
        Math.round(
          parseInt(startColor.substr(3, 2), 16) +
            normalizedPer *
              (parseInt(endColor.substr(3, 2), 16) -
                parseInt(startColor.substr(3, 2), 16))
        );
      const b =
        Math.round(
          parseInt(startColor.substr(5, 2), 16) +
            normalizedPer *
              (parseInt(endColor.substr(5, 2), 16) -
                parseInt(startColor.substr(5, 2), 16))
        );
      return `rgb(${r}, ${g}, ${b})`;
    }
    // Default fill color for states without data
    return '#ccc';
  };

  const handleStateHover = (stateId: string, fillColor: string, event: MouseEvent) => {
    setHoveredState(stateId);
    setHoveredStateColor(fillColor);
    setCursorPosition({ x: event.pageX, y: event.pageY });
  };

  const handleStateLeave = () => {
    setHoveredState('');
    setHoveredStateColor('#ccc');
  };

  const handleDataSetToggle = (dataSet: string) => {
    setSelectedDataSet(dataSet);
  };

  return (
    <div className="max-w-5xl mx-auto relative">

      {/* Data Set Toggle */}
      <div className="flex justify-center mt-4 text-xs">
        <button
          className={`mx-2 ${
            selectedDataSet === '2017' ? 'text-sky-700 underline underline-offset-8' : ''
          }`}
          onClick={() => handleDataSetToggle('2017')}
        >
          2017
        </button>
        <button
          className={`mx-2 ${
            selectedDataSet === '2018' ? 'text-sky-700 underline underline-offset-8' : ''
          }`}
          onClick={() => handleDataSetToggle('2018')}
        >
          2018
        </button>
        <button
          className={`mx-2 ${
            selectedDataSet === '2019' ? 'text-sky-700 underline underline-offset-8' : ''
          }`}
          onClick={() => handleDataSetToggle('2019')}
        >
          2019
        </button>
        <button
          className={`mx-2 ${
            selectedDataSet === '2020' ? 'text-sky-700 underline underline-offset-8' : ''
          }`}
          onClick={() => handleDataSetToggle('2020')}
        >
          2020
        </button>
        <button
          className={`mx-2 ${
            selectedDataSet === '2021' ? 'text-sky-700 underline underline-offset-8' : ''
          }`}
          onClick={() => handleDataSetToggle('2021')}
        >
          2021
        </button>
      </div>

      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={usStatesData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateId = geo.properties.name;
              return (
                <Geography
                  key={stateId}
                  geography={geo}
                  fill={calculateFillColor(stateId)}
                  stroke="#fff"
                  strokeWidth={0.5}
                  className="state-geography"
                  onMouseEnter={(event) =>
                    handleStateHover(stateId, calculateFillColor(stateId), event)
                  }
                  onMouseLeave={handleStateLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Legend */}
      <div className="p-2 w-full">
        <div className="flex justify-between text-xs text-neutral-500 mb-2">
          <span>7</span>
          <span>33</span>
        </div>
        <div className="border h-2 border-[#222] bg-gradient-to-r from-[#99f6e4] to-[#075985]"></div>
      </div>

      {/* Info Box */}
      {hoveredState && (
        <div
          className="absolute bg-white rounded-lg p-4 border flex items-center"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        >
          <Legend hoveredStateColor={hoveredStateColor} />
          <div className="h-20 rounded w-48 flex items-center">
            <StateInformation stateId={hoveredState} selectedDataSet={selectedDataSet} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StateMap;











  

