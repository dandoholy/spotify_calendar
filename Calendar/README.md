# Spotify Calendar README

This app was created for the coding challenge given by NYC Tech Talent
Pipeline for the Spotify Technology Fellowship program.  It is a simple
CRUD app for "events" that are placed on a calendar.

* https://nyctp-spotify-calendar.herokuapp.com/#/

## Technologies
* Ruby on Rails
* React.js
* Redux
* HTML/CSS/SCSS

## Challenges
* DateTime objects
One of the significant challenges that I faced on this project was parsing
DateTime and maintaining a string representation that could be parsed by
both the frontend and backend into equivalent DateTime objects.
An aspect that caused particular trouble was when I returned to the project
after a few hours and found that my DateTime string was oddly off by a full
day despite not having worked on the project.  This led to events appearing
on a day different from that highlighted.  It turned out that, as it was
past 20:00 EST, creating a new Date object with Date.now() returned a UTC
for the next day.

* Lifting state and dealing with deprecated React lifecycles
The way I learned to re-fetch data on a prop change was to compare props
to nextProps provided by componentWillReceiveProps.  However, in the latest
version this lifecycle method has been deprecated.  Luckily, componentDidUpdate
provided a simple solution.

The form to create Events was rendered at the top level by the Calendar
component.  However, the trigger to close the form was submission by the
form itself, which then had to update the state of the Calendar.
There were two main options to handle this:
  i. Use a Redux slice of state to deal with UI (as I had done on a prior project)
  ii. Lift state up to the Calendar component and pass down to child components
  as a prop a function bound to the Calendar that would update its state.
In the interest of trying something new as well as trying to learn more
intricate uses of React, I opted for option ii.

* Maintaining consistent State
Another issue I faced with state was with events on a date before the 10th.
Here I found that my new Events weren't being properly rendered upon submission
despite the Redux logger stating that I had successfully created and stored
the event in my frontend state.  Events were being stored under a key of
both their primary ID and the day on which they were associated with (ignoring
month and year).  A selector was then used to getEventsByDay.  However,
months were stored under the day as parsed from the DateTime object, namely
events on the first of the month were stored under a key of "01".  Because
events were fetched by each day component, the days were fetching using the
key "1" instead.  A few lines in the selector remedied this bug.
