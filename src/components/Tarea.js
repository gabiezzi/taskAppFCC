import React from "react";
import "../stylesheet/Tarea.css";
import { AiOutlineDelete } from "react-icons/ai";

export const Tarea = ({ texto }) => {
  return (
    <div className="tarea-contenedor">
      <div className="tarea-texto">
        {texto}
      </div>
      <div className="tarea-icono">
        < AiOutlineDelete />
      </div>
    </div>
  );
};
