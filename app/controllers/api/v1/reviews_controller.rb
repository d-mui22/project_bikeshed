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
    data = JSON.parse(request.body.read)
    review = Review.new(body: data["body"], rating: data["rating"], user_id: data["user_id"], email: data["email"], bike_id: data["bike_id"])
    if review.save
      render json: review, adapter: :json
    else
      render json: review.errors.full_messages.join(', ')
    end
  end
end
