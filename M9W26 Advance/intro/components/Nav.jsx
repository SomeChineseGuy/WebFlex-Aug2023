import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-green-400 py-10 px-4">
      <div className="flex justify-between w-1/4">
        <h1 className="text-lg text-semibold text-white">Tiny App</h1>
        <a href="/urls" className="text-white hover:text-blue-600">Urls</a>
        <a href="/urls/create" className="text-white hover:text-blue-600">Create your short Url</a>
      </div>
    </nav>
  )
};

export default Navbar;
