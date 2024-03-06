import { useState } from "react";
import axios from "../../lib/axios";
import { store } from "../../store";
import Arrow from "../../assets/back.svg";

const DataCard = (email: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setUserName] = useState("@");
  const { email: userEmail } = email;
  const { setLoginWithCard, setShowData, setShowLogin, setShowOTP } = store();

  const register = async () => {
    try {
      await axios.post(
        "auth/register",
        { email: userEmail, firstName, lastName, userName },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setShowData(false);
      setShowOTP(true);
      setShowLogin(false);
    } catch (err) {
      console.log(err);
    }
  };

  const returnToEmailCard = () => {
    setShowData(false);
    setLoginWithCard(true);
  };
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-30">
      <div className="w-[90%] max-w-[499px] flex flex-col p-6 rounded-[12px] bg-white border-[rgb(232,232,234)] border">
        <img
          src={Arrow}
          alt=""
          className="p-[6px] bg-[#F2F1E8] hover:bg-[#CCC8A4] ml-0 w-6 h-6"
          onClick={returnToEmailCard}
        />
        <p className="text-20 font-bold tablet:text-24 mb-6">
          Login to start viewing pitch decks from top companies
        </p>

        <div className="text-left flex flex-col">
          <label htmlFor="email" className="text-16 font-medium mb-2">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="text-14 tablet:text-16 bg-[#F9F9F9] mb-10 border-[#BBBBB9] border h-12 px-4"
            value={userEmail}
            disabled
          />
        </div>

        <div className="tablet:flex gap-6 w-full">
          <div className="text-left flex flex-col">
            <label htmlFor="email" className="text-16 font-medium mb-2">
              First name
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your first Name"
              className="text-14 tablet:text-16 bg-white mb-6 border-[#BBBBB9] border h-12 px-4  w-[240px] tablet:w-[213px]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="text-left flex flex-col">
            <label htmlFor="email" className="text-16 font-medium mb-2">
              Last name
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last Name"
              className="text-14 tablet:text-16 bg-white mb-10 border-[#BBBBB9] border h-12 px-4 w-[240px] tablet:w-[213px]"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
        </div>

        <div className="text-left flex flex-col">
          <label htmlFor="email" className="text-16 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your preferred  Username"
            className="text-14 tablet:text-16 bg-white mb-10 border-[#BBBBB9] border h-12 px-4"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <p
          onClick={register}
          className="bg-[#21AB68] cursor-pointer border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-[#ffffff] text-sm leading-5 font-medium focus:outline-none "
        >
          Register
        </p>
      </div>
    </div>
  );
};

export default DataCard;
