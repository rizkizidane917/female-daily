import ReadMore from "@/components/atoms/ReadMore/read-more";
import Star from "@/components/atoms/Star/star";
import Typography from "@/components/atoms/Typography";
import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselReviews({ review }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1022 },
      items: 2,
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

  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className=" pl-2  py-6"
      containerClass=" pb-20"
      dotListClass=""
      draggable
      focusOnSelect={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      showDots={true}
      slidesToSlide={2}
      infinite={false}
    >
      {review.map((review, index) => {
        return (
          <Fragment key={index + 1}>
            <div className=" w-[22.5rem]  border-2 rounded-lg border-secondary">
              <div className="p-6">
                <div className="flex items-center gap-4 border-b-2 border-b-secondary">
                  <div className="w-[70px] h-[70px] flex mb-3">
                    <img src={review?.product?.image} alt="review-img" />
                  </div>
                  <div className="flex flex-col">
                    <Typography type="h5" className="text-lg font-semibold">
                      {review?.product?.name}
                    </Typography>
                    <Typography type="h5" className="text-base font-normal">
                      {review?.product?.desc}
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center justify-between">
                    <Star rating={review?.star} />
                    <Typography type="p" className="font-normal text-secondary">
                      2 hours ago
                    </Typography>
                  </div>
                  <Typography type="p">
                    <ReadMore>{review?.comment}</ReadMore>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="w-[22.5rem]  flex justify-center ">
              <div className="flex flex-col relative -mt-5 items-center">
                <img
                  className="w-8 h-8 object-cover rounded-full border-2"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
                <Typography type="h5" className="capitalize">
                  {review?.user}
                </Typography>
                <Typography type="p" className="font-light text-tertiary">
                  {`${review.profile
                    .slice(0, review.profile.length - 1)
                    .join(" ")}, ${review.profile[review.profile.length - 1]}`}
                </Typography>
              </div>
            </div>
          </Fragment>
        );
      })}
    </Carousel>
  );
}

// <div className="grid grid-cols-2 mt-6 gap-12">
//           {doFetchList?.data?.["latest review"]?.map((review, index) => {
//             return (
//               <div className="bg-red-300 border rounded-lg border-secondary">
//                 <div className="p-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-[70px] h-[70px] flex mb-3">
//                       <img src="/img/matches-img.png" alt="review-img" />
//                     </div>
//                     <div className="flex flex-col">
//                       <div className="text-lg font-semibold">Name</div>
//                       <div className="text-base font-medium">Desc</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>