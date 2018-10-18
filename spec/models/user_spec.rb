require 'rails_helper'
require_relative '../../app/models/user'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    expect(User.new(email: "wow@wow.com", password: "asdfasdf", encrypted_password: "wowowowoowow")).to be_valid
  end
  it "is not valid without an email" do
    user = User.new(email: nil)
    expect(user).to_not be_valid
  end
  it "is not valid without a encrypted password" do
    user = User.new(encrypted_password: nil)
    expect(user).to_not be_valid
  end
  it "is not valid without a password" do
    user = User.new(password: nil)
    expect(user).to_not be_valid
  end
end
