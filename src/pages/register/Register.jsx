import React, { useState, useContext } from "react";
import reg from "../../assets/reg.png";
import star from "../../assets/starr.png";
import pstar from "../../assets/pstar.png";
import Lottie from "lottie-react";
import congrat from "../../assets/lottie/Congrat.json";
import congratt from "../../assets/lottie/congratt.json";
import { RegistrationContext } from "../../context/registration/RegistrationContext";

const Register = () => {
  const linearGradientBg = {
    backgroundImage: "linear-gradient(90deg, #D434FE, #903AFF)",
  };

  const { register } = useContext(RegistrationContext);

  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_policy_accepted: false,
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData, setRegistrationSuccess);
    } catch (error) {
      console.error("Registration error", error);
    }
  };
  return (
    <div>
      {/* web and tablet */}
      <div className="grid grid-cols-2 gap-4 p-4 relative hidden md:grid font-custom">
        <div className="col-span-1">
          <img src={reg} alt="registration" />
        </div>

        <div className="col-span-1 relative">
          <div className="border-transparent rounded-lg  p-8">
            <div className="text-[#D434FE] text-3xl font-extrabold">
              Register
            </div>
            <div className="text-white text-base mt-8">
              Be part of this movement!
            </div>
            <div className="text-white text-3xl font-thin mt-4">
              CREATE YOUR ACCOUNT
            </div>

            <div className="text-white mt-4">
              <form>
                <div className="grid grid-cols-1 gap-4  md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-light text-white"
                    >
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="px-8 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black"
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base font-light text-white"
                    >
                      Phone
                    </label>
                    <input
                      className="px-8 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black"
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base font-light text-white"
                    >
                      Team's Name
                    </label>
                    <input
                      required
                      type="text"
                      name="team_name"
                      id="team_name"
                      value={formData.team_name}
                      onChange={handleChange}
                      placeholder="Enter the name of your group"
                      className="px-8 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="group_size"
                      className="block text-base font-light text-white"
                    >
                      Group size
                    </label>
                    <select
                      required
                      type=""
                      name="group_size"
                      id="group_size"
                      value={formData.group_size}
                      onChange={handleChange}
                      className="px-8 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black"
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="project_topic"
                      className="block text-base font-light text-white"
                    >
                      Project Topic
                    </label>
                    <input
                      required
                      name="project_topic"
                      id="project_topic"
                      value={formData.project_topic}
                      onChange={handleChange}
                      placeholder="What is your group project topic"
                      className="px-8 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black "
                    ></input>
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-base font-light text-white"
                    >
                      Category
                    </label>
                    <select
                      required
                      type="category"
                      name="category"
                      id="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="px-8 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black"
                    >
                      <option value="">Select your category</option>
                      <option value="1">Category 1</option>
                      <option value="2">Category 2</option>
                      <option value="3">Category 3</option>
                    </select>
                  </div>
                </div>
              </form>

              <div className="italic text-base text-[#FF26B9] mt-4">
                Please review your registration details before submitting
              </div>
              <div className="mb-4">
                <label className="flex items-center font-thin text-base  mt-4">
                  <input
                    type="checkbox"
                    id="privacy_policy_accepted"
                    name="privacy_policy_accepted"
                    checked={formData.privacy_policy_accepted}
                    onChange={handleChange}
                    className="mr-2 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE]  "
                  />
                  I agree with the event terms and conditions and privacy policy
                </label>
              </div>
              <button
                className="bg-[#903AFF] text-white px-32 py-2 text-base rounded-sm tracking-wider"
                style={linearGradientBg}
                onClick={handleSubmit}
              >
                Submit
              </button>
              <img
                src={star}
                alt="Star"
                className="absolute -mt-12  w-8 h-8"
                style={{ marginLeft: "-38rem" }}
              />

              <img
                src={star}
                alt="Star"
                className="absolute  ml-96 w-8 h-8"
                style={{ marginTop: "-40rem" }}
              />

              <img
                src={pstar}
                alt="Pstar"
                className="absolute   w-8 h-8"
                style={{ marginLeft: "-34rem", marginTop: "-40rem" }}
              />

              <img
                src={pstar}
                alt="Pstar"
                className="absolute -mt-36 -ml-32 w-8 h-8"
              />
            </div>
          </div>
        </div>
        {registrationSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Dimmed overlay */}
            <div className="fixed inset-0 bg-black opacity-80"></div>

            <div className="border  border-[#903AFF] p-8 rounded-lg shadow-md relative">
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1">
                  <Lottie animationData={congratt} />
                </div>
                <div className="col-span-1 h-60 w-60 -ml-24">
                  <Lottie animationData={congrat} />
                </div>
              </div>
              <div
                className="text-3xl font-extrabold text-center text-white tracking-wider"
                style={{ fontFamily: "regular" }}
              >
                Congratulations <br />
                you have successfully Registered!
              </div>
              <div
                className="text-xl mt-4 text-center text-white"
                style={{ fontFamily: "regular" }}
              >
                Yes, it was easy and you did it! <br />
                check you mail inbox for next step
              </div>
              <button
                className="bg-[#903AFF] text-white px-52 py-2 text-base rounded-sm tracking-wider mt-4"
                style={linearGradientBg}
                onClick={() => setRegistrationSuccess(false)}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
      {/* mobile screen */}
      <div className="md:hidden p-8 font-custom">
        <div className="text-2xl text-[#D434FE] font-extrabold ">Register</div>

        <div className="mt-4">
          <img src={reg} alt="registration" />
        </div>
        <div className="text-center">
          <div className="text-white text-base mt-4">
            Be part of this movement!
          </div>
          <div className="text-white text-2xl font-thin mt-2">
            CREATE YOUR ACCOUNT
          </div>
        </div>

        <form>
          <div className="text-white">
            <div>
              <label
                htmlFor="email"
                className="block text-base font-light text-white mt-4"
              >
                Email
              </label>
              <input
                required
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="px-4 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black"
              ></input>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-base font-light text-white mt-4"
              >
                Phone
              </label>
              <input
                className="px-4 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black "
                name="phone_number"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-base font-light mt-4">
                Team's Name
              </label>
              <input
                required
                type="text"
                name="team_name"
                id="team_name"
                value={formData.team_name}
                onChange={handleChange}
                placeholder="Enter the name of your group"
                className="px-4 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black "
              />
            </div>

            <div>
              <label
                htmlFor="groupsize"
                className="block text-base  font-light text-white mt-4"
              >
                Group size
              </label>
              <select
                required
                type=""
                name="group_size"
                id="group_size"
                value={formData.group_size}
                onChange={handleChange}
                className="px-4 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black"
              >
                <option value="">Select</option>
                <option value="1">10</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="project_topic"
                className="block text-base font-light text-white mt-4"
              >
                Project Topic
              </label>
              <input
                required
                name="project_topic"
                id="project_topic"
                value={formData.project_topic}
                onChange={handleChange}
                placeholder="What is your group project topic"
                className="px-4 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black "
              ></input>
            </div>
            <div className="">
              <div>
                <label
                  htmlFor="category"
                  className="block text-base font-light text-white mt-4"
                >
                  Category
                </label>
                <select
                  required
                  type="category"
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="px-4 py-2 w-full mt-4 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] text-black"
                >
                  <option value="">Select your category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </select>
              </div>
            </div>
          </div>
        </form>

        <img
          src={pstar}
          alt="Pstar"
          className="absolute -mt-12 -ml-4 w-4 h-4"
        />
        <div className="italic text-xs text-[#FF26B9] mt-4">
          Please review your registration details before submitting
        </div>
        <div className="mb-4">
          <label className="flex items-center font-thin text-sm text-white ">
            <input
              type="checkbox"
              id="privacy_policy_accepted"
              name="privacy_policy_accepted"
              checked={formData.privacy_policy_accepted}
              onChange={handleChange}
              className="mr-2 border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE]  "
            />
            I agree with the event terms and conditions and privacy policy
          </label>
        </div>
        <button
          className="bg-[#903AFF] text-white px-24 py-2 text-base rounded-sm tracking-wider "
          style={linearGradientBg}
          onClick={handleSubmit}
        >
          Submit
        </button>

        {registrationSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Dimmed overlay */}
            <div className="fixed inset-0 bg-black opacity-80"></div>

            <div className="border  border-[#903AFF] p-8 rounded-lg shadow-md relative">
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 ml-12">
                  <Lottie animationData={congratt} />
                </div>
                <div className="col-span-1 h-40 w-40 -ml-12">
                  <Lottie animationData={congrat} />
                </div>
              </div>
              <div
                className="text-xl font-extrabold text-center text-white tracking-wider"
                style={{ fontFamily: "regular" }}
              >
                Congratulations <br />
                you have successfully Registered!
              </div>
              <div
                className="text-base mt-4 text-center text-white"
                style={{ fontFamily: "regular" }}
              >
                Yes, it was easy and you did it! <br />
                check you mail inbox for next step
              </div>
              <button
                className="bg-[#903AFF] text-white px-52 py-2 text-sm rounded-sm tracking-wider mt-4"
                style={linearGradientBg}
                onClick={() => setRegistrationSuccess(false)}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
