class Api::V1::BikesController < ApiController
  def show
    binding.pry
    render json: {bike: Bike.find(params[:id]) }
  end

end
