import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchUserFavorites } from '@/utilis/actions';

const FavoritesPage = async () => {
  const favorites = await fetchUserFavorites();
  console.log(favorites);

  if (favorites.length === 0) return <SectionTitle text="no here favs" />;

  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid
        products={favorites.map((favorite) => {
          return favorite.product;
        })}
      />
    </div>
  );
};
export default FavoritesPage;
