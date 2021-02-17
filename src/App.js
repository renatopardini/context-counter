import { StateProvider } from './services/StateContext'
import Counter from './components/Counter'
import Mirror from './components/Mirror'

function App() {
  return (
    <StateProvider>
      <Counter/>

      <hr />

      <Mirror/>
    </StateProvider>
  );
}

export default App;
