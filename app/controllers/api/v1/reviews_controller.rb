class Api::V1::ReviewsController < ApiController
  def show
      @bike = Bike.find(params['id'])
      @reviews = @bike.reviews

    render json: @reviews
  end

  def index
    @reviews = Review.all
    render json: @reviews
  end
  
  def create
    review = Review.new(body: params[:body], rating: params[:rating], user_id: params[:user_id], bike_id: params[:bike_id])
    if review.save
      render json: review
    else
      render json: review.errors.full_messages, status: :unprocessable_entity
    end
  end
end
