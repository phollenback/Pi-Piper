"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Restaurant Management System
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 