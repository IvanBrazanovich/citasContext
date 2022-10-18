import React from "react";
import styles from "../styles/components/Error.module.scss";

const Error = ({ children }) => {
  return <div className={styles.errorWrapper}>{children}</div>;
};

export default Error;
