
import { BiGroup } from "react-icons/bi";

const Info = () => {
  return <div className=" max-w-screen-xl mx-auto bg-red-300">

    {/* .............about info section ...............*/}
    <div className=" grid lg:grid-cols-3 gap-2">
      <div className='border p-3 w-96 mx-auto' >
        <BiGroup className="my-2" size={30}></BiGroup>
        <h3 className=' text-xl my-2'>About us</h3>
        <p> Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>

      </div>
      <div className='border p-3 w-96 mx-auto'>
        <h3 className=' text-xl my-2'>Newsroom</h3>
        <p> See announcements about our latest releases, initiatives, and partnerships.</p>
      </div>
      <div className='border p-3 w-96 mx-auto'>
        <h3 className=' text-xl my-2'>Global citizenship</h3>
        <p>Read about our commitment to making a positive impact in the cities we serve.</p>
      </div>


    </div>
    <div>

    </div>

  </div>;
};

export default Info;
