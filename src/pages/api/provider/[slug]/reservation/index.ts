import type { NextApiRequest, NextApiResponse } from "next";

import { Reservation } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reservation>
) {
  const { slug = "" } = req.query;

  if (req.method === "POST") {
    // Reserve the reservation
    res.status(200).json({
      id: "reservation uuid",
      startTime: "2021-04-25T09:00:00.000Z",
      endTime: "2021-04-25T09:15:00.000Z",
    });
  } else {
    res.status(404);
  }
}
