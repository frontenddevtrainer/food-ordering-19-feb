const Header = () => {
  return (
    <header className="bg-orange-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Ordering App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-orange-200">
                Home
              </a>
            </li>
            <li>
              <a href="/restaurants" className="hover:text-orange-200">
                Restaurants
              </a>
            </li>
            <li>
              <a href="/orders" className="hover:text-orange-200">
                Orders
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-orange-200">
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;