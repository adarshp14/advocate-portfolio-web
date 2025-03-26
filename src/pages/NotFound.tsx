
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="glass-card max-w-md w-full text-center py-16">
        <h1 className="text-5xl font-bold text-lawyer-navy mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">The page you are looking for could not be found.</p>
        <Link to="/" className="btn-primary inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
