import {Component} from "react";
import client from './apolloClient'
import Header from './layout/Header'
import BlocksPage from "./pages/BlocksPage"
import {Spinner, Container} from "react-bootstrap"
import GET_BLOCKS from "./queries/getBlocks"
import AlertDismissible from "./components/AlertDismissible";
import GET_BLOCK_DETAIL from "./queries/getBlockDetail";
const clone = require('lodash/cloneDeep');

type AppProps = {  };

type AppState = { 
  isLoading: boolean;
  blockDetail: any;
  blockList: Array<any>;
  error: boolean;
  errorMsg: string;

};


class App extends Component<AppProps, AppState>{

   initialState: AppState =  {
    isLoading: false,
    blockDetail: {},
    blockList: [],
    error: false,
    errorMsg: ''
  }

  constructor(props: any) {
    super(props);

    this.state = this.initialState
    this.getBlockDetail = this.getBlockDetail.bind(this)
  }


  render() : object{

  const { isLoading,  error, errorMsg, blockList } = this.state
  let loadingIndicator:any = <Spinner  variant="primary" animation="grow" />
  if (!isLoading) {
      loadingIndicator = ''
  }
  
  const showError = <AlertDismissible showAlert={error} message={errorMsg} />
  const mainView = <BlocksPage blocks={blockList} getBlockDetail={this.getBlockDetail} />

  return (
    <div className="App">
      <Header 
      />
      <div  className="d-flex justify-content-center mt-2" >
        {loadingIndicator}
      </div>
      <Container className="mt-5">
        {showError}
        {mainView}
      </Container>
    </div>
  );
  }
  async getBlockDetail(hash: string) {

    if (this.state.blockDetail[hash] !== undefined) {
      return this.state.blockDetail[hash]
    }
    this.setState({ isLoading: true })
    try {
      const response = await client.query({ query: GET_BLOCK_DETAIL, variables: {hash} })
      const block_detail = clone(response.data)
      console.info('block_detail:', block_detail)
      const bDetail =  this.state.blockDetail;
      bDetail[hash] = block_detail.getBlockDetail
      this.setState({ 
        blockDetail : bDetail,
        isLoading:false
      });

      return block_detail.getBlockDetail;

    } catch (e) {
      console.error('fetch error =>' , e)
      this.setState({ isLoading: false, error: true, errorMsg: JSON.stringify(e)})
      throw e
    }
  }

  async fetchData() {

    try {
      const response = await client.query({ query: GET_BLOCKS })
      const block_list = clone(response.data)
      console.error('block_list:', block_list)
      this.setState({ 
        blockList : block_list.getBlocks
      });

    } catch (e) {
      console.error('fetch error =>' , e)
      throw e
    }
  }
  async componentDidMount()  {
    this.setState({ isLoading: true })
    try {
      await this.fetchData()  
      this.setState({ isLoading:false })
    } catch(e) {
      this.setState({ isLoading: false, error: true, errorMsg: JSON.stringify(e)})
    }
  }
}

export default App;
