json.extract! event, :id, :user_id, :description, :start_time, :end_time

start_time = event.start_time.to_s(:short).split
end_time = event.end_time.to_s(:short).split

json.days do
  json.start_day start_time[0]
  json.end_day end_time[0]
end

json.times do
  json.start_time start_time[2]
  json.end_time end_time[2]
end
