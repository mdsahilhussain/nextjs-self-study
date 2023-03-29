import { FC, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm, sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const Paragraph: FC<ParagraphProps> = ({}) => {
  return <div>Paragraph</div>;
};
export default Paragraph;
