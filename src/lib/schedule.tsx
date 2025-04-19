import EventCard from "@/components/EventCard";
import { isEventActive } from "./utils";

export const SCHEDULE = {
    "saturdayData": [
    {
        "title": "8:30 AM",
        "content": (
            <>
                <EventCard title="Check-in / Breakfast" roomNumber={"Room 1011 / Floor 1 Lobby"} isActive={isEventActive("2025-4-19 8:30")} />
            </>
        )
    },
    {
        "title": "9:00 AM",
        "content": (
            <>
                <EventCard title="Opening Ceremony" roomNumber={"Room 2016"} isActive={isEventActive("2025-4-19 9:00")} />
            </>
        )
    },
    {
        "title": "10:00 AM",
        "content": (
            <>
                <EventCard title="Hacking Starts / Hardware Kit Pick-Up" roomNumber={"Room 1011"} isActive={isEventActive("2025-4-19 10:00")} />
            </>
        )
    },
    {
        "title": "11:00 AM",
        "content": (
            <>
                <EventCard title="Arduino 101 Workshop" roomNumber={"Room 1009"} isActive={isEventActive("2025-4-19 11:00")} />
            </>
        )
    },
    {
        "title": "1:00 PM",
        "content": (
            <>
                <EventCard title="Lunch" roomNumber={"Floor 1 Lobby"} isActive={isEventActive("2025-4-19 13:00")} />
            </>
        )
    },
    {
        "title": "2:00 PM",
        "content": (
            <>
                <EventCard title="Check-in Closes / Team Forms Due / Activity Hosted by WIT" roomNumber={"Room 1009"} isActive={isEventActive("2025-4-19 14:00")} />
            </>
        )
    },
    // {
    //     "title": "6:00 PM",
    //     "content": (
    //         <>
    //             <EventCard title="Hacking Ends / Lunch / Judging Briefing" roomNumber={"Floor 1 Lobby / Room 1009"} isActive={isEventActive("2025-4-04 20:30")} />
    //         </>
    //     )
    // },
    {
        "title": "4:00 PM",
        "content": (
            <>
                <EventCard title="Mario Kart and Tetris Competition" roomNumber={"Room 1009"} isActive={isEventActive("2025-4-19 16:00")} />
            </>
        )
    },
    {
        "title": "6:00 PM",
        "content": (
            <>
                <EventCard title="Hacking Ends / Dinner" roomNumber={"Floor 1 Lobby"} isActive={isEventActive("2025-4-19 18:00")} />
            </>
        )
    },
    {
        "title": "7:00 PM",
        "content": (
            <>
                <EventCard title="Judging Starts" roomNumber={"Room 2014"} isActive={isEventActive("2025-4-19 19:00")} />
            </>
        )
    },
    {
        "title": "9:00 PM",
        "content": (
            <>
                <EventCard title="Closing Ceremony" roomNumber={"Room 2016"} isActive={isEventActive("2025-4-19 21:00")} />
            </>
        )
    },
    {
        "title": "10:00 PM",
        "content": (
            <>
                <EventCard title="Hackathon Ends" roomNumber={""} isActive={isEventActive("2025-4-19 22:00")} />
            </>
        )
    },
],
    "sundayData": [
    ],
}