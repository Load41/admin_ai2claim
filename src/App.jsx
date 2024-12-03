import { Suspense, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spin } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={<Spin />}>
        <RouterProvider fallbackElement={"Loader..."} router={router} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Suspense>
    </>
  );
}

export default App;
