"use client"

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { DeliverySlip } from "../DeliverySlip/page";
import { Button } from "../ui/button";

const PrintSection: React.FC = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div>
        <DeliverySlip ref={componentRef} />
        <Button variant="destructive" onClick={handlePrint}>
          Print
        </Button>
      </div>
    </div>
  );
};

export default PrintSection;
