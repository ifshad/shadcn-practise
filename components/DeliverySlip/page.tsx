import React from "react";

export const DeliverySlip = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}>My cool content here!</div>;
});

DeliverySlip.displayName = "DeliverySlip";
