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
    primary:
      "bg-[var(--bg-btn)] hover:bg-[var(--bg-btn-hover)] justify-center px-7 ",
    secondary: "bg-[#65439b78] hover:bg-[#5b388b]",
    danger:
      "bg-[#65439b78] hover:bg-[#5b388b] !text-[14px] justify-between px-3 py-[11px]",
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
      className={` ${variantStyles[variant]} text-white duration-300  cursor-pointer flex flex-row gap-2 items-center py-2.5 
     rounded-sm font-bold  ${className}`}
    >
      {name ? <span>{name}</span> : ""}
      {icon && <span>{icon}</span>}
    </Comp>
  );
};

export default Button;
