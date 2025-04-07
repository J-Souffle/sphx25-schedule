"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MinFooter from "@/components/ui/Footer";
import { SCHEDULE } from "@/lib/schedule";
import { useRouter } from 'next/navigation';
import Image from "next/image"; // Use Next.js Image component for better performance
import Logo from "../../assets/hackoverflow-upscaled-logo.png"; // Adjust the path based on your project structure

export default function FullSchedule() {
  const router = useRouter();
  const { saturdayData, sundayData } = SCHEDULE;

  // Combine events for Saturday and Sunday
  const fullSchedule = [...saturdayData, ...sundayData];

  return (
    <MaxWidthWrapper>
      <div className="mb-30 py-8 sm:py-12 md:py-16 mx-auto text-center flex flex-col items-center">
        {/* Image on top of Full Schedule text */}
        <div className="relative w-[200px] h-[100px] mb-8">
          <Image
            src={Logo}
            alt="Hackoverflow Logo"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>

        {/* Header */}
        <h1
          style={{
            fontSize: "3em",
            fontFamily: "Upheaval, Arial, Helvetica, sans-serif",
          }}
          className="font-bold text-primary mb-8"
        >
          Full Schedule
        </h1>

        {/* Display full schedule as a table */}
        <div className="w-full max-w-7xl mb-8">
          {fullSchedule.length > 0 ? (
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-center text-black">Time</th>
                  <th className="border border-gray-300 px-4 py-2 text-center text-black">Event</th>
                  <th className="border border-gray-300 px-4 py-2 text-center text-black">Location</th>
                </tr>
              </thead>
              <tbody>
                {fullSchedule.map((event, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-300 px-4 py-2 text-black">{event.title}</td>
                    <td className="border border-gray-300 px-4 py-2 text-black">
                      {event.content.props.children.props.title}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-black">
                      {event.content.props.children.props.roomNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-lg text-muted-foreground">
              No events available for the full schedule.
            </div>
          )}
        </div>

        {/* Go Back to Main Page Button */}
        <button
          onClick={() => router.push("https://www.hackoverflow.org/")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Home
        </button>

        {/* Footer */}
        <div className="pt-[5rem] w-full max-w-3xl mx-auto">
          <MinFooter />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
