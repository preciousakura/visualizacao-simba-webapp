import { DataProvider } from './hooks/useData';
import { FilterContext, FilterProvider } from './hooks/useFilter';
import { Home } from './pages';

function App() {
  return (
    <FilterProvider>
      <DataProvider>
        <Home />
      </DataProvider>
    </FilterProvider>
  );
}

export default App;
