"use client";

import { useEffect } from "react";

interface Props {

  onUndo: () => void;

  onRedo: () => void;

  onSave: () => void;
}

export default function useKeyboardShortcuts({
  onUndo,
  onRedo,
  onSave,
}: Props) {

  useEffect(() => {

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {

      const isCtrl =
        event.ctrlKey ||
        event.metaKey;

      if (
        isCtrl &&
        event.key === "z"
      ) {

        event.preventDefault();

        onUndo();
      }

      if (
        isCtrl &&
        event.key === "y"
      ) {

        event.preventDefault();

        onRedo();
      }

      if (
        isCtrl &&
        event.key === "s"
      ) {

        event.preventDefault();

        onSave();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, [
    onUndo,
    onRedo,
    onSave,
  ]);
}