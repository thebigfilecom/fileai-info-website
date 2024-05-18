import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

//
// This component shows text in one column

export default function OneColumnBox({ text }) {

  return (
    <div className={styles.boxWrap}>
      <div className={clsx("row", styles.row)}>
        <div className={clsx("col col--12", styles.leftColumn)}>
          {Array.isArray(text) ? (
            text.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>{text}</p>
          )}
        </div>
      </div>
    </div>
  );
}
