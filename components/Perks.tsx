import React from 'react';

const Perks = () => {
  return (
    <section className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
      {/* Left Write-up */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Your Write-Up Title</h2>
        <p className="text-bodyText mb-4">
          This is the content of the write-up. You can add more text here to provide information about your section. Ensure it’s descriptive and engaging.
        </p>
      </div>
      {/* Right Card */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="bg-white shadow-md p-6 rounded-lg flex-1">
          <h3 className="text-2xl font-bold mb-4">Card Title</h3>
          <p className="text-bodyText mb-4">
            Content of the card goes here. You can include descriptions, images, or any other elements needed for the card.
          </p>
        </div>
      </div>
    </div>
    {/* Additional Cards */}
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3 bg-white shadow-md p-6 rounded-lg flex-1">
        <h3 className="text-2xl font-bold mb-4">Card 1 Title</h3>
        <p className="text-bodyText mb-4">Content for card 1.</p>
      </div>
      <div className="w-full md:w-1/3 bg-white shadow-md p-6 rounded-lg flex-1">
        <h3 className="text-2xl font-bold mb-4">Card 2 Title</h3>
        <p className="text-bodyText mb-4">Content for card 2.</p>
      </div>
      <div className="w-full md:w-1/3 bg-white shadow-md p-6 rounded-lg flex-1">
        <h3 className="text-2xl font-bold mb-4">Card 3 Title</h3>
        <p className="text-bodyText mb-4">Content for card 3.</p>
      </div>
    </div>
  </section>
  );
}

export default Perks;
