# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Event.destroy_all

a = User.create!(first_name: "Guest", last_name: "Demo", email: "guest@demo.com")

def gen_start_end_times
  month = (rand * 5 + 5).to_i
  month = (month < 10) ? "0#{month}" : "#{month}"
  day = (rand * 28 + 1).to_i
  day = (day < 10) ? "0#{day}" : "#{day}"
  hour = (rand * 23).to_i
  hour = (hour < 10) ? "0#{hour}" : "#{hour}"
  min = (rand * 59).to_i
  min = (min < 10) ? "0#{min}" : "#{min}"

  start_time = "2018-#{month}-#{day} #{hour}:#{min}"
  end_time = "2018-#{month}-#{day} #{hour.to_i + 1}:#{min.to_i + 1}"
  [start_time, end_time]
end

80.times do
  s, e = gen_start_end_times
  Event.create!(user_id: a.id, start_time: s, end_time: e, description: Faker::Pokemon.move)
end
