import logo from "../assets/images/logo/logo.png";
import USFlag from "../assets/images/icons/united-states.png";
import companyOne from "../assets/images/company-logo/mo-1.png";
import companyTwo from "../assets/images/company-logo/mo-4.jpg";
import manWorkerFive from "../assets/images/covers/man-worker-five.jpg";
import manWorkerSix from "../assets/images/company-logo/man-worker-six.jpg";
import manWorkerThree from "../assets/images/company-logo/man-worker-three.jpg";
import aboutUs from "../assets/images/covers/about-us.png";
export {
  logo,
  USFlag,
  companyOne,
  companyTwo,
  manWorkerFive,
  manWorkerThree,
  manWorkerSix,
  aboutUs
};

export const formatPhoneNumber = (phoneNumber) => {
  const phoneString = phoneNumber.toString();

  if (phoneString.length === 10) {
    // Format the phone number to +1 123-456-7890
    return `+1 ${phoneString.slice(0, 3)}-${phoneString.slice(3, 6)}-${phoneString.slice(6)}`;
  }

  return phoneString;
};
