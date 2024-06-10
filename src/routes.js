import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base } from "layout/Base";
import { Home } from "pages/Home";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}