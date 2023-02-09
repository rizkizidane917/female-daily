import Button from "@/components/atoms/Button/button";
import React from "react";

export default function testing() {
  return (
    <div className="mx-10 my-10">
      <Button variant="primary" size="normal">
        {" "}
        See My Matches
      </Button>
      <br />
      <br />
      <Button variant="primary" size="medium">
        {" "}
        See My Matches
      </Button>

      <br />
      <br />
      <Button variant="primary" size="small">
        {" "}
        See My Matches
      </Button>
      <br />
      <br />
      <Button variant="primary" size="medium" disabled={true}>
        {" "}
        See My Matches
      </Button>
    </div>
  );
}
