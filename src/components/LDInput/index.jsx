import { Input } from "antd";
import { clsx } from "clsx";
import styles from "./LDInput.module.css";
export const LDInput = ({
    className,
    id,
    dataTestId,
    name,
    value,
    type,
    placeholder,
    handleChange,
    suffix,
    errorMessage,
    prefix,
    isNotBottomSpace
}) => {
    return (
        <>
            <div className={clsx(
                isNotBottomSpace && "mb-0",
                styles.inputWrap
                )}>
                <Input
                    className={clsx(styles.customInput, className)}
                    id={id}
                    dataTestId={dataTestId}
                    name={name}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange}
                    suffix={suffix}
                    prefix={prefix}
                />
                {errorMessage && (
                    <p className={clsx(styles.errorMessage, "d-flex fw-400 text-red small error-msg-text mt-2 mb-0 letter-space-1")}>{errorMessage}</p>
                )}
            </div>
        </>
    )
}