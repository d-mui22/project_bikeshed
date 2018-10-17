require 'rails_helper'

RSpec.describe Api::V1::BikesController, type: :controller do
  describe "GET#show" do
    let!(:roadking) { Bike.create(make: 'Harley Davidson', model: 'Road King', year: 2006)}

    before(:each) do
      get :show, params: { id: roadking.id }
    end

    it "returns a successfull response with json" do
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns specific bike from database" do
      returned_json = JSON.parse(response.body)

      expect(returned_json["bike"]["id"]).to eq roadking.id
    end
  end
end
