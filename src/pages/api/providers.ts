import type { NextApiRequest, NextApiResponse } from "next";

import { Provider } from "@/types";
import { PROVIDERS } from "@/mocks/providers";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Provider[]>
) {
  res.status(200).json(PROVIDERS);
}
