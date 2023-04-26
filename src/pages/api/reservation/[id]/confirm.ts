import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id = "" } = req.query;

  if (req.method === "POST") {
    // Confirm the reservation
    res.status(200).json({});
  } else {
    res.status(404);
  }
}
