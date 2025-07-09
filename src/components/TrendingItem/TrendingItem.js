import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./TrendingItem.css";
const TrendingItem = (props) => {
    return (_jsx("div", { className: "trendingo", children: _jsxs("div", { className: "section-content", children: [_jsxs("div", { className: "section-body-content", children: [_jsx("img", { src: props.image, alt: "", className: "comedy-night-img" }), _jsxs("div", { className: "section-body-text", children: ["\u20A6", props.price] })] }), _jsxs("div", { className: "main", children: [_jsx("h3", { children: props.title }), _jsx("div", { className: "main-body", children: _jsxs("div", { children: [_jsx("span", { children: props.color1 }), _jsx("span", { children: props.color2 }), _jsx("span", { children: props.color3 }), _jsx("span", { children: props.color4 })] }) })] })] }) }));
};
export default TrendingItem;
