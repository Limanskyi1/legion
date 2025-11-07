import { RouterProvider } from "react-router-dom";
import { Toaster } from "./shared/ui/sonner";
import { routerConfig } from "./app/providers/router";

const App = () => {
    return (
        <>
            <RouterProvider router={routerConfig} />
            <Toaster />
        </>
    );
};

export default App;
