export const isEventActive = (eventTime: string) => {
    const now = new Date();
    const eventDate = new Date(eventTime);
    return now >= eventDate && now < new Date(eventDate.getTime() + 3600000); // Active for 1 hour
  };
  