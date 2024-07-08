import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { GiClothes } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FcElectronics } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import ProductPath from '../../../public/path';

export default function DropdownNav({ isSidebar }) {
  const categories = [
    {
      name: 'Clothing',
      items: [
        { name: 'Mens', icon: GiClothes, to: ProductPath.MensComponent },
        { name: 'Womens', icon: GiClothes, to: ProductPath.WomensComponent },
        { name: 'Children', icon: GiClothes, to: ProductPath.ChildrenComponent },
        { name: 'Babies', icon: GiClothes, to: ProductPath.BabiesComponent },
      ],
    },
    {
      name: 'Electronics',
      items: [
        { name: 'Phones', icon: FcElectronics, to: ProductPath.PhonesComponent },
        { name: 'Laptops', icon: FcElectronics, to: ProductPath.LaptopComponent },
      ],
    },
    {
      name: 'Home Appliances',
      items: [
        { name: 'Refrigerators', icon: FaHome, to: ProductPath.RefrigeratorsComponent },
        { name: 'Ovens', icon: FaHome, to: ProductPath.OvenComponent },
      ],
    },
  ];

  return (
    <div className="relative">
      {!isSidebar && (
        <div className="group relative inline-block">
          <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-red-400 focus:bg-gray-700 ">
            Products
            <ChevronDownIcon className="w-4 h-4 text-white/60" />
          </MenuButton>
          </Menu>
          <div className="absolute hidden mt-2 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm text-white transition duration-100 ease-out group-hover:block" style={{ minWidth: '20rem', zIndex: '9999' }}>
            {categories.map((category) => (
              <div key={category.name} className="p-2">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {category.name}
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10"
                    >
                      <item.icon className="w-4 h-4 text-white/30" />
                      {item.name}
                      <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">
                        ⌘
                        {item.name.charAt(0)}
                      </kbd>
                    </Link>
                  ))}
                </div>
                <div className="my-1 h-px bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      )}

      {isSidebar && (
        <div className="fixed inset-0 top-12 z-30 h-[75vh] flex flex-col bg-gray-800 text-white p-4">
          {categories.map((category) => (
            <div key={category.name} className="p-2">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                {category.name}
              </h3>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {category.items.map((item) => (
                  <Link key={item.name} to={item.to} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
                    <item.icon className="w-4 h-4 text-white/30" />
                    {item.name}
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">
                      ⌘
                      {item.name.charAt(0)}
                    </kbd>
                  </Link>
                ))}
              </div>
              <div className="my-1 h-px bg-white/5" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
