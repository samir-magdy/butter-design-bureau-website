import type { CSSProperties, ImgHTMLAttributes } from "react";
import placeholders from "@/lib/blur-placeholders.json";

type Placeholder = { w: number; h: number; blur: string };
type Placeholders = Record<string, Placeholder | undefined>;

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
};

export default function BlurImage({ src, style, width, height, ...rest }: Props) {
  const entry = (placeholders as Placeholders)[src];
  const bgStyle: CSSProperties = entry?.blur
    ? {
        backgroundImage: `url(${entry.blur})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <img
      src={src}
      width={width ?? entry?.w}
      height={height ?? entry?.h}
      style={{ ...bgStyle, ...style }}
      {...rest}
    />
  );
}
