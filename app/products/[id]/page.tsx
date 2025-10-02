import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct, findExistingReview } from '@/utilis/actions';
import Image from 'next/image';
import { formatCurrency } from '@/utilis/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';
import ShareButton from '@/components/single-product/ShareButton';
import SubmitReview from '@/components/reviews/SubmitReview';
import ProductReviews from '@/components/reviews/ProductReviews';
import { auth } from '@clerk/nextjs/server';

type PageProps = {
  params: Promise<{ id: string }>;
};

const SingleProductPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const product = await fetchSingleProduct(id);
  const { name, image, company, description, price } = product;

  const dollarAmount = formatCurrency(price);
  const { userId } = await auth();

  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, product.id));

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="relative h-64 md:h-80 lg:h-full">
          <Image
            src={image}
            fill
            alt={name}
            sizes="(max-width:768px) 100vw, (min-width:1200px) 50vw, 30vw"
            className="w-full rounded object-cover"
            priority
          />
        </div>
        {/* Product info */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={id} />
              <ShareButton name={product.name} productId={id} />
            </div>
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-1">{company}</h4>
          <p className="mt-1 text-md rounded">{dollarAmount}</p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
      <ProductReviews productId={id} />
      {reviewDoesNotExist && <SubmitReview productId={id} />}
    </section>
  );
};
export default SingleProductPage;
