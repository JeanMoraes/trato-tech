import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base } from "layout/Base";
import { Home } from "pages/Home";
import { Category } from "pages/Category";
import { Cart } from "pages/Cart";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />} />
                    <Route path="/categoria/:slug" element={<Category />} />
                    <Route path="/carrinho" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}