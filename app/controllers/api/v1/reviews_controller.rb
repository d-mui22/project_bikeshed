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
    review = Review.create(body: data["body"], rating: data["rating"], user_id: data["user_id"], email: data["email"], bike_id: data["bike_id"])
    render json: review, adapter: :json
  end
end
