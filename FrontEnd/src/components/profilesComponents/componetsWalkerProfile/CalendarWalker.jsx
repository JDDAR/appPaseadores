import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Plugin para vista mensual

const CalendarWalker = () => {
  const calendarRef = useRef(null); // Referencia para acceder al calendario
  // Función para cambiar la vista del calendario
  const handleMonthView = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView("dayGridMonth"); // Cambiar a vista de mes
  };

  const handleWeekView = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView("dayGridWeek"); // Cambiar a vista de semana
  };

  const handleNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next(); // Avanzar al siguiente mes
  };

  const handlePrev = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev(); // Retroceder al mes anterior
  };

  return (
    <div>
      {/* Botones de control fuera del calendario */}
      <div>
        <button onClick={handlePrev}>Mes Anterior</button>
        <button onClick={handleNext}>Mes Siguiente</button>
        <button onClick={handleMonthView}>Vista de Mes</button>
        <button onClick={handleWeekView}>Vista de Semana</button>
      </div>

      {/* Calendario FullCalendar */}
      <FullCalendar
        ref={calendarRef} // Asignar referencia al calendario
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
};

export default CalendarWalker;
