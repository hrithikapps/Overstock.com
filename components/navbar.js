function navbar(){
    return `<div id="navbar">
    <div id="upper_navbar">
        <div id="inside_upper_navbar">
            <div id="navbar1">
                <a href="index.html">
                    <div>
                        <svg height="32" width="181" color="#FF1F2C" viewBox="0 0 164 29"><g fill="none" fill-rule="evenodd"><g fill="#000"><path d="M164 23.126h-.274v-1.96h-.01l-.764 1.96h-.178l-.763-1.96H162v1.96h-.275v-2.188h.506l.631 1.617h.01l.622-1.617H164v2.188zm-2.684-1.98h-.705v1.98h-.274v-1.98h-.705v-.208h1.684v.208zM34.58 14.78c0 3.558 1.94 7.117 5.855 7.117 3.914 0 5.855-3.559 5.855-7.118 0-3.558-1.94-7.117-5.855-7.117-3.915 0-5.856 3.559-5.856 7.117m13.75 0c0 4.788-2.783 8.833-7.894 8.833-5.112 0-7.894-4.045-7.894-8.833s2.782-8.831 7.894-8.831c5.111 0 7.894 4.043 7.894 8.831M47.965 6.433h2.264l5.241 14.655h.065l5.176-14.655h2.103L56.57 23.126h-2.167zM75.506 13.615C75.409 10.54 73.5 7.662 70.2 7.662c-3.332 0-5.176 2.912-5.5 5.953h10.806zM64.7 15.329c.032 2.977 1.585 6.568 5.5 6.568 2.977 0 4.594-1.747 5.24-4.27h2.04c-.874 3.785-3.074 5.984-7.28 5.984-5.306 0-7.538-4.076-7.538-8.832 0-4.4 2.232-8.831 7.538-8.831 5.37 0 7.506 4.69 7.344 9.381H64.7zM98.486 11.318c-.097-2.524-2.038-3.656-4.367-3.656-1.812 0-3.947.712-3.947 2.88 0 1.811 2.07 2.458 3.462 2.814l2.717.615c2.33.355 4.756 1.714 4.756 4.626 0 3.623-3.591 5.015-6.697 5.015-3.883 0-6.535-1.812-6.859-5.889h2.039c.162 2.75 2.2 4.174 4.917 4.174 1.91 0 4.562-.841 4.562-3.17 0-1.941-1.812-2.589-3.656-3.042l-2.62-.582c-2.653-.712-4.66-1.618-4.66-4.465 0-3.397 3.333-4.69 6.277-4.69 3.332 0 5.985 1.747 6.114 5.37h-2.038zM106.109 6.433h3.397v1.714h-3.397v11.259c0 1.326.194 2.103 1.65 2.2.582 0 1.165-.033 1.747-.097v1.747c-.615 0-1.197.064-1.812.064-2.718 0-3.656-.905-3.623-3.752V8.148h-1.973V6.432h1.973V1.419h2.038v5.014zM111.924 14.78c0 3.558 1.941 7.117 5.856 7.117s5.856-3.559 5.856-7.118c0-3.558-1.941-7.117-5.856-7.117s-5.856 3.559-5.856 7.117m13.75 0c0 4.788-2.783 8.833-7.894 8.833-5.111 0-7.894-4.045-7.894-8.833s2.783-8.831 7.894-8.831c5.111 0 7.894 4.043 7.894 8.831M140.117 11.674c-.55-2.491-2.07-4.012-4.723-4.012-3.915 0-5.856 3.559-5.856 7.117 0 3.56 1.94 7.118 5.856 7.118 2.523 0 4.594-1.974 4.852-4.756h2.038c-.55 4.012-3.17 6.47-6.89 6.47-5.112 0-7.894-4.043-7.894-8.832 0-4.788 2.782-8.832 7.894-8.832 3.559 0 6.308 1.91 6.761 5.727h-2.038zM144.425.027h2.038v14.494l9.253-8.088h2.717l-7.117 6.179 7.603 10.514h-2.556l-6.6-9.09-3.3 2.75v6.34h-2.038zM87.083 6.28c-2.342.324-4.105 1.796-4.981 4.067h-.065V6.433H80.16v16.693H82.2V14.23c0-3.03 1.931-5.488 4.884-5.926V6.28z"></path></g><g fill="#FF1F2C"><path d="M.666.06v14.66C2.828 8.896 8.816 4.443 14.9 4.443c6.74 0 11.04 5.464 9.609 12.202-1.105 5.195-5.295 9.628-10.243 11.388h14.374V.061H.666z"></path><path d="M20.04 16.645c0-5.824-3.463-10.547-7.734-10.547s-7.734 4.723-7.734 10.547c0 5.825 3.463 10.547 7.734 10.547s7.734-4.722 7.734-10.547"></path></g></g></svg>
                    </div>
                </a>
            </div>
            <div id="searchbar">
              
                <input type="text" placeholder="Search" id="inputsearch">
                <div>
                    <button id="search_btn">
                        <svg width="22" height="22" viewBox="0 0 24 24" stroke="#ffffff" fill="#ff1f2c"><title>Search</title><path d="M22 22l-6.344-6.344M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="inherit" fill="#ff1f2c" stroke-width="2" stroke-miterlimit="0" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
                </div>
  
            </div>
            
            
            <div id="logos">
                <a href="account.html">
                    <div>
                        <svg class="UserDropDowns_icon_06" width="22" height="22" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337"><title>User</title><path d="M1 23c0-5.523 4.477-10 10-10h2c5.523 0 10 4.477 10 10M12 13a6 6 0 100-12 6 6 0 000 12z" stroke="inherit" fill="none" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                    <p>Account</p>
                </a>
                <a href="">
                    <div>
                        <svg class="UserDropDowns_icon_06" width="22" height="22" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337"><title>Heart</title><path d="M21.241 3.757A6 6 0 0012 4.684a6 6 0 10-9.242 7.558l9.241 9.243 9.243-9.243a6 6 0 000-8.485z" fill="none" stroke="inherit" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                       
                    </div>
                    <p>Lists</p>
                </a>
                <a href="cart.html">
                    <div>
                        <svg class="UserDropDowns_icon_06" width="22" height="21" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337"><title>Cart Empty</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7.174 14.4L5.208.833C5.14.356 4.697 0 4.174 0h-3.13C.466 0 0 .43 0 .96s.467.96 1.043.96H3.26l1.966 13.567c.07.477.512.833 1.035.833h14.608c.498 0 .926-.323 1.024-.772l2.087-9.6c.113-.52-.254-1.025-.819-1.13-.565-.103-1.115.234-1.228.754L20.014 14.4H7.174zm.13 9.6a2.087 2.087 0 100-4.174 2.087 2.087 0 000 4.174zm14.61-2.087a2.087 2.087 0 11-4.175 0 2.087 2.087 0 014.174 0z" stroke="none" fill="inherit"></path></svg>
                    </div>
                    
                    <p>Cart</p>
                </a>
            </div>
        </div>
        
        
        
    </div>
    <nav id="lower_navbar">
        <div id="drop1">
            
            <a href="furniture.html">
                Furniture
                </a>
            </div>
            <div id="drop2">
                <a href="rugs.html">
                Rugs
                </a>
            </div>
            <div id="drop3">
                <a href="decor.html">
                Decor
                </a>
            </div>
            <div id="drop4">
                <a href="bed and bath.html">
                Bed & Bath
                </a>
            </div>
            <div id="drop5">
                <a href="home improvement.html">
                Home Improve
                </a>
            </div>
            <div id="drop6">
                <a href="kitchen.html">
                Kitchen
                </a>
            </div>
            <div id="drop7">
                <a href="outdoor.html">
                Outdoor
                </a>
            </div>
            <div id="drop8">
                <a href="jewelry.html">
                Jewelry
                </a>
            </div>
            <div id="drop9">
                <a href="lighting.html">
                Lighting
                </a>
            </div>
            <div id="drop10">
                <a href="kids and baby.html">
                Kids & baby
            </a>
            </div>
            <div id="drop11">
                <a href="more.html">
                More</a>
            </div>
            <div id="drop12">
                <a href="">
                    Ideas
                </a>
            </div>
            <div id="drop13">
                <a href="">Sales & deals</a>
            </div>
    
    </nav>
    <div id="drop_1">
        <div>
            <a href="#" class="bold_letters">Living Room furniture</a>
            <a href="#">Sofas & Couches</a>
            <a href="#">Sectionals</a>
            <a href="#">Benches</a>
            <a href="#">Ottomans & Poufs</a>
            <a href="#">Accent Chairs</a>
            <a href="#">Recliners</a>
            <a href="#">Coffee & Accent Tables</a>
            <a href="#">TV Stands</a>
            <a href="#"class="bold_letters" >Patio & Outdoor furniture</a>
            <a href="#">Patio Furniture Sets</a>
            <a href="#">Sofas, Chairs & Sectionals</a>
            <a href="#">Dining Sets</a>
            <a href="#">Coffee & Side Tables</a>
            <a href="#">Chaise Lounghes</a>
            <a href="#">Adirondack Chairs</a>
            <a href="#">Hammocks & Swings</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Bedroom Furniture</a>
            <a href="#" >Beds</a>
            <a href="#" >Bedroom Sets</a>
            <a href="#" >Headboards</a>
            <a href="#" >Bed Frames</a>
            <a href="#" >Dressers & Chests</a>
            <a href="#" >Nightstands</a>
            <a href="#" >Armoires & Wardrobes</a>
            <a href="#" >Mattress</a>
            <a href="#" >Kids Beds</a>
            <a href="#" class="bold_letters" >Office Furniture</a>
            <a href="#" >Desks</a>
            <a href="#" >Office Chairs</a>
            <a href="#" >Small Space Desks</a>
            <a href="#" >Office Shelves & storage</a>
            <a href="#" >File Cabinets</a>
            <a href="#" >Office & Conference Tables</a>
        </div>
        <div>
            <a href="#" class="bold_letters" >Dining Kitchen & Bar</a>
            <a href="#" >Kitchen & Dining Sets</a>
            <a href="#" >Kitchen & Dining Chairs</a>
            <a href="#" >Kitchen & Dining Tables</a>
            <a href="#" >Counter & Bar Stools</a>
            <a href="#" >Bar Tables</a>
            <a href="#" >Buffets & Sideboards</a>
            <a href="#" >Home Bars</a>
            <a href="#" >Kitchen Islands & carts</a>
            <a href="#" >Kitchen Furniture</a>
            <a href="#" >More</a>
            <a href="#" >Kitchen & Dining Tables</a>
            <a href="#" >Counter & Bar Stools</a>
            <a href="#" >Bar Tables</a>
            <a href="#" >Buffets & Sideboards</a>
            <a href="#" >Home Bars</a>
            <a href="#" >Kitchen Islands & carts</a>
            <a href="#" >Kitchen Furniture</a>
        </div>
        <div>
            <img class="div_img"src="https://ak1.ostkcdn.com/images/products/is/images/direct/0e1295694a2ff3b54378e6e92b4c0a1f6f3e1407/Mervynn-Mid-century-Fabric-Recliner-Chairs-%28Set-of-2%29-by-Christopher-Knight-Home.jpg?imwidth=320"
                alt=""/>
            <a href="#" class="bold_letters" >Extra 15% off</a>
            <a href="#" >Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters">More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_2">
        <div>
            <a href="#" class="bold_letters">Area Rugs By Size</a>
            <a href="#" >3'×5'</a>
            <a href="#" >4'×6'</a>
            <a href="#" >5'×8'</a>
            <a href="#" >6'×9'</a>
            <a href="#" >7'×9'</a>
            <a href="#" >8'×10'</a>
            <a href="#" >9'×10'</a>
            <a href="#" >10'×14'</a>
            <a href="#" >Runner</a>
            <a href="#" class="bold_letters">Trending Rugs</a>
            <a href="#" >Washable Rugs</a>
            <a href="#" >Round Rugs</a>
            <a href="#" >Shag Rugs</a>
            <a href="#" >Wool Rugs</a>
            <a href="#" >Jute Rugs</a>
            <a href="#" >Cowhide Rugs</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Area Rugs By Color</a>
            <a href="#" >Grey</a>
            <a href="#" >Blue</a>
            <a href="#" >Ivory</a>
            <a href="#" >White</a>
            <a href="#" >Black</a>
            <a href="#" >Red</a>
            <a href="#" >Brown</a>
            <a href="#" >Orange</a>
            <a href="#" >Pink</a>
            <a href="#" class="bold_letters">Area Rugs By Style</a>
            <a href="#" >Modern & Contemporary</a>
            <a href="#" >Bohemian & Eclectic</a>
            <a href="#" >Persian</a>
            <a href="#" >Geometric</a>
            <a href="#" >Abstract</a>
            <a href="#" >Solid</a>
        </div>
        <div>
            <a href="#" class="bold_letters" >Rugs By Type</a>
            <a href="#" >Area Rugs</a>
            <a href="#" >Outdoor Rugs</a>
            <a href="#" >Rug Pads</a>
            <a href="#" >One of a Kind Rugs</a>
            <a href="#" >Kids & Tweens Rugs</a>
            <a href="#" >Door Mats</a>
            <a href="#" >Stair Treads</a>
            <a href="#" >Kitchen Mats & Rugs</a>
            <a href="#" >Bath & Rugs</a>
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/b320fbbc82c3e52fbc4d9677db915ee03aa504c1/SAFAVIEH-Madison-Diederike-Boho-Medallion-Distressed-Rug.jpg?imwidth=320"
                alt=""/>
            <a href="#" >Extra 15% off</a>
            <a href="#" >Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters">More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_3">
        <div>
            <a href="#" class="bold_letters" >Mirrors</a>
            <a href="#" >Wall Mirrors</a>
            <a href="#" >Bathroom Vanity Mirrors</a>
            <a href="#" >Floor Mirrors</a>
            <a href="#" >Full Length Mirrors</a>
            <a href="#" >Rectangular Mirrors</a>
            <a href="#" >Round Mirrors</a>
            <a href="#" >Window Mirrors</a>
            <a href="#" >Mirror Sets</a>
            <a href="#" class="bold_letters">Art Gallery</a>
            <a href="#" >Gallery Wrapped Canvas</a>
            <a href="#" >Canvas Art</a>
            <a href="#" >Framed Prints</a>
            <a href="#" >Unframed Prints</a>
            <a href="#" >Metal Art</a>
            <a href="#" >Wood wall Art</a>
            <a href="#" >Matching Sets</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Decorative Accessories</a>
            <a href="#" >Indoor Fireplaces</a>
            <a href="#" >Outdoor Decor</a>
            <a href="#" >Accent Pieces</a>
            <a href="#" >Silk Plants</a>
            <a href="#" >Candles and Holders</a>
            <a href="#" >Vases</a>
            <a href="#" >Room Dividers</a>
            <a href="#" >Photo Frames and Albums</a>
            <a href="#" >Planters, Hangers & Stands</a>
            <a href="#" class="bold_letters">Window Treatments</a>
            <a href="#" >Curtains & Drapes</a>
            <a href="#" >Blinds & Shades</a>
            <a href="#" >Curtain Rods & Hardware</a>
            <a href="#" >Sheer Curtains</a>
            <a href="#" >Blackout Curtains</a>
            <a href="#" >Kitchen Curtains</a>
            <a href="#" >Valances</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Wall Decor</a>
            <a href="#" >Decorative Shelves</a>
            <a href="#" >Wall Tapestries</a>
            <a href="#" >Clocks</a>
            <a href="#" >Wall Decals</a>
            <a href="#" >Acrylic Wall Art</a>
            <a href="#" class="bold_letters" >Throw Pillows</a>
            <a href="#" >Accent Pillows</a>
            <a href="#" >Outdoor Pillows</a>
            <a href="#" >Floor Pillows</a>
            <a href="#" >Poufs</a>
            <a href="#" >Pillow Covers</a>
            <a href="#" >Bed Rest</a>
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/d28cbaf23c439090fa43c0cf806ac147b7e1040f/Arched-Dressing-Mirror-Full-length-Floor-Mirror-with-Standing.jpg"
                alt=""/>
            <a href="#" class="bold_letters">Extra 15% off</a>
            <a href="#" >Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters">More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_4">
        <div>
            <a href="#" class="bold_letters">Bedding</a>
            <a href="#" >Comforter Sets</a>
            <a href="#" >Duvet Covers</a>
            <a href="#" >Bed in a Bag</a>
            <a href="#" >Quilts & Coverlets</a>
            <a href="#" >Blankets & Throws</a>
            <a href="#" >Shower Curtains</a>
            <a href="#" >Towels</a>
            <a href="#" >Bath & Mats</a>
            <a href="#" >Bath Robes</a>
            <a href="#" >Bath Accessories</a>
            <a href="#" >Bath Robes</a>
            <a href="#"> Kids Bath</a>
        </div>
        <div>
            <a href="#" class="bold_letters" >Bedding Basics</a>
            <a href="#" >Sheets & Pillowcases</a>
            <a href="#" >Mattress & Toppers</a>
            <a href="#" >Comforters & Duvet Inserts</a>
            <a href="#" >Pillows</a>
            <a href="#" >Cotton Bedding</a>
            <a href="#" class="bold_letters" >Kids Bedding</a>
            <a href="#" >Kids Sheets</a>
            <a href="#" >Kids Comforter Sets</a>
            <a href="#" >Kids Bed in a Bag</a>
            <a href="#" >Kids Quilts</a>
            <a href="#" >Kids Bed Tents & Canopies</a>
            <a href="#" >Kids Mattress</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Mattress</a>
            <a href="#" >Twin</a>
            <a href="#" >Twin XL</a>
            <a href="#" >Full</a>
            <a href="#" >Queen</a>
            <a href="#" >King</a>
            <a href="#" >California King</a>
            <a href="#" >Air Mattress</a>
            <a href="#" >Mattress in a Box</a>
            <a href="#" class="bold_letters" >Bathroom Furniture</a>
            <a href="#" >Bathroom Vanities</a>
            <a href="#" >Bathroom Vanity Mirrors</a>
            <a href="#" >Bathroom Sinks</a>
            <a href="#" >Bathroom Faucets</a>
            <a href="#" >Bathroom Cabinets</a>
            <a href="#" >Tubs</a>
            <a href="#" >Showers</a>
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/aae7298c6dad6ee752e90b9ada8625407c000547/Intelligent-Design-Leena-Shaggy-Faux-Fur-Comforter-Set.jpg"
                alt=""/>
            <a href="#" >Extra 15% off</a>
            <a href="#" >Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters">More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_5">
        <div>
            <a href="#" class="bold_letters">Kitchen</a>
            <a href="#" >ranges & Ovens</a>
            <a href="#" >Refrigerators</a>
            <a href="#" >Kitchen Faucets</a>
            <a href="#" >ranges & Ovens</a>
            <a href="#" >Refrigerators</a>
            <a href="#" >Kitchen Faucets</a>
            <a href="#" >ranges & Ovens</a>
            <a href="#" >Refrigerators</a>
            <a href="#" >Kitchen Faucets</a>
            <a href="#" class="bold_letters">Flooring & Wall</a>
            <a href="#" >Tile</a>
            <a href="#" >Laminate Flooring</a>
            <a href="#" >Vinyl Flooring</a>
            <a href="#" >Wallpaper</a>
            <a href="#" >Laminate Flooring</a>
            <a href="#" >Vinyl Flooring</a>
            <a href="#" >Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters" >Bathroom</a>
            <a href="#" >Bathroom Vanities</a>
            <a href="#" >Bathroom Vanity Mirrors</a>
            <a href="#" >Bathroom Sinks</a>
            <a href="#" >Bathroom Faucets</a>
            <a href="#" >Bathroom Cabinets</a>
            <a href="#" >Tubs</a>
            <a href="#" >Showers</a>
            <a href="#" class="bold_letters" >Bathroom</a>
            <a href="#" >Home Essentials</a>
            <a href="#" >Vacuums & Floorcare</a>
            <a href="#" >Heating & Cooling</a>
            <a href="#" >Air Quality</a>
            <a href="#" >Sewing Machines</a>
            <a href="#" >Craft Machines</a>
        </div>
        <div>
            <a href="#" class="bold_letters" >Storage & Organization</a>
            <a href="#" >Outdoor Storage</a>
            <a href="#" >Garage Storage</a>
            <a href="#" >Decorative Storage</a>
            <a href="#" >Closet Organizers</a>
            <a href="#" >Kitchen & Pantry</a>
            <a href="#" >Cabinets</a>
            <a href="#" >Furniture Storage</a>
            <a href="#" >Safes</a>
            <a href="#" >Laundry Room</a>
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/fe65fb3c91f141cb3bc6d2f2f06911180a97c388/Proox-Single-handle-Kitchen-Faucet-Pull-Down-Sprayer-w--Soap-dispenser.jpg"
                alt=""/>
            <a href="#" class="bold_letters">Extra 15% off</a>
            <a href="#" >Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters">More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_6">
        <div>
            <a  href="#" class="bold_letters">Dinnerware</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a  href="#"class="bold_letters">Cookware & Bakeware</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Kitchen Furniture</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#" class="bold_letters">Kitchen Appliances</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Wallpaper</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Serveware</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#" class="bold_letters">Kitchen Storage</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/7508194/Hamilton-Beach-26030-Belgian-Waffle-Maker-9e4e0fb9-116d-44c4-9b97-2805b4e2519c_1000.jpg"
                alt=""/>
            <a href="#" class="bold_letters">Extra 15% off</a>
            <a href="#">Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters" >More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_7">
        <div>
            <a href="#" class="bold_letters">Dinnerware</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#" class="bold_letters">Cookware & Bakeware</a>
            <a href="#">Tile</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Kitchen Furniture</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#" class="bold_letters">Kitchen Appliances</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Serveware</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#" class="bold_letters">Kitchen Storage</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/3735ba1b91fa8acfb23da0e7afe50208ada16293/Elias-Outdoor-Acacia-Wood-Outdoor-Chat-Set-by-Christopher-Knight-Home.jpg"/>
            <a href="#" >Extra 15% off</a>
            <a href="#" >Frniture by Christopher Knight</a>
            <a href="#" class="bold_letters" >More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_8">
        <div>
            <a href="#" class="bold_letters">Dinnerware</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#" class="bold_letters">Cookware & Bakeware</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Kitchen Furniture</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#" class="bold_letters">Kitchen Appliances</a>
            <a href="#">Tile</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Serveware</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#" class="bold_letters">Kitchen Storage</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/29068043/Annello-by-Kobelli-14k-Gold-4-Carats-TGW-Oval-Moissanite-Three-Stone-X-Prong-Trellis-Bold-Engagement-Ring-HI-VS-cfa6c2e1-ceaa-4840-805d-66cab8a7ff61_1000.jpg"
                alt=""/>
            <a href="#" class="bold_letters">Extra 15% off</a>
            <a href="#">Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters">More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_9">
        <div>
            <a href="#" class="bold_letters">Dinnerware</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#" class="bold_letters">Cookware & Bakeware</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Kitchen Furniture</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#" class="bold_letters">Kitchen Appliances</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Serveware</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#" class="bold_letters">Kitchen Storage</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
           
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/69d6ab9a69fc24a9f5adf1ccef4d0fcf833bf07e/Aged-Wood-Beaded-6-Light-Candle-Chandelier.jpg"
                alt=""/>
            <a href="#" id="extraOff_p">Extra 15% off</a>
            <a href="#">Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters">More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_10">
        <div>
            <a href="#" class="bold_letters">Dinnerware</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            
            <a href="#" class="bold_letters">Cookware & Bakeware</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Kitchen Furniture</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
        
            <a href="#" class="bold_letters">Kitchen Appliances</a>
           
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Kids Bedding</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/b5b17dc8e98e0cfb4ea68622068adf35178581c0/Qaba-Large-Kids-Kitchen-Playset-with-Telephone%2C-Water-Dispenser-Simulation-Cooking-Set-for-Girls-and-Boys%2C-White.jpg"
                alt=""/>
            <a href="#" class="bold_letters">Extra 15% off</a>
            <a href="#">Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters">More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    <div id="drop_11">
        <div>
            <a href="#" class="bold_letters">Holiday</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#" class="bold_letters">Health & Beauty</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Gifting</a>
            <a href="#">ranges & Ovens</a>
            
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#" class="bold_letters">Exercise Equipemnts</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
          
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <a href="#" class="bold_letters">Pet Supplies</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#">Refrigerators</a>
            <a href="#">Kitchen Faucets</a>
            <a href="#">ranges & Ovens</a>
            <a href="#" class="bold_letters">Entryway</a>
            <a href="#">Tile</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Wallpaper</a>
            <a href="#">Wallpaper</a>
            <a href="#">Laminate Flooring</a>
            <a href="#">Vinyl Flooring</a>
            <a href="#">Wallpaper</a>
        </div>
        <div>
            <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/d9d332346a904102baba51d75106bdad99541592/Soozier-Heavy-Duty-Multi-Function-Power-Rack-Cage-Home-Gym-Exercise-Workout-Station-Strength-Training-w--Stand-Rod.jpg"
                alt=""/>
            <a href="#" class="bold_letters">Extra 15% off</a>
            <a href="#">Select Furniture by Christopher Knight</a>
            <a href="#" class="bold_letters">More Ways to Shop</a>
            <a href="#" class="red">Featured sales</a>
            <a href="#" class="red">New Arrivals</a>
            <a href="#" class="red">Clearance</a>
            <a href="#" class="red">Furniture Advice</a>
        </div>
    </div>
    
    <div id="drop_13">
        <div id="drop13_div1">
            <div>
                <p>sales & deals</p>
            </div>
            <div>
                <p>shop.save.love.repeat</p>
            </div>
            <div>
                <p>Shop Now</p>
            </div>
        </div>
        <div id="drop13_div2">
            <div>
                <img class="div_img" src="https://ak1.ostkcdn.com/img/mxc/03212022-TNFlyout.svg?imwidth=320" alt=""/>
                <div>
                    <p>Huge Savings on </p>
                    <p>Top-Rated Items</p>
                </div>
            </div>
            <div>
                <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/673bd6063bf22dd9d2dbc73bfea18bd40d61d72a/Ovios-5-piece-Outdoor-High-back-Wicker-Sectional-Set.jpg?imwidth=320" alt=""/>
                <div>
                    <p>Extra 15% off</p>
                    <p>On Patio Products</p>
                </div>
            </div>
            <div>
                <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/d19008eaea0670f4500742121ec56fb6dcf2bf0e/Carson-Carrington-Telsiai-Triangle-Wood-Coffee-Table.jpg?imwidth=320" alt=""/>
                <div>
                    <p>Extra 15% off</p>
                    <p>Select Coffee & Accent Tables</p>
                </div>
            </div>
            <div>
                <img class="div_img" src="https://ak1.ostkcdn.com/images/products/is/images/direct/494923ecc209c803a91250cd746ce777379fbe6e/Glitzhome-22%22D-Artificial-Easter-Eggs-Wreath.jpg?imwidth=320"
                    alt=""/>
                <div>
                    <p>Save on</p>
                    <p>Easter Essentials</p>
                </div>
            </div>
        </div>
</div>
</div>`;

};

export default navbar;
