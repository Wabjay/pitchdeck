import React, { useState, useEffect } from 'react';
import { store } from '../store';
import { useCookies } from "react-cookie";

const YourComponent = () => {
    const {
        setCount,
        count,
        setShowLogin,
      } = store();
  const [cookies, setCookie] = useCookies(["pitch", "isLogged"]);

  const [counted, setCounted] = useState(false);

  useEffect(() => {
    // Function to reset the count daily at 12 AM
    const resetCountDaily = () => {
      const currentDate = new Date();
      // Set the time to 12 AM
      currentDate.setHours(0, 0, 0, 0);
      const currentTime = currentDate.getTime();
      
      // Get the stored reset time from localStorage
      const storedResetTime = localStorage.getItem('resetTime');
      
      // If there is no stored reset time or if the current time is after the stored reset time,
      // reset the count and update the reset time in localStorage
      if (!storedResetTime || currentTime > parseInt(storedResetTime)) {
        setCount(10);
        localStorage.setItem('resetTime', currentTime + 24 * 60 * 60 * 1000); // Set the reset time for the next day
      }
    };

    resetCountDaily(); // Call the function to reset the count daily

    // Check conditions for showing login form
    if (!cookies.isLogged && (!counted || count === 0)) {
      setShowLogin(true);
      localStorage.setItem('counted', true);
    } else {
      setShowLogin(false);
      localStorage.setItem('counted', false)
    }

    setCounted(localStorage.getItem('counted'));
  }, [count, counted, cookies.isLogged, setCount, setShowLogin]);



  // Rest of your component code
  useEffect(() => {
    const currentPathname = window.location.pathname;
    const path = currentPathname.split("/").pop();
    const pitchTitle = params.pitch !== "" ? params.pitch : path;

    // getId(pitchTitle);
    // fetchSinglePitch(pitchTitle);

    // Check if user is not logged in then countdown 10secs and show login card
    if (!cookies.isLogged) {
      const timer = setInterval(() => {
        setCounter((prevCount) => prevCount - 1);
      }, 1000);

      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(timer);
    }
  }, [cookies.isLogged, params.pitch]);

  useEffect(() => {
    // Function to reset the count daily at 12 AM
    const resetCountDaily = () => {
      const currentDate = new Date();
      const currentHours = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();
      const currentSeconds = currentDate.getSeconds();
      const msUntilMidnight = (24 * 60 * 60 * 1000) - ((currentHours * 60 * 60 * 1000) + (currentMinutes * 60 * 1000) + (currentSeconds * 1000));
      
      // If it's past 12 AM, reset the count to 10
      if (msUntilMidnight <= 0) {
        setCounter(10);
        setCounted(false); // Reset counted flag
        localStorage.setItem('counted', 'false'); // Reset counted flag in localStorage
      }
    };

    resetCountDaily(); // Call the function to reset the count daily
  }, []);

  useEffect(() => {
    // If the counter reaches 0 and the user is not logged in, show the login card
    if (!cookies.isLogged && counter === 0) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
     // If the user has not been counted yet, set the counted flag to true and update localStorage
     if (!cookies.isLogged && !counted && counter < 10) {
      setCounted(true);
      localStorage.setItem('counted', 'true');
    }
  }, [cookies.isLogged, counter, counted]);

  
};

export default YourComponent;
