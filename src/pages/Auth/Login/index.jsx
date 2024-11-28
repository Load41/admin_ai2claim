import { clsx } from "clsx";
import { logo } from "../../../constants/imageData";
import styles from "./../../Auth/Auth.module.css";
import { svgIcons } from "../../../constants/icons";
import { LDInput } from "../../../components/LDInput";
import { LDButton } from "../../../components";
import { useNavigate } from "react-router-dom";
const Login = () => {
    
    const navigate = useNavigate();


    return(
        <>
            <div className={clsx(styles.authCardWrap, "w-100")}>
                <div className={clsx(styles.authHead, "d-flex align-items-center justify-content-center")}>
                    <img src={logo} className={clsx(styles.logo, "img-fluid sidebar-logo")} alt="" />
                </div>
                <h3 className="text-center mb-0 pt-5">Login</h3>
                <div className={clsx(styles.authBox)}>
                    <LDInput
                        id="emailAddress"
                        dataTestId="emailAddress"
                        name="emailAddress"
                        // value="emailAddress"
                        type="emaill"
                        placeholder="Enter email address"
                        handleChange={() => {return false}}
                        className={clsx(styles.authField)}
                        prefix={svgIcons.emaillAddressIcon}
                        
                    />
                    <LDInput
                        id="emailAddress"
                        dataTestId="emailAddress"
                        name="emailAddress"
                        // value="emailAddress"
                        type="password"
                        placeholder="Enter password"
                        handleChange={() => {return false}}
                        className={clsx(styles.authField)}
                        prefix={svgIcons.passwordIcon}
                    />

                    <div className="position-sticky bottom-0 bg-white py-5">
                        <LDButton
                            type="fill"
                            shape={"round"}
                            iconPosition={"end"}
                            isSmallBtn
                            isFillBtn
                            customClass={clsx("w-100")}
                            handleClick={() => {navigate('/')}}
                            >
                            Login
                        </LDButton>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;