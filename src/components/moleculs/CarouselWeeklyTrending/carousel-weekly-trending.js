import React from "react";
import list from "@/utils/weekly-trending.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typography from "@/components/atoms/Typography";
import Star from "@/components/atoms/Star/star";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function CarouselWeeklyTrending() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1022 },
      items: 6,
      partialVisibilityGutter: 100,
    },
    tablet: {
      breakpoint: { max: 1022, min: 800 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  const ArrowLeftSide = ({ onClick }) => {
    return (
      <button
        className="css-left-carousel hover:bg-primary/20 cursor-pointer hover:shadow-lg duration-200 transition ease-in-out "
        onClick={() => onClick()}
      >
        <span className="text-primary flex items-center justify-center">
          <ChevronLeftIcon className="h-6 text-primary" />
        </span>
      </button>
    );
  };
  const ArrowRightSide = ({ onClick }) => {
    return (
      <button
        className="css-arrow-right-carousel hover:bg-primary/20 bg-transparent hover:shadow-lg duration-200 transition ease-in-out"
        onClick={() => onClick()}
      >
        <span className="text-primary flex items-center justify-center">
          <ChevronRightIcon className="h-6 text-primary" />
        </span>
      </button>
    );
  };
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      customLeftArrow={<ArrowLeftSide />}
      customRightArrow={<ArrowRightSide />}
      arrows={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="pb-10"
      dotListClass=" pb-2"
      draggable
      focusOnSelect={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      showDots={true}
      slidesToSlide={2}
      infinite={true}
    >
      {list?.weekly?.map((weekly, index) => {
        return (
          <div className="w-44 mt-6 " key={index + 1}>
            <div>
              <div className="p-2">
                <img
                  src={weekly.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col py-4">
                <div className="flex items-center space-x-2">
                  <Typography type="h5" className="font-semibold">
                    {weekly.rating}
                  </Typography>
                  {/* Star */}
                  <Star rating={weekly?.rating} />
                  <Typography type="p" className="font-normal">
                    (7)
                  </Typography>
                </div>
                <Typography type="h5" className="font-semibold my-4 uppercase">
                  {weekly?.name}
                </Typography>
                <Typography type="p" className="leading-4">
                  {weekly.desc}
                </Typography>
                <Typography type="p" className="text-secondary mt-2">
                  {weekly.category}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
