import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";

interface EventCardProps {
    title: string;
    roomNumber: number | string;
    isActive?: boolean;  // New prop to indicate if the event is ongoing
}

const EventCard: React.FC<EventCardProps> = ({ title, roomNumber, isActive }) => {
    return (
        <Card
            className={cn(
                "relative w-full max-w-md p-8 bg-card text-card-foreground rounded-lg shadow-lg border-l-4",
                {
                    "border-l-primary": !isActive,
                    "border-l-green-500": isActive,
                }
            )}
        >
            {isActive && (
                <div aria-hidden="true" className="absolute inset-0 h-full w-full animate-ping-1/2 border-4 border-green-500 pointer-events-none">
                    {/* This div is purely for the effect */}
                </div>
            )}

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200 pb-2">
                {title}
            </h2>
            <h5 className="text-xl md:text-xl lg:text-1xl text-muted-foreground">
                <span>{roomNumber}</span>
            </h5>
        </Card>

    );
}

export default EventCard;
