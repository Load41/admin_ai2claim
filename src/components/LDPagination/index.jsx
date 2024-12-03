import clsx from "clsx";
import styles from "./LDPagination.module.css";
import { Pagination } from "antd";

export function LDPagination({
  total,
  defaultCurrent,
  className,
  onChange,
  showTotal,
  ...rest
}) {
  return (
    <>
      <Pagination
        defaultCurrent={defaultCurrent}
        total={total}
        className={className}
        defaultPageSize={showTotal}
        onChange={onChange}
        {...rest}
      />
    </>
  );
}
