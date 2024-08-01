import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FlexBox from "./pages/FlexBox";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/flexbox',
        element: <FlexBox />
    }
])