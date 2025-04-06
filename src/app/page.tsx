"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";
import MinFooter from "@/components/ui/Footer";
import { SCHEDULE } from "@/lib/schedule";
import { getCurrentTime, isEventActive } from "@/lib/utils";

const getDefaultDay = () => {
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  return currentDay === "Saturday" || currentDay === "Sunday"
    ? currentDay
    : "Saturday";
};

export default function Component() {
  const [selectedDay, setSelectedDay] = useState(getDefaultDay());
  const [showAllEvents, setShowAllEvents] = useState(false);

  const { saturdayData, sundayData } = SCHEDULE;

  const router = useRouter();

  function stripPastEvents(data: { title: string; content: JSX.Element }[], selectedDay: string) {
    const currentTime = getCurrentTime();
    console.log("Current Time:", currentTime); // Debugging log

    let eventDate;
    switch (selectedDay) {
      case "Saturday":
        eventDate = "2025-4-04";
        break;
      case "Sunday":
        eventDate = "2025-3-20";
        break;
      default:
        eventDate = "2025-3-18";
    }

    console.log("Selected Day:", selectedDay); // Debugging log
    console.log("Event Date for Selected Day:", eventDate); // Debugging log

    return data.filter((event) => {
      const eventTimeString = event.title;
      const [time, modifier] = eventTimeString.split(" ");

      let [hours, minutes] = time.split(":").map(Number);
      if (modifier === "PM" && hours < 12) hours += 12;
      else if (modifier === "AM" && hours === 12) hours = 0;

      const eventDateTimeString = `${eventDate} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      const eventDateTime = new Date(eventDateTimeString);

      // const currentLocalTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "America/New_York" }));
      // Set currentLocalTime to the start of yesterday
const currentLocalTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "America/New_York" }));
currentLocalTime.setDate(currentLocalTime.getDate() - 1); // Move back one day
currentLocalTime.setHours(0, 0, 0, 0); // Set to start of the day (midnight)

      const endOfDay = new Date(eventDate);
      endOfDay.setHours(23, 59, 59, 999);

      console.log("Event Date-Time String:", eventDateTimeString);
      console.log("Event Date-Time Object:", eventDateTime);
      console.log("Current Local Time:", currentLocalTime);
      console.log("End of Day:", endOfDay);

      // Include all events from the selected day regardless of past/future timing
      return eventDateTime <= endOfDay && eventDateTime >= new Date(eventDate);
    });
  }

  const getSelectedData = () => {
    switch (selectedDay) {
      case "Saturday":
        return saturdayData;
      case "Sunday":
        return sundayData;
      default:
        return saturdayData;
    }
  };

  const getData = () => {
    const selectedData = getSelectedData();
    console.log("Selected Data (Before Filtering):", selectedData); // Debugging log

    const filteredData = showAllEvents ? selectedData : stripPastEvents(selectedData, selectedDay);
    console.log("Filtered Data (After Filtering):", filteredData); // Debugging log

    return filteredData;
  };

//   const getData = () => {
//     const selectedData = getSelectedData();
//     console.log("Selected Data:", selectedData); // Debugging log

//     // Return all events (no filtering)
//     return selectedData;
// };


  return (
    <MaxWidthWrapper>
      <div className="mb-30 py-8 sm:py-12 md:py-16 mx-auto text-center flex flex-col items-center max-w-4xl">
        {/* Header */}
        <h1
  style={{
    // fontSize: window.innerWidth <= 768 ? "4em" : "9em", 
    fontSize: window.innerWidth <= 768 ? "4em" : "4em", 
    fontFamily: "Upheaval, Arial, Helvetica, sans-serif", // Use your custom font and make it important
  }}
  className="font-bold text-primary mb-8"
>
  SpeedHacks 2025<br />
  Schedule
</h1>


        {/* Navigate to full schedule */}
        <Button
          onClick={() => router.push("/full-schedule")}
          variant="default"
          className="mb-4"
        >
          View Full Schedule
        </Button>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Saturday"].map((day) => (
            <Button
              key={day}
              variant={selectedDay === day ? "default" : "outline"}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </Button>
          ))}
        </div>

        {/* Timeline */}
        <div className="w-full max-w-3xl mx-auto">
          {(() => {
            const data = getData(); // Store the result of getData()

            if (data.length === 0) {
              return (
                <div className="text-lg text-muted-foreground">
                  All events for this day have finished.
                  <br />
                  <button
                    onClick={() => setShowAllEvents((prev) => !prev)}
                    className="text-blue-500 underline cursor-pointer"
                  >
                    {`View completed events?`}
                  </button>
                </div>
              );
            }
            return <Timeline key={selectedDay} data={data} />;
          })()}
          <p className="text-background">Caesar Shift 13</p>
        </div>

        {/* Footer */}
        <div className="pt-[10rem] md:pt-[16rem] w-full max-w-3xl mx-auto">
          <MinFooter />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
