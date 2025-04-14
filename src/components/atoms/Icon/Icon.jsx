import React from "react";
import { RiSendPlaneLine, RiContractLine } from "react-icons/ri";
import {
  FaInfoCircle,
  FaWhatsapp,
  FaTimes,
  FaCheck,
  FaBars,
} from "react-icons/fa";
import { IoDiamondOutline, IoCloseCircle } from "react-icons/io5";
import {
  MdArrowForwardIos,
  MdKeyboardArrowLeft,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import styles from "./icon.module.css";
import { FaLinkedin, FaArrowRight, FaCircleCheck } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaPlay, FaWpforms } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoLogoWhatsapp,
} from "react-icons/io";
import { PiArrowSquareOutBold, PiUsersThree } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

const Icon = ({ type, size, color = "inherit" }) => {
  const props = {
    size: size || "100%",
    className: `${styles.icon}`,
    color,
  };
  const icons = {
    send: <RiSendPlaneLine {...props} />,
    wp: <IoLogoWhatsapp {...props} />,
    info: <FaInfoCircle {...props} />,
    diamond: <IoDiamondOutline {...props} />,
    close: <IoMdClose {...props} />,
    check: <FaCircleCheck {...props} />,
    bars: <FaBars {...props} />,
    rightArrow: <FaArrowRight {...props} />,
    arrow: <MdArrowForwardIos {...props} />,
    arrowLeft: <MdKeyboardArrowLeft {...props} />,
    linkedin: <FaLinkedin {...props} />,
    facebook: <FaFacebook {...props} />,
    instagram: <FaInstagram {...props} />,
    medal: <BiSolidMedal {...props} />,
    warning: <CiWarning {...props} />,
    arrowFoward: <IoIosArrowForward {...props} />,
    arrowSquare: <PiArrowSquareOutBold {...props} />,
    arrowDown: <IoIosArrowDown {...props} />,
    play: <FaPlay {...props} />,
    closeCircle: <IoCloseCircle {...props} />,
    email: <CiMail {...props} />,
    form: <FaWpforms {...props} />,
    team: <PiUsersThree {...props} />,
    privacy: <MdOutlinePrivacyTip {...props} />,
    commitment: <RiContractLine {...props} />,
  };
  return <i>{icons[type]}</i>;
};

export default Icon;
