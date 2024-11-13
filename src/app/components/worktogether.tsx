import React, { useState } from 'react';
import Image from 'next/image';
import Worktogetherbg from "@/app/svg/worktogetherbg.svg";

const worktogether = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const maxDescriptionLength = 300;

  return (
    <div className="bg-[#bbafa4] h-auto pb-12 relative overflow-hidden">
      <Image 
        src={Worktogetherbg}
        alt="background pattern"
        className="absolute inset-x-0 w-[80rem] h-[68rem] object-cover opacity-50 mx-auto"
      />
      <div className="flex flex-col items-center pt-20 relative z-10">
        <h2 className="text-5xl font-bold text-center text-[#584d42] mb-10 relative inline-block 
          after:content-[''] after:block after:w-[30rem] after:h-1 after:bg-gradient-to-r after:from-transparent after:via-[#584d42] after:to-transparent after:mx-auto after:mt-4
          before:content-[''] before:block before:w-[40rem] before:h-1 before:bg-gradient-to-r before:from-transparent before:via-[#584d42] before:to-transparent before:mx-auto before:mb-4">
          Unite for Success!
        </h2>
        
        <div className="flex justify-center space-x-4">
          <div className="bg-white p-10 rounded-[.4rem] shadow-md relative w-96">
            <div className="relative">
              <input
                name="fullname"
                id="fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className={`peer border-b bg-transparent border-gray-300 p-2 w-full focus:outline-none transition-colors duration-300 ease-in-out ${fullName ? 'border-b-[#584d42]' : 'focus:border-b-2 focus:border-b-[#584d42]'}`}
              />
              <label htmlFor="fullname" className={`absolute left-2 transition-all duration-200 transform text-black/60 ${fullName ? 'text-xs -top-4' : 'top-[10px]'} peer-focus:text-xs peer-focus:-top-4`}>
                Full Name
              </label>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[.4rem] shadow-md relative w-96">
            <div className="relative">
              <input
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`peer border-b bg-transparent border-gray-300 p-2 w-full focus:outline-none transition-colors duration-300 ease-in-out ${email ? 'border-b-[#584d42]' : 'focus:border-b-2 focus:border-b-[#584d42]'}`}
              />
              <label htmlFor="email" className={`absolute left-2 transition-all duration-200 transform text-black/60 ${email ? 'text-xs -top-4' : 'top-[10px]'} peer-focus:text-xs peer-focus:-top-4`}>
                Email
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-white p-10 rounded-[.4rem] shadow-md relative w-[49rem]">
            <div className="relative">
              <textarea
                value={description}
                onChange={(e) => {
                  if (e.target.value.length <= maxDescriptionLength) {
                    setDescription(e.target.value);
                  }
                }}
                required
                className={`peer border-b bg-transparent border-gray-300 p-2 w-full focus:outline-none transition-colors duration-300 ease-in-out ${description ? 'border-b-[#584d42]' : 'focus:border-b-2 focus:border-b-[#584d42]'}`}
              />
              <label className={`absolute left-2 transition-all duration-200 transform text-black/60 ${description ? 'text-xs -top-4' : 'top-[10px]'} peer-focus:text-xs peer-focus:-top-4`}>
                Description
              </label>
              <div className="absolute right-0 text-sm text-black/60">
                {maxDescriptionLength - description.length} characters remaining
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default worktogether;