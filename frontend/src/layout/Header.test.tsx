import { expect } from 'chai';
import { shallow, render} from 'enzyme';
import Header from './Header';
  describe('<Header />', () => {

    const component =<Header  /> 
    it('img, Container, Nav', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('img')).to.have.lengthOf(1);
      expect(wrapper.find('Container')).to.have.lengthOf(2);
      expect(wrapper.find('Nav')).to.have.lengthOf(1);
    });

    it('renders .navbar-brand, .navbar-collapse', () => {
      const wrapper = render(component);
      expect(wrapper.find('.navbar-brand')).to.have.lengthOf(1);
      expect(wrapper.find('.navbar-collapse')).to.have.lengthOf(1);
      expect(wrapper.find('img')).to.have.lengthOf(1);
    });
   
  });