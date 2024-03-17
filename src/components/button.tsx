import { twMerge } from "tailwind-merge";


// Define the props for the Button component taking in children and an optional size prop

type Props = {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
};


export const Button = ({ children , size = "md"}: Props) => {


    // Define an object with the class names for each size

    const sizeClassNames = {
        sm: "text-xs px-2 py-1",
        md: "text-sm px-3 py-1",
        lg: "text-lg px-4 py-2",
    }



    return (
        <button className={twMerge("bg-white text-textBlack rounded-full px-3 py-1", sizeClassNames[size])}>{children}</button>
    )
}