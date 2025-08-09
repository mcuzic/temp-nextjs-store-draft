import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCaroussel from './HeroCaroussel';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-3xl tracking-tight sm:text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed
          ipsa, consectetur ipsam sint repudiandae qui quibusdam aliquam libero
          modi.
        </p>
        <Button asChild size="lg" className="mt-10 capitalize">
          <Link href="/products">Our products</Link>
        </Button>
      </div>
      <HeroCaroussel />
    </section>
  );
};
export default Hero;
