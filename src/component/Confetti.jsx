import React, { useState } from 'react';
import Confetti from 'react-confetti';

function AddConfetti() {
  const [confettiActive, setConfettiActive] = useState(false);

  const startConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 2000); // Stop confetti after 2 seconds
  };

  return (
    <div>
      <button onClick={startConfetti}>Start Confetti</button>
      {confettiActive && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  );
}

export default AddConfetti;
