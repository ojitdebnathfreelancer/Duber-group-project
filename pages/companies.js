import React from 'react';

const companies = () => {
  return (
    <div className='container mx-auto px-3 py-10'>
      <h2 className='lg:text-4xl text-2xl font-semibold text-center lg:pb-12 pb-8'>Our companies</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        <div className='border rounded-md shadow-lg hover:-translate-y-3 transition ease-in-out duration-500'>
          <div className='flex items-center justify-center'>
            <img
              className='lg:h-56 h-40'
              src="https://i.ibb.co/b6K5Gg6/images-removebg-preview.png" alt="" />
          </div>
          <div className='p-4'>
            <h2 className='lg:text-3xl text-2xl font-semibold pb-3 mt-3'>Trucking company</h2>
            <p>These companies typically offer a range of transportation services, including local and long-distance delivery, freight hauling, and logistics management. They may operate their own fleet of trucks or contract with independent drivers to transport goods on their behalf. Trucking companies play a vital role in the global economy by facilitating the movement of goods and raw materials between manufacturers, retailers, and consumers.</p>
          </div>
        </div>
        <div className='border rounded-md shadow-lg hover:-translate-y-3 transition ease-in-out duration-500'>
          <div className='flex items-center justify-center'>
            <img
              className='lg:h-56 h-40'
              src="https://i.ibb.co/DrgHGKs/download-removebg-preview.png" alt="" />
          </div>
          <div className='p-4'>
            <h2 className='lg:text-3xl text-2xl font-semibold pb-3'>Truck transport</h2>
            <p>Truck transport is a mode of transportation that involves the use of trucks or other large vehicles to move goods or freight from one location to another. This mode of transportation is particularly popular for shipping goods over short to medium distances within a country or region Truck transport offers a number of advantages over other modes of transportation, such as railways or ships. For one, trucks are more flexible in terms of the routes they can take and the types of goods they can transport. .</p>
          </div>
        </div>
        <div className='border rounded-md shadow-lg hover:-translate-y-3 transition ease-in-out duration-500'>
          <div className='flex items-center justify-center'>
            <img
              className='lg:h-56 h-40'
              src="https://i.ibb.co/f9qKKcG/download-removebg-preview-1.png" alt="" />
          </div>
          <div className='p-4'>
            <h2 className='lg:text-3xl text-2xl font-semibold pb-3'>Logistics Delivery</h2>
            <p>Logistics delivery refers to the process of managing the movement and delivery of goods or products from one location to another. It involves a range of activities, including transportation planning, inventory management, order processing, and delivery tracking.
              The goal of logistics delivery is to ensure that goods are delivered to their intended destination in a timely and cost-effective manner. This requires careful planning and coordination of all the different stages of the delivery process.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default companies;
