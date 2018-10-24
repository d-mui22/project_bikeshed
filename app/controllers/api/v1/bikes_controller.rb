class Api::V1::BikesController < ApiController
  def show
    render json: Bike.find(params[:id])
  end
end
