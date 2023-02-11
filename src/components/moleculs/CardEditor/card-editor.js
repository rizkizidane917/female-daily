import Typography from "@/components/atoms/Typography";
import React from "react";
import Star from "@/components/atoms/Star/star";
export default function CardEditor({ list }) {
  return (
    <div className="mt-4">
      <div className="flex items-start gap-2 mx-4 relative top-3">
        <img
          className="w-14 h-14 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
        <div className="flex flex-col px-1">
          <Typography type="h5" className="font-medium capitalize">
            {list?.editor}
          </Typography>
          <Typography
            type="custom"
            className="text-[12px] font-light text-tertiary"
          >
            {list?.role}
          </Typography>
        </div>
      </div>
      <div className="border-2 border-secondary rounded-xl">
        <div className="p-4">
          <img
            src={list?.product?.image}
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col py-4">
            <div className="flex items-center space-x-2">
              <Typography type="h5" className="font-semibold">
                {list?.product?.rating}
              </Typography>
              <Star rating={list?.product?.rating} />
              <Typography type="p" className="font-normal">
                (7)
              </Typography>
            </div>
            <Typography type="h5" className="font-semibold py-1">
              {list?.product?.name}
            </Typography>
            <Typography type="p" className="leading-4">
              {list?.product?.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
