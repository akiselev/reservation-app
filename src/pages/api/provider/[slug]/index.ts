import type { NextApiRequest, NextApiResponse } from "next";

import { ProviderData } from "@/types";
import { PROVIDER_MAP } from "@/mocks/providers";
import { getWorkdaysInCurrentMonth } from "@/mocks/dates";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProviderData>
) {
  const { slug = "" } = req.query;

  const data = {
    ...PROVIDER_MAP[slug as string],
    availableDates: getWorkdaysInCurrentMonth(),
  };
  res.status(200).json(data);
}
