class Api::V1::ReviewsController < ApiController
  def show
      @bike = Bike.find(params['id'])
      @allreviews = @bike.reviews

    render json: {reviews: @allreviews  }
  end

end
