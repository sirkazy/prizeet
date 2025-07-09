import { Icon } from "@iconify/react/dist/iconify.js"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="section">

            <div className="links-container">

            <div className="links-head">
                <h4>Products</h4>
                <div className="links">
                <div className="single-link">
                <p>For Vendors</p>
                 <Icon icon="lucide:arrow-up-right" width={20} height={20} style={{ color: '#ffffff' }}/>
                 </div>
                <div className="single-link">
                <p>For Buyers</p>
                <Icon icon="lucide:arrow-up-right" width={20} height={20} style={{ color: '#ffffff' }}/>
                </div>
                </div>
            </div>

            <div className="links-head">
                <h4>Company</h4>
                <div className="links">
                  <div className="single-link">
                    <p>About Us</p>
                    <Icon icon="lucide:arrow-up-right" width={20} height={20} style={{ color: '#ffffff' }}/>
                    </div>
                    <div className="single-link">
                    <p>Contact Us</p>
                    <Icon icon="lucide:arrow-up-right" width={20} height={20} style={{ color: '#ffffff' }}/>
                    </div>
                </div>
            </div>

            </div>

            <div className="newsletter">
                <h4>Get Beta deals straight to your email</h4>
                <p>We send weekly affordable deals straight to your inbox</p>
                <div className="input">
                <input type="" placeholder="Enter email address"/>
                <button>Subscribe </button>
              </div>
            </div>
        </div>

        <div className="handle">
          <div className="left">
            <p>©2025 Prizeet. All rights reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className="right">
            <p>Follow Us</p>
            <Icon icon="mdi:facebook" width={24} height={24} style={{ color: "#ffffff" }} />
            <Icon icon="mdi:instagram" width={24} height={24} style={{ color: "#ffffff" }} />
            <Icon icon="ic:baseline-tiktok" width={24} height={24} style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


