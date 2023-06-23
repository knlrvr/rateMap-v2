'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import usStatesData from '../data/us-states-output.json';
import usStatesStatsData from '../data/us-states-stats.json';

const Legend = ({ hoveredStateColor }: { hoveredStateColor: string }) => {
  return (
    <div className="p-4">
      <div
        className="w-10 h-10 rounded-full"
        style={{
          // style the box based on the hovered state color
          backgroundColor: hoveredStateColor,
        }}
      ></div>
    </div>
  );
};

const StateInformation = ({ stateId, selectedDataSet }: { stateId: string, selectedDataSet: string }) => {
  // Find the state data based on the state ID
  const stateData = usStatesStatsData.find((data) => data.name === stateId);

  // Check if state data exists and extract the desired information
  if (stateData) {
    const { per, total } = stateData.dates[selectedDataSet as keyof typeof stateData.dates];
    return (
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-300 uppercase">state</span>
          <h2 className="text-xs text-neutral-500 uppercase font-semibold">{stateData.name}</h2>
        </div>
        <div className="flex items-center justify-between uppercase">
          <span className="text-xs text-neutral-300">rate</span>
          <h2 className="text-xs text-neutral-500 font-semibold">{per}</h2>
        </div>
        <div className="flex items-center justify-between uppercase">
          <span className="text-xs text-neutral-300">total</span>
          <h2 className="text-xs text-neutral-500 font-semibold">{total}</h2>
        </div>
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

  const calculateFillColor = (stateId: string) => {
    const stateData = usStatesStatsData.find((data) => data.name === stateId);
    if (stateData && stateData.dates && stateData.dates[selectedDataSet as keyof typeof stateData.dates]) {
      const { per: statePer, total } = stateData.dates[selectedDataSet as keyof typeof stateData.dates];
  
      if (statePer >= 0 && statePer <= 5) {
        return '#fff';
      } else if (statePer > 6 && statePer <= 10) {
        return '#ffedd5';
      } else if (statePer > 10 && statePer <= 15) {
        return '#fed7aa';
      } else if (statePer > 15 && statePer <= 20) {
        return '#fb923c';
      } else if (statePer > 20 && statePer <= 25) {
        return '#ef4444';
      } else if (statePer > 25 && statePer <= 30) {
        return '#075985';
      } else if (statePer > 30 && statePer <= 35) {
        return '#082f49';
      } else {
        // Default fill color for states outside the defined ranges
        return '#ccc';
      }
    }
  
    // Default fill color for states without data
    return '#ccc';
  };

  const handleStateHover = (stateId: string, fillColor: string, event: MouseEvent) => {
    setHoveredState(stateId);
    setHoveredStateColor(fillColor);
  };

  const handleStateLeave = () => {
    setHoveredState('');
    setHoveredStateColor('#ccc');
  };

  const handleDataSetToggle = (dataSet: string) => {
    setSelectedDataSet(dataSet);
  };

  
  return (
    <div className="max-w-5xl mx-auto relative border-b py-4">

      {/* Data Set Toggle */}
      <div className="flex justify-center mt-4 text-xs border-t p-4">
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
                  onMouseEnter={(event: any) =>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 pb-2">
        <div className="p-2">
          <div className="flex justify-start flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-white border rounded-full"></div>
              <span className="text-xs">0 &mdash; 5</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-[#ffedd5] rounded-full"></div>
              <span className="text-xs">6 &mdash; 10</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-[#fed7aa] rounded-full"></div>
              <span className="text-xs">11 &mdash; 15</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-[#fb923c] rounded-full"></div>
              <span className="text-xs">16 &mdash; 20</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-[#ef4444] rounded-full"></div>
              <span className="text-xs">21 &mdash; 25</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-[#075985] rounded-full"></div>
              <span className="text-xs">26 &mdash; 30</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-[#082f49] rounded-full"></div>
              <span className="text-xs">31 &mdash; 33</span>
            </div>
          </div>
        </div>

        {/* Info Box */}
        {hoveredState && (
          <div className="flex items-center bg-white rounded-md border border-neutral-300 my-2 mx-2 h-14">
            <Legend hoveredStateColor={hoveredStateColor} />
            <div className=" w-full px-4">
              <StateInformation stateId={hoveredState} selectedDataSet={selectedDataSet} />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between space-y-2 p-2">
        <p className="text-xs">
          &#x2a; Rates shown are per 100,000 of total population. 
        </p>
        <p className="text-xs">
          &#x2a;&nbsp;
          <span className="underline underline-offset-4">Source</span> 
          :
          <Link href="https://www.cdc.gov/nchs/pressroom/sosmap/suicide-mortality/suicide.htm" target="_blank"
            className="hover:text-blue-400 transition duration-200">
            &nbsp;CDC.GOV
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StateMap;











  

