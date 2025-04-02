// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
    
    // Add event listeners to section items
    document.querySelectorAll('.section-item').forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.id;
            loadSectionContent(sectionId);
        });
    });
    
    // Add event listeners to navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            loadSectionContent(sectionId);
        });
    });
});

// Initialize the application
function initApp() {
    // Load data from localStorage or use default data
    const guidebookData = loadGuidebookData();
    
    // Update the UI with the loaded data
    updateUI(guidebookData);
}

// Load guidebook data from localStorage
function loadGuidebookData() {
    const savedData = localStorage.getItem('guidebookData');
    
    // If no saved data, return default data
    if (!savedData) {
        return getDefaultData();
    }
    
    try {
        return JSON.parse(savedData);
    } catch (error) {
        console.error('Error parsing saved data:', error);
        return getDefaultData();
    }
}

// Get default guidebook data
function getDefaultData() {
    return {
        propertyName: 'Thea Homes',
        location: 'Vashisht, Manali',
        description: 'A beautiful, cozy 7-rooms boutique homestay in Vashisht, Manali with a view of snow-kissed majestic mountains.',
        socialMedia: {
            instagram: 'https://instagram.com/theahomes'
        },
        sections: {
            location: {
                title: 'Location',
                content: `
                    <h2>Location</h2>
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13452.161837706372!2d77.16969!3d32.272223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sVashisht%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1648456789012!5m2!1sen!2sin" 
                            width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="location-details">
                        <h3>Address</h3>
                        <p>Thea Homes, Near Hot Springs, Vashisht, Manali, Himachal Pradesh 175131</p>
                        
                        <h3>How to Reach</h3>
                        <p><strong>From Manali Bus Stand:</strong> 3 km (15 minutes by taxi)</p>
                        <p><strong>From Mall Road:</strong> 2.5 km (10 minutes by taxi)</p>
                        
                        <h3>Nearby Landmarks</h3>
                        <ul>
                            <li>Vashisht Hot Springs - 200m</li>
                            <li>Vashisht Temple - 300m</li>
                            <li>Manu Temple - 2km</li>
                        </ul>
                    </div>
                `
            },
            reviews: {
                title: 'Reviews',
                content: `
                    <h2>Guest Reviews</h2>
                    <div class="reviews-container">
                        <div class="review-item">
                            <div class="review-header">
                                <div class="reviewer">Amit S.</div>
                                <div class="rating">★★★★★</div>
                                <div class="date">March 2025</div>
                            </div>
                            <p class="review-text">Beautiful property with amazing mountain views. The rooms were clean and cozy. The host was very helpful and provided great local recommendations.</p>
                        </div>
                        
                        <div class="review-item">
                            <div class="review-header">
                                <div class="reviewer">Sarah J.</div>
                                <div class="rating">★★★★★</div>
                                <div class="date">February 2025</div>
                            </div>
                            <p class="review-text">We had a wonderful stay at Thea Homes. The food was delicious and the location is perfect - close enough to Manali but away from the crowds.</p>
                        </div>
                        
                        <div class="review-item">
                            <div class="review-header">
                                <div class="reviewer">Rahul M.</div>
                                <div class="rating">★★★★☆</div>
                                <div class="date">January 2025</div>
                            </div>
                            <p class="review-text">Great homestay experience with authentic local food. The only minor issue was the hot water timing, but overall a great stay.</p>
                        </div>
                    </div>
                `
            },
            'wifi-rules': {
                title: 'Wifi & Rules',
                content: `
                    <h2>Wifi & House Rules</h2>
                    <div class="wifi-section">
                        <h3>Wifi Information</h3>
                        <div class="wifi-details">
                            <p><strong>Network Name:</strong> Thea_Homes_Guest</p>
                            <p><strong>Password:</strong> thea2025guest</p>
                            <p><strong>Speed:</strong> 50 Mbps</p>
                            <p><strong>Coverage:</strong> All rooms and common areas</p>
                        </div>
                    </div>
                    
                    <div class="rules-section">
                        <h3>House Rules</h3>
                        <ul class="rules-list">
                            <li>Check-in time: 12:00 PM - 8:00 PM</li>
                            <li>Check-out time: 11:00 AM</li>
                            <li>No smoking inside the rooms</li>
                            <li>Quiet hours: 10:00 PM - 7:00 AM</li>
                            <li>Pets are not allowed</li>
                            <li>Please conserve water and electricity</li>
                            <li>Dispose of waste in designated bins</li>
                            <li>Outdoor shoes not allowed inside rooms</li>
                        </ul>
                    </div>
                `
            },
            emergency: {
                title: 'Emergency Contact',
                content: `
                    <h2>Emergency Contacts</h2>
                    <div class="emergency-contacts">
                        <div class="contact-item">
                            <h3>Property Manager</h3>
                            <p><strong>Name:</strong> Vikram Singh</p>
                            <p><strong>Phone:</strong> +91 98765 43210</p>
                            <p><strong>Available:</strong> 24/7</p>
                        </div>
                        
                        <div class="contact-item">
                            <h3>Medical Emergency</h3>
                            <p><strong>Lady Willingdon Hospital</strong></p>
                            <p><strong>Phone:</strong> +91 1902 252342</p>
                            <p><strong>Distance:</strong> 3 km</p>
                        </div>
                        
                        <div class="contact-item">
                            <h3>Police Station</h3>
                            <p><strong>Manali Police Station</strong></p>
                            <p><strong>Phone:</strong> +91 1902 252340</p>
                            <p><strong>Emergency:</strong> 100</p>
                        </div>
                        
                        <div class="contact-item">
                            <h3>Fire Emergency</h3>
                            <p><strong>Fire Station Manali</strong></p>
                            <p><strong>Phone:</strong> +91 1902 252101</p>
                            <p><strong>Emergency:</strong> 101</p>
                        </div>
                        
                        <div class="contact-item">
                            <h3>Ambulance</h3>
                            <p><strong>Emergency:</strong> 108</p>
                        </div>
                    </div>
                `
            },
            nearby: {
                title: 'Nearby Experiences',
                content: `
                    <h2>Nearby Experiences</h2>
                    <div class="experiences-container">
                        <div class="experience-item">
                            <h3>Vashisht Hot Springs</h3>
                            <p><strong>Distance:</strong> 200m (5 min walk)</p>
                            <p>Natural hot springs with medicinal properties. The water contains sulfur and other minerals believed to cure skin diseases and joint pain.</p>
                        </div>
                        
                        <div class="experience-item">
                            <h3>Jogini Waterfall Trek</h3>
                            <p><strong>Distance:</strong> 1.5km (30 min trek)</p>
                            <p>A beautiful trek through pine forests leading to a stunning waterfall. Moderate difficulty level, suitable for most fitness levels.</p>
                        </div>
                        
                        <div class="experience-item">
                            <h3>Old Manali Market</h3>
                            <p><strong>Distance:</strong> 2km (10 min drive)</p>
                            <p>Charming market with cafes, shops selling local handicrafts, woolens, and souvenirs. Great place to experience local culture.</p>
                        </div>
                        
                        <div class="experience-item">
                            <h3>Solang Valley</h3>
                            <p><strong>Distance:</strong> 12km (30 min drive)</p>
                            <p>Adventure sports hub offering paragliding, zorbing, and skiing (in winter). Beautiful valley with panoramic mountain views.</p>
                        </div>
                        
                        <div class="experience-item">
                            <h3>Hadimba Temple</h3>
                            <p><strong>Distance:</strong> 4km (15 min drive)</p>
                            <p>Ancient wooden temple dedicated to Goddess Hadimba, built in 1553. Surrounded by cedar forest with unique architecture.</p>
                        </div>
                    </div>
                `
            },
            book: {
                title: 'Book Now',
                content: `
                    <h2>Book Your Stay</h2>
                    <div class="booking-info">
                        <p>To book your stay at Thea Homes, please use one of the following options:</p>
                        
                        <div class="booking-option">
                            <h3>Book on Airbnb</h3>
                            <p><a href="https://airbnb.com/h/theahomes" target="_blank">airbnb.com/h/theahomes</a></p>
                        </div>
                        
                        <div class="booking-option">
                            <h3>Book on Booking.com</h3>
                            <p><a href="https://booking.com/hotel/theahomes" target="_blank">booking.com/hotel/theahomes</a></p>
                        </div>
                        
                        <div class="booking-option">
                            <h3>Direct Booking</h3>
                            <p>Call: +91 98765 43210</p>
                            <p>Email: bookings@theahomes.com</p>
                        </div>
                        
                        <div class="room-types">
                            <h3>Room Types</h3>
                            <ul>
                                <li><strong>Mountain View Room:</strong> Double bed, private bathroom, balcony</li>
                                <li><strong>Deluxe Suite:</strong> King bed, sitting area, premium bathroom, large balcony</li>
                                <li><strong>Family Room:</strong> 1 double bed + 2 single beds, spacious bathroom</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            amenities: {
                title: 'Amenities',
                content: `
                    <h2>Amenities</h2>
                    <div class="amenities-container">
                        <div class="amenity-category">
                            <h3>Room Amenities</h3>
                            <ul class="amenity-list">
                                <li>Comfortable beds with premium mattresses</li>
                                <li>Clean linens and towels</li>
                                <li>Hot water 24/7</li>
                                <li>Room heaters</li>
                                <li>Study table and chair</li>
                                <li>Wardrobe</li>
                                <li>Private bathroom with shower</li>
                                <li>Mountain views from windows</li>
                            </ul>
                        </div>
                        
                        <div class="amenity-category">
                            <h3>Common Areas</h3>
                            <ul class="amenity-list">
                                <li>Spacious living room with fireplace</li>
                                <li>Dining area</li>
                                <li>Garden seating</li>
                                <li>Terrace with mountain views</li>
                                <li>Library with books and board games</li>
                                <li>Parking space</li>
                            </ul>
                        </div>
                        
                        <div class="amenity-category">
                            <h3>Services</h3>
                            <ul class="amenity-list">
                                <li>Homemade meals (breakfast included)</li>
                                <li>Room cleaning service</li>
                                <li>Laundry service (additional charge)</li>
                                <li>Local tour arrangements</li>
                                <li>Taxi booking assistance</li>
                                <li>24/7 assistance</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            food: {
                title: 'Food',
                content: `
                    <h2>Food</h2>
                    <div class="food-info">
                        <p>At Thea Homes, we take pride in serving delicious, homemade meals prepared with locally sourced ingredients. Our menu offers a mix of local Himachali dishes, North Indian favorites, and some continental options.</p>
                        
                        <div class="meal-section">
                            <h3>Breakfast (Included)</h3>
                            <p><strong>Timing:</strong> 8:00 AM - 10:00 AM</p>
                            <p><strong>Sample Menu:</strong></p>
                            <ul>
                                <li>Aloo Paratha with curd and pickle</li>
                                <li>Poha with chai</li>
                                <li>Eggs to order with toast</li>
                                <li>Fresh fruit platter</li>
                                <li>Himachali Siddu (local bread) with ghee</li>
                            </ul>
                        </div>
                        
                        <div class="meal-section">
                            <h3>Lunch (On request)</h3>
                            <p><strong>Timing:</strong> 12:30 PM - 2:30 PM</p>
                            <p><strong>Sample Menu:</strong></p>
                            <ul>
                                <li>Dal, rice, seasonal vegetable, roti, salad</li>
                                <li>Rajma Chawal with raita</li>
                                <li>Himachali Dham (traditional thali)</li>
                            </ul>
                        </div>
                        
                        <div class="meal-section">
                            <h3>Dinner</h3>
                            <p><strong>Timing:</strong> 7:30 PM - 9:30 PM</p>
                            <p><strong>Sample Menu:</strong></p>
                            <ul>
                                <li>North Indian thali</li>
                                <li>Himachali specialties</li>
                                <li>Seasonal vegetable dishes</li>
                                <li>Chicken/Mutton curry (non-veg option)</li>
                            </ul>
                        </div>
                        
                        <div class="special-note">
                            <h3>Special Requests</h3>
                            <p>We can accommodate dietary restrictions and preferences with advance notice. Please inform us about any food allergies or special requirements.</p>
                        </div>
                    </div>
                `
            },
            gallery: {
                title: 'Gallery',
                content: `
                    <h2>Gallery</h2>
                    <div class="gallery-container">
                        <p>Images will be displayed here from the property's photo collection.</p>
                        <div class="gallery-grid">
                            <!-- Images will be loaded dynamically -->
                        </div>
                    </div>
                `
            }
        }
    };
}

// Update UI with guidebook data
function updateUI(data) {
    // Update property information
    document.querySelector('.property-info h1').textContent = data.propertyName;
    document.querySelector('.property-info .location').textContent = data.location;
    document.querySelector('.property-info .description').textContent = data.description;
    
    // Update social media link
    const socialLink = document.querySelector('.social-follow');
    if (data.socialMedia && data.socialMedia.instagram) {
        socialLink.href = data.socialMedia.instagram;
    }
}

// Load section content
function loadSectionContent(sectionId) {
    const sectionContentDiv = document.getElementById('section-content');
    const guidebookData = loadGuidebookData();
    
    // Get section data
    const sectionData = guidebookData.sections[sectionId];
    
    if (sectionData) {
        // Show section content
        sectionContentDiv.innerHTML = sectionData.content;
        sectionContentDiv.classList.add('active');
        
        // Scroll to section content
        sectionContentDiv.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section data not found for: ${sectionId}`);
    }
}

// Additional CSS for dynamic content
const additionalStyles = `
    /* Location Section Styles */
    .map-container {
        margin-bottom: 20px;
    }
    
    .location-details h3 {
        margin-top: 15px;
        margin-bottom: 5px;
        font-size: 16px;
    }
    
    .location-details ul {
        padding-left: 20px;
    }
    
    /* Reviews Section Styles */
    .reviews-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .review-item {
        background-color: #f9f9f9;
        padding: 15px;
        border-radius: 8px;
    }
    
    .review-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    
    .reviewer {
        font-weight: 600;
    }
    
    .rating {
        color: #ff9900;
    }
    
    .date {
        color: #777;
        font-size: 12px;
    }
    
    /* Wifi & Rules Styles */
    .wifi-section, .rules-section {
        margin-bottom: 20px;
    }
    
    .wifi-details {
        background-color: #f0f8ff;
        padding: 15px;
        border-radius: 8px;
        margin-top: 10px;
    }
    
    .rules-list {
        padding-left: 20px;
    }
    
    .rules-list li {
        margin-bottom: 8px;
    }
    
    /* Emergency Contacts Styles */
    .emergency-contacts {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .contact-item {
        background-color: #fff8f8;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #ff6347;
    }
    
    .contact-item h3 {
        margin-bottom: 8px;
        color: #ff6347;
    }
    
    /* Nearby Experiences Styles */
    .experiences-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .experience-item {
        background-color: #f9f9f9;
        padding: 15px;
        border-radius: 8px;
    }
    
    .experience-item h3 {
        margin-bottom: 5px;
    }
    
    /* Booking Styles */
    .booking-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .booking-option {
        background-color: #f0f8ff;
        padding: 15px;
        border-radius: 8px;
    }
    
    .booking-option h3 {
        margin-bottom: 5px;
    }
    
    .room-types {
        margin-top: 20px;
    }
    
    .room-types ul {
        padding-left: 20px;
    }
    
    /* Amenities Styles */
    .amenities-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .amenity-category h3 {
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #eee;
    }
    
    .amenity-list {
        padding-left: 20px;
    }
    
    .amenity-list li {
        margin-bottom: 5px;
    }
    
    /* Food Styles */
    .food-info {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .meal-section {
        background-color: #f9f9f9;
        padding: 15px;
        border-radius: 8px;
    }
    
    .meal-section h3 {
        margin-bottom: 5px;
    }
    
    .meal-section ul {
        padding-left: 20px;
    }
    
    .special-note {
        background-color: #fff8f0;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #ff9900;
    }
    
    /* Gallery Styles */
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-top: 15px;
    }
    
    @media (min-width: 480px) {
        .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

// Add additional styles to the document
document.addEventListener('DOMContentLoaded', function() {
    const styleElement = document.createElement('style');
    styleElement.textContent = additionalStyles;
    document.head.appendChild(styleElement);
});
