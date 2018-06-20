export const fetchEvent = event_id => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/events/${event_id}`
    })
  );
}

export const fetchAllEvents = () => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/events/`
    })
  );
}

export const createEvent = event => {
  return (
    $.ajax({
      method: 'post',
      url: '/api/events',
      data: { event }
    })
  )
}

export const updateEvent = event => {
  return (
    $.ajax({
      method: 'patch',
      url: `/api/events/${event.id}`,
      data: { event }
    })
  )
}

export const deleteEvent = event_id => {
  return (
    $.ajax({
      method: 'delete',
      url: `/api/events/${event_id}`
    })
  )
}
