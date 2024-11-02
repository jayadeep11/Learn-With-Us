import React from 'react';

const ArchInstallation = () => {
  const steps = [
    {
      step: 1,
      title: 'Download Arch Linux ISO',
      description: 'Visit the official Arch Linux website and download the latest ISO file.'
    },
    {
      step: 2,
      title: 'Create Bootable USB',
      description: 'Use a tool like Rufus (Windows) or dd (Linux/Mac) to create a bootable USB drive.'
    },
    {
      step: 3,
      title: 'Boot from USB',
      description: 'Restart your PC and boot from the USB to enter the Arch Linux installation environment.'
    },
    {
      step: 4,
      title: 'Set Up Networking',
      description: 'Ensure you are connected to the internet using `ping` or `iwctl` for Wi-Fi setup.'
    },
    {
      step: 5,
      title: 'Partition the Disks',
      description: 'Use `fdisk` or `cfdisk` to partition your disks. For example, create root, boot, and swap partitions.'
    },
    {
      step: 6,
      title: 'Format and Mount Partitions',
      description: 'Format your partitions using `mkfs` (e.g., `mkfs.ext4`) and mount them accordingly.'
    },
    {
      step: 7,
      title: 'Install Base System',
      description: 'Run `pacstrap /mnt base linux linux-firmware` to install the base Arch Linux system.'
    },
    {
      step: 8,
      title: 'Generate fstab',
      description: 'Generate an fstab file using `genfstab -U /mnt >> /mnt/etc/fstab`.'
    },
    {
      step: 9,
      title: 'Chroot into the New System',
      description: 'Enter your new Arch system with `arch-chroot /mnt` to continue configuration.'
    },
    {
      step: 10,
      title: 'Set Timezone and Locale',
      description: 'Set your timezone with `ln -sf /usr/share/zoneinfo/Region/City /etc/localtime` and generate locale files.'
    },
    {
      step: 11,
      title: 'Install Bootloader',
      description: 'Install and configure a bootloader like GRUB to make your system bootable.'
    },
    {
      step: 12,
      title: 'Reboot',
      description: 'After finishing, exit the chroot environment, unmount the partitions, and reboot into your new Arch system.'
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Arch Linux Installation Guide</h1>
      {steps.map((step) => (
        <div key={step.step} className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-semibold mb-2">
            Step {step.step}: {step.title}
          </h2>
          <p className="text-gray-700">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArchInstallation;

