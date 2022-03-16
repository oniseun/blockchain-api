
import { expect } from 'chai';
import { render, shallow} from 'enzyme';
import BlocksPage from './BlocksPage'
  describe('<BlocksPage />', () => {

    const component =<BlocksPage blocks={[{hash: "xyz"}, { hash:"abc"}]} getBlockDetail={()=>{ }}/> 

    it('renders  th, tr', () => {
      const wrapper = render(component);
      expect(wrapper.find('th')).to.have.lengthOf(5);
      expect(wrapper.find('tr')).to.have.lengthOf(3);
    });

    it('renders PaginationComponent, BlockDetailModal', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('PaginationComponent')).to.have.lengthOf(1);
      expect(wrapper.find('BlockDetailModal')).to.have.lengthOf(1);
    });
   
  });