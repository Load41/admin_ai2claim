import { clsx } from "clsx";
import { logo } from "../../../constants/imageData";
import { svgIcons } from "../../../constants/icons";
import { LDInput } from "../../../components/LDInput";
import { LDButton } from "../../../components";
import { Link } from "react-router-dom";
import { useLoginHook } from "../../../hooks";
import styles from "./../../Auth/Auth.module.css";
const Login = () => {

    const {
        errorMessage,
        handleInputChange,
        handleLoginSubmit,
        isLoading,
        loginData,
        showIcon,
        validateMessages
    } = useLoginHook()
    return (
        <>
            <div className={clsx(styles.authCardWrap, "w-100")}>
                <div className={clsx(styles.authHead, "d-flex align-items-center justify-content-center")}>
                    <img src={logo} className={clsx(styles.logo, "img-fluid sidebar-logo")} alt="" />
                </div>
                <h3 className="text-center mb-0 pt-5">Login</h3>
                <div className={clsx(styles.authBox)}>
                    <LDInput
                        id="email"
                        dataTestId="emailAddress"
                        name="email"
                        value={loginData?.email}
                        type="email"
                        placeholder="Enter email address"
                        handleChange={handleInputChange}
                        className={clsx(styles.authField)}
                        prefix={svgIcons.emaillAddressIcon}
                        errorMessage={validateMessages?.email}

                    />
                    <LDInput
                        id="password"
                        dataTestId="emailAddress"
                        name="password"
                        value={loginData?.password}
                        type="password"
                        placeholder="Enter password"
                        handleChange={handleInputChange}
                        className={clsx(styles.authField)}
                        prefix={svgIcons.passwordIcon}
                        errorMessage={validateMessages?.password}
                    />

                    <div className="position-sticky bottom-0 bg-white py-5">
                        <LDButton
                            type="fill"
                            shape={"round"}
                            iconPosition={"end"}
                            isSmallBtn
                            isFillBtn
                            customClass={clsx("w-100")}
                            handleClick={() => handleLoginSubmit()}
                        >
                            Login
                        </LDButton>
                        <Link to="/reset-password" className="text-center mt-4 d-block">Reset Password</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;