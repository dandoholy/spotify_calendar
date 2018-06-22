class Event < ApplicationRecord

  validates :user_id, :start_time, :end_time, :description, presence: true
  validate :check_start_end_times

  def check_start_end_times
    return if start_time < end_time
    errors[:time] << "End time must be after Start time"
  end

  belongs_to :user

end
