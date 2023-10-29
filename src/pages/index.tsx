import { NextPage } from "next";
import { useForm } from "react-hook-form";
import React from "react";
import { useState } from "react";

interface IDataType {
  // sales: string;
  // marketing: string;
  // accounting: string;
  // customerService: string;
  // money: string;
  // loveComp: string;
  // learning: string;
  // noReason: string;
  selectSalary: string;
  introduction: string;
  dreamsArea: string;
  email: string;
  department: string;
  joinReason: [];
}

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<IDataType>({ mode: "onChange" });

  // const selectedDepartment = watch("department");
  // console.log(selectedDepartment);

  const [selectedValues, setSelectedValues] = useState<IDataType | null>(null); // 선택한 값 저장

  const onValid = (data: IDataType) => {
    console.log(`data`, data);
    setSelectedValues(data);
    reset();
  };

  const onInvalid = (errors: any) => {
    console.log(errors);
  };

  return (
    <div className="container place-content-center bg-emerald-50 p-10">
      <div className="items-center relative justify-center bg-red-100 rounded-xl mx-20 my-20 py-10 px-7 border-black border-2 border-r-4 border-b-4">
        <div className="header text-center font-semibold text-2xl mb-5">
          Job Application Form
        </div>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <div className="firstBox flex flex-col items-start gap-1 mb-5">
            <p className="font-semibold text-md">
              What department do you want to work for?
            </p>
            <label id="sales" htmlFor="sales">
              <input
                type="radio"
                value="sales"
                {...register("department", { required: "required" })}
              />
              Sales
            </label>
            <label id="marketing" htmlFor="marketing">
              <input
                type="radio"
                value="marketing"
                {...register("department", { required: "required" })}
              />
              Marketing
            </label>

            <label id="accounting" htmlFor="accounting">
              <input
                type="radio"
                value="accounting"
                {...register("department", { required: "required" })}
              />
              Accounting
            </label>

            <label id="customerService" htmlFor="customerService">
              <input
                type="radio"
                value="customerService"
                {...register("department", { required: "required" })}
              />
              Customer Service
            </label>
            {/* {isSubmitSuccessful ? "" : "*required"} */}
          </div>

          <div className="secondBox flex flex-col items-start gap-1 mb-5">
            <p className="font-semibold">Why do you want join this Company?</p>
            <label id="money" htmlFor="money">
              <input
                type="radio"
                value="money"
                {...register("joinReason", { required: "required" })}
              />
              Wanna be Billionaire!
            </label>
            <label id="loveComp" htmlFor="loveComp">
              <input
                type="radio"
                value="loveComp"
                {...register("joinReason", { required: "required" })}
              />
              Love this Company
            </label>
            <label id="learning" htmlFor="learning">
              <input
                type="radio"
                value="learning"
                {...register("joinReason", { required: "required" })}
              />
              Learn more
            </label>
            <label id="noReason" htmlFor="noReason">
              <input
                type="radio"
                value="noReason"
                {...register("joinReason", { required: "required" })}
              />
              No reason
            </label>
          </div>

          <div className="mb-5">
            <p className="font-semibold">Salary</p>
            <select
              className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-100 focus:border-red-200 block w-full p-2.5"
              {...register("selectSalary", { required: true })}
            >
              <option value="$100K">$100K</option>
              <option value="$1000K">$1000K</option>
              <option value="$5000K">$5000K</option>
              <option value="$7000K">$7000K</option>
            </select>
          </div>

          <div className="mb-5">
            <p className="font-semibold">Introduce yourself</p>
            <input
              className="rounded-lg block p-1.5 w-full"
              type="text"
              {...register("introduction", {
                required: "Plz introduce yourself"
              })}
            />
            <div className="errors text-red-500">
              {errors.introduction?.message}
            </div>
          </div>

          <div className="mb-5">
            <p className="font-semibold block mb-2 ">
              Tell us what your dreams are
            </p>
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
              border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              {...register("dreamsArea", {
                required: "Let us know what dreams you have",
                minLength: {
                  value: 10,
                  message: "Plz tell us more than 10 Characters"
                }
              })}
            />
            <div className="errors text-red-500">
              {errors.dreamsArea?.message}
            </div>
          </div>

          <div className="mb-5">
            <p className="font-semibold">Email</p>
            <input
              className="rounded-lg p-2 block p-1.5 "
              type="text"
              {...register("email", {
                required: "Plz write your email",
                validate: {
                  NoNaver: (value) =>
                    value.includes("@naver.com") || "Only @naver.com is allowed"
                }
              })}
            />
            <div className="errors text-red-500">{errors.email?.message}</div>
          </div>
          <div className="btnBox bg-yellow-200 justify-center rounded-lg p-4 mb-5 flex border border-2 border-black">
            <input
              className="text-center font-semibold "
              type="submit"
              value="Give me this job"
            ></input>
          </div>
        </form>
        <div>
          {selectedValues && (
            <div className="group bg-slate-50 rounded-lg justify-center">
              <h2 className="font-mono text-center text-sm text-gray-700 font-semibold">
                지원서
              </h2>
              <p className="font-mono text-center text-sm text-gray-500">
                선택한 부서: {selectedValues.department}
              </p>
              <p className="font-mono text-center text-sm text-gray-500">
                선택한 이유: {selectedValues.joinReason}
              </p>
              <p className="font-mono text-center text-sm text-gray-500">
                희망 연봉: {selectedValues.selectSalary}
              </p>
              <p className="font-mono text-center text-sm text-gray-500">
                자기 소개: {selectedValues.introduction}
              </p>
              <p className="font-mono text-center text-sm text-gray-500">
                목표 및 지향점: {selectedValues.dreamsArea}
              </p>
              <p className="font-mono text-center text-sm text-gray-500">
                이메일 : {selectedValues.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
