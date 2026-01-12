import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
            >
              Return to Home
            </Link>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Need help? Contact us at{' '}
                <a 
                  href="tel:0607117838" 
                  className="text-red-600 hover:text-red-800 font-medium underline"
                >
                  06 07 11 78 38
                </a>{' '}
                or{' '}
                <a 
                  href="mailto:contact@nova-ssi.fr" 
                  className="text-red-600 hover:text-red-800 font-medium underline"
                >
                  contact@nova-ssi.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}