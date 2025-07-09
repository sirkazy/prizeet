import { Icon } from "@iconify/react"
import "./TrendingItem.css"

const TrendingItem = (props : any) => {
  return (
    <div className="trendingo">
    
        <div className="section-content">
            <div className="section-body-content">
                <img src={props.image} alt="" className="comedy-night-img"/>
                <div className="section-body-text">₦{props.price}</div>
            </div>
            <div className="main">
                <Icon icon="logos:infinix" style={{ color: '#39B54A', fontSize: '1.5rem' }} />
                <h3>{props.title}</h3>
                <div className="main-body">
                    <div>
                    <span>{props.color1}</span>
                    <span>{props.color2}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default TrendingItem
