import Filters from './Components/Filter';
import ProductList from './Components/ProductList';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <Filters />
      </div>
      <div className="col-md-9">
        <ProductList />
      </div>
    </div>
  </div>
)

export default App
