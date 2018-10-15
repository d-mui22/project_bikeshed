# Project Bikeshed

[![Build Status](https://codeship.com/projects/39dbe900-b2cb-0136-ec6c-5ee84f30adbc/status?branch=master)
"Project Bikeshed" is a web site built for reviews of Harley Davidson Motorcycles.  Users can log in to read, comment on, and post reviews of their favorite Harley Davidson Motorcycles.  

Authors
Kevin McCarthy
Matt Bowler
Jake Movson
David Mui

Heroku Link

List of Features

As a user I want to see an index of available reviews to read.  Each review title should be a link that will take me to a review page containing the reviews, background information on the bike in the form of manufacturer's specs and photo images, and comments that have been posted related to each review.  As a user I should be able to add comments to a review.

As a user I may want to add a review of my favorite bike.  From the index page I should be able to navigate to a form to submit a review.  The form should consist of a Bike Year, Bike Model Name, and a description(review body) all of which are required.  Additionally I should see an optional field to enter the manufacturer's Bike Code if I know it.  As a user I should be able to edit and delete any reviews that I have posted, but not reviews that other users have posted.

As a user, if I read a review about a bike I like I should be able to click a link that will take me to eBay Motors to see a list of available bikes for purchase that match the bike reviewed.  As a user I should be able to vote on how helpful each reviews was to me.

Outline of technologies used

Devise
React
Postgresql
Rails
link to eBay Motors API
