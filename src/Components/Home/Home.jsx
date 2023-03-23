import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="font-poppins scrollbar dark:bg-slate-900">
      <Navbar />
      <main>
        <div
          style={{ backgroundImage: "url('/img/bg.jpg')" }}
          className="flex flex-col items-center bg-cover bg-no-repeat py-16"
        >
          <p
            className="font-extrabold text-3xl md:text-5xl px-2
                        text-white mt-24 max-w-3xl text-center leading-relaxed md:leading-relaxed"
          >
            Open Source UI Components Build with Tailwind CSS
          </p>
          <p className="text-cyan-100 py-3 px-5 text-center text-sm md:text-base">
            Build your next project even faster with UIHUB
          </p>
          <Link to="/browse">
            <button className="px-6 py-2 bg-cyan-50 hover:bg-cyan-100 text-violet-800 font-semibold rounded-md my-16">
              Browse All{" "}
              <FontAwesomeIcon icon={faAngleRight} className="pl-3" />
            </button>
          </Link>
        </div>
        {/* <section className="flex justify-center my-16">
          <p className="text-4xl font-bold max-w-3xl text-center">
            <span className="text-violet-700">UIHUB</span> - The Ultimate
            Destination for Pre-built UI Components
          </p>
        </section> */}
        <section className="flex justify-center my-20 md:px-2">
          <div className="max-w-4xl flex justify-between items-center w-full">
            <div className="w-full md:w-9/12">
              <img
                src="/img/vectors/1.svg"
                alt="Build beautiful websites"
                draggable={false}
              />
            </div>
            <div className="p-5 md:p-8 lg:p-10"></div>
            <div>
              <p
                className="font-roboto text-xl md:text-4xl font-extrabold p-4 leading-7 md:leading-relaxed
                            dark:text-white"
              >
                Build Beautiful Websites Faster with UIHub
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center my-20 md:px-2">
          <div className="max-w-4xl flex justify-between items-center w-full">
            <div>
              <p
                className="font-roboto text-xl md:text-4xl font-extrabold p-4 leading-7 md:leading-relaxed
                            dark:text-white"
              >
                Create Visually Stunning Websites with Ease
              </p>
            </div>
            <div className="p-5 md:p-8 lg:p-10"></div>
            <div className="w-full md:w-9/12">
              <img
                src="/img/vectors/2.svg"
                alt="Build beautiful websites"
                draggable={false}
              />
            </div>
          </div>
        </section>
        <section className="flex justify-center my-20">
          <div className="max-w-4xl flex justify-between items-center w-full">
            <div className="w-full md:w-9/12">
              <img
                src="/img/vectors/3.svg"
                alt="Build beautiful websites"
                draggable={false}
              />
            </div>
            <div className="p-5 md:p-8 lg:p-10"></div>
            <div>
              <p
                className="font-roboto text-xl md:text-4xl font-extrabold p-4 leading-7 md:leading-relaxed
                            dark:text-white"
              >
                Transform Your Workflow with UIHub's Pre-built UI Components
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 pt-16 bg-violet-900 flex justify-center">
          <div className="flex justify-between items-center max-w-5xl w-full mb-10 px-10">
            <div className="text-violet-100">&copy; UIHUB 2023</div>
            <Link to="" target="_blank">
              <div className="font-bold text-violet-100">
                <FontAwesomeIcon icon={faGithub} /> GITHUB
              </div>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
