"use client"
import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaUsers, FaHandshake } from 'react-icons/fa';

export default function Advcount() {
  const [clientsCount, setClientsCount] = useState(0);
  const [hiringCount, setHiringCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    const incrementValue = (currentValue, targetValue, setValue) => {
      if (currentValue < targetValue) {
        setTimeout(() => {
          setValue(currentValue + Math.ceil(targetValue / 100)); // Adjust the speed of counting
        }, 20); // Adjust the delay to make the counting smoother or faster
      }
    };

    if (clientsCount < 150) {
      incrementValue(clientsCount, 150, setClientsCount);
    }

    if (hiringCount < 10000) {
      incrementValue(hiringCount, 10000, setHiringCount);
    }

    if (satisfactionCount < 100) {
      incrementValue(satisfactionCount, 100, setSatisfactionCount);
    }
  }, [clientsCount, hiringCount, satisfactionCount]);

  return (
    <div className="flex justify-around space-x-8 mt-10">
      <div className="text-center">
        <FaBriefcase className="mx-auto text-6xl text-blue-600 mb-4" />
        <h2 className="text-4xl font-bold">{clientsCount} +</h2>
        <p className="text-lg">Happy Clients</p>
      </div>
      <div className="text-center">
        <FaUsers className="mx-auto text-6xl text-blue-600 mb-4" />
        <h2 className="text-4xl font-bold">{hiringCount.toLocaleString()} +</h2>
        <p className="text-lg">Hiring Completed</p>
      </div>
      <div className="text-center">
        <FaHandshake className="mx-auto text-6xl text-blue-600 mb-4" />
        <h2 className="text-4xl font-bold">{satisfactionCount} %</h2>
        <p className="text-lg">Client Satisfaction</p>
      </div>
    </div>
  );
}
