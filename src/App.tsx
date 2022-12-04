import { Footer } from './components/Footer';
import { DataProvider } from './hooks/useData';
import { FilterProvider } from './hooks/useFilter';
import { Home } from './pages';

function App() {
  return (
    <FilterProvider>
      <DataProvider>
        <Home />
        <Footer />
      </DataProvider>
    </FilterProvider>
  );
}

export default App;
