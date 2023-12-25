import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/UserProvider";
import { ThemeProvider } from "@/context/ThemeContex";
import { StepProvider } from "@/context/StepContext";
import TransactionProvider from "@/context/TransactionContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <StepProvider>
          <TransactionProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </TransactionProvider>
        </StepProvider>
      </ThemeProvider>
    </UserProvider>
  );
}