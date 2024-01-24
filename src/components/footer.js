// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p className="text-center">
          &copy; 2023 Company Name | Contact us at: contact@example.com | Follow
          us on{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Twitter
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
