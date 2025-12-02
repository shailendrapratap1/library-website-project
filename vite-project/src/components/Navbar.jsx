import React,{useState} from 'react';
import {Menu,X} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =  () => {
        setIsOpen(!isOpen);
    };
  const navLinks = [
    {name:'Home', href:'#'},
    {name:'About',href:'#'},
    {name: 'Contact', href:'#'},
    {name:'Facilities',href:"#"},
];
  return (
    <nav class="fixed top-0 left-0 width-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
     <div class="shrink-0">
<span class="text-blue-400 text-xl font-bold tracking-widder">
     K.A.L
</span>
     </div>

   <div class="hidden md:block">
    <div class="ml-10 flex items-baseline space-x-4 " >
      
      {navLinks.map((link) => (
        <a 
        Key={link.name}
          href={link.href}
          class="text-grey-300 hover:text-white hover:background:white/10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
        ></a>
      ))}
      
    </div>
     </div>

   <div class="hidden md:flex iems-center space-x-4">
  <button class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
    Sign In
  </button>
   <button class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
    Sign Up
  </button>
   </div>

     <div class="mr-2 flex md:hidden">
        <button 
        onClick={toggleMenu}
        type="button"
        class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white transition-colors duration-300 "
        aria-controls="mobile-menu" 
        aria-expanded="false">

        </button>


     </div>


    </div>
    </div>
    </nav>
  )
}

export default Navbar
