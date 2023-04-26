import { DateTime } from "luxon";

import { ScheduleEntry } from "@/types";

// Function to generate a list of 15-minute time slots with a 1-hour lunch break
export function createTimeSlots(dateString: string): ScheduleEntry[] {
  // Parse the input date string
  const inputDate = DateTime.fromISO(dateString);

  // Define working hours and lunch break
  const startWorkHour = 9;
  const endWorkHour = 17;
  const lunchStartHour = 12;
  const lunchEndHour = 13;
  const minutesPerSlot = 15;

  // Initialize time slots array
  const timeSlots = [];

  // Iterate through working hours
  for (let hour = startWorkHour; hour < endWorkHour; hour++) {
    // Skip lunch break hour
    if (hour === lunchStartHour) {
      hour = lunchEndHour - 1;
      continue;
    }

    // Iterate through minutes with 15-minute increments
    for (let minute = 0; minute < 60; minute += minutesPerSlot) {
      const startTime = inputDate.set({ hour, minute });
      const endTime = startTime.plus({ minutes: minutesPerSlot });

      timeSlots.push({
        startTime: startTime.toISO()!,
        endTime: endTime.toISO()!,
      });
    }
  }

  return timeSlots;
}

// Test the function
// const dateString = '2023-04-25';
// console.log(createTimeSlots(dateString));
