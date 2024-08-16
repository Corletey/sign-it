import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <Circles
      visible={true}
      width="50"
      color="white"
      ariaLabel="circles-loading"
    />
  );
};

export default Loader;

