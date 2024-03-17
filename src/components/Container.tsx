import { twMerge } from "tailwind-merge";

/* Container component accepts children and className props */

type Props = {
  children: React.ReactNode;
  className?: string;
};


/* Tailwind merge overrides conflicting classes and keeps everything else untouched */

export const Container = ({ children, className }: Props) => {
  return <div className={twMerge("mx-auto max-w-[980px] px-6", className)}>{children}</div>;
};
