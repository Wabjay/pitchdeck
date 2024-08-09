import React, { useEffect, useState } from "react";
import AddressForm from "./AutoComplete";
import Select from "../../../assets/select.svg";
import { inputStyles, selectStyles } from "../../classes/styles";

export default function ToolsForm({response, formType, error}) {
  // const [open, setOpen] = useState(false);
  // const [companyName, setCompanyName] = useState("");
  // const [websiteAddress, setWebsiteAddress] = useState("");
  // const [product, setProduct] = useState("");
  // const [contactEmailAddress, setContactEmailAddress] = useState("");
  // const [generateTemplateIn, setTemplateType] = useState(formType);

  const [data, setData] = useState({
    formType,  companyName: '', websiteAddress: '', productName: '',contactEmailAddress: '', companyAddress: '', country: '', state: '', city: '', generateTemplateIn: ''
  });



  
  const handleCompany = (event) => {
    const name = event.target.value;
    // setCompanyName(name);
    setData({...data, companyName: name})

  };

  const handleWebsite = (event) => {
    const website = event.target.value;
    // setWebsiteAddress(website);
    setData({...data, websiteAddress: website})
    
  };

  const handleProduct = (event) => {
    const product = event.target.value;
    // setProduct(product);
    setData({...data, productName: product})

  };
  
  const handleEmail = (event) => {
    const email = event.target.value;
    // setContactEmailAddress(email);
    setData({...data, contactEmailAddress: email})

  };

  const format = ['markdown', 'plaintext', 'HTML']

  const handleTemplateType = (event) => {
    const type = event.target.value;
    // setTemplateType(type);
    setData({...data, generateTemplateIn: type})

  };

  const getAddress = (address) => {
    // Destructure address
    const {companyAddress, country, state, city} = address
    setData({...data, companyAddress: companyAddress, country: country, state: state, city: city})
  };

  useEffect(()=>{
    response(data)
    // console.log(data)
  },[data])

  return (
    <div className="w-full laptop:max-w-[951px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
      <p className="w-fit mx-auto mb-6 text-24 font-bold tablet:text-32">Enter your details</p>
      <div className="w-full max-w-[758px] mx-auto grid tablet:grid-cols-2 gap-x-8 gap-y-6">
        <div className="flex flex-col">
          <label htmlFor="city" className="text-grey-800 text-16 font-semi-bold">
            Company name
          </label>
          <input
            className={`${inputStyles(error?.companyName)}`}
            id="company"
            value={data.companyName}
            onChange={handleCompany}
            placeholder="PixelGum Studio "
          />
        {error?.companyName && <span className="text-red-500">{error?.companyName}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="text-grey-800 text-16 font-semi-bold">
          Your website address
          </label>
          <input
            className={`${inputStyles(error?.websiteAddress)}`}
            id="website"
            value={data.websiteAddress}
            onChange={handleWebsite}
            placeholder="www.xyz.com"
          />
        {error?.websiteAddress && <span className="text-red-500">{error?.websiteAddress}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="text-grey-800 text-16 font-semi-bold">
          Product name 
          </label>
          <input
            className={`${inputStyles(error?.productName)}`}
            id="productName"
            value={data.productName}
            onChange={handleProduct}
            placeholder="Pitch deck"
          />
          {error?.productName && <span className="text-red-500">{error?.productName}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="text-grey-800 text-16 font-semi-bold">
          Contact email address
          </label>
          <input
            className={`${inputStyles(error?.contactEmailAddress)}`}
            id="email"
            value={data.contactEmailAddress}
            onChange={handleEmail}
            placeholder="pitchdeckd@gmail.com"
          />
          {error?.contactEmailAddress && <span className="text-red-500">{error?.contactEmailAddress}</span>}
        </div>

        <AddressForm address={getAddress} error={error} />
        <div className='flex flex-col col-span-full '>
          <label htmlFor="state" className='text-grey-800 text-16 font-semi-bold'>Generate template in </label>
          <div className="grid relative">
          <select
            className={`${selectStyles(error?.generateTemplateIn)} capitalize`} id="format" value={data.generateTemplateIn} onChange={handleTemplateType}>
            <option value="">Select download type</option>
            {format.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <img
            src={Select}
            alt="Drop down"
            className="w-6 h-6 absolute right-2 top-2 pointer-events-none row-start-1 col-start-1"
          />
        </div>
        {error?.generateTemplateIn && <span className="text-red-500">{error?.generateTemplateIn}</span>}
        </div>
       </div>
    </div>
  );
}
