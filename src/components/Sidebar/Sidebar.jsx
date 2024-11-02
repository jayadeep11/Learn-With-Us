import { useState, useEffect } from "react";
import { LuInfinity } from "react-icons/lu";
import { GrArchlinux } from "react-icons/gr";
import { SiNeovim } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdDraw } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Show navbar if scrolling up or near the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleClick = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSetting = () => {
    navigate("/settings");
  };

  const handleNeovim = () => {
    navigate("/neovim");
  };

  const handleArch = () => {
    navigate("/arch");
  };

  const handleDraw = () => {
    navigate("/draw");
  };

  const handleNotes = () => navigate("/problems");

  const items = [
    { icon: <LuInfinity className="text-2xl" />, action: handleClick, name: "Loop" },
    { icon: <FaNoteSticky className="text-2xl" />, action: handleNotes, name: "Problems" },
    { icon: <GrArchlinux className="text-2xl" />, action: handleArch, name: "Arch" },
    { icon: <SiNeovim className="text-2xl" />, action: handleNeovim, name: "Neovim" },
    { icon: <MdDraw className="text-2xl" />, action: handleDraw, name: "Draw" },
    { icon: <AiOutlineGithub className="text-2xl" />, action: null, name: "GitHub" },
    { icon: <CgProfile className="text-2xl" />, action: handleLogin, name: "Profile" },
    { icon: <IoSettingsOutline className="text-2xl" />, action: handleSetting, name: "Settings" },
    { icon: <SiAboutdotme className="text-2xl" />, action: null, name: "About" },
  ];

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full bg-zinc-900 text-violet-400 flex items-center justify-between p-8 z-10 shadow-lg transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="logo text-2xl font-bold cursor-pointer hover:text-violet-500" onClick={handleClick}>
        MyWebsite
      </div>
      <div className="menu flex gap-6 items-center">
        {items.map(({ icon, action, name }, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={action}
          >
            {icon}
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-violet-400">
              {name}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

