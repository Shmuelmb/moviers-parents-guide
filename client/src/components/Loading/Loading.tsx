import "./Loading.css";
import { LoadingType } from "../../types/loading.models";

type isLoadingType = {
  isLoading: LoadingType;
};
const Loading: React.FC<isLoadingType> = ({ isLoading }) => {
  return (
    <div className={isLoading ? "lds-roller" : "none"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
