import { expect } from 'chai';
import { shallow, render, mount} from 'enzyme';
import PaginationComponent from './PaginationComponent';
  describe('<PaginationComponent />', () => {

    const component =<PaginationComponent header={<tr><th></th></tr>} items={Array(20).map((item) =><div key={Math.random()}></div>)} activePage={1} perPage={5} /> 
    it('renders Table, Pagination', () => {
      const wrapper = mount(component);
      expect(wrapper.find('table')).to.have.lengthOf(1);
      expect(wrapper.find('.pagination')).to.have.lengthOf(1);
    });

    it('renders thead, tbody, br', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('thead')).to.have.lengthOf(1);
      expect(wrapper.find('tbody')).to.have.lengthOf(1);
      expect(wrapper.find('br')).to.have.lengthOf(1);
    });
   
  });