import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Trending } from './pages/Trending/Trending';
import { Layout } from './components/Layout/Layout';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} />
        </Route>
      </Routes>
    </Router>
  );
};
