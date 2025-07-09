# TECH STACK AND LIBRARIES
Framework: React.js (Vite)
Routing: react-router-dom
Icons: @iconify/react
Styling: Vanilla CSS
Testing: Jest (with React Testing Library and Jest DOM)



# REDSESIGN DECISIONS #

# HERO SECTION #
Added a contextual background image so visitors immediately see the product category.
Separated the search bar from the form container:
Only when the input gains focus do the “price range” and “select perk” controls slide in (via CSS animation), reducing initial cognitive load.



# NAVBAR (MOBILE) #
Rebuilt slide‑in structure for smoother animation.
Added bottom border under each menu item for clearer separation.



# EXPLORE ITEMS #
Desktop: Grid layout displaying all items at once.
Mobile: Horizontally scrollable container with auto‑scroll animation (left ↔ right).



 
#  EXPERIENCE SECTION #
Grouped content into categories.
Mirror grid vs. scrollable behavior between desktop and mobile, like “Explore Items.”


#  FAQ COMPONENT #
Added a subtle background image for visual interest.



# FOOTER #
Moved newsletter signup to the end (just after Vendor/Buyer links).
Restyled the input and button for better alignment and contrast.


# GETTING STARTED #
Prerequisites
Node.js ≥ 14.x
npm or yarn



#  INSTALLATION  #

# Clone repo
git clone <your‑repo‑url>
cd prizeet

# Install dependencies
npm install
# or
yarn

#  DEVELOPMENT  #
# Start Vite dev server
npm run dev
# or
yarn dev

Visit http://localhost:5173 (or the port shown) in your browser.


#  PRODUCTION BUILD #
npm run build
# or
yarn build

# Preview the production build
npm run preview
# or
yarn preview


 #  TESTING  #
# Run all Jest tests
npm test
# or
yarn test

# For watch mode
npm test -- --watch
# or
yarn test --watch
yarn test

# For watch mode
npm test -- --watch
# or
yarn test --watch

