import axios from "axios";
import { useMutation, useQuery } from "react-query";

import {
  Provider,
  ProviderData,
  ProviderSchedule,
  ScheduleEntry,
} from "@/types";

const api = axios.create({ baseURL: "/api" });

export const setAuthToken = (authToken?: string | null) => {
  const interceptor = api.interceptors.request.use((config) => {
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    } else {
      config.headers["Authorization"] = undefined;
    }
    return config;
  });

  return () => {
    api.interceptors.request.eject(interceptor);
  };
};

// Provider API calls
export const getProviders = async () => {
  const { data } = await api.get<Provider[]>(`/providers`);
  return data;
};

export const getProvider = async (slug: string) => {
  const { data } = await api.get<ProviderData>(`/provider/${slug}`);
  return data;
};

export const getProviderSchedule = async (
  slug: string,
  date: string,
  isAdmin: boolean = false
) => {
  const { data } = await api.get<ProviderSchedule>(
    `/provider/${slug}/schedule/${date}` + (isAdmin ? "?isAdmin=true" : "")
  );
  return data;
};

export const createReservation = async ({
  slug,
  entry,
}: {
  slug: string;
  entry: ScheduleEntry;
}) => {
  const { data } = await api.post(`/provider/${slug}/reservation`, entry);
  return data;
};

export const confirmReservation = async (reservationId: string) => {
  const { data } = await api.post(`/reservation/${reservationId}/confirm`);
  return data;
};

// React Query hooks
export const useProviders = () => useQuery("providers", getProviders);

export const useProvider = (slug: string) =>
  useQuery(["provider", slug], () => getProvider(slug));

export const useProviderSchedule = (
  slug: string,
  date: string,
  isAdmin: boolean = false
) =>
  useQuery(["providerSchedule", slug, date, isAdmin], () =>
    getProviderSchedule(slug, date, isAdmin)
  );

export const useCreateReservation = () => useMutation(createReservation);

export const useConfirmReservation = () => useMutation(confirmReservation);
