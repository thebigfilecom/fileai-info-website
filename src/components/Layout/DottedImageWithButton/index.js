import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { parseMarkdownLikeText } from "@site/src/utils/textUtils";

//
// This component:
// shows a dotted image and a button below

export default function DottedImageWithButton({
  imageName,
  buttonLabel,
  buttonLink,
}) {
  // Construct the image URL using the imageName prop, we may want to handle image load errors in the future
  const imageUrl = useBaseUrl(`/img/dotted-icons/${imageName}.svg`);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrap}>
        <img src={imageUrl} alt={buttonLabel} />
      </div>
      <div className={styles.buttonWrap}>
        <Link
          to={buttonLink}
          className={clsx("button button--primary", styles.buttonLink)}
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
