import { FaHome, FaGift, FaTaxi, FaWineGlassAlt } from "react-icons/fa";
import { PiForkKnifeFill, PiTShirtFill } from "react-icons/pi";

export const getIcons = (iconName = "home", iconColor) => {
  const icons = {
    gift: <FaGift size={30} color={iconColor} />,
    home: <FaHome size={30} color={iconColor} />,
    taxi: <FaTaxi size={30} color={iconColor} />,
    taxi: <FaWineGlassAlt size={30} color={iconColor} />,
  };
  return icons[iconName];
};

export const getCurrencySymbol = (name = "MNT") => {
  const cur = {
    USD: "$",
    MNT: "₮",
    EUR: "€",
    JPY: "¥",
  };
  return cur[name];
};
