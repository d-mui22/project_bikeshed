class Api::V1::BikesController < ApiController
  def show
    render json: {bike: Bike.find(params[:id]) }
  end

end
