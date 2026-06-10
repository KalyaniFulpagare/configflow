"use client";

import { useState } from "react";

export default function useHistory<T>(
  initialState: T
) {

  const [history, setHistory] =
    useState<T[]>([
      initialState,
    ]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const state =
    history[currentIndex];

  const set = (
    newState: T
  ) => {

    const updatedHistory =
      history.slice(
        0,
        currentIndex + 1
      );

    updatedHistory.push(
      newState
    );

    setHistory(
      updatedHistory
    );

    setCurrentIndex(
      updatedHistory.length - 1
    );
  };

  const undo = () => {

    if (currentIndex > 0) {

      setCurrentIndex(
        currentIndex - 1
      );
    }
  };

  const redo = () => {

    if (
      currentIndex <
      history.length - 1
    ) {

      setCurrentIndex(
        currentIndex + 1
      );
    }
  };

  return {

    state,

    set,

    undo,

    redo,

    canUndo:
      currentIndex > 0,

    canRedo:
      currentIndex <
      history.length - 1,
  };
}