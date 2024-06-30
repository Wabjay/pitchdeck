import { useState } from "react";
import Generated from "../Popup/Generated";
import { buttonStyles } from "../../classes/styles";
import axios from "../../../lib/axios";
import { store } from "../../../store";
import Loading from "../../LoadingComponent";

export default function SubmitForm({ data, sendError }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(false);
  const [type, setType] = useState("");
  // const [errors, setErrors] = useState({});

  const {setIsComponentLoading} = store()

  const sendData = async () => {
    if (data.formType === "Terms and Condition") {
      setType('terms')
    setIsComponentLoading(true)
      // API Logic For Terms and Condition
      await axios.post('/freeTools/termsAndCond', data,
      {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        setOpen(true);
        setIsComponentLoading(false)
        setContent(response.data.content)
      })
    } else if (data.formType === "Privacy Policy") {
      setType('policy')
    setIsComponentLoading(true)
      // API Logic For Privacy Policy
      await axios.post('/freeTools/privacypolicy', data,
      {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        setOpen(true);
    setIsComponentLoading(false)
        setContent(response.data.content)
      })

    } else if (data.formType === "Refund Policy")  {
      setType('refund')
      // API Logic For Refund Policy
    setIsComponentLoading(true)
      await axios.post('/freeTools/refundpolicy', data,
      {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        setOpen(true);
    setIsComponentLoading(false)
        setContent(response.data.content)
      })

    }

    setOpen(!open);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(data);
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit the data
    sendData()
    } else {
      // setErrors(errors);
      sendError(errors);
    }
  };

  const validate = (data) => {
    const errors = {};

    // Website validation
    if (!data.websiteAddress) {
      errors.websiteAddress = "Website is required";
    } else if (!isValidUrl(data.websiteAddress)) {
      errors.websiteAddress = "Invalid website URL";
    } 

    // Company Name validation
    if (!data.companyName) {
      errors.companyName = "Company Name is required";
    }

    // Company Address validation
    if (!data.companyAddress) {
      errors.companyAddress = "Company Address is required";
    }

    // Country validation
    if (!data.country) {
      errors.country = "Country is required";
    }
    // State validation
    if (!data.state) {
      errors.state = "State is required";
    }
    // City validation
    if (!data.city) {
      errors.city = "City is required";
    }
       // Product validation
       if (!data.productName) {
        errors.productName = "Product is required";
      }
             // Download format
             if (!data.generateTemplateIn) {
              errors.generateTemplateIn = "Select download format";
            }

    // Email validation
    if (!data.contactEmailAddress) {
      errors.contactEmailAddress = "Email is required";
    } else if (!isValidEmail(data.contactEmailAddress)) {
      errors.contactEmailAddress = "Invalid email address";
    }
    // setOpen(!open);
    return errors;
  };

  const isValidUrl = (url) => {
    // Basic URL validation, you can use a more robust solution if needed
    return /\./.test(url);
    // return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
  };

  const isValidEmail = (email) => {
    // Basic email validation, you can use a more robust solution if needed
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <div className="w-full max-w-[758px] mx-auto px-4 laptop:px-0  tablet:grid tablet:grid-cols-2 tablet:gap-x-8 mt-[-40px] tablet:mt-[-80px] laptop:mt-[-100px]">
        <button
      className={`${buttonStyles('green')} w-full col-span-full my-10 py-[14px]`}
          onClick={handleSubmit}
        >
          Generate {data.formType} <Loading />
        </button>


        <div className="w-full col-span-full p-4 border border-[#70CC9F] bg-[#F7FCF9]">
          <p className="text-14 text-[#10894E]">
            The generated <span className="lowercase">{data.formType}</span>{" "}
            is provided "as is" and without warranty of any kind. In no way
            pixelgum.design shall be liable for any claim, damages, or other
            liability. Use it at your own risk. And Make sure to get legal
            advice from legal professionals.
          </p>
        </div>
      </div>
      <Generated open={open} data={data} content={content} type={type} />
    </>
  );
}
