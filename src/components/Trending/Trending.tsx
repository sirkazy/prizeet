
import "./Trending.css";
import arrow from "../../assets/arrow-top-corner.svg";
import TrendingItem from "../TrendingItem/TrendingItem";
import Trendings from "../../assets/Trendings";

export default function Trending() {

  return (
    <div className="trending">
      <div className="content">
        <div className="body1">
          <h2>Explore the latest smartphones</h2>
          <p>Experience top-notch performance and stunning designs—all at your fingertips. Shop now for exclusive deals.</p>
        </div>
        <div className="body2">
          <div className="body2-content">
            <a href="">
              <span>Show all</span>
              <img src={arrow} alt="" />
            </a>
          </div>
          </div>
      </div>

      <div className="sections">
    {Trendings.map((trend) => (
      <TrendingItem
        key={trend.name}
        title={trend.name}
        price={trend.price}
        color1={trend.color1}
        color2={trend.color2}
        image={trend.image}
      />
    ))}
  </div>
</div>
  );
}
