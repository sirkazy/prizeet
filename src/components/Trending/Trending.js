import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Trending.css";
import arrow from "../../assets/arrow-top-corner.svg";
import TrendingItem from "../TrendingItem/TrendingItem";
import Trendings from "../../assets/Trendings";
export default function Trending() {
    return (_jsxs("div", { className: "trending", children: [_jsxs("div", { className: "content", children: [_jsxs("div", { className: "body1", children: [_jsx("h2", { children: "Explore the latest smartphones" }), _jsx("p", { children: "Experience top-notch performance and stunning designs\u2014all at your fingertips. Shop now for exclusive deals." })] }), _jsx("div", { className: "body2", children: _jsx("div", { className: "body2-content", children: _jsxs("a", { href: "", children: [_jsx("span", { children: "Show all" }), _jsx("img", { src: arrow, alt: "" })] }) }) })] }), _jsx("div", { className: "sections", children: Trendings.map((trend) => (_jsx(TrendingItem, { title: trend.name, price: trend.price, color1: trend.color1, color2: trend.color2, color3: trend.color3, color4: trend.color4, image: trend.image }, trend.name))) })] }));
}
