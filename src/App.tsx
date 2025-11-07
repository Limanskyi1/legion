import { RouterProvider } from "react-router-dom";
import { Toaster } from "./shared/ui/sonner";
import { router } from "@/app/providers/router/config";

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster />
        </>
    );
};

export default App;
