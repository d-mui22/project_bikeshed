require 'rails_helper'
require 'launchy'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:a_user) {User.create(email: "wow@wow.com", password: "something")}
  let!(:another_user) {User.create(email:"jake@gmail.com", password: "password")}
  let!(:first_bike) { Bike.create(make: "Yamasaki", model: "Something", year: "2020", user: a_user)}
  let!(:second_bike) { Bike.create(make: "Suzuki", model: "Wheeeee", year: "2000", user: another_user)}
  let!(:a_review) {Review.create(rating: "3", user: a_user, bike: first_bike, email: "wow@gmail.com")}
  let!(:another_review) {Review.create(rating: "4", user: another_user, bike: first_bike, email: "wow@yahoo.com")}

  describe "GET#show" do
    it "returns a review" do
      get :show, params: {id: first_bike.id}
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["reviews"][0]["rating"]).to eq 3
      expect(returned_json["reviews"][0]["user_email"]).to eq "wow@wow.com"
    end
  end

  describe "GET#index" do
    it "returns lots of reviews" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["reviews"][0]["rating"]).to eq 3
      expect(returned_json["reviews"][1]["rating"]).to eq 4
      expect(returned_json["reviews"][0]["user_email"]).to eq "wow@wow.com"
      expect(returned_json["reviews"][1]["user_email"]).to eq "jake@gmail.com"
    end
  end

  describe "POST#create" do
    it "creates a new review" do
      post_json = { rating: "3", user_id: a_user.id, bike_id: first_bike.id, email: "wow@gmail.com" }
      prev_count = Review.count
      post(:create, params: post_json)
      expect(Review.count).to eq(prev_count + 1)
    end

    it "returns the json of the new review" do
      post_json = { rating: "3", user_id: a_user.id, bike_id: first_bike.id, email: "wow@gmail.com" }
      post(:create, params: post_json)
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["review"]["rating"]).to eq 3
    end
  end
  describe "DELETE" do

    before(:each) do
      get :show, params: {id: first_bike.id}
      returned_json = JSON.parse(response.body)
      delete :destroy, params: {id: returned_json["reviews"][0]["id"]}
      get :show, params: {id: first_bike.id}
      @deleted_returned_json = JSON.parse(response.body)
    end

    it "deletes an existing review" do
      expect(@deleted_returned_json["reviews"].length).to eq 1
    end

    it "gets the right status" do
      expect(response.status).to eq 200
    end
  end
end
