// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the admin panel
    initAdminPanel();
    
    // Add event listeners to navigation items
    document.querySelectorAll('.admin-nav li').forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            document.querySelectorAll('.admin-nav li').forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the corresponding content section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
    
    // Add event listeners to all forms
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            saveFormData(this);
        });
    });
    
    // Add event listeners for dynamic fields
    setupDynamicFields();
    
    // Add event listeners for image uploads
    setupImageUploads();
    
    // Add event listener for publish button
    document.getElementById('publish-guidebook').addEventListener('click', publishGuidebook);
});

// Initialize the admin panel
function initAdminPanel() {
    // Load saved data from localStorage
    const guidebookData = loadGuidebookData();
    
    // Populate forms with saved data
    populateForms(guidebookData);
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

// Populate forms with saved data
function populateForms(data) {
    // Property Info Form
    document.getElementById('property-name').value = data.propertyName || '';
    document.getElementById('property-location').value = data.location || '';
    document.getElementById('property-description').value = data.description || '';
    document.getElementById('instagram-link').value = data.socialMedia?.instagram || '';
    
    // Display property image if exists
    if (data.images?.property) {
        displayImagePreview('property-image-preview', data.images.property);
    }
    
    // Location Form
    if (data.sections?.location) {
        const location = data.sections.location;
        document.getElementById('address').value = location.address || '';
        document.getElementById('google-map').value = location.googleMap || '';
        
        // Reach Info
        if (location.reachInfo && location.reachInfo.length > 0) {
            const reachContainer = document.getElementById('reach-info');
            reachContainer.innerHTML = ''; // Clear existing fields
            
            location.reachInfo.forEach(item => {
                addDynamicField('reach-info', [item.title, item.details]);
            });
        }
        
        // Landmarks
        if (location.landmarks && location.landmarks.length > 0) {
            const landmarksContainer = document.getElementById('landmarks');
            landmarksContainer.innerHTML = ''; // Clear existing fields
            
            location.landmarks.forEach(item => {
                addDynamicField('landmarks', [item.name, item.distance]);
            });
        }
    }
    
    // Amenities Form
    if (data.sections?.amenities) {
        const amenities = data.sections.amenities;
        
        // Display amenities image if exists
        if (data.images?.amenities) {
            displayImagePreview('amenities-image-preview', data.images.amenities);
        }
        
        // Room Amenities
        if (amenities.roomAmenities && amenities.roomAmenities.length > 0) {
            const roomAmenitiesContainer = document.getElementById('room-amenities');
            roomAmenitiesContainer.innerHTML = ''; // Clear existing fields
            
            amenities.roomAmenities.forEach(item => {
                addDynamicField('room-amenities', [item]);
            });
        }
        
        // Common Areas
        if (amenities.commonAreas && amenities.commonAreas.length > 0) {
            const commonAreasContainer = document.getElementById('common-areas');
            commonAreasContainer.innerHTML = ''; // Clear existing fields
            
            amenities.commonAreas.forEach(item => {
                addDynamicField('common-areas', [item]);
            });
        }
        
        // Services
        if (amenities.services && amenities.services.length > 0) {
            const servicesContainer = document.getElementById('services');
            servicesContainer.innerHTML = ''; // Clear existing fields
            
            amenities.services.forEach(item => {
                addDynamicField('services', [item]);
            });
        }
    }
    
    // Food Form
    if (data.sections?.food) {
        const food = data.sections.food;
        
        // Display food image if exists
        if (data.images?.food) {
            displayImagePreview('food-image-preview', data.images.food);
        }
        
        document.getElementById('food-description').value = food.description || '';
        document.getElementById('special-requests').value = food.specialRequests || '';
        
        // Meals
        if (food.meals && food.meals.length > 0) {
            const mealsContainer = document.getElementById('meal-sections');
            mealsContainer.innerHTML = ''; // Clear existing container
            
            food.meals.forEach((meal, index) => {
                addMealSection(meal, index);
            });
        }
    }
    
    // Wifi & Rules Form
    if (data.sections?.['wifi-rules']) {
        const wifiRules = data.sections['wifi-rules'];
        
        // Wifi Info
        if (wifiRules.wifi) {
            document.getElementById('network-name').value = wifiRules.wifi.networkName || '';
            document.getElementById('wifi-password').value = wifiRules.wifi.password || '';
            document.getElementById('wifi-speed').value = wifiRules.wifi.speed || '';
            document.getElementById('wifi-coverage').value = wifiRules.wifi.coverage || '';
        }
        
        // House Rules
        if (wifiRules.rules && wifiRules.rules.length > 0) {
            const rulesContainer = document.getElementById('house-rules');
            rulesContainer.innerHTML = ''; // Clear existing fields
            
            wifiRules.rules.forEach(rule => {
                addDynamicField('house-rules', [rule]);
            });
        }
    }
    
    // Emergency Form
    if (data.sections?.emergency) {
        const emergency = data.sections.emergency;
        
        // Manager Info
        if (emergency.manager) {
            document.getElementById('manager-name').value = emergency.manager.name || '';
            document.getElementById('manager-phone').value = emergency.manager.phone || '';
            document.getElementById('manager-availability').value = emergency.manager.availability || '';
        }
        
        // Emergency Contacts
        if (emergency.contacts && emergency.contacts.length > 0) {
            const contactsContainer = document.getElementById('emergency-contacts');
            contactsContainer.innerHTML = ''; // Clear existing contacts
            
            emergency.contacts.forEach(contact => {
                addEmergencyContact(contact);
            });
        }
    }
    
    // Nearby Experiences Form
    if (data.sections?.nearby) {
        const nearby = data.sections.nearby;
        
        // Experiences
        if (nearby.experiences && nearby.experiences.length > 0) {
            const experiencesContainer = document.getElementById('nearby-experiences');
            experiencesContainer.innerHTML = ''; // Clear existing experiences
            
            nearby.experiences.forEach(experience => {
                addNearbyExperience(experience);
            });
        }
    }
    
    // Booking Form
    if (data.sections?.book) {
        const booking = data.sections.book;
        
        document.getElementById('booking-intro').value = booking.intro || '';
        
        // Booking Options
        if (booking.options && booking.options.length > 0) {
            const optionsContainer = document.getElementById('booking-options');
            optionsContainer.innerHTML = ''; // Clear existing options
            
            booking.options.forEach(option => {
                addBookingOption(option);
            });
        }
        
        // Room Types
        if (booking.rooms && booking.rooms.length > 0) {
            const roomsContainer = document.getElementById('room-types');
            roomsContainer.innerHTML = ''; // Clear existing rooms
            
            booking.rooms.forEach(room => {
                addRoomType(room);
            });
        }
    }
    
    // Gallery Form
    if (data.images?.gallery && data.images.gallery.length > 0) {
        displayGalleryImages(data.images.gallery);
    }
}

// Setup dynamic fields
function setupDynamicFields() {
    // Add Reach Info
    document.getElementById('add-reach').addEventListener('click', function() {
        addDynamicField('reach-info');
    });
    
    // Add Landmark
    document.getElementById('add-landmark').addEventListener('click', function() {
        addDynamicField('landmarks');
    });
    
    // Add Room Amenity
    document.getElementById('add-room-amenity').addEventListener('click', function() {
        addDynamicField('room-amenities');
    });
    
    // Add Common Area
    document.getElementById('add-common-area').addEventListener('click', function() {
        addDynamicField('common-areas');
    });
    
    // Add Service
    document.getElementById('add-service').addEventListener('click', function() {
        addDynamicField('services');
    });
    
    // Add House Rule
    document.getElementById('add-rule').addEventListener('click', function() {
        addDynamicField('house-rules');
    });
    
    // Add Meal
    document.getElementById('add-meal').addEventListener('click', function() {
        const mealSections = document.getElementById('meal-sections');
        const mealIndex = mealSections.children.length;
        
        addMealSection({
            type: '',
            timing: '',
            items: ['']
        }, mealIndex);
    });
    
    // Add Emergency Contact
    document.getElementById('add-emergency').addEventListener('click', function() {
        addEmergencyContact();
    });
    
    // Add Nearby Experience
    document.getElementById('add-experience').addEventListener('click', function() {
        addNearbyExperience();
    });
    
    // Add Booking Option
    document.getElementById('add-booking').addEventListener('click', function() {
        addBookingOption();
    });
    
    // Add Room Type
    document.getElementById('add-room').addEventListener('click', function() {
        addRoomType();
    });
    
    // Add event delegation for dynamic remove buttons
    document.addEventListener('click', function(e) {
        // Remove dynamic field
        if (e.target.classList.contains('btn-remove') || e.target.parentElement.classList.contains('btn-remove')) {
            const button = e.target.classList.contains('btn-remove') ? e.target : e.target.parentElement;
            const field = button.closest('.dynamic-field');
            if (field) {
                field.remove();
            }
        }
        
        // Remove section
        if (e.target.classList.contains('btn-remove-section')) {
            const section = e.target.closest('.meal-section, .emergency-contact, .nearby-experience, .booking-option, .room-type');
            if (section) {
                section.remove();
            }
        }
        
        // Add menu item
        if (e.target.classList.contains('menu-item-add')) {
            const index = e.target.getAttribute('data-index');
            const menuItemsContainer = document.getElementById(`menu-items-${index}`);
            
            const newField = document.createElement('div');
            newField.className = 'dynamic-field';
            newField.innerHTML = `
                <input type="text" name="menuItem[${index}][]" placeholder="e.g. Menu item">
                <button type="button" class="btn-remove"><i class="fas fa-times"></i></button>
            `;
            
            menuItemsContainer.appendChild(newField);
        }
    });
}

// Add dynamic field
function addDynamicField(containerId, values = []) {
    const container = document.getElementById(containerId);
    const newField = document.createElement('div');
    newField.className = 'dynamic-field';
    
    // Create different input structure based on container ID
    if (containerId === 'reach-info') {
        newField.innerHTML = `
            <input type="text" name="reachTitle[]" placeholder="e.g. From Airport" value="${values[0] || ''}">
            <input type="text" name="reachDetails[]" placeholder="e.g. 25 km (45 minutes by taxi)" value="${values[1] || ''}">
            <button type="button" class="btn-remove"><i class="fas fa-times"></i></button>
        `;
    } else if (containerId === 'landmarks') {
        newField.innerHTML = `
            <input type="text" name="landmarkName[]" placeholder="e.g. City Center" value="${values[0] || ''}">
            <input type="text" name="landmarkDistance[]" placeholder="e.g. 2 km" value="${values[1] || ''}">
            <button type="button" class="btn-remove"><i class="fas fa-times"></i></button>
        `;
    } else if (containerId === 'room-amenities') {
        newField.innerHTML = `
            <input type="text" name="roomAmenity[]" placeholder="e.g. Comfortable beds with premium mattresses" value="${values[0] || ''}">
            <button type="button" class="btn-remove"><i class="fas fa-times"></i></button>
        `;
    } else if (containerId === 'common-areas') {
        newField.innerHTML = `
            <input type="text" name="commonArea[]" placeholder="e.g. Spacious living room with fireplace" value="${values[0] || ''}">
            <button type="button" class="btn-remove"><i class="fas fa-times"></i></button>
        `;
    } else if (containerId === 'services') {
        newField.innerHTML = `
            <input type="text" name="service[]" placeholder="e.g. Homemade meals (breakfast included)" value="${values[0] || ''}">
            <button type="button" class="btn-remove"><i class="fas fa-times"></i></button>
        `;
    } else if (containerId === 'house-rules') {
        newField.innerHTML = `
            <input type="text" name="houseRule[]" placeholder="e.g. Check-in time: 12:00 PM - 8:00 PM" value="${values[0] || ''}">
            <button type="button" class="btn-remove"><i class="fas fa-times"></i></button>
        `;
    }
    
    container.appendChild(newField);
}

// Add meal section
function addMealSection(meal = {}, index) {
    const mealSections = document.getElementById('meal-sections');
    
    const newMealSection = document.createElement('div');
    newMealSection.className = 'meal-section';
    newMealSection.innerHTML = `
        <div class="form-group">
            <label>Meal Type</label>
            <input type="text" name="mealType[]" placeholder="e.g. Breakfast" value="${meal.type || ''}">
        </div>
        <div class="form-group">
            <label>Timing</label>
            <input type="text" name="mealTiming[]" placeholder="e.g. 8:00 AM - 10:00 AM" value="${meal.timing || ''}">
        </div>
        <div class="form-group">
            <label>Sample Menu Items</label>
            <div class="dynamic-fields" id="menu-items-${index}">
                <!-- Menu items will be added here -->
            </div>
            <button type="button" class="btn-add menu-item-add" data-index="${index}">Add Item</button>
        </div>
        <button type="button" class="btn-remove-section">Remove Meal</button>
    `;
    
    mealSections.appendChild(newMealSection);
    
    // Add menu items
    const menuItemsContainer = document.getElementById(`menu-items-${index}`);
    
    if (meal.items && meal.items.length > 0) {
        meal.items.forEach(item => {
            const newField = document.createElement('div');
            newField.className = 'dynamic-field';
            newField.innerHTML = `
                <input type="text" name="menuItem[${index}][]" placeholder="e.g. Menu item" value="${item}">
                <button type="button" class="btn-remove"><i class="fas fa-times"></i></button>
            `;
            
            menuItemsContainer.appendChild(newField);
        });
    } else {
        // Add one empty field
        const newField = document.createElement('div');
        newField.className = 'dynamic-field';
        newField.innerHTML = `
            <input type="text" name="menuItem[${index}][]" placeholder="e.g. Menu item">
            <button type="button" class="btn-remove"><i class="fas fa-times"></i></button>
        `;
        
        menuItemsContainer.appendChild(newField);
    }
}

// Add emergency contact
function addEmergencyContact(contact = {}) {
    const contactsContainer = document.getElementById('emergency-contacts');
    
    const newContact = document.createElement('div');
    newContact.className = 'emergency-contact';
    newContact.innerHTML = `
        <div class="form-group">
            <label>Contact Type</label>
            <input type="text" name="contactType[]" placeholder="e.g. Medical Emergency" value="${contact.type || ''}">
        </div>
        <div class="form-group">
            <label>Name/Place</label>
            <input type="text" name="contactName[]" placeholder="e.g. City Hospital" value="${contact.name || ''}">
        </div>
        <div class="form-group">
            <label>Phone</label>
            <input type="text" name="contactPhone[]" placeholder="e.g. +1 234 567 8900" value="${contact.phone || ''}">
        </div>
        <div class="form-group">
            <label>Additional Info</label>
            <input type="text" name="contactInfo[]" placeholder="e.g. Distance: 3 km" value="${contact.info || ''}">
        </div>
        <button type="button" class="btn-remove-section">Remove Contact</button>
    `;
    
    contactsContainer.appendChild(newContact);
}

// Add nearby experience
function addNearbyExperience(experience = {}) {
    const experiencesContainer = document.getElementById('nearby-experiences');
    
    const newExperience = document.createElement('div');
    newExperience.className = 'nearby-experience';
    newExperience.innerHTML = `
        <div class="form-group">
            <label>Experience Name</label>
            <input type="text" name="experienceName[]" placeholder="e.g. Local Market" value="${experience.name || ''}">
        </div>
        <div class="form-group">
            <label>Distance</label>
            <input type="text" name="experienceDistance[]" placeholder="e.g. 500m (10 min walk)" value="${experience.distance || ''}">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="experienceDescription[]" rows="3" placeholder="Describe this experience">${experience.description || ''}</textarea>
        </div>
        <button type="button" class="btn-remove-section">Remove Experience</button>
    `;
    
    experiencesContainer.appendChild(newExperience);
}

// Add booking option
function addBookingOption(option = {}) {
    const optionsContainer = document.getElementById('booking-options');
    
    const newOption = document.createElement('div');
    newOption.className = 'booking-option';
    newOption.innerHTML = `
        <div class="form-group">
            <label>Platform/Method</label>
            <input type="text" name="bookingPlatform[]" placeholder="e.g. Airbnb" value="${option.platform || ''}">
        </div>
        <div class="form-group">
            <label>Link/Contact</label>
            <input type="text" name="bookingLink[]" placeholder="e.g. https://airbnb.com/h/yourproperty" value="${option.link || ''}">
        </div>
        <button type="button" class="btn-remove-section">Remove Option</button>
    `;
    
    optionsContainer.appendChild(newOption);
}

// Add room type
function addRoomType(room = {}) {
    const roomsContainer = document.getElementById('room-types');
    
    const newRoom = document.createElement('div');
    newRoom.className = 'room-type';
    newRoom.innerHTML = `
        <div class="form-group">
            <label>Room Name</label>
            <input type="text" name="roomName[]" placeholder="e.g. Deluxe Suite" value="${room.name || ''}">
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" name="roomDescription[]" placeholder="e.g. King bed, sitting area, premium bathroom" value="${room.description || ''}">
        </div>
        <button type="button" class="btn-remove-section">Remove Room</button>
    `;
    
    roomsContainer.appendChild(newRoom);
}

// Setup image uploads
function setupImageUploads() {
    // Property Image
    document.getElementById('property-image').addEventListener('change', function(e) {
        handleImageUpload(e, 'property-image-preview');
    });
    
    // Amenities Image
    document.getElementById('amenities-image').addEventListener('change', function(e) {
        handleImageUpload(e, 'amenities-image-preview');
    });
    
    // Food Image
    document.getElementById('food-image').addEventListener('change', function(e) {
        handleImageUpload(e, 'food-image-preview');
    });
    
    // Gallery Images
    document.getElementById('gallery-image').addEventListener('change', function(e) {
        handleGalleryUpload(e);
    });
}

// Handle image upload
function handleImageUpload(event, previewId) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        displayImagePreview(previewId, e.target.result);
    };
    reader.readAsDataURL(file);
}

// Display image preview
function displayImagePreview(previewId, src) {
    const previewContainer = document.getElementById(previewId);
    previewContainer.innerHTML = `<img src="${src}" alt="Preview">`;
}

// Handle gallery upload
function handleGalleryUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    const galleryPreview = document.getElementById('gallery-preview');
    
    // Remove empty gallery message if exists
    const emptyGallery = galleryPreview.querySelector('.empty-gallery');
    if (emptyGallery) {
        emptyGallery.remove();
    }
    
    // Process each file
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${e.target.result}" alt="Gallery Image">
                <button type="button" class="remove-image"><i class="fas fa-times"></i></button>
            `;
            
            // Add event listener to remove button
            galleryItem.querySelector('.remove-image').addEventListener('click', function() {
                galleryItem.remove();
                
                // If gallery is empty, show empty message
                if (galleryPreview.children.length === 0) {
                    galleryPreview.innerHTML = '<p class="empty-gallery">No images added yet. Upload images to see them here.</p>';
                }
            });
            
            galleryPreview.appendChild(galleryItem);
        };
        
        reader.readAsDataURL(file);
    }
}

// Display gallery images
function displayGalleryImages(images) {
    const galleryPreview = document.getElementById('gallery-preview');
    galleryPreview.innerHTML = ''; // Clear existing content
    
    if (images.length === 0) {
        galleryPreview.innerHTML = '<p class="empty-gallery">No images added yet. Upload images to see them here.</p>';
        return;
    }
    
    images.forEach(src => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${src}" alt="Gallery Image">
            <button type="button" class="remove-image"><i class="fas fa-times"></i></button>
        `;
        
        // Add event listener to remove button
        galleryItem.querySelector('.remove-image').addEventListener('click', function() {
            galleryItem.remove();
            
            // If gallery is empty, show empty message
            if (galleryPreview.children.length === 0) {
                galleryPreview.innerHTML = '<p class="empty-gallery">No images added yet. Upload images to see them here.</p>';
            }
        });
        
        galleryPreview.appendChild(galleryItem);
    });
}

// Save form data
function saveFormData(form) {
    const formId = form.id;
    const guidebookData = loadGuidebookData();
    
    // Save data based on form ID
    if (formId === 'property-info-form') {
        guidebookData.propertyName = document.getElementById('property-name').value;
        guidebookData.location = document.getElementById('property-location').value;
        guidebookData.description = document.getElementById('property-description').value;
        
        // Social media
        if (!guidebookData.socialMedia) {
            guidebookData.socialMedia = {};
        }
        guidebookData.socialMedia.instagram = document.getElementById('instagram-link').value;
        
        // Property image
        const propertyImagePreview = document.getElementById('property-image-preview');
        if (propertyImagePreview.querySelector('img')) {
            if (!guidebookData.images) {
                guidebookData.images = {};
            }
            guidebookData.images.property = propertyImagePreview.querySelector('img').src;
        }
    } 
    else if (formId === 'location-form') {
        if (!guidebookData.sections) {
            guidebookData.sections = {};
        }
        
        if (!guidebookData.sections.location) {
            guidebookData.sections.location = {
                title: 'Location'
            };
        }
        
        guidebookData.sections.location.address = document.getElementById('address').value;
        guidebookData.sections.location.googleMap = document.getElementById('google-map').value;
        
        // Reach Info
        const reachTitles = Array.from(document.getElementsByName('reachTitle[]')).map(input => input.value);
        const reachDetails = Array.from(document.getElementsByName('reachDetails[]')).map(input => input.value);
        
        guidebookData.sections.location.reachInfo = reachTitles.map((title, index) => ({
            title,
            details: reachDetails[index] || ''
        }));
        
        // Landmarks
        const landmarkNames = Array.from(document.getElementsByName('landmarkName[]')).map(input => input.value);
        const landmarkDistances = Array.from(document.getElementsByName('landmarkDistance[]')).map(input => input.value);
        
        guidebookData.sections.location.landmarks = landmarkNames.map((name, index) => ({
            name,
            distance: landmarkDistances[index] || ''
        }));
    }
    else if (formId === 'amenities-form') {
        if (!guidebookData.sections) {
            guidebookData.sections = {};
        }
        
        if (!guidebookData.sections.amenities) {
            guidebookData.sections.amenities = {
                title: 'Amenities'
            };
        }
        
        // Amenities image
        const amenitiesImagePreview = document.getElementById('amenities-image-preview');
        if (amenitiesImagePreview.querySelector('img')) {
            if (!guidebookData.images) {
                guidebookData.images = {};
            }
            guidebookData.images.amenities = amenitiesImagePreview.querySelector('img').src;
        }
        
        // Room Amenities
        guidebookData.sections.amenities.roomAmenities = Array.from(document.getElementsByName('roomAmenity[]')).map(input => input.value);
        
        // Common Areas
        guidebookData.sections.amenities.commonAreas = Array.from(document.getElementsByName('commonArea[]')).map(input => input.value);
        
        // Services
        guidebookData.sections.amenities.services = Array.from(document.getElementsByName('service[]')).map(input => input.value);
    }
    else if (formId === 'food-form') {
        if (!guidebookData.sections) {
            guidebookData.sections = {};
        }
        
        if (!guidebookData.sections.food) {
            guidebookData.sections.food = {
                title: 'Food'
            };
        }
        
        // Food image
        const foodImagePreview = document.getElementById('food-image-preview');
        if (foodImagePreview.querySelector('img')) {
            if (!guidebookData.images) {
                guidebookData.images = {};
            }
            guidebookData.images.food = foodImagePreview.querySelector('img').src;
        }
        
        guidebookData.sections.food.description = document.getElementById('food-description').value;
        guidebookData.sections.food.specialRequests = document.getElementById('special-requests').value;
        
        // Meals
        const mealTypes = Array.from(document.getElementsByName('mealType[]')).map(input => input.value);
        const mealTimings = Array.from(document.getElementsByName('mealTiming[]')).map(input => input.value);
        
        // Get meal items for each meal
        const meals = [];
        for (let i = 0; i < mealTypes.length; i++) {
            const mealItems = Array.from(document.getElementsByName(`menuItem[${i}][]`)).map(input => input.value);
            
            meals.push({
                type: mealTypes[i],
                timing: mealTimings[i],
                items: mealItems
            });
        }
        
        guidebookData.sections.food.meals = meals;
    }
    else if (formId === 'wifi-rules-form') {
        if (!guidebookData.sections) {
            guidebookData.sections = {};
        }
        
        if (!guidebookData.sections['wifi-rules']) {
            guidebookData.sections['wifi-rules'] = {
                title: 'Wifi & Rules'
            };
        }
        
        // Wifi Info
        guidebookData.sections['wifi-rules'].wifi = {
            networkName: document.getElementById('network-name').value,
            password: document.getElementById('wifi-password').value,
            speed: document.getElementById('wifi-speed').value,
            coverage: document.getElementById('wifi-coverage').value
        };
        
        // House Rules
        guidebookData.sections['wifi-rules'].rules = Array.from(document.getElementsByName('houseRule[]')).map(input => input.value);
    }
    else if (formId === 'emergency-form') {
        if (!guidebookData.sections) {
            guidebookData.sections = {};
        }
        
        if (!guidebookData.sections.emergency) {
            guidebookData.sections.emergency = {
                title: 'Emergency Contact'
            };
        }
        
        // Manager Info
        guidebookData.sections.emergency.manager = {
            name: document.getElementById('manager-name').value,
            phone: document.getElementById('manager-phone').value,
            availability: document.getElementById('manager-availability').value
        };
        
        // Emergency Contacts
        const contactTypes = Array.from(document.getElementsByName('contactType[]')).map(input => input.value);
        const contactNames = Array.from(document.getElementsByName('contactName[]')).map(input => input.value);
        const contactPhones = Array.from(document.getElementsByName('contactPhone[]')).map(input => input.value);
        const contactInfos = Array.from(document.getElementsByName('contactInfo[]')).map(input => input.value);
        
        guidebookData.sections.emergency.contacts = contactTypes.map((type, index) => ({
            type,
            name: contactNames[index] || '',
            phone: contactPhones[index] || '',
            info: contactInfos[index] || ''
        }));
    }
    else if (formId === 'nearby-form') {
        if (!guidebookData.sections) {
            guidebookData.sections = {};
        }
        
        if (!guidebookData.sections.nearby) {
            guidebookData.sections.nearby = {
                title: 'Nearby Experiences'
            };
        }
        
        // Experiences
        const experienceNames = Array.from(document.getElementsByName('experienceName[]')).map(input => input.value);
        const experienceDistances = Array.from(document.getElementsByName('experienceDistance[]')).map(input => input.value);
        const experienceDescriptions = Array.from(document.getElementsByName('experienceDescription[]')).map(input => input.value);
        
        guidebookData.sections.nearby.experiences = experienceNames.map((name, index) => ({
            name,
            distance: experienceDistances[index] || '',
            description: experienceDescriptions[index] || ''
        }));
    }
    else if (formId === 'booking-form') {
        if (!guidebookData.sections) {
            guidebookData.sections = {};
        }
        
        if (!guidebookData.sections.book) {
            guidebookData.sections.book = {
                title: 'Book Now'
            };
        }
        
        guidebookData.sections.book.intro = document.getElementById('booking-intro').value;
        
        // Booking Options
        const bookingPlatforms = Array.from(document.getElementsByName('bookingPlatform[]')).map(input => input.value);
        const bookingLinks = Array.from(document.getElementsByName('bookingLink[]')).map(input => input.value);
        
        guidebookData.sections.book.options = bookingPlatforms.map((platform, index) => ({
            platform,
            link: bookingLinks[index] || ''
        }));
        
        // Room Types
        const roomNames = Array.from(document.getElementsByName('roomName[]')).map(input => input.value);
        const roomDescriptions = Array.from(document.getElementsByName('roomDescription[]')).map(input => input.value);
        
        guidebookData.sections.book.rooms = roomNames.map((name, index) => ({
            name,
            description: roomDescriptions[index] || ''
        }));
    }
    else if (formId === 'gallery-form') {
        if (!guidebookData.images) {
            guidebookData.images = {};
        }
        
        // Gallery Images
        const galleryItems = document.querySelectorAll('.gallery-item img');
        guidebookData.images.gallery = Array.from(galleryItems).map(img => img.src);
        
        if (!guidebookData.sections) {
            guidebookData.sections = {};
        }
        
        if (!guidebookData.sections.gallery) {
            guidebookData.sections.gallery = {
                title: 'Gallery'
            };
        }
    }
    
    // Save data to localStorage
    localStorage.setItem('guidebookData', JSON.stringify(guidebookData));
    
    // Show success message
    showSaveSuccess();
    
    // Update preview if open
    updatePreview();
}

// Show save success message
function showSaveSuccess() {
    const message = document.createElement('div');
    message.className = 'save-success';
    message.innerHTML = 'Changes saved successfully!';
    message.style.position = 'fixed';
    message.style.bottom = '20px';
    message.style.right = '20px';
    message.style.backgroundColor = '#2ecc71';
    message.style.color = 'white';
    message.style.padding = '10px 20px';
    message.style.borderRadius = '4px';
    message.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    message.style.zIndex = '1000';
    
    document.body.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.removeChild(message);
        }, 500);
    }, 3000);
}

// Update preview
function updatePreview() {
    const previewFrame = document.getElementById('preview-frame');
    if (previewFrame) {
        previewFrame.src = previewFrame.src;
    }
}

// Publish guidebook
function publishGuidebook() {
    // For MVP, publishing just means saving the data
    // In a real application, this would involve more steps
    
    // Show publish success message
    const message = document.createElement('div');
    message.className = 'publish-success';
    message.innerHTML = 'Guidebook published successfully!';
    message.style.position = 'fixed';
    message.style.bottom = '20px';
    message.style.right = '20px';
    message.style.backgroundColor = '#e67e22';
    message.style.color = 'white';
    message.style.padding = '10px 20px';
    message.style.borderRadius = '4px';
    message.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    message.style.zIndex = '1000';
    
    document.body.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.removeChild(message);
        }, 500);
    }, 3000);
}
