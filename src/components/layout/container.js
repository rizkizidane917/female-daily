import React from "react";

export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5 py-4">
      <div className="px-12">{children}</div>
    </div>
  );
}
