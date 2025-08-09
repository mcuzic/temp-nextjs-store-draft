import hero1 from '@/public/image1.jpg';
import hero2 from '@/public/image2.jpg';
import hero3 from '@/public/image3.jpg';
import hero4 from '@/public/image4.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { CardContent, Card } from '../ui/card';
import Image from 'next/image';

const carouselImages = [hero1, hero2, hero3, hero4];

const HeroCaroussel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="hero"
                      className="2-full h-[24rem] rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HeroCaroussel;
