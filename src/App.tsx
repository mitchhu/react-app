import './App.css';
import { Button } from 'antd-mobile';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <div>
        <Test />
        <Button color='primary'>Button</Button>
      </div>
    </div>
  );
}

export default App;
