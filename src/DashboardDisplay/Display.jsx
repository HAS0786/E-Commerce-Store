import React from 'react';
import ProductPath from '../../public/path';
import { Link } from 'react-router-dom';
import Mens from '../Products/Clothes/Mens/Mens';
import Womens from '../Products/Clothes/Womens/Womens';
import Children from '../Products/Clothes/Children/Children';
import Babies from '../Products/Clothes/Babies/Babies';
import Phones from '../Products/Electronics/Phones/Phones';
import Laptops from '../Products/Electronics/Laptop/Laptop';
import Ovens from '../Products/HomeAppliance/Ovens/Oven';
import Refrigerators from '../Products/HomeAppliance/Refrigerators/Refrigerators';
import Orderform from '../OrderForm/Orderform';

const Display = () => {
  return (
    <>

    <div className='border-2 border-gray-500 p-3 h-[70vh] overflow-hidden lg:h-[72vh]'>
      <div><h1 className='text-3xl font-bold text-center mb-5 border-b-2 border-gray-400'>Clothes</h1></div>
      <div className='flex justify-between border-b-2 border-gray-400 pb-2'>
        <h2 className='text-lg font-semibold'>Mens</h2>
        <div>
        <Link to={ProductPath.MensComponent} className='text-blue-500 hover:underline'>
          View All
        </Link>
        </div>
      </div>
      <div className='overflow-hidden'>
        <Mens />
      </div>
    </div>
    <div className='border-2 border-gray-500 p-3 h-[70vh] overflow-hidden lg:h-[72vh]'>
      <div className='flex justify-between border-b-2 border-gray-400 pb-2'>
        <h2 className='text-lg font-semibold'>Womens</h2>
        <Link to={ProductPath.WomensComponent} className='text-blue-500 hover:underline'>
          View All
        </Link>
      </div>
      <div className='overflow-auto'>
        <Womens />
      </div>
    </div>
    <div className='border-2 border-gray-500 p-3 h-[70vh] overflow-hidden lg:h-[72vh]'>
      <div className='flex justify-between border-b-2 border-gray-400 pb-2'>
        <h2 className='text-lg font-semibold'>Children</h2>
        <Link to={ProductPath.ChildrenComponent} className='text-blue-500 hover:underline'>
          View All
        </Link>
      </div>
      <div className='overflow-auto'>
        <Children />
      </div>
    </div>
    <div className='border-2 border-gray-500 p-3 h-[70vh] overflow-hidden lg:h-[72vh]'>
      <div className='flex justify-between border-b-2 border-gray-400 pb-2'>
        <h2 className='text-lg font-semibold'>Babies</h2>
        <Link to={ProductPath.BabiesComponent} className='text-blue-500 hover:underline'>
          View All
        </Link>
      </div>
      <div className='overflow-auto'>
        <Babies />
      </div>
    </div>
    <div className='border-2 border-gray-500 p-3 h-[70vh] overflow-hidden lg:h-[72vh]'>
    <div><h1 className='text-3xl font-bold text-center mb-5 border-b-2 border-gray-400'>Electronic</h1></div>

      <div className='flex justify-between border-b-2 border-gray-400 pb-2'>
        <h2 className='text-lg font-semibold'>Phones</h2>
        <Link to={ProductPath.PhonesComponent} className='text-blue-500 hover:underline'>
          View All
        </Link>
      </div>
      <div className='overflow-auto'>
        <Phones />
      </div>
    </div>
    <div className='border-2 border-gray-500 p-3 h-[70vh] overflow-hidden lg:h-[72vh]'>
      <div className='flex justify-between border-b-2 border-gray-400 pb-2'>
        <h2 className='text-lg font-semibold'>Laptop</h2>
        <Link to={ProductPath.LaptopComponent} className='text-blue-500 hover:underline'>
          View All
        </Link>
      </div>
      <div className='overflow-auto'>
        <Laptops />
      </div>
    </div>
    <div className='border-2 border-gray-500 p-3 h-[70vh] overflow-hidden lg:h-[72vh]'>
    <div><h1 className='text-3xl font-bold text-center mb-5 border-b-2 border-gray-400'>Home-Appliances</h1></div>

      <div className='flex justify-between border-b-2 border-gray-400 pb-2'>
        <h2 className='text-lg font-semibold'>Ovens</h2>
        <Link to={ProductPath.OvenComponent} className='text-blue-500 hover:underline'>
          View All
        </Link>
      </div>
      <div className='overflow-auto'>
        <Ovens />
      </div>
    </div>
    <div className='border-2 border-gray-500 p-3 h-[70vh] overflow-hidden lg:h-[72vh]'>
      <div className='flex justify-between border-b-2 border-gray-400 pb-2'>
        <h2 className='text-lg font-semibold'>Refrigerators</h2>
        <Link to={ProductPath.RefrigeratorsComponent} className='text-blue-500 hover:underline'>
          View All
        </Link>
      </div>
      <div className='overflow-auto'>
        <Refrigerators />
      </div>
      
    </div>

    </>
  );
};

export default Display;

