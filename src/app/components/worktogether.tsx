import React, { useState } from 'react';
import Image from 'next/image';
import Worktogetherbg from "@/app/svg/worktogetherbg.svg";

const worktogether = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const maxDescriptionLength = 300;

  return (
    <div className="bg-[#bbafa4] h-[80rem]">
    <div className='relative'>
    <h2 className="text-xl font-bold text-center text-[#584d42] mb-10 relative inline-block w-full after:content-[''] after:block after:w-24 after:h-0.5 after:bg-[#584d42] after:mx-auto after:mt-2 before:content-[''] before:block before:w-24 before:h-0.5 before:bg-[#584d42] before:mx-auto before:mb-2">Work Together!</h2>
        <div className='absolute w-full'>
        <Image alt="background" src={Worktogetherbg} className='mx-auto scale-125'></Image>
        </div>
      <div className="flex justify-center mt-[15rem]">
        <div className="relative mr-20">
          <input
            name="fullname"
            id="fullname"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className={`peer border-b bg-transparent border-gray-300 p-2 w-[15rem] focus:outline-none transition-colors duration-300 ease-in-out ${fullName ? 'border-b-[#584d42]' : 'focus:border-b-2 focus:border-b-[#584d42]'}`}
          />
          <label htmlFor="fullname" className={`absolute left-2 transition-all duration-200 transform text-black/60 ${fullName ? 'text-xs top-2 -translate-y-4' : 'top-2'}`}>
            Full Name
          </label>
        </div>
        <div className="relative">
          <input
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`peer border-b bg-transparent border-gray-300 p-2 w-[15rem] focus:outline-none transition-colors duration-300 ease-in-out ${email ? 'border-b-[#584d42]' : 'focus:border-b-2 focus:border-b-[#584d42]'}`}
          />
          <label htmlFor="email" className={`absolute left-2 transition-all duration-200 transform text-black/60 ${email ? 'text-xs top-2 -translate-y-4' : 'top-2'}`}>
            Email
          </label>
        </div>
      </div>
      <div className="flex justify-center mt-32">
        <div className="relative">
          <textarea
            value={description}
            onChange={(e) => {
              if (e.target.value.length <= maxDescriptionLength) {
                setDescription(e.target.value);
              }
            }}
            required
            className={`peer border-b bg-transparent border-gray-300 p-2 w-[35rem] focus:outline-none transition-colors duration-300 ease-in-out ${description ? 'border-b-[#584d42]' : 'focus:border-b-2 focus:border-b-[#584d42]'}`}
          />
          <label className={`absolute left-2 transition-all duration-200 transform text-black/60 ${description ? 'text-xs top-2 -translate-y-4' : 'top-2'}`}>
            Description
          </label>
          <div className="absolute right-0 text-sm text-black/60">
            {maxDescriptionLength - description.length} characters remaining
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default worktogether;