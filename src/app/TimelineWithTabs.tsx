"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const HorizontalView = ({ data }: { data: TimelineEntry[] }) => {
  const currentEvent = data[0]; // Just an example; customize logic for current event

  return (
    <div className="relative overflow-hidden bg-gray-100">
      <h3 className="text-center text-2xl font-bold mb-4">Current Event</h3>
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {data.map((event, index) => (
          <div key={index} className="flex-shrink-0 px-4 py-2 border border-gray-300 bg-white rounded-lg mx-2">
            <h4 className="font-bold">{event.title}</h4>
            {event.content}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const FullSchedule = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h3 className="text-center text-2xl font-bold mb-4">Full Schedule</h3>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-bold">{item.title}</h4>
          {item.content}
        </div>
      ))}
    </div>
  );
};

const TimelineWithTabs = ({ data }: { data: TimelineEntry[] }) => {
  const [activeTab, setActiveTab] = useState("horizontal");

  return (
    <div className="w-full font-sans">
      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("horizontal")}
          className={`px-4 py-2 font-bold ${
            activeTab === "horizontal" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Horizontal View
        </button>
        <button
          onClick={() => setActiveTab("full")}
          className={`px-4 py-2 font-bold ${
            activeTab === "full" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Full Schedule
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "horizontal" ? (
        <HorizontalView data={data} />
      ) : (
        <FullSchedule data={data} />
      )}
    </div>
  );
};

export default TimelineWithTabs;
