import CheckoutClient from '@/components/checkout/CheckoutClient';

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; cartId?: string }>;
}) {
  const params = await searchParams;

  const orderId = params.orderId;
  const cartId = params.cartId;

  return <CheckoutClient orderId={orderId} cartId={cartId} />;
}
