
import { expect } from 'chai' ;
import { shallow, render} from 'enzyme';
import App from './App'
  describe('<App />', () => {

    const component =<App /> 

    it('renders Header, Container', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('Header')).to.have.lengthOf(1);
      expect(wrapper.find('Container')).to.have.lengthOf(1);
    });

   
  });