"use client";

import { useEffect } from "react";

export default function useAutoSave(
  key: string,
  value: unknown
) {

  useEffect(() => {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  }, [key, value]);
}