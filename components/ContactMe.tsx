import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    console.log(
      (window.location.href = `mailto:arofawaz123@gmail.com?subject=${formData.subject}&
        body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`)
    );

  return (
    <motion.div
      initial ={{
        opacity: 0
    }}
    whileInView ={{
        opacity: 1
    }}
    transition ={{
        duration: 1.5
    }}
    className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center">
      <h4
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl md:text-2xl"
      >
        Contact
      </h4>

      <div className="flex flex-col space-y-5 pt-[14%]">
        <h4 className="text-2xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="underline decoration-[#2d858b]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#2d858b] h-7 w-7 animate-pulse" />
            <p className="text-2xl">07082692458</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#2d858b] h-7 w-7 animate-pulse" />
            <p className="text-2xl">arofawaz123@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#2d858b] h-7 w-7 animate-pulse flex-shrink-0" />
            <p className="text-2xl">Calfos Drive, Lawanson, Surulere, Lagos</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="grid grid-cols-2 space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#2d858b] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
        <footer className="text-white-700 text-center p-4 pt-0 mt-0">
      © 2022 Aro-okoya Fawaz
  </footer>
      </div>
    </motion.div>
  );
}

export default ContactMe;
