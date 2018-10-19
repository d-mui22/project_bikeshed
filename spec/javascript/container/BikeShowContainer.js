import BikeShowContainer from '../../../app/javascript/react/containers/BikeShowContainer'
import BikeShow from '../../../app/javascript/react/components/BikeShow'
import ReviewTile from '../../../app/javascript/react/components/ReviewTile'
import TextField from '../../../app/javascript/react/components/TextField'
import fetchMock from 'fetch-mock'

describe('BikeShowContainer', () =>{
  let wrapper;
  let bike;
  // let reviews;
  // let email;
  // let user;
  // let reviewsContainer;
  beforeEach(() =>{
    bikeData = {
      bike: {
        id: 1,
        year: 2003,
        make: "Harley Davidson",
        model: "Electra Glide",
        code: "FLHTC",
        created_at: "2018-10-17T18:48:14.235Z",
        updated_at: "2018-10-17T18:48:14.235Z",
        user_id: 1
    }
  }
    // reviews = [{bike_id: 1, user_id: 4, body:"Itza okay.", rating: 6},
    //  {bike_id: 1, user_id: 4, body:"Itza okay.", rating: 6}]
    //
    // email = "matthew.bowler@gmail.com"
    // user = null


    fetchMock.get('/api/v1/bikes/1', {
        status: 200,
        body: bikeData
      });
    // fetchMock.get('/api/v1/reviews/1', {
    //     status: 200,
    //     body: reviews
    //   });
    // fetchMock.get('/api/v1/users/1', {
    //     status: 200,
    //     body: user
    //   });
    // fetchMock.get('/api/v1/reviews', {
    //     status: 200,
    //     body: email
    //   });

    wrapper = mount(<BikeShowContainer
      params ={ {id: bikeData.id} }
        />
      );
    });

    afterEach(fetchMock.restore)

    it('should render a bike', (done) => {
      setTimeout(() => {
      expect(wrapper.text()).toMatch(bikeData.bike.model);
      done()
    }, 0)
  });
  //   it('should render reviews', (done) =>{
  //     setTimeout(() => {
  //     expect(wrapper.find(reviews)).toHaveLength(2);
  //     done()
  //   }, 0)
  // });
  //   it('should render a form', (done) =>{
  //     setTimeout(() => {
  //     expect(wrapper.find("Written Review of Bike")).toBePresent();
  //     done()
  //   }, 100)
  // });

});
