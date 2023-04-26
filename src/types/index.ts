// User (This should be a UUID)
export type ID = number;

export interface User {
  id: ID;
  email: string;
  role: "client" | "provider" | "admin";
}

export interface Provider {
  id: ID;
  name: string;
  slug: string;
  position: string;
  imageUrl: string;
}

export type ProviderData = Provider & {
  availableDates: string[];
};

export interface ScheduleEntry {
  // Inclusive datetime with timestamp
  startTime: string;
  // Exclusive
  endTime: string;
  enabled?: boolean;
}

export interface Reservation extends ScheduleEntry {
  id: string;
}

export type ProviderSchedule = Provider & {
  schedule: ScheduleEntry[];
};

export type LocalStorage = {
  user: User;
  token: string;
};
