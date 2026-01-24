import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CarouselSection({ title, imgs }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center lg:justify-start mx-20 mt-6">
        <p className="font-bold text-3xl lg:text-5xl text-[#374B22]">{title}</p>
      </div>
      <div className="flex justify-center px-4 my-6">
        <Carousel className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
          <CarouselContent>
            {imgs.map((img, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="w-full bg-[#374B22] rounded-xl p-4 sm:p-5">
                  <div>
                    <img
                      key={index}
                      src={img}
                      alt={`Fotos ${title}`}
                      className="w-full h-full object-cover rounded-xl shadow-xl"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <p className="text-[#EDECED] text-md lg:text-xl">{index+1} - {imgs.length}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 sm:-left-10" />
          <CarouselNext className="right-1 sm:-right-10" />
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselSection;