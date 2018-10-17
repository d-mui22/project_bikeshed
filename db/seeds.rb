# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
bikes_attributes = [
  {year: 2003, model: "Electra Glide", make: "Harley Davidson", code: "FLHTC", user_id: 1},
  {year: 2005, model: "Soft Tail Deluxe", make: "Harley Davidson", code: "FLSTN", user_id: 2},
  {year: 2007, model: "Road Glide", make: "Harley Davidson", code: "FLTR", user_id: 3},
  {year: 2018, model: "Sportster Super Low", make: "Harley Davidson", code: "XL883XL", user_id: 4}
]

bikes_attributes.each do |bike|
  Bike.create(bike)
end

reviews_attributes = [
  {bike_id: 1, user_id: 4, body:"Itza okay.", rating: 6},
  {bike_id: 2, user_id: 3, body:"Itza great.", rating: 7},
  {bike_id: 3, user_id: 2, body:"Itza meh.", rating: 3},
  {bike_id: 2, user_id: 1, body:"Itza great.", rating: 8}
]

reviews_attributes.each do |review|
  Review.create(review)
end
