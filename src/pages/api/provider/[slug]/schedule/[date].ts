import type { NextApiRequest, NextApiResponse } from "next";

import { ProviderSchedule } from "@/types";
import { PROVIDER_MAP } from "@/mocks/providers";
import { createAdminSlots } from "@/mocks/slots";
import { createTimeSlots } from "@/mocks/schedule";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProviderSchedule>
) {
  const { slug = "", date = "2020-01-01", isAdmin = false } = req.query;

  const data = {
    ...PROVIDER_MAP[slug as string],
    schedule: isAdmin
      ? createAdminSlots(date as string)
      : createTimeSlots(date as string),
  };
  res.status(200).json(data as any);
}
