class BikesController < ApplicationController
  def index
    @bikes = Bike.all
  end

  def show
    @bike  = Bike.find(params[:id])
  end

  def create
    @bike = Bike.new(bike_params)
    if @bike.save
      flash[:notice] = "Bike added"
    else
      flash[:notice] = @bike.errors.full_messages.join(', ')
    end
  end

  private

  def bike_params
    params.require(:bike).permit(:model, :make, :year)
  end
end
