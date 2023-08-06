import { ToastContainer, ToastOptions, toast } from "react-toastify";
import { hideToast } from "../../redux/features/toasts/toastsSlice";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "../../index.css";
// import { RootState } from "../../redux/store";

// interface RootStateWithToast extends RootState {
//   toast: string;
// }

const Toast: React.FC = () => {
  const dispatch = useAppDispatch();
  const toastState = useAppSelector((state) => state.toasts);

  React.useEffect(() => {
    if (toastState.message) {
      const options: ToastOptions = {
        type: toastState.type || "default",
        onClose: () => dispatch(hideToast()),
        style: {
          width: "150px", // Set the width to 200px
          height: "40px", // Set the height to 100px
          display: "flex",
        },
      };

      toast(toastState.message, options);
    }
  }, [dispatch, toastState.message, toastState.type]);

  return <ToastContainer />;
};

export default Toast;
