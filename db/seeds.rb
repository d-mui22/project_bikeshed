# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "kevinmccarthy01@comcast.net", password: "123456")
User.create(email: "jakemovson@gmail.com", password: "winston", admin: true)
User.create(email: "typehydro@gmail.com", password: "123456", admin: true)
User.create(email: "matthew.bowler123@gmail.com", password: "123456")

# bikes_attributes = [
#   {year: 2003, model: "Electra Glide", make: "Harley Davidson", code: "FLHTC", user_id: 1},
#   {year: 2005, model: "Soft Tail Deluxe", make: "Harley Davidson", code: "FLSTN", user_id: 2},
#   {year: 2007, model: "Road Glide", make: "Harley Davidson", code: "FLTR", user_id: 3},
#   {year: 2018, model: "Sportster Super Low", make: "Harley Davidson", code: "XL883XL", user_id: 4, profile_photo:}
# ]

# bikes_attributes.each do |bike|
#   Bike.create(bike)
# end

# reviews_attributes = [
#   {bike_id: 1, user_id: 1, body:"Dating back to 1965 the Electra Glide is the first true factory 'cruiser'.", rating: 7, email: "kevinmccarthy01@comcast.net"},
#   {bike_id: 2, user_id: 2, body:"Wide whitewalls. Massive front fork. Long-barreled shotgun pipes. Clean front light bars with bullet signals. Sculpted chrome headlight and nacelle. Tombstone taillight.", rating: 8, email: "jakemovson@gmail.com"},
#   {bike_id: 3, user_id: 3, body:"Make a hardcore touring statement with a gluttonous helping of style. Fixed nose fairing and dual headlights give this Harley a distinctive look all its own", rating: 7, email: "typehydro@gmail.com"},
#   {bike_id: 4, user_id: 4, body:"You’ll feel the confidence that comes from its low seat, well-balanced stance and low center of gravity.", rating: 8, email: "matthew.bowler123@gmail.com"}
# ]

# reviews_attributes.each do |review|
#   Review.create(review)
# end
