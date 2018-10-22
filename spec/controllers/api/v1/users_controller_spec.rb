require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  let!(:a_user) {User.create(email: "wow@wow.com", password: "something")}

  describe "GET#show" do
    it "returns the user" do
      get :show, params: {id: a_user.id}
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["email"]).to eq "wow@wow.com"
    end
  end
end
