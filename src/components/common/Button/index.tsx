import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface BtnProps {
  icon?: ReactNode;
  name?: string;
  onClick?: () => void;
  variant: "primary" | "secondary" | "danger";
  to?: string;
  className?: string;
}
const Button = ({ icon, name, variant, onClick, to, className }: BtnProps) => {
  const variantStyles = {
    primary: "bg-[var(--bg-btn)] hover:bg-[var(--bg-btn-hover)]",
    secondary: "bg-[#3a2458] hover:bg-[#5b388b]",
    danger: "bg-red-500 hover:bg-red-600",
  };

  let Comp: React.ElementType = "button"; // ✅ Mặc định là button
  const props: any = { onClick };
  if (to) {
    Comp = Link;
    props.to = to;
  } else {
    props.type = "button"; // ✅ Đảm bảo không lỗi khi dùng button
  }
  return (
    <Comp
      {...props}
      className={` ${variantStyles[variant]} duration-300 cursor-pointer flex flex-row gap-2 items-center px-7 py-2.5 justify-center
     rounded-sm  text-white font-bold text-[16px] ${className}`}
    >
      <span>{name}</span>
      {icon ? <span>{icon}</span> : ""}
    </Comp>
  );
};

export default Button;
