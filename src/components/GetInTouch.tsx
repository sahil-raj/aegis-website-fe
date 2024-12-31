import Link from 'next/link'
import { Mail, Instagram, Linkedin } from 'lucide-react'

export default function GetInTouchFooter() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          <Link href="mailto:your-email@example.com" className="flex items-center hover:text-blue-600 transition-colors">
            <Mail className="w-6 h-6 mr-2" />
            <span className="sr-only">Email</span>
          </Link>
          <Link href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-600 transition-colors">
            <Instagram className="w-6 h-6 mr-2" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-800 transition-colors">
            <Linkedin className="w-6 h-6 mr-2" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <p className="text-center mt-6 text-sm text-gray-600">
          © {new Date().getFullYear()} AEGIS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

