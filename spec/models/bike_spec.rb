require 'spec_helper'
require_relative '../../app/models/bike'

describe Bike do
  it {should have_valid(:make).when("Harley Davidson") }
  it {should_not have_valid(:make).when(nil, "") }

  it {should have_valid(:model).when("Electra Glide") }
  it {should_not have_valid(:model).when(nil, "") }

  it {should have_valid(:year).when(2003) }
  it {should_not have_valid(:year).when(nil, "")}
end
