import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselContent:any = [
    {
        title: "Sharan",
    },
    {
        title: "Hasan",
    },
    {
        title: "Ifshad",
    },
    {
        title: "Jarin",
    },
    {
        title: "Jahan",
    },
    {
        title: "Shila",
    },
    {
        title: "Nidrita",
    },
];

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {carouselContent.map((item:any, index:number) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{item.title}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
