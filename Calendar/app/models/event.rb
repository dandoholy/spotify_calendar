class Event < ApplicationRecord

  validates :user_id, :start_time, :end_time, presence: true

  belongs_to :user

end
