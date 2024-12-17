import { Button } from "antd";
import clsx from "clsx";
import styles from "./LDButton.module.css";

export function LDButton({
  customClass,
  type,
  id,
  handleClick,
  borderSize,
  children,
  block,
  icon,
  shape,
  size,
  iconPosition,
  isSecondaryBtn,
  isFillBtn,
  isYellowBtn,
  isSmallBtn,
  isGrayBg,
  isGreenBg,
  isRedBg,
  isSkyBlueBg,
  isDarkBlueBg,
  isOrangeBg,
  loading,
  disabled,
  ...rest
}) {
  return (
    <>
      <Button
        className={clsx(
          isSecondaryBtn ? styles.isSecondaryBtn : "",
          isFillBtn ? styles.isFillBtn : "",
          isYellowBtn ? styles.isYellowBtn : "",
          isSmallBtn ? styles.isSmallBtn : "",
          isGrayBg ? styles.isGrayBg : "",
          isGreenBg ? styles.isGreenBg : "",
          isRedBg ? styles.isRedBg : "",
          isSkyBlueBg ? styles.isSkyBlueBg : "",
          isDarkBlueBg ? styles.isDarkBlueBg : "",
          isOrangeBg ? styles.isOrangeBg : "",
          styles.button,
          customClass,
          borderSize == "md" ? styles.borderMd : styles.borderDefault
        )}
        type={type}
        id={id}
        onClick={handleClick}
        block={block}
        icon={icon}
        shape={shape}
        size={size}
        iconPosition={iconPosition}
        loading={loading}
        disabled={disabled}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
}
