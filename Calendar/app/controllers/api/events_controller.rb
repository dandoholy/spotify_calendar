class Api::EventsController < ApplicationController

  def create
    @event = current_user.events.new(event_params)
    if @event.save
      render :show
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render :show
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  def index
    date = event_params[:date]
    starter = DateTime.parse(date)
    ender = starter.end_of_month
    # debugger
    @events = Event.where(start_time: starter..ender).or(Event.where(end_time: starter..ender))
  end

  def destroy
    @event = Event.find(params[:id])
    if @event
      @event.destroy
      render :show
    end
  end

  private

  def event_params
    params.require(:event).permit(:description, :start_time, :end_time, :date)
  end

end
