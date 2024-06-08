import React from "react";
import Image from "next/image";
import Link from "next/link";
const Contactme = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-white mt-4 mb-5">
        Contact Me
      </h1>
      <p className=" text-center text-white mt-4 mb-5 ">
        You can check out my different projects and my linkedin profile.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        <Image
          src="/Images/icons8-gmail.svg"
          alt="Email Logo"
          width={50}
          height={25}
        />
        <a
          href="https://www.linkedin.com/in/dante-cornelius/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Images/icons8-linkedin.svg"
            alt="Github Logo"
            width={50}
            height={50}
          />
        </a>
        <a
          href="https://github.com/Dante-hu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Images/icons8-github_l.svg"
            alt="Github Logo"
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  );
};
export default Contactme;
