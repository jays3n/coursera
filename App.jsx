const [showProducts, setShowProducts] = useState(false);

return (
  <>
    {!showProducts ? (
      <div>
        <h1>Welcome to Paradise Nursery</h1>

        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      </div>
    ) : (
      <ProductList />
    )}
  </>
);
