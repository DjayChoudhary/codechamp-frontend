import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export default function Login() {
  return (
    <div className="flex justify-center">
      <section className="flex flex-col gap-2 py-4 px-4 my-4 max-w-xl justify-center items-center bg-white shadow-xl rounded-xl border-2 border-gray-50">
        <h2 className="text-lg text-gray-800 font-semibold tracking-wide font-poppins p-2">
          Choose your Login method
        </h2>
        <div className="flex gap-4 p-2 m-2 bg-gray-100 rounded-md w-52 items-center justify-center">
          <FcGoogle className="w-7 h-7 shadow-lg rounded-full" />
          <span className="text-gray-700 tracking-wide font-semibold font-poppins text-lg -ml-1 pr-2">
            Google
          </span>
        </div>
        <div className="flex gap-4 p-2 m-2 items-center bg-gray-100 rounded-md w-52  justify-center">
          <BsGithub className="w-7 h-7 shadow-lg rounded-md" />

          <span className="text-gray-700 tracking-wide font-semibold font-poppins text-lg -ml-1 pr-2">
            GithHub
          </span>
        </div>

        <div className="flex gap-4 p-2 m-2 items-center bg-gray-100 rounded-md w-52 justify-center">
          <BsLinkedin className="w-7 h-7 shadow-lg rounded-md text-blue-700" />
          <span className="text-gray-700 tracking-wide font-semibold font-poppins text-lg -ml-1 pr-2">
            LinkedIn
          </span>
        </div>
        {/* <FiLogIn className="w-9 h-9" /> */}
      </section>
    </div>
  );
}
