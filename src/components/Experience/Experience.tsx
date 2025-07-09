import React from 'react'
import "./Experience.css"
import { Icon } from '@iconify/react/dist/iconify.js'

const Experience : React.FC = () => {
  return (
    <div className='experience'>
      <h2>Tailored experiences for savvy shoppers like you</h2>
      <div className="sections">

        <div className="section">
            <div className="header">
             <Icon
      icon="solar:card-outline"
      className="w-6 h-6 text-pzBlack-700 mt-0.5"
      data-toggle-fadein="true"
      data-animation="fadeInOut"
    />
            <h3>Trusted Payment</h3>
            </div>
            <p>Pay with ease through WhatsApp! Once your invoice is ready, complete your purchase securely via direct chat — fast, safe, and personal. For your protection, you'll also receive a two-factor authentication code from team.prizeet@gmail.com to confirm that the invoice was legitimately issued by Prizeet. Always ensure the email is from team.prizeet@gmail.com before proceeding with any payment.</p>
        </div>

         <div className="section">
            <div className="header">
            <Icon
      icon="solar:dialog-outline"
      className="w-6 h-6 text-pzBlack-700 mt-0.5"
      data-toggle-fadein="true"
      data-animation="fadeInOut"
    />
            <h3>24/7 Customer Support</h3>
            </div>
            <p>Enjoy peace of mind with our 24/7 Customer Support, ready to assist you anytime, any day. Need help? <a href=""> Contact support</a></p>
         </div>

         <div className="section">
            <div className="header">
            <Icon
      icon="solar:magnifer-outline"
      className="w-6 h-6 text-pzBlack-700 mt-0.5"
      data-toggle-fadein="true"
      data-animation="fadeInOut"
    />
            <h3>Advanced Search Filters</h3>
            </div>
            <p>Refine your shopping experience with our Advanced Search Filters, allowing you to easily find exactly what you're looking for by brand, price, features, and more!</p>
        </div>

         <div className="section">
            <div className="header">
            <Icon
      icon="solar:routing-2-outline"
      className="w-6 h-6 text-pzBlack-700 mt-0.5"
      data-toggle-fadein="true"
      data-animation="fadeInOut"
    />
            <h3>Order Tracking</h3>
            </div>
            <p>Stay updated on your purchase with our real-time Order Tracking feature, ensuring you know exactly when your items will arrive!</p>
        </div>

         <div className="section">
            <div className="header">
              <Icon
      icon="solar:bag-heart-outline"
      className="w-6 h-6 text-pzBlack-700 mt-0.5"
      data-toggle-fadein="true"
      data-animation="fadeInOut"
    />
            <h3>Wishlist & Save for Later</h3>
            </div>
            <p>Save your favorite items for later and create your perfect wishlist to make shopping a breeze!</p>
        </div>

         <div className="section">
            <div className="header">
            <Icon
      icon="solar:letter-unread-outline"
      className="w-6 h-6 text-pzBlack-700 mt-0.5"
      data-toggle-fadein="true"
      data-animation="fadeInOut"
    />
            <h3>Back-in-Stock Notifications</h3>
            </div>
            <p>Sign up for Back-in-Stock Notifications and be the first to know when your favorite items are available again!</p> 
        </div>

      </div>
    </div>
  )
}

export default Experience
