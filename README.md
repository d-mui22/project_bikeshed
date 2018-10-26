# Project Bikeshed

[![Build Status](https://codeship.com/projects/39dbe900-b2cb-0136-ec6c-5ee84f30adbc/status?branch=master)

**"Project Bikeshed"** is a web site built for reviews of Harley Davidson Motorcycles.  Users can log in to read, comment on, and post reviews of their favorite Harley Davidson Motorcycles.  

**Authors**
Kevin McCarthy
Matt Bowler
Jake Movson
David Mui

Heroku Link
TBA

**List of Features**

Our site features an index of available reviews of Harley Davidson Motorcycles. Each review on the index page links to a review page which contains;

  - reviews, manufacturer's specs and photo images

  - comments on the posted reviews

  - a form to allow the user to add comments

From the index page a user can navigate to a form to submit a review. The form will capture;

  - Bike Year, Bike Model Name, and a description(review body)

  - an optional field to enter the manufacturer's Bike Code

Users can edit and delete any reviews they have posted, but not reviews that other users have posted.

We hope to integrate an API so that a user can click a link that will take them to eBay Motors to see a list of available bikes for purchase that match the bike reviewed.

**User Stories**

As a user I want to see an index of available reviews to read.  Each review title should be a link that will take me to a review page containing the reviews, and a photo image.  As a user I should be able to add a review and a rating. The review should consist of a text body and the rating should be a number between 1 and 5.

As an admin I may want to add new bikes to be reviewed.  From the index page I should be able to navigate to a form to submit a review.  The form should consist of a Bike Year, Bike Model Name, and a description(review body) all of which are required.  Additionally I should see an optional field to enter the manufacturer’s Bike Code if I know it.  As an admin I should be able to edit and delete any reviews, users may edit reviews they have posted but not reviews that other users have posted.

Future feature

As a user I should be able to submit a request to an admin to review my bike.  It should require that I submit the year, model name and a picture of the bike.

As a user I should be able to vote on how helpful each reviews was to me.

As a user, if I read a review about a bike I like I should be able to click a link that will take me to eBay Motors to see a list of available bikes for purchase that match the bike reviewed.

As an admin I should be able to add a list of manufacturer’s specs in the form of a pdf file attached to the bike review page.


**Outline of technologies used:**

Devise
React
Postgresql
Rails
