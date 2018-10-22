require 'rails_helper'

RSpec.describe Api::V1::BikesController, type: :controller do
  let!(:a_user) {User.create(email: "wow@wow.com", encrypted_password: "something", id:1)}
  let!(:first_bike) { Bike.create(make: "Yamasaki", model: "Something", year: "2020", user: a_user)}
  let!(:second_bike) { Bike.create(make: "Ligma", model: "Lofi", year: "2030", user: a_user)}
  let!(:third_bike) { Bike.create(make: "Suzuki", model: "Wheeeee", year: "2000", user: a_user)}

  describe "GET#show" do
    it "should return the bike" do
      get :show, params: {id: first_bike.id}
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["make"]).to eq "Yamasaki"
      expect(returned_json["model"]).to eq "Something"
      expect(returned_json["year"]).to eq 2020
    end
  end
end
