"use client";

import clsx from "clsx";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";

interface ImageProps extends NextImageProps {
  rounded?: string;
}

const sanitizeSrc = (src: any): string => {
  if (!src) return "";                 // handle null/undefined
  if (typeof src !== "string") return "";

  return src.replace(/^\/+/, "");      // remove leading slashes
};

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const Image = (props: ImageProps) => {
  const { alt, src, className, rounded, ...rest } = props;
  const [isLoading, setLoading] = useState(true);

  // sanitize URL
  const cleanedSrc = sanitizeSrc(src);

  // if invalid URL, fallback to unoptimized
  const shouldUnoptimize = !isValidUrl(cleanedSrc);

  return (
    <div
      className={clsx(
        "overflow-hidden",
        isLoading ? "animate-pulse" : "",
        rounded,
      )}
    >
      <NextImage
        className={clsx(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          rounded,
          className,
        )}
        src={cleanedSrc}
        alt={alt}
        loading="lazy"
        quality={100}
        unoptimized={shouldUnoptimize}   // prevent Next.js error
        onLoad={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};

export default Image;
