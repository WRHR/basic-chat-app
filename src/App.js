import './App.css';

import Dashboard  from './components/Dashboard'
import Store from './components/Store'

function App() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
