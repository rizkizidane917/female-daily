import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isShow, setIsShow] = useState(false);
  const toggleReadMore = () => {
    setIsShow(!isShow);
  };
  return (
    <span className="text-primary">
      {!isShow ? `${text.slice(0, 110)}...` : text}
      {!isShow && (
        <span onClick={toggleReadMore} className="cursor-pointer pl-1">
          Read More
        </span>
      )}
    </span>
  );
};

export default ReadMore;
