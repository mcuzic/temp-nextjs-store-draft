'use client';

import { useCallback } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutClient({
  orderId,
  cartId,
}: {
  orderId?: string;
  cartId?: string;
}) {
  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post('/api/payment', { orderId, cartId });
    return response.data.clientSecret;
  }, [orderId, cartId]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
