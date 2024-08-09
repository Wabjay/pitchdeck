import React, { useState, useEffect } from "react";
import Select from "../../../assets/select.svg";
import { inputStyles, selectStyles } from "../../classes/styles";
function AddressForm({ address, error }) {
  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [statesByCountry, setStatesByCountry] = useState([]);
  const [citiesByState, setCitiesByState] = useState([]);
  const [data, setData] = useState({
    companyAddress: "",
    country: "",
    state: "",
    city: "",
  });

  const requestOptions = {
    method: "GET",
    headers: {
      "X-CSCAPI-KEY":
        "aWltcVZQZjZnZzVQd2tUZzJYdXBMT0lNN3RxSkpqYnAySnRqbXNsWA==",
    },
    redirect: "follow",
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://api.countrystatecity.in/v1/countries",
        requestOptions
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStatesByCountry = async (countryCode) => {
    try {
      const response = await fetch(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
        requestOptions
      );
      const data = await response.json();
      setStatesByCountry(data);
    } catch (error) {
      console.error(`Error fetching states for ${countryCode}:`, error);
    }
  };

  const fetchCitiesByState = async (state) => {
    try {
      const response = await fetch(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${state}/cities`,
        requestOptions
      );
      const data = await response.json();
      setCitiesByState(data);
    } catch (error) {
      console.error(`Error fetching cities for ${state}:`, error);
    }
  };

  const handleCountryChange = (event) => {
    const country = event.target.value;
    const countryCode = event.target.value;
    console.log(event.target.value);
    setData({ ...data, country: country, state: "", city: "" });
    fetchStatesByCountry(countryCode);
    setCountryCode(countryCode);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setData({ ...data, state: state, city: "" });
    fetchCitiesByState(state);
    console.log(state);
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setData({ ...data, city: city });
  };

  const handleAddressChange = (event) => {
    const address = event.target.value;
    setData({ ...data, companyAddress: address });
  };

  useEffect(() => {
    address(data);
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="country" className="text-grey-800 text-16 font-medium">
          Country
        </label>
        <div className="grid relative">
          <select
            className={`${selectStyles(error?.country)}`}
            id="country"
            value={data.country}
            onChange={handleCountryChange}
          >
            <option value="">Select a country</option>
            {countries?.map((country) => (
              <option key={country.iso2} value={country.iso2}>
                {country.name}
              </option>
            ))}
          </select>
          <img
            src={Select}
            alt="Drop down"
            className={`w-6 h-6 absolute right-2 top-2 pointer-events-none row-start-1 col-start-1 `}
          />
        </div>
          {error?.country && <span className="text-red-500">{error?.country}</span>}

      </div>
      {/* {country && ( */}
      <div className="flex flex-col">
        <label htmlFor="state" className="text-grey-800 text-16 font-medium">
          State
        </label>
        <div className="grid relative">
          <select
            className={`${selectStyles(error?.state)} ${statesByCountry.length < 1 && 'text-[#C7C7CA] border-[#E8E8EA] bg-disabled'}`}
            id="state"
            value={data.state}
            onChange={handleStateChange}
            disabled={statesByCountry.length > 0 ? false : true}
          >
            <option value="">Select a state</option>
            {statesByCountry?.map((state) => (
              <option key={state.iso2} value={state.iso2}>
                {state.name}
              </option>
            ))}
          </select>
          <img
            src={Select}
            alt="Drop down"
            className="w-6 h-6 absolute right-2 top-2 pointer-events-none row-start-1 col-start-1"
          />
        </div>
        {error?.state && <span className="text-red-500">{error?.state}</span>}

      </div>

      <div className="flex flex-col">
        <label htmlFor="city" className="text-grey-800 text-16 font-medium">
          Company Address
        </label>
        <input
          className={`${inputStyles(error?.companyAddress)}`}
          id="address"
          value={data.companyAddress}
          onChange={handleAddressChange}
          placeholder="12860 Blue Gentian Road"
        />
          {error?.companyAddress && <span className="text-red-500">{error?.companyAddress}</span>}

      </div>

      <div className="flex flex-col">
        <label htmlFor="city" className="text-grey-800 text-16 font-medium">
          City
        </label>
        <div className="grid relative">
          <select
            className={`${selectStyles(error?.city)}  ${citiesByState.length < 1 && 'text-[#C7C7CA] border-[#E8E8EA] bg-disabled'}`}
            id="city"
            value={data.city}
            onChange={handleCityChange}
            disabled={citiesByState.length > 0 ? false : true}

          >
            <option value="">Select a city</option>
            {citiesByState?.map((city) => (
              <option key={city.code} value={city.code}>
                {city.name}
              </option>
            ))}
          </select>
          <img
            src={Select}
            alt="Drop down"
            className="w-6 h-6 absolute right-2 top-2 pointer-events-none row-start-1 col-start-1"
          />
        </div>
        {error?.city && <span className="text-red-500">{error?.city}</span>}

      </div>
    </>
  );
}

export default AddressForm;
