"use client";

import React, { useState } from "react";
import { itineraryData } from "./data/itinerary"; // adjust path if needed

const ItinerarySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mb-16">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
        Sample 7-Day Itinerary
      </h2>

      <p className="text-gray-700 mb-6">
        Here's what your typical 7-day trip will look like:
      </p>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
          {itineraryData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                activeTab === idx
                  ? "text-emerald-700 border-b-2 border-emerald-600 bg-emerald-50/50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.day}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 min-h-[200px]">
          <div
            key={activeTab}
            className="animate-in fade-in slide-in-from-left-4 duration-300"
          >
            <h3 className="font-serif text-xl font-bold text-emerald-900 mb-2">
              {itineraryData[activeTab].title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              {itineraryData[activeTab].desc}
            </p>

            {itineraryData[activeTab].image && (
              <div className="mt-4 rounded-lg overflow-hidden h-48 w-full sm:w-2/3">
                <img
                  src={`/placeholder.svg?height=300&width=500&text=${encodeURIComponent(
                    itineraryData[activeTab].title
                  )}`}
                  alt={itineraryData[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
