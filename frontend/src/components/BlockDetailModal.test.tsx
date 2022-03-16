import { expect } from 'chai';
import { shallow, mount} from 'enzyme';
import BlockDetailModal from './BlockDetailModal';
  describe('<BlockDetailModal />', () => {
    const blockDetail = {hash: "erererreerf" , size: 200, block_index:11222, prev_block:"derreerr"}
    const component =<BlockDetailModal hash={"erererreerf"} show={true} blockDetail={blockDetail}   handleClose={()=>{}} /> 
    it('mounts to get props', () => {
      const wrapper = mount(component);
      expect(wrapper.props().show).to.equal(true);
      expect(Object.keys(wrapper.props().blockDetail)).to.have.lengthOf(4)
      expect(wrapper.props().blockDetail).to.have.property("hash")
      expect(wrapper.props().blockDetail).to.have.property("size")
      expect(wrapper.props().blockDetail).to.have.property("block_index")
    });

    it('renders Modal, Table, Tabs, Tab', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('Modal')).to.have.lengthOf(1)
      expect(wrapper.find('Tabs')).to.have.lengthOf(1)
      expect(wrapper.find('Tab')).to.have.lengthOf(2)
    });
  });