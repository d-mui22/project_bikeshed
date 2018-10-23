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
  user: {
    id: 5,
    email: "oiahwhangoufn@gmail.com",
    created_at: "2018-10-19T20:32:35.037Z",
    updated_at: "2018-10-19T20:32:35.037Z",
    profile_photo: {
      url: null
    }
  }
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
      // console.log(wrapper.debug())
      expect(wrapper.containsMatchingElement(<h2>Electra Glide</h2>)).toBeTruthy()
    done()
    }, 0)
  });
  it('should render bike make in h3 tags', (done) =>{
    setTimeout(() => {
      // console.log(wrapper.debug())
      expect(wrapper.containsMatchingElement(<h3>Harley Davidson</h3>)).toBeTruthy()
    done()
    }, 0)
  });
  it('should render bike year in h3 tags', (done) =>{
    setTimeout(() => {
      // console.log(wrapper.debug())
      expect(wrapper.containsMatchingElement(<h3>{2003}</h3>)).toBeTruthy()
    done()
    }, 0)
  });
  it('should render bike code in h3 tags', (done) =>{
    setTimeout(() => {
      // console.log(wrapper.debug())
      expect(wrapper.containsMatchingElement(<h3>FLHTC</h3>)).toBeTruthy()
    done()
    }, 0)
  });
  it('should render user email for review in h6 tags', (done) =>{
    setTimeout(() => {
      // console.log(wrapper.debug())
      expect(wrapper.containsMatchingElement(<h6> someone3@someplace.com</h6>)).toBeTruthy()
    done()
    }, 0)
  });
  it('should render review rating in p tags', (done) =>{
    setTimeout(() => {
      // console.log(wrapper.debug())
      rating = wrapper.find('.rating')
      // console.log(rating.debug())
      expect(rating.text()).toEqual(" Itza okay. - 6 stars")
    done()
    }, 0)
  });

});
