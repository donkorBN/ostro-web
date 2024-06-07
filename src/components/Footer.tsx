import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 h-fit">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src="src/assets/logo1-removebg-preview.png" className="mr-5 h-4 sm:h-9" alt="logo" />
            <p className="max-w-xs mt-4 text-sm font-bold text-gray-600">
              Transforming the future of the tech ecosystem in Africa
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> Facebook </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> Instagram </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> Twitter </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> GitHub </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.49.5.091.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.092.39-1.986 1.03-2.685-.103-.254-.446-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.505.336 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.2 2.392.098 2.646.64.699 1.03 1.593 1.03 2.685 0 3.842-2.339 4.687-4.566 4.937.36.31.678.923.678 1.86 0 1.344-.012 2.427-.012 2.756 0 .268.18.58.688.481A10.013 10.013 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> LinkedIn </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.94 2C5.428 2 4.23 3.199 4.23 4.71c0 1.508 1.199 2.708 2.71 2.708 1.512 0 2.71-1.2 2.71-2.709C9.65 3.199 8.451 2 6.94 2zm1.111 19.598V8.568H5.83v13.03h2.22zm4.703-12.786c-.9 0-1.62.25-2.08.79-.47.54-.71 1.28-.71 2.22v9.807h2.22v-8.934c0-.9.22-1.55.66-1.95.43-.41 1-.61 1.68-.61.68 0 1.19.2 1.56.6.38.4.56.95.56 1.66v9.23h2.22v-10c0-.97-.23-1.72-.69-2.28-.46-.56-1.16-.84-2.1-.84-.92 0-1.66.26-2.13.79-.47.53-.71 1.27-.71 2.2v.99h-.03c-.02-.09-.04-.2-.07-.3-.02-.1-.04-.22-.07-.34s-.04-.23-.07-.34c-.02-.1-.05-.2-.07-.3-.02-.09-.05-.18-.08-.27-.02-.09-.06-.18-.09-.26-.02-.09-.06-.17-.1-.25-.04-.08-.07-.16-.11-.24-.04-.08-.08-.16-.13-.23-.05-.07-.09-.14-.15-.21-.05-.06-.11-.12-.16-.18-.05-.06-.11-.11-.18-.17-.07-.05-.13-.1-.2-.15-.07-.04-.15-.08-.23-.12-.08-.04-.16-.08-.25-.11-.09-.03-.17-.06-.27-.08-.09-.02-.18-.05-.27-.06-.1-.02-.2-.03-.3-.04-.11-.01-.21-.02-.32-.02h-.31zM18 19.6v-8.934c0-.9.22-1.55.66-1.95.44-.41 1-.61 1.68-.61.68 0 1.19.2 1.56.6.37.4.56.95.56 1.66v9.23h2.22v-10c0-.97-.23-1.72-.69-2.28-.46-.56-1.16-.84-2.1-.84-.92 0-1.66.26-2.13.79-.47.53-.71 1.27-.71 2.2v.99h-.03c-.02-.09-.04-.2-.07-.3-.02-.1-.04-.22-.07-.34s-.04-.23-.07-.34c-.02-.1-.05-.2-.07-.3-.02-.09-.05-.18-.08-.27-.02-.09-.06-.18-.09-.26-.02-.09-.06-.17-.1-.25-.04-.08-.07-.16-.11-.24-.04-.08-.08-.16-.13-.23-.05-.07-.09-.14-.15-.21-.05-.06-.11-.12-.16-.18-.05-.06-.11-.11-.18-.17-.07-.05-.13-.1-.2-.15-.07-.04-.15-.08-.23-.12-.08-.04-.16-.08-.25-.11-.09-.03-.17-.06-.27-.08-.09-.02-.18-.05-.27-.06-.1-.02-.2-.03-.3-.04-.11-.01-.21-.02-.32-.02h-.31z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div>
              <p className="font-medium text-gray-900">About Us</p>
              <nav className="flex flex-col mt-6 space-y-1">
                <a className="transition hover:text-gray-700" href="#"> Company History </a>
                <a className="transition hover:text-gray-700" href="#"> Our Team </a>
                <a className="transition hover:text-gray-700" href="#"> Careers </a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-gray-900">Our Services</p>
              <nav className="flex flex-col mt-6 space-y-1">
                <a className="transition hover:text-gray-700" href="#"> Events </a>
                <a className="transition hover:text-gray-700" href="#"> Hackathons </a>
                <a className="transition hover:text-gray-700" href="#"> Incubator </a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-gray-900">Resources</p>
              <nav className="flex flex-col mt-6 space-y-1">
                <a className="transition hover:text-gray-700" href="#"> Blog </a>
                <a className="transition hover:text-gray-700" href="#"> eBooks </a>
                <a className="transition hover:text-gray-700" href="#"> Join the Discord </a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-gray-900">Help & Support</p>
              <nav className="flex flex-col mt-6 space-y-1">
                <a className="transition hover:text-gray-700" href="#"> Contact Us </a>
                <a className="transition hover:text-gray-700" href="#"> FAQs </a>
                <a className="transition hover:text-gray-700" href="#"> Support Center </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">&copy; OstroHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
