const Footer = ({ year = "2024" }: { year?: string }) => {
  return (
    <footer className="bg-orange-600 text-white mt-8">
      <div className="container mx-auto flex justify-between items-center p-4">
        <p>{year} Ordering App. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/about" className="hover:text-orange-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-200">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-orange-200">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
