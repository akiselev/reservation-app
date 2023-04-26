import { DateTime } from "luxon";

// Generate a list of workdays in the current month
export function getWorkdaysInCurrentMonth() {
  // Get the current date
  const now = DateTime.local();

  const startDate = now.startOf("month");
  const endDate = now.endOf("month");

  const workdays = [];

  // Iterate through the days in the current month
  for (let date = startDate; date <= endDate; date = date.plus({ days: 1 })) {
    // Check if the day is a workday (Monday through Friday)
    if (date.weekday >= 1 && date.weekday <= 5 && date.weekday !== 3) {
      workdays.push(date.toFormat("yyyy-MM-dd"));
    }
  }

  return workdays;
}

// console.log(getWorkdaysInCurrentMonth());
