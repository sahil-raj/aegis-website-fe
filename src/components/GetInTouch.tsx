import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";

export default function GetInTouchFooter() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          <Link
            href="mailto:aegis-cscyber@dayanandasagar.edu"
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <Mail className="w-6 h-6 mr-2" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://www.instagram.com/cscy_dsce/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-pink-600 transition-colors"
          >
            <Instagram className="w-6 h-6 mr-2" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/dept-of-computer-science-and-cyber-security-b09233319/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-800 transition-colors"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <p className="text-center mt-6 text-sm text-gray-600">
          © {new Date().getFullYear()} AEGIS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
