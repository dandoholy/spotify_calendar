class Api::EventsController < ApplicationController

  def create
    @event = current_user.events.new(event_params)
    if @event.save
      render :show
    end
  end

  def update
  end

  def show
  end

  def index
  end

  def destroy
  end

  private

  def event_params
    params.require(:event).permit(:description, :start_time, :end_time)
  end

end
