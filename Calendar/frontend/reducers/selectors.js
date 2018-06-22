export const getEventsByDay = (state, day) => {
  day = (day < 10) ? `0${day}` : `${day}`
  const dayEventsIds = state.entities.events.byDay[day];
  return (dayEventsIds) ? dayEventsIds.map(id => state.entities.events.byId[id]) : [];
}

export const localeToInternational = (dateString) => {
  let date = dateString.split("/")
  return date.slice(2).concat(date.slice(0,2)).join("/");
}
