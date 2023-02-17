import { FaBeer } from 'react-icons/fa'

const Info = () => {
  return <div className=" max-w-screen-xl mx-auto bg-red-300">

    {/* .............about info section ...............*/}
    <div className=" grid lg:grid-cols-3 gap-6">
      <div className='border'>
        <h3 className=' text-xl '>About us</h3>
        <p> Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>

      </div>
      <div className='border'>
        <h3 className=' text-xl'>Newsroom</h3>
        <p> See announcements about our latest releases, initiatives, and partnerships.</p>
      </div>
      <div className='border'>
        <h3 className=' text-xl'>Global citizenship</h3>
        <p>Read about our commitment to making a positive impact in the cities we serve.</p>
      </div>


    </div>
    <div>

    </div>

  </div>;
};

export default Info;
