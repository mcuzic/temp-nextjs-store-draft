import { formatCurrency } from '@/utilis/format';
import { Product } from '@prisma/client';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteToggleButton from './FavoriteToggleButton';

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarAmount = formatCurrency(price);
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-2xl transition-shadow duration-500">
                <CardContent className="pt-2">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={product.name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      priority
                      className="rounded object-cover w-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg capitalize">{name}</h2>
                    <p className="text-muted-foreground">{dollarAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-10 right-7 z-5">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
