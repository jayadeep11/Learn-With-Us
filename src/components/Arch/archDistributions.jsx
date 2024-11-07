import React from 'react';

const ArchDistro = () => {
  const archDistributions = [
    {
      name: "Arch Linux",
      image: "/images/arch-linux.png", 
      description: "A rolling-release system that is lightweight and flexible."
    },
    {
      name: "Manjaro",
      image: "/images/manjaro.png", 
      description: "An Arch-based distro with a focus on user-friendliness and ease of use."
    },
    {
      name: "EndeavourOS",
      image: "/images/endeavouros.png", 
      description: "An Arch-based distro that provides a minimalist base with an easy installation process."
    },
    {
      name: "Garuda Linux",
      image: "/images/garuda.png", 
      description: "An Arch-based distro with a focus on performance and cutting-edge features."
    },
    {
      name: "Artix Linux",
      image: "/images/artix-linux.png", 
      description: "A systemd-free Arch-based distribution."
    },
  ];

  return (
    <div className="flex flex-wrap justify-around space-x-4 space-y-4 p-8 text-white">
      {archDistributions.map((distro, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg w-1/4 text-center">
          <img
            src={distro.image}
            alt={distro.name}
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h3 className="text-2xl font-semibold mb-2">{distro.name}</h3>
          <p className="text-lg">{distro.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArchDistro;

