import React from 'react'
import ConfirmationForm from '../components/forms/ConfirmationForm';
function Confirmation() {
  return (
    <div className="relative grid grid-cols-12 gap-x-2 md:gap-x-4 col-span-full w-screen mx-auto pb-5 snap-start h-screen">
      <div className="col-span-full md:col-start-1 md:col-span-5">
        <ConfirmationForm />
      </div>
    </div>
  );
}

export default Confirmation