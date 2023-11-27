import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET() {
    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
    if (!STRIPE_SECRET_KEY) {
        return NextResponse.error();
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY);
    
    const prices = await stripe.prices.list({
        active: true,
    })

    return NextResponse.json(prices);
}