import { DateTime } from "luxon";

export function createAdminSlots(dateString: string) {
  const inputDate = DateTime.fromISO(dateString);

  // Define working hours and lunch break
  const startWorkHour = 9;
  const endWorkHour = 17;
  const lunchStartHour = 12;
  const lunchEndHour = 13;
  const minutesPerSlot = 15;

  const timeSlots = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += minutesPerSlot) {
      const startTime = inputDate.set({ hour, minute });
      const endTime = startTime.plus({ minutes: minutesPerSlot });

      // Determine if the time slot is enabled (working hours, excluding lunch break)
      const enabled =
        hour >= startWorkHour &&
        hour < endWorkHour &&
        !(hour >= lunchStartHour && hour < lunchEndHour);

      timeSlots.push({
        startTime: startTime.toISO(),
        endTime: endTime.toISO(),
        enabled,
      });
    }
  }

  return timeSlots;
}

// const dateString = "2023-04-25";
// console.log(createAdminSlots(dateString));
