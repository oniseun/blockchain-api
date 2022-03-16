import { expect } from 'chai';
import { shallow, render} from 'enzyme';
import BlockList from './BlockList';
  describe('<BlockList />', () => {

    const component =<BlockList hash={"wergergff"} height={1233} time={123455} block_index={12343} onClickHandler={() => {}} /> 
    it('renders Button', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('Button')).to.have.lengthOf(1);
      expect(wrapper.find('tr')).to.have.lengthOf(1);
    });

    it('renders tr, td', () => {
      const wrapper = render(component);
      expect(wrapper.find('td')).to.have.lengthOf(5);
    });
   
  });