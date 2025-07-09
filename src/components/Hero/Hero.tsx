import React, { useState } from 'react'
import './Hero.css'
import { Icon } from '@iconify/react'

const PERKS = [
  'Free promotional banners',
  'Pick up from physical store',
  'Fast delivery in Lagos',
  'Free shipping in Lagos',
  '7-day return policy',
  'Same-Day delivery in Lagos region',
  'Verified seller badge',
  '24/7 free support',
  'Pay On Delivery',
  'Free Technical Support',
  'Early Access to New Features',
  'Free Shipping from #750,000',
  '1 year warranty',
  'Standard',
  'Exclusive seller support'
]

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(10000000)
  const [perksState, setPerksState] = useState<Record<string, boolean>>(PERKS.reduce((acc, perk) => {
    acc[perk] = false
    return acc
  }, {} as Record<string, boolean>))

  const toggleDropdown = (type: string) => {
    setOpenDropdown(prev => (prev === type ? null : type))
  }

  const handlePerkChange = (perk: string) => {
    setPerksState(prev => ({ ...prev, [perk]: !prev[perk] }))
  }

  const handleMinChange = (value: number) => {
    setMinPrice(value <= maxPrice ? value : maxPrice)
  }

  const handleMaxChange = (value: number) => {
    setMaxPrice(value >= minPrice ? value : minPrice)
  }

  return (
    <div className='hero'>
      <div className='hero-body'>
        <div className='hero-body-content'>

          {/* Headline Section */}
          <div className='section1'>
            <h1>Save Big On Smartphones</h1>
            <p>Experience a smarter way to shop — compare smartphones, prices, and unbeatable deals from trusted vendors, all in one place.</p>
          </div>

          <div className='section2'>
            <div className='section2-body1'>
              <div className='input'>
                <input
                  type='text'
                  className='search-icon'
                  placeholder='Need a smartphone?'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <button>Search</button>
              </div>

              <div className='section2-body2'>
                <p>Popular searches</p>
                <div className='body'>
                  <div className="section">
                  <button type='button' onClick={() => setSearchQuery('I want affordable phones')}>I want affordable phones</button>
                  </div>
                  <div className="section">
                  <button type='button' onClick={() => setSearchQuery('Show me premium phones')}>Show me premium phones</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters form */}
            <form className='filters-form'>

              
              <div className='filter-buttons'>
                <div className="body1">
                <button type='button' className='filter-btn' onClick={() => toggleDropdown('price')}>
                  <div className='button-div'>
                    <Icon icon='solar:tag-outline' width={16} height={16} />
                    <span>₦{minPrice.toLocaleString()} - ₦{maxPrice.toLocaleString()}</span>
                    <Icon icon='majesticons:chevron-down' width={16} height={16} />
                  </div>
                </button>
                </div>

                <div className="body1">
                <button type='button' className='filter-btn' onClick={() => toggleDropdown('perks')}>
                  <div className='button-div'>
                    <Icon icon='solar:tag-outline' width={16} height={16} />
                    <span>Select Perks</span>
                    <Icon icon='majesticons:chevron-down' width={16} height={16} />
                  </div>
                </button>
                </div>
              </div>

              {/* Price Dropdown */}
              {openDropdown === 'price' && (
                <div className='dropdown price-dropdown'>
                  <div className='range'>
                    <div className='range-content'>
                      <span>₦{minPrice.toLocaleString()}</span>
                      <span>₦{maxPrice.toLocaleString()}</span>
                    </div>
                    <div className='sliders'>
                      <input
                        type='range'
                        min={0}
                        max={10000000}
                        step={10000}
                        value={minPrice}
                        onChange={e => handleMinChange(Number(e.target.value))}
                        className='thumb thumb--left'
                      />
                      <input
                        type='range'
                        min={0}
                        max={10000000}
                        step={10000}
                        value={maxPrice}
                        onChange={e => handleMaxChange(Number(e.target.value))}
                        className='thumb thumb--right'
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Perks Dropdown */}
              {openDropdown === 'perks' && (
                <div className='dropdown perks-dropdown'>
                  {PERKS.map(perk => (
                    <label key={perk} className='perk-item'>
                      <input type='checkbox' checked={perksState[perk]} onChange={() => handlePerkChange(perk)} />
                      <span>{perk}</span>
                    </label>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero