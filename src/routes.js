import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base } from "layout/Base";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<div>home</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}