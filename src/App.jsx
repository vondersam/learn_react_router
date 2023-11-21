import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { BooksRoutes } from './pages/BooksRoutes';
import { BookLayout } from './pages/BookLayout';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <>
        <Routes>
          <Route element={<BookLayout />} />
          <Route path="/" element={<Home />} />
          <Route path="/books/*" element={<BooksRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </>
  );
}

export default App;
