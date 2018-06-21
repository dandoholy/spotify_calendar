export const getEventsByDay = (state, day) => {
  const dayEventsIds = state.entities.events.byDay[day];
  return (dayEventsIds) ? dayEventsIds.map(id => state.entities.events.byId[id]) : [];
}
