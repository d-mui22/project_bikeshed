import BikeShowContainer from '../../../app/javascript/react/containers/BikeShowContainer'
import fetchMock from 'fetch-mock'

describe('BikeShowContainer', () =>{
  let wrapper;

    it('should render an h3 tag', () => {
      expect(wrapper.find('h3')).toBePresent();

    })
}); 
