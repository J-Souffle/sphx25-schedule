import EventCard from "@/components/EventCard";
import { isEventActive } from "./utils";

export const SCHEDULE = {
    "saturdayData": [
    {
        "title": "10:00 AM",
        "content": (
            <>
                <EventCard title="Check-in / Breakfast / Team Formation" roomNumber={"TBD"} isActive={isEventActive("2025-4-04 10:00")} />
            </>
        )
    },
    {
        "title": "11:00 AM",
        "content": (
            <>
                <EventCard title="Opening Ceremony" roomNumber={"TBD"} isActive={isEventActive("2025-4-04 11:00")} />
            </>
        )
    },
    {
        "title": "12:00 PM",
        "content": (
            <>
                <EventCard title="Hacking Starts / Hardware Kit Pick-Up" roomNumber={"TBD"} isActive={isEventActive("2025-4-04 12:00")} />
            </>
        )
    },
    {
        "title": "1:00 PM",
        "content": (
            <>
                <EventCard title="Lunch / Team Form Due" roomNumber={"TBD"} isActive={isEventActive("2025-4-04 13:00")} />
            </>
        )
    },
    {
        "title": "7:00 PM",
        "content": (
            <>
                <EventCard title="Dinner / Check-in Period Ends, Team Forms Due" roomNumber={"TBD"} isActive={isEventActive("2025-4-04 19:00")} />
            </>
        )
    },
    {
        "title": "12:00 AM",
        "content": (
            <>
                <EventCard title="Midnight Snack" roomNumber={"TBD"} isActive={isEventActive("2025-4-04 23:59")} />
            </>
        )
    }
],
    "sundayData": [
        {
            "title": "10:00 AM",
            "content": (
                <>
                    <EventCard title="Breakfast" roomNumber={"TBD"} isActive={isEventActive("2025-3-19 23:00")} />
                </>
            )
        },
        {
            "title": "12:00 PM",
            "content": (
                <>
                    <EventCard title="Hacking Ends / Lunch / Judging Briefing" roomNumber={"TBD"} isActive={isEventActive("2025-3-19 23:00")} />
                </>
            )
        },
        {
            "title": "1:00 PM",
            "content": (
                <>
                    <EventCard title="Judging" roomNumber={"TBD"} isActive={isEventActive("2025-3-19 23:00")} />
                </>
            )
        },
        {
            "title": "3:00 PM",
            "content": (
                <>
                    <EventCard title="Judges Discuss" roomNumber={"TBD"} isActive={isEventActive("2025-3-19 23:00")} />
                </>
            )
        },
        {
            "title": "4:00 PM",
            "content": (
                <>
                    <EventCard title="Closing Ceremony" roomNumber={"TBD"} isActive={isEventActive("2025-3-19 23:00")} />
                </>
            )
        },
    ],
}