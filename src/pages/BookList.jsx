import { Link } from 'react-router-dom';

export function BookList() {
  return (
    <>
      <h1>Book List</h1>
      <li>
        <Link to="/books/1">Book 1</Link>
      </li>
      <li>
        <Link to="/books/2">Book 2</Link>
      </li>
    </>
  );
}
