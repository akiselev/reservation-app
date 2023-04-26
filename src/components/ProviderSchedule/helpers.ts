import { DateTime } from "luxon";

// Function to convert time slots to grid location
export function convertTimeSlotToGridLocation(
  startTime: string,
  endTime: string
) {
  const startDateTime = DateTime.fromISO(startTime);
  const endDateTime = DateTime.fromISO(endTime);

  // Calculate the row and span based on the grid specifications
  const midnightOffset = 2;
  const unitsPerHour = 12;
  const unitsPerMinute = unitsPerHour / 60;

  const row = Math.round(
    startDateTime.hour * unitsPerHour +
      startDateTime.minute * unitsPerMinute +
      midnightOffset
  );

  const span = Math.round(
    endDateTime.diff(startDateTime, "minutes").minutes * unitsPerMinute
  );

  return { row, span };
}

// // Test the function
// const timeSlot = {
//   startTime: "2023-04-25 09:00",
//   endTime: "2023-04-25 09:15",
// };
// console.log(convertTimeSlotToGridLocation(timeSlot));
