import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import f1 from "../assets/img/f1.jpeg"; // Import your local image

const HomeCarousel = () => {
  return (
    <div className="relative mt-0 w-screen"> {/* Ensure full width */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="w-screen" // Ensure full width
      >
        {/* Slide 1 */}
        <div>
          <img className="h-[90vh] w-full object-cover" src="https://th.bing.com/th/id/R.73f89ef01a4ea17b03f9aca4a5035191?rik=Xy92NQp%2bo68FXA&riu=http%3a%2f%2fwww.antonovich-design.ae%2fuploads%2fgallery%2ffull584b280dca963.jpg&ehk=b4QCXKs%2ftZN8Di9ZMYKjPGpxnuywuQ4qWexfecwIBX4%3d&risl=&pid=ImgRaw&r=0" alt="Furniture 1" />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-60 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Stylish Sofas</h2>
            <p className="mt-2">Comfortable and Modern Designs for Your Living Room</p>
          </div>
          </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            className="h-[90vh] w-full object-cover"
            src="https://png.pngtree.com/background/20230520/original/pngtree-modern-office-desk-design-ideas-picture-image_2677246.jpg"
            alt="Furniture 2"
          />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-75 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Office Desks</h2>
            <p className="mt-2">Functional & Elegant Designs for Your Workspace</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            className="h-[90vh] w-full object-cover"
            src="https://wakefitdev.gumlet.io/img/CoffeeTablesNew/AbertoACSG/1.jpg?w=3056"
            alt="Furniture 3"
          />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-75 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Coffee Tables</h2>
            <p className="mt-2">Elegant and Functional Coffee Tables for Every Living Room</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;