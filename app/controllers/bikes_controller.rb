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
      redirect_to bike_path(@bike)
    else
      flash[:notice] = @bike.errors.full_messages.join(', ')
      render new_bike_path
    end
  end

  def new
    @bike = Bike.new
  end

  def edit
    @bike = Bike.find(params[:id])
  end

  def update
    @bike = Bike.find(params[:id])
    @bike.update(bike_params)
    redirect_to bike_path(@bike)
  end

  def destroy
    @bike = Bike.find(params[:id])
    @bike.destroy

    flash[:notice] = "Bike deleted"
    redirect_to bikes_path
  end
  private

  def bike_params
    params.require(:bike).permit(:model, :make, :year, :code, :user_id, :profile_photo).merge(user_id: current_user.id)
  end
end
