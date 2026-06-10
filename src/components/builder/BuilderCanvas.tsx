"use client";

import {
  DndContext,
  closestCenter,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";

import { CSS } from "@dnd-kit/utilities";

import { AppConfig } from "@/types/config";

interface Props {
  config: AppConfig;

  onSelect: (component: any) => void;

  onDelete: (id: string) => void;

  onReorder: (
    activeId: string,
    overId: string
  ) => void;

  selectedId: string;
}

function SortableItem({
  component,
  onSelect,
  onDelete,
  selectedId,
}: any) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: component.id,
  });

  const { setNodeRef: setDropRef } =
    useDroppable({
      id: component.id,
    });

  const style = {
    transform: CSS.Translate.toString(
      transform
    ),
  };

  return (
    <div
      ref={(node) => {

        setNodeRef(node);

        setDropRef(node);
      }}

      style={style}

      className={`rounded-xl border transition mb-2 ${
        selectedId ===
        component.id
          ? "border-white bg-zinc-800"
          : "border-zinc-800 bg-zinc-900"
      }`}
    >

      <div className="flex items-center justify-between p-3">

        <button
          onClick={() =>
            onSelect(component)
          }

          className="text-left flex-1"
        >

          <p className="font-medium">
            {component.type}
          </p>

          <p className="text-xs text-zinc-400">
            ID: {component.id}
          </p>

        </button>

        <div className="flex items-center gap-2">

          <button
            {...listeners}

            {...attributes}

            className="text-zinc-400 cursor-grab"
          >

            ☰

          </button>

          <button
            onClick={() =>
              onDelete(component.id)
            }

            className="text-red-400 hover:text-red-300"
          >

            ✕

          </button>

        </div>

      </div>

    </div>
  );
}

export default function BuilderCanvas({
  config,
  onSelect,
  onDelete,
  onReorder,
  selectedId,
}: Props) {

  return (
    <div className="border border-zinc-800 rounded-2xl p-4 mb-6">

      <h2 className="text-xl font-bold mb-4">
        Live Component Tree
      </h2>

      <DndContext
        collisionDetection={
          closestCenter
        }

        onDragEnd={(event) => {

          const { active, over } =
            event;

          if (
            over &&
            active.id !== over.id
          ) {

            onReorder(
              String(active.id),
              String(over.id)
            );
          }
        }}
      >

        {config.components.map(
          (component: any) => (

            <SortableItem
              key={component.id}

              component={component}

              onSelect={onSelect}

              onDelete={onDelete}

              selectedId={selectedId}
            />
          )
        )}

      </DndContext>

    </div>
  );
}