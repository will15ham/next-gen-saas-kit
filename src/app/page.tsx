"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import axios from "axios";

export default function Home() {
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: "price_1OH7yNImxbeUrkgep0dXgaWC",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    window.location.assign(data.session.url);
  };
  return (
    <div>
      <Button onClick={handleSubscription}>Purchase!</Button>
    </div>
  );
}
