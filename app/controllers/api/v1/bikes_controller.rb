class Api::V1::BikesController < ApiController
  def show
    render json: {bike: Bike.find(params[:id]) }
  end
  #
  # def create
  #   data = JSON.parse(request.body.read)
  #   new_bike = Bike.create(model: data["model"], make: data["make"], year: data["year"])
  #   render json: new_bike, adapater: :json
  # end

end
