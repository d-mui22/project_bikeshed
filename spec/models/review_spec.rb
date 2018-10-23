require 'rails_helper'
require_relative '../../app/models/review'

describe Review do
  it {should have_valid(:bike_id).when(1)}
  it {should_not have_valid(:bike_id).when(nil, "")}

  it {should have_valid(:user_id).when(2)}
  it {should_not have_valid(:user_id).when(nil, "")}

  it {should have_valid(:rating).when(3)}
  it {should_not have_valid(:rating).when(nil, "")}
end
