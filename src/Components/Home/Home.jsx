import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <section>
        <div
          style={{ backgroundImage: "url('/img/bg.jpg')" }}
          className="flex flex-col items-center bg-cover bg-no-repeat py-16"
        >
          <p className="font-extrabold text-5xl text-white mt-24 max-w-3xl text-center leading-relaxed">
            Open Source UI Components Build with Tailwind CSS
          </p>
          <p className="text-cyan-100 py-3">
            Build your next project even faster with UIHUB
          </p>
          <Link to="/browse">
            <button className="px-6 py-2 bg-cyan-50 hover:bg-cyan-100 text-violet-800 font-semibold rounded-md my-16">
              Browse All{" "}
              <FontAwesomeIcon icon={faAngleRight} className="pl-3" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
