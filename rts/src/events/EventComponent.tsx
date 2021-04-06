import React from 'react';

export const EventComponent: React.FC = () => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onDragOfDiv = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.clientX, e.clientY);
  };

  return (
    <div className="event-comp">
      <input type="text" onChange={onInputChange} />

      <div className="draggable" draggable onDragStart={onDragOfDiv}>
        Monish
      </div>

      <div
        className="draggable"
        draggable
        onDragStart={(e) => console.log(`${e.clientX}, ${e.clientY}`)}
      >
        Monish
      </div>
    </div>
  );
};
