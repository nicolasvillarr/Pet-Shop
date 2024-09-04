import { Route, Link, Router } from 'wouter';
import Home from '../pages/Home';
import Products from '../pages/Products';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

function App() {
  return (
    <>
      <header>
        <h1>My Pet Store</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>
      
      <Router>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Router>

      <footer>
        <p>&copy; 2024 My Pet Store. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
