import { useState, type ImgHTMLAttributes, type ReactNode } from "react";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackText?: string;
}

export function SafeImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  fallbackText,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If error, do not render a broken image; render a clean architectural placeholder or null
  if (hasError || !src) {
    if (fallbackText) {
      return (
        <div
          className={`flex items-center justify-center bg-[#F0EFEB] border border-[#E5E3DD] text-[#707376] text-xs font-medium p-6 rounded-xl ${containerClassName}`}
        >
          <span>{fallbackText}</span>
        </div>
      );
    }
    return null;
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        referrerPolicy="no-referrer"
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}

