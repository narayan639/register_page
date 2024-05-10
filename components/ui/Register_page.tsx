import { Label } from "@radix-ui/react-label";
import { Asterisk, MoveRight } from "lucide-react";
import React from "react";
import { Input } from "./input";
import { Form_req, SignUpSchema, SignUpSchemaType } from "@/app/data/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
const Register_page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log(data);
  };
  return (
    <main className="bg-[#224f5ef3]">
      <section className="h-[100vh] w-full bg-black/50 flex items-center justify-center relative overflow-hidden md:rounded-br-[40%]">
        <div className="absolute top-10 left-0 flex-col h-[100vh] lg:w-[350px] xl:w-[450px] items-center justify-start p-5 gap-4 hidden lg:flex">
          <div className="h-[120px] w-[120px] rounded-[50%] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://banshwali-full.vercel.app/logo.png"
              alt="logo"
            />
          </div>
          <h2 className="text-white font-extrabold md:text-[2vw] lg:text-[3vw] xl:text-[4vw]">
            Godar Thapa
          </h2>

          <img
            className="w-full h-[450px] object-contain"
            src="https://banshwali-full.vercel.app/people-arrow.svg"
            alt="logo"
          />
        </div>
        <div className=" w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%] p-2 relative md:p-10 rounded-lg bg-opacity-20 shadow-md backdrop-blur-md border-opacity-30 bg-zinc-100 h-[95vh] overflow-y-scroll scrollbar-width-10">
          <h1 className="text-[7vw] sm:text-[3.2vw] md:text-[2vw] pb-2 font-bold border-b-2 border-[#38c0faf3] text-white">
            Create Account
          </h1>
          <form
            onClick={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-2 relative z-[999]"
          >
            {Form_req?.map((item, index) => {
               type FieldName = keyof SignUpSchemaType;
               const fieldname = item?.name as FieldName
              const{name,title,placeholder}=item
              return (
                <div key={index} className="flex flex-col gap-1">
                  <Label
                    htmlFor={name}
                    className="flex gap-1 font-medium text-white"
                  >
                    <p>{title}</p>
                    <span className="text-red-500">
                      <Asterisk size={14} />
                    </span>
                  </Label>
                  <Input
                    type="text"
                    id={name}
                    {...register(fieldname)}
                    placeholder={placeholder}
                    className="border-2 rounded-lg outline-none"
                  />
                </div>
              );
            })}
            <button className="bg-[#38c0faf3] text-white mt-2 p-2 rounded-md flex items-center gap-2 justify-center hover:bg-[#64b7da]">
              Continue <MoveRight size={20} />
            </button>
          </form>
          <div className="flex gap-2 items-center justify-center w-full mt-3">
            <h1 className="text-white">Already Have an account?</h1>
            <button className="text-blue-800 font-semibold hover:underline">
              Sign in
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register_page;
