json.extract! event, :id, :user_id, :description, :start_time, :end_time

start_time = event.start_time.to_s(:db).split
end_time = event.end_time.to_s(:db).split

json.days do
  json.start_day start_time[0].split("-")[-1]
  json.end_day end_time[0].split("-")[-1]
end

json.times do
  json.start_time start_time[1]
  json.end_time end_time[1]
end
