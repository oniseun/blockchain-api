import { expect } from 'chai';
import { shallow, render} from 'enzyme';
import TransactionList from './TransactionList';
  describe('<TransactionList />', () => {

    const component =<TransactionList hash={"xxx"} size={122} fee={100} relayed_by={"0.0.0.0"} time={123456654} /> 
    it('Button', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('tr')).to.have.lengthOf(1);
    });

    it('renders tr, td', () => {
      const wrapper = render(component);
      expect(wrapper.find('td')).to.have.lengthOf(5);
    });
   
  });