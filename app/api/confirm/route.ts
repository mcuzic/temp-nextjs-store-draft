import Stripe from 'stripe';

import { redirect } from 'next/navigation';

import { type NextRequest } from 'next/server';
import db from '@/utilis/db';

const STRIPE_SECRET_KEY =
  'sk_test_51SCQMK3UUlRCXqn2AVsdbAyQae0IgBTNS17zPmNJKqUgnS6EcbSS6v6GEEWdyj6kud8Nzdtia5tmWGmgVBYvlVYP00YuEX2VQr';

const stripe = new Stripe(STRIPE_SECRET_KEY as string);

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get('session_id') as string;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    const orderId = session.metadata?.orderId;
    const cartId = session.metadata?.cartId;
    if (session.status === 'complete') {
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
        },
      });
      await db.cart.delete({
        where: {
          id: cartId,
        },
      });
    }
  } catch (err) {
    console.log(err);
    return Response.json(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
  redirect('/orders');
};
