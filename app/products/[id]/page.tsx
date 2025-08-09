import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct } from '@/utilis/actions';
import Image from 'next/image';
import { formatCurrency } from '@/utilis/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  console.log(image);

  const dollarAmount = formatCurrency(price);
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
          />
        </div>
        {/* Product info */}
        <div className="div">
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-1">{company}</h4>
          <p className="mt-1 text-md rounded">{dollarAmount}</p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  );
};
export default SingleProductPage;
