"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/utm";

/** Mounted once in the root layout to persist UTM params across navigation. */
export function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);

  return null;
}
