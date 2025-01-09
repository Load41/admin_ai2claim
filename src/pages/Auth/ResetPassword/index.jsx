import { clsx } from "clsx";
import { logo } from "../../../constants/imageData";
import { svgIcons } from "../../../constants/icons";
import { LDInput } from "../../../components/LDInput";
import { LDButton } from "../../../components";
import { Link } from "react-router-dom";
import styles from "./../../Auth/Auth.module.css";
const ResetPassword = () => {
    return (
        <>
            <div className={clsx(styles.authCardWrap, "w-100")}>
                <div className={clsx(styles.authHead, "d-flex align-items-center justify-content-center")}>
                    <img src={logo} className={clsx(styles.logo, "img-fluid sidebar-logo")} alt="Ai2claim inc" />
                </div>
                <h3 className="text-center mb-0 pt-5">Reset Password</h3>
                <div className={clsx(styles.authBox)}>
                    <LDInput
                        id="email"
                        dataTestId="emailAddress"
                        name="email"
                        // value={loginData?.email}
                        type="email"
                        placeholder="Enter email address"
                        handleChange={() => {return false}}
                        className={clsx(styles.authField)}
                        prefix={svgIcons.emaillAddressIcon}
                        // errorMessage={validateMessages?.email}
                    />

                    <div className="position-sticky bottom-0 bg-white py-5">
                        <LDButton
                            type="fill"
                            shape={"round"}
                            iconPosition={"end"}
                            isSmallBtn
                            isFillBtn
                            customClass={clsx("w-100")}
                            handleClick={() => {return false}}
                        >
                            Reset Password
                        </LDButton>
                        <Link to="/login" className="text-center mt-4 d-block">Back to Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResetPassword;