import React, { useState, useEffect } from 'react';
import Skeleton from "./Skeleton";

const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return { coords, error };
};

const LocationChecker = ({linkToPurchase, purchasePrice, setPrice}) => {
  const links = linkToPurchase;
  // const { purchasePrice: prices} = purchasePrice;

  const { coords, error } = useGeolocation();
  const [ link, setLink ] = useState(links.foreign);
  // const [ price, setPrice ] = useState(purchasePrice.dollar);
  // const [ price, setPrice ] = useState(prices.foreign);
  const [ location, setLocation ] = useState(null);







  useEffect(() => {
    if (coords) {
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
          if (data.countryCode === 'NG') {
            setPrice(purchasePrice.naira)
            setLink(links.nigeria);

            // setPrice(prices.nigeria)
          } else {
            setLink(links.foreign);
            setPrice(purchasePrice.dollar)

            // setPrice(prices.foreign)
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setLocation('Error occurred while fetching location');
        });
    }
    setPrice(purchasePrice.dollar)
    setLink(links.foreign)
  }, [coords, links.foreign, links.nigeria]);

  
  return (
    <div>
        <Skeleton>
        <a href = {link} target="_blank" rel='noreferrer'
          className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  text-sm leading-5 font-normal focus:outline-none "
        > Buy This Template </a>
      </Skeleton>
      {/* <p>{link}</p>  */}
    </div>
  );
};

export default LocationChecker;
