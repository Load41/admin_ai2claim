import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doFetchLogin } from "../../actions";
import { setAuthHeader } from "../../axiosApi";
import { validateLogin, validateSubmitLogin } from "../../validations";

export const useLoginHook = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const [validateMessages, setValidateMessages] = useState({});
  const [isLoginSubmit, setIsLoginSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showIcon, setShowIcon] = useState(false);

  const handleShowIcon = () => {
    setShowIcon((prev) => !prev);
  };

  const handleInputChange = (event) => {
    const { name, value } = event?.target;
    const { errors } = validateLogin(name, value);
    setErrorMessage("");
    setIsLoginSubmit(false);
    setValidateMessages(errors);
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLoginSubmit = () => {
    try {
      setIsLoading(true);
      // console.log({ loginData });
      const { errors } = validateSubmitLogin(loginData);
      setIsLoginSubmit(true);
      console.log({ errors });
      setValidateMessages((pre) => ({
        ...errors,
      }));
    } catch (error) {
      setIsLoading(false);
      console.log({ error });
    }
  };

  useEffect(() => {
    document.body.classList.add("login-page");
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        // Prevent default action if necessary
        event.preventDefault();
        // setLoginData((prevState) => ({ ...prevState, ...loginData }));
        // Call a function or perform an action
        handleLoginSubmit();
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [loginData]);

  useEffect(() => {
    if (Object.keys(validateMessages).length === 0 && isLoginSubmit) {
      callback();
    } else {
      setIsLoading(false);
    }
  }, [validateMessages]);
  const callback = async () => {
    if (Object.keys(validateMessages).length === 0 && isLoginSubmit) {
      const prepareRequestBody = {
        email: loginData?.email,
        password: loginData?.password,
      };
      localStorage.clear();
      const loginResponse = await doFetchLogin(prepareRequestBody);
      // console.log({ loginResponse });
      if (loginResponse?.status==200) {
        // const loginToken = JSON.parse(
        //   getDescryptionString(loginResponse?.data?.data)
        // );
        const loginToken = loginResponse?.data;
        console.log({ loginToken });
        localStorage.setItem("role", `${loginToken?.role}`);
        localStorage.setItem("id", `${loginToken?.id}`);
        localStorage.setItem("token", `${loginToken?.token}`);
        await setAuthHeader(`Bearer ${loginToken?.token}`);
        setValidateMessages({});
        setLoginData({});
        setIsLoginSubmit(false);
        setIsLoading(false);
        navigate("/");
      } else {
        toast.error(loginResponse?.data?.msg);
        setIsLoading(false);
        return false;
      }
    } else {
      setIsLoading(false);
    }
  };

  return {
    loginData,
    validateMessages,
    isLoginSubmit,
    isLoading,
    errorMessage,
    showIcon,
    handleInputChange,
    handleLoginSubmit,
  };
};
