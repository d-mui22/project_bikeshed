import BikeShowContainer from '../../../app/javascript/react/containers/BikeShowContainer'
// import Bike from '../../../app/models/bike.rb'
import {mount} from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import fetchMock from 'fetch-mock'

describe('BikeShowContainer', () =>{
  let wrapper;

  beforeEach(() =>{
    let bike = {
      year: 2003,
      model: "Electra Glide",
      make: "Harley Davidson",
      code: "FLHTC",
      user_id: 1
    }
    let reviews = [  {bike_id: 1, user_id: 4, body:"Itza okay.", rating: 6},
      {bike_id: 2, user_id: 3, body:"Itza great.", rating: 7},
]
    let email = "matthew.bowler@gmail.com"
    let user = nil


    fetchMock.get('/api/v1/bikes/1', {
        status: 200,
        body: bike
      });
    fetchMock.get('/api/v1/reviews/1', {
        status: 200,
        body: reviews
      });
    fetchMock.get('/api/v1/users/1', {
        status: 200,
        body: user
      });
    fetchMock.get('/api/v1/reviews', {
        status: 200,
        body: email
      });

        wrapper = mount(<BikeShowContainer
          params = {
            {id: 1}
          }
          />);
      });
    afterEach(fetchMock.restore)

    it('should render a bike', () =>{
      setTimeout(() => {
      expect(wrapper.find(bike)).toBePresent();
    })
  });
    it('should render reviews', () =>{
      setTimeout(() => {
      expect(wrapper.find(reviews)).toBePresent();
    })
  });
  //   it('should render a form', () =>{
  //     setTimeout(() => {
  //     expect(wrapper.find("Written Review of Bike")).toBePresent();
  //   })
  // });

  //     it('should render an h6 tag', () => {
  //       setTimeout(() => {
  //   expect(wrapper.find('')).toBePresent();
  // });
// });
});
