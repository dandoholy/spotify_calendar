byDay = Hash.new {|hash, key| hash[key] = Set.new}

@events.each do |event|
  json.byId do
    json.set! event.id do
      json.partial! '/api/events/event', event: event
    end
  end

  start_day = event.start_time.to_s(:db).split[0].split("-")[-1]
  end_day = event.end_time.to_s(:db).split[0].split("-")[-1]
  byDay[start_day].add(event.id)
  byDay[end_day].add(event.id)
end

json.byDay byDay
