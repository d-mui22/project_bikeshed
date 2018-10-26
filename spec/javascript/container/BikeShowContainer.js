import BikeShowContainer from '../../../app/javascript/react/containers/BikeShowContainer'
import BikeShow from '../../../app/javascript/react/components/BikeShow'
import ReviewTile from '../../../app/javascript/react/components/ReviewTile'
import TextField from '../../../app/javascript/react/components/TextField'
import fetchMock from 'fetch-mock'


describe('BikeShowContainer', () =>{
  let wrapper;
  let bikeData;
  let userData;
  let rating;
  let model;
  let make;
  let year;
  let code;
  let email;
  let deleted;

  beforeEach(() =>{
    bikeData = {
      bike: {
       id: 1,
       year: 2003,
       make: "Harley Davidson",
       model: "Electra Glide",
       code: "FLHTC",
       user_id: 1,
       profile_photo: {
           url: null
       },
     created_at: "2018-10-17T18:48:14.235Z",
     reviews: [
         {
             id: 1,
             body: "Itza okay.",
             rating: 6,
             user_email: "someone3@someplace.com",
             created_at: "2018-10-17T18:48:14.282Z",
             user_id: 4
         }
     ],
     user: {
         id: 1,
         email: "kevinmccarthy01@comcast.net",
         created_at: "2018-10-17T18:33:23.105Z",
         updated_at: "2018-10-17T18:33:23.105Z",
         profile_photo: {
             url: null
         }
     }
   }
}

userData = {
  id: 5,
  email: "oiahwhangoufn@gmail.com",
  created_at: "2018-10-19T20:32:35.037Z",
  updated_at: "2018-10-19T20:32:35.037Z",
  profile_photo: {
    url: null
  },
  admin: true
}

  fetchMock.get('/api/v1/bikes/1', {
      status: 200,
      body: bikeData
    });
  fetchMock.get('/api/v1/users', {
      status: 200,
      body: userData
    });

  wrapper = mount(<BikeShowContainer
    params ={ {id: bikeData.bike.id} }
      />
    );
  });

  afterEach(fetchMock.restore)

  it('should render bike model in h2 tags', (done) =>{
    setTimeout(() => {
      model = wrapper.find('.model')
      expect(model.text()).toEqual("Electra Glide")
    done()
    }, 0)
  });
  it('should render bike year in h3 tags', (done) =>{
    setTimeout(() => {
      year = wrapper.find('.year')
      expect(year.text()).toEqual("2003")
    done()
    }, 0)
  });
  it('should render bike code in h3 tags', (done) =>{
    setTimeout(() => {
      code = wrapper.find('.code')
      expect(code.text()).toEqual("FLHTC")
    done()
    }, 0)
  });
  it('should render user email for review in h6 tags', (done) =>{
    setTimeout(() => {
      email = wrapper.find('.email')
      expect(email.text()).toEqual(' someone3    ')
    done()
    }, 0)
  });
  it('should render review rating in p tags', (done) =>{
    setTimeout(() => {
      rating = wrapper.find('.rating')
      expect(rating.text()).toEqual(" Itza okay. - 6 stars")
    done()
    }, 0)
  });
  it('should render delete button', (done) =>{
    setTimeout(() => {
      expect(wrapper.find('.delete_button')).toBePresent()
    done()
    }, 0)
  });
});
