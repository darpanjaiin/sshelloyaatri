// Connection script to link admin panel with guidebook display
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the connection between admin and guidebook
    initConnection();
});

// Initialize connection
function initConnection() {
    // Load data from localStorage
    const guidebookData = loadGuidebookData();
    
    // Update guidebook display with loaded data
    updateGuidebookDisplay(guidebookData);
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
    // This should match the default data structure in admin.js
    return {
        propertyName: 'Thea Homes',
        location: 'Vashisht, Manali',
        description: 'A beautiful, cozy 7-rooms boutique homestay in Vashisht, Manali with a view of snow-kissed majestic mountains.',
        socialMedia: {
            instagram: 'https://instagram.com/theahomes'
        },
        images: {
            property: '',
            amenities: '',
            food: '',
            gallery: []
        },
        sections: {
            location: {
                title: 'Location',
                address: 'Thea Homes, Near Hot Springs, Vashisht, Manali, Himachal Pradesh 175131',
                googleMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13452.161837706372!2d77.16969!3d32.272223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sVashisht%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1648456789012!5m2!1sen!2sin',
                reachInfo: [
                    { title: 'From Manali Bus Stand', details: '3 km (15 minutes by taxi)' },
                    { title: 'From Mall Road', details: '2.5 km (10 minutes by taxi)' }
                ],
                landmarks: [
                    { name: 'Vashisht Hot Springs', distance: '200m' },
                    { name: 'Vashisht Temple', distance: '300m' },
                    { name: 'Manu Temple', distance: '2km' }
                ]
            },
            amenities: {
                title: 'Amenities',
                roomAmenities: [
                    'Comfortable beds with premium mattresses',
                    'Clean linens and towels',
                    'Hot water 24/7',
                    'Room heaters'
                ],
                commonAreas: [
                    'Spacious living room with fireplace',
                    'Dining area',
                    'Garden seating',
                    'Terrace with mountain views'
                ],
                services: [
                    'Homemade meals (breakfast included)',
                    'Room cleaning service',
                    'Laundry service (additional charge)',
                    'Local tour arrangements'
                ]
            },
            food: {
                title: 'Food',
                description: 'At Thea Homes, we take pride in serving delicious, homemade meals prepared with locally sourced ingredients. Our menu offers a mix of local Himachali dishes, North Indian favorites, and some continental options.',
                meals: [
                    {
                        type: 'Breakfast (Included)',
                        timing: '8:00 AM - 10:00 AM',
                        items: [
                            'Aloo Paratha with curd and pickle',
                            'Poha with chai',
                            'Eggs to order with toast',
                            'Fresh fruit platter',
                            'Himachali Siddu (local bread) with ghee'
                        ]
                    },
                    {
                        type: 'Lunch (On request)',
                        timing: '12:30 PM - 2:30 PM',
                        items: [
                            'Dal, rice, seasonal vegetable, roti, salad',
                            'Rajma Chawal with raita',
                            'Himachali Dham (traditional thali)'
                        ]
                    },
                    {
                        type: 'Dinner',
                        timing: '7:30 PM - 9:30 PM',
                        items: [
                            'North Indian thali',
                            'Himachali specialties',
                            'Seasonal vegetable dishes',
                            'Chicken/Mutton curry (non-veg option)'
                        ]
                    }
                ],
                specialRequests: 'We can accommodate dietary restrictions and preferences with advance notice. Please inform us about any food allergies or special requirements.'
            },
            'wifi-rules': {
                title: 'Wifi & Rules',
                wifi: {
                    networkName: 'Thea_Homes_Guest',
                    password: 'thea2025guest',
                    speed: '50 Mbps',
                    coverage: 'All rooms and common areas'
                },
                rules: [
                    'Check-in time: 12:00 PM - 8:00 PM',
                    'Check-out time: 11:00 AM',
                    'No smoking inside the rooms',
                    'Quiet hours: 10:00 PM - 7:00 AM',
                    'Pets are not allowed',
                    'Please conserve water and electricity',
                    'Dispose of waste in designated bins',
                    'Outdoor shoes not allowed inside rooms'
                ]
            },
            emergency: {
                title: 'Emergency Contact',
                manager: {
                    name: 'Vikram Singh',
                    phone: '+91 98765 43210',
                    availability: '24/7'
                },
                contacts: [
                    {
                        type: 'Medical Emergency',
                        name: 'Lady Willingdon Hospital',
                        phone: '+91 1902 252342',
                        info: 'Distance: 3 km'
                    },
                    {
                        type: 'Police Station',
                        name: 'Manali Police Station',
                        phone: '+91 1902 252340',
                        info: 'Emergency: 100'
                    },
                    {
                        type: 'Fire Emergency',
                        name: 'Fire Station Manali',
                        phone: '+91 1902 252101',
                        info: 'Emergency: 101'
                    },
                    {
                        type: 'Ambulance',
                        name: 'Emergency Services',
                        phone: '108',
                        info: ''
                    }
                ]
            },
            nearby: {
                title: 'Nearby Experiences',
                experiences: [
                    {
                        name: 'Vashisht Hot Springs',
                        distance: '200m (5 min walk)',
                        description: 'Natural hot springs with medicinal properties. The water contains sulfur and other minerals believed to cure skin diseases and joint pain.'
                    },
                    {
                        name: 'Jogini Waterfall Trek',
                        distance: '1.5km (30 min trek)',
                        description: 'A beautiful trek through pine forests leading to a stunning waterfall. Moderate difficulty level, suitable for most fitness levels.'
                    },
                    {
                        name: 'Old Manali Market',
                        distance: '2km (10 min drive)',
                        description: 'Charming market with cafes, shops selling local handicrafts, woolens, and souvenirs. Great place to experience local culture.'
                    }
                ]
            },
            book: {
                title: 'Book Now',
                intro: 'To book your stay at Thea Homes, please use one of the following options:',
                options: [
                    {
                        platform: 'Book on Airbnb',
                        link: 'https://airbnb.com/h/theahomes'
                    },
                    {
                        platform: 'Book on Booking.com',
                        link: 'https://booking.com/hotel/theahomes'
                    },
                    {
                        platform: 'Direct Booking',
                        link: 'Call: +91 98765 43210 or Email: bookings@theahomes.com'
                    }
                ],
                rooms: [
                    {
                        name: 'Mountain View Room',
                        description: 'Double bed, private bathroom, balcony'
                    },
                    {
                        name: 'Deluxe Suite',
                        description: 'King bed, sitting area, premium bathroom, large balcony'
                    },
                    {
                        name: 'Family Room',
                        description: '1 double bed + 2 single beds, spacious bathroom'
                    }
                ]
            },
            gallery: {
                title: 'Gallery',
                images: []
            }
        }
    };
}

// Update guidebook display with data
function updateGuidebookDisplay(data) {
    // Update property information
    document.getElementById('property-name').textContent = data.propertyName || 'Property Name';
    document.getElementById('property-location').textContent = data.location || 'Location';
    document.getElementById('property-description').textContent = data.description || 'Property description';
    
    // Update social media link
    const socialLink = document.getElementById('social-follow-link');
    if (data.socialMedia && data.socialMedia.instagram) {
        socialLink.href = data.socialMedia.instagram;
    }
    
    // Update property image
    if (data.images && data.images.property) {
        document.getElementById('property-main-image').src = data.images.property;
    }
    
    // Update section images
    if (data.images) {
        // Amenities image
        if (data.images.amenities) {
            const amenitiesImg = document.querySelector('#amenities .section-image img');
            if (amenitiesImg) {
                amenitiesImg.src = data.images.amenities;
            }
        }
        
        // Food image
        if (data.images.food) {
            const foodImg = document.querySelector('#food .section-image img');
            if (foodImg) {
                foodImg.src = data.images.food;
            }
        }
    }
    
    // Set up event listeners for real-time updates
    setupRealTimeUpdates();
}

// Set up event listeners for real-time updates
function setupRealTimeUpdates() {
    // Listen for storage events (when localStorage is updated from admin panel)
    window.addEventListener('storage', function(e) {
        if (e.key === 'guidebookData') {
            // Reload data and update display
            const guidebookData = loadGuidebookData();
            updateGuidebookDisplay(guidebookData);
            
            // If a section is currently open, refresh its content
            const activeSection = document.querySelector('.section-content.active');
            if (activeSection) {
                const sectionId = activeSection.getAttribute('data-section');
                if (sectionId) {
                    loadSectionContent(sectionId);
                }
            }
        }
    });
    
    // Create a custom event for manual refresh
    document.addEventListener('guidebookDataUpdated', function() {
        const guidebookData = loadGuidebookData();
        updateGuidebookDisplay(guidebookData);
    });
}

// Generate HTML content for each section
function generateSectionContent(sectionId, data) {
    const sections = data.sections;
    
    if (!sections || !sections[sectionId]) {
        return `<h2>${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}</h2><p>No data available for this section.</p>`;
    }
    
    const section = sections[sectionId];
    
    // Generate HTML based on section ID
    switch (sectionId) {
        case 'location':
            return generateLocationContent(section);
        case 'reviews':
            return generateReviewsContent(section);
        case 'wifi-rules':
            return generateWifiRulesContent(section);
        case 'emergency':
            return generateEmergencyContent(section);
        case 'nearby':
            return generateNearbyContent(section);
        case 'book':
            return generateBookingContent(section);
        case 'amenities':
            return generateAmenitiesContent(section);
        case 'food':
            return generateFoodContent(section);
        case 'gallery':
            return generateGalleryContent(data);
        default:
            return `<h2>${section.title || 'Section'}</h2><p>Content for this section is not available.</p>`;
    }
}

// Generate Location content
function generateLocationContent(section) {
    let reachInfoHTML = '';
    if (section.reachInfo && section.reachInfo.length > 0) {
        reachInfoHTML = `
            <h3>How to Reach</h3>
            ${section.reachInfo.map(item => `
                <p><strong>${item.title}:</strong> ${item.details}</p>
            `).join('')}
        `;
    }
    
    let landmarksHTML = '';
    if (section.landmarks && section.landmarks.length > 0) {
        landmarksHTML = `
            <h3>Nearby Landmarks</h3>
            <ul>
                ${section.landmarks.map(item => `
                    <li>${item.name} - ${item.distance}</li>
                `).join('')}
            </ul>
        `;
    }
    
    return `
        <h2>${section.title || 'Location'}</h2>
        <div class="map-container">
            <iframe src="${section.googleMap}" 
                width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="location-details">
            <h3>Address</h3>
            <p>${section.address || 'Address not provided'}</p>
            
            ${reachInfoHTML}
            
            ${landmarksHTML}
        </div>
    `;
}

// Generate Reviews content
function generateReviewsContent(section) {
    // For MVP, we'll use static reviews
    return `
        <h2>${section.title || 'Guest Reviews'}</h2>
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
    `;
}

// Generate Wifi & Rules content
function generateWifiRulesContent(section) {
    let rulesHTML = '';
    if (section.rules && section.rules.length > 0) {
        rulesHTML = `
            <ul class="rules-list">
                ${section.rules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
        `;
    }
    
    return `
        <h2>${section.title || 'Wifi & House Rules'}</h2>
        <div class="wifi-section">
            <h3>Wifi Information</h3>
            <div class="wifi-details">
                <p><strong>Network Name:</strong> ${section.wifi?.networkName || 'Not provided'}</p>
                <p><strong>Password:</strong> ${section.wifi?.password || 'Not provided'}</p>
                <p><strong>Speed:</strong> ${section.wifi?.speed || 'Not provided'}</p>
                <p><strong>Coverage:</strong> ${section.wifi?.coverage || 'Not provided'}</p>
            </div>
        </div>
        
        <div class="rules-section">
            <h3>House Rules</h3>
            ${rulesHTML || '<p>No house rules specified.</p>'}
        </div>
    `;
}

// Generate Emergency content
function generateEmergencyContent(section) {
    let contactsHTML = '';
    if (section.contacts && section.contacts.length > 0) {
        contactsHTML = section.contacts.map(contact => `
            <div class="contact-item">
                <h3>${contact.type}</h3>
                <p><strong>${contact.name}</strong></p>
                <p><strong>Phone:</strong> ${contact.phone}</p>
                ${contact.info ? `<p>${contact.info}</p>` : ''}
            </div>
        `).join('');
    }
    
    return `
        <h2>${section.title || 'Emergency Contacts'}</h2>
        <div class="emergency-contacts">
            <div class="contact-item">
                <h3>Property Manager</h3>
                <p><strong>Name:</strong> ${section.manager?.name || 'Not provided'}</p>
                <p><strong>Phone:</strong> ${section.manager?.phone || 'Not provided'}</p>
                <p><strong>Available:</strong> ${section.manager?.availability || 'Not specified'}</p>
            </div>
            
            ${contactsHTML}
        </div>
    `;
}

// Generate Nearby Experiences content
function generateNearbyContent(section) {
    let experiencesHTML = '';
    if (section.experiences && section.experiences.length > 0) {
        experiencesHTML = section.experiences.map(exp => `
            <div class="experience-item">
                <h3>${exp.name}</h3>
                <p><strong>Distance:</strong> ${exp.distance}</p>
                <p>${exp.description}</p>
            </div>
        `).join('');
    }
    
    return `
        <h2>${section.title || 'Nearby Experiences'}</h2>
        <div class="experiences-container">
            ${experiencesHTML || '<p>No nearby experiences listed.</p>'}
        </div>
    `;
}

// Generate Booking content
function generateBookingContent(section) {
    let optionsHTML = '';
    if (section.options && section.options.length > 0) {
        optionsHTML = section.options.map(option => `
            <div class="booking-option">
                <h3>${option.platform}</h3>
                <p>${option.link.startsWith('http') ? `<a href="${option.link}" target="_blank">${option.link}</a>` : option.link}</p>
            </div>
        `).join('');
    }
    
    let roomsHTML = '';
    if (section.rooms && section.rooms.length > 0) {
        roomsHTML = `
            <div class="room-types">
                <h3>Room Types</h3>
                <ul>
                    ${section.rooms.map(room => `
                        <li><strong>${room.name}:</strong> ${room.description}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    return `
        <h2>${section.title || 'Book Your Stay'}</h2>
        <div class="booking-info">
            <p>${section.intro || 'To book your stay, please use one of the following options:'}</p>
            
            ${optionsHTML}
            
            ${roomsHTML}
        </div>
    `;
}

// Generate Amenities content
function generateAmenitiesContent(section) {
    let roomAmenitiesHTML = '';
    if (section.roomAmenities && section.roomAmenities.length > 0) {
        roomAmenitiesHTML = `
            <div class="amenity-category">
                <h3>Room Amenities</h3>
                <ul class="amenity-list">
                    ${section.roomAmenities.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    let commonAreasHTML = '';
    if (section.commonAreas && section.commonAreas.length > 0) {
        commonAreasHTML = `
            <div class="amenity-category">
                <h3>Common Areas</h3>
                <ul class="amenity-list">
                    ${section.commonAreas.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    let servicesHTML = '';
    if (section.services && section.services.length > 0) {
        servicesHTML = `
            <div class="amenity-category">
                <h3>Services</h3>
                <ul class="amenity-list">
                    ${section.services.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    return `
        <h2>${section.title || 'Amenities'}</h2>
        <div class="amenities-container">
            ${roomAmenitiesHTML}
            ${commonAreasHTML}
            ${servicesHTML}
            ${!roomAmenitiesHTML && !commonAreasHTML && !servicesHTML ? '<p>No amenities listed.</p>' : ''}
        </div>
    `;
}

// Generate Food content
function generateFoodContent(section) {
    let mealsHTML = '';
    if (section.meals && section.meals.length > 0) {
        mealsHTML = section.meals.map(meal => `
            <div class="meal-section">
                <h3>${meal.type}</h3>
                <p><strong>Timing:</strong> ${meal.timing}</p>
                ${meal.items && meal.items.length > 0 ? `
                    <p><strong>Sample Menu:</strong></p>
                    <ul>
                        ${meal.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `).join('');
    }
    
    return `
        <h2>${section.title || 'Food'}</h2>
        <div class="food-info">
            <p>${section.description || 'Food information not provided.'}</p>
            
            ${mealsHTML}
            
            ${section.specialRequests ? `
                <div class="special-note">
                    <h3>Special Requests</h3>
                    <p>${section.specialRequests}</p>
                </div>
            ` : ''}
        </div>
    `;
}

// Generate Gallery content
function generateGalleryContent(data) {
    if (!data.images || !data.images.gallery || data.images.gallery.length === 0) {
        return `
            <h2>Gallery</h2>
            <div class="empty-gallery-message">
                <p>No gallery images available yet.</p>
            </div>
        `;
    }
    
    return `
        <h2>Gallery</h2>
        <div class="gallery-grid">
            ${data.images.gallery.map((src, index) => `
                <div class="gallery-thumbnail" data-index="${index}">
                    <img src="${src}" alt="Gallery Image ${index + 1}">
                </div>
            `).join('')}
        </div>
    `;
}

// Override the loadSectionContent function from app.js
window.loadSectionContent = function(sectionId) {
    const sectionContentDiv = document.getElementById('section-content');
    const guidebookData = loadGuidebookData();
    
    // Generate section content
    const content = generateSectionContent(sectionId, guidebookData);
    
    // Show section content
    sectionContentDiv.innerHTML = content;
    sectionContentDiv.classList.add('active');
    sectionContentDiv.setAttribute('data-section', sectionId);
    
    // Scroll to section content
    sectionContentDiv.scrollIntoView({ behavior: 'smooth' });
    
    // Add event listeners for gallery thumbnails if this is the gallery section
    if (sectionId === 'gallery') {
        document.querySelectorAll('.gallery-thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                openGallery(index);
            });
        });
    }
};
