import { ReactNode } from "react";
import { HashLoader } from "react-spinners";

const DataLoading = (props: {
  isLoading: boolean;
  children: ReactNode;
  height?: string;
}) => {
  if (props.isLoading)
    return (
      <div
        className="flex justify-center items-center h-16 py-5"
        style={{ height: `${props.height}` }}
      >
        <HashLoader color="#5a2e98" size={40} />
      </div>
    );

  return props.children;
};
export default DataLoading;
