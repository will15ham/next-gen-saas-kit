import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
    if (!STRIPE_SECRET_KEY) {
        return NextResponse.error();
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY);
    
    const { priceId } = await request.json();

    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/`,
    });

    if (!session.url) {
        return NextResponse.error();
    }

    return NextResponse.json({"sessionUrl": session.url, "sessionId": session.id, "session": session});
}