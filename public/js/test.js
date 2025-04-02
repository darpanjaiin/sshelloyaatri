// Test script for the Digital Guidebook SaaS application
// This script tests the functionality of the application by simulating user interactions

// Test data for the guidebook
const testData = {
    propertyName: "Thea Homes",
    location: "Vashisht, Manali",
    description: "A beautiful, cozy 7-rooms boutique homestay in Vashisht, Manali with a view of snow-kissed majestic mountains.",
    socialMedia: {
        instagram: "https://instagram.com/theahomes"
    },
    images: {
        property: "/assets/property-image.jpg",
        amenities: "/assets/sample/amenities.jpg",
        food: "/assets/sample/food.jpg",
        gallery: [
            "/assets/sample/gallery1.jpg",
            "/assets/sample/gallery2.jpg",
            "/assets/sample/gallery3.jpg"
        ]
    },
    sections: {
        location: {
            title: "Location",
            address: "Thea Homes, Near Hot Springs, Vashisht, Manali, Himachal Pradesh 175131",
            googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13452.161837706372!2d77.16969!3d32.272223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sVashisht%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1648456789012!5m2!1sen!2sin",
            reachInfo: [
                { title: "From Manali Bus Stand", details: "3 km (15 minutes by taxi)" },
                { title: "From Mall Road", details: "2.5 km (10 minutes by taxi)" }
            ],
            landmarks: [
                { name: "Vashisht Hot Springs", distance: "200m" },
                { name: "Vashisht Temple", distance: "300m" },
                { name: "Manu Temple", distance: "2km" }
            ]
        },
        amenities: {
            title: "Amenities",
            roomAmenities: [
                "Comfortable beds with premium mattresses",
                "Clean linens and towels",
                "Hot water 24/7",
                "Room heaters"
            ],
            commonAreas: [
                "Spacious living room with fireplace",
                "Dining area",
                "Garden seating",
                "Terrace with mountain views"
            ],
            services: [
                "Homemade meals (breakfast included)",
                "Room cleaning service",
                "Laundry service (additional charge)",
                "Local tour arrangements"
            ]
        },
        food: {
            title: "Food",
            description: "At Thea Homes, we take pride in serving delicious, homemade meals prepared with locally sourced ingredients. Our menu offers a mix of local Himachali dishes, North Indian favorites, and some continental options.",
            meals: [
                {
                    type: "Breakfast (Included)",
                    timing: "8:00 AM - 10:00 AM",
                    items: [
                        "Aloo Paratha with curd and pickle",
                        "Poha with chai",
                        "Eggs to order with toast",
                        "Fresh fruit platter",
                        "Himachali Siddu (local bread) with ghee"
                    ]
                },
                {
                    type: "Lunch (On request)",
                    timing: "12:30 PM - 2:30 PM",
                    items: [
                        "Dal, rice, seasonal vegetable, roti, salad",
                        "Rajma Chawal with raita",
                        "Himachali Dham (traditional thali)"
                    ]
                },
                {
                    type: "Dinner",
                    timing: "7:30 PM - 9:30 PM",
                    items: [
                        "North Indian thali",
                        "Himachali specialties",
                        "Seasonal vegetable dishes",
                        "Chicken/Mutton curry (non-veg option)"
                    ]
                }
            ],
            specialRequests: "We can accommodate dietary restrictions and preferences with advance notice. Please inform us about any food allergies or special requirements."
        },
        "wifi-rules": {
            title: "Wifi & Rules",
            wifi: {
                networkName: "Thea_Homes_Guest",
                password: "thea2025guest",
                speed: "50 Mbps",
                coverage: "All rooms and common areas"
            },
            rules: [
                "Check-in time: 12:00 PM - 8:00 PM",
                "Check-out time: 11:00 AM",
                "No smoking inside the rooms",
                "Quiet hours: 10:00 PM - 7:00 AM",
                "Pets are not allowed",
                "Please conserve water and electricity",
                "Dispose of waste in designated bins",
                "Outdoor shoes not allowed inside rooms"
            ]
        },
        emergency: {
            title: "Emergency Contact",
            manager: {
                name: "Vikram Singh",
                phone: "+91 98765 43210",
                availability: "24/7"
            },
            contacts: [
                {
                    type: "Medical Emergency",
                    name: "Lady Willingdon Hospital",
                    phone: "+91 1902 252342",
                    info: "Distance: 3 km"
                },
                {
                    type: "Police Station",
                    name: "Manali Police Station",
                    phone: "+91 1902 252340",
                    info: "Emergency: 100"
                },
                {
                    type: "Fire Emergency",
                    name: "Fire Station Manali",
                    phone: "+91 1902 252101",
                    info: "Emergency: 101"
                },
                {
                    type: "Ambulance",
                    name: "Emergency Services",
                    phone: "108",
                    info: ""
                }
            ]
        },
        nearby: {
            title: "Nearby Experiences",
            experiences: [
                {
                    name: "Vashisht Hot Springs",
                    distance: "200m (5 min walk)",
                    description: "Natural hot springs with medicinal properties. The water contains sulfur and other minerals believed to cure skin diseases and joint pain."
                },
                {
                    name: "Jogini Waterfall Trek",
                    distance: "1.5km (30 min trek)",
                    description: "A beautiful trek through pine forests leading to a stunning waterfall. Moderate difficulty level, suitable for most fitness levels."
                },
                {
                    name: "Old Manali Market",
                    distance: "2km (10 min drive)",
                    description: "Charming market with cafes, shops selling local handicrafts, woolens, and souvenirs. Great place to experience local culture."
                }
            ]
        },
        book: {
            title: "Book Now",
            intro: "To book your stay at Thea Homes, please use one of the following options:",
            options: [
                {
                    platform: "Book on Airbnb",
                    link: "https://airbnb.com/h/theahomes"
                },
                {
                    platform: "Book on Booking.com",
                    link: "https://booking.com/hotel/theahomes"
                },
                {
                    platform: "Direct Booking",
                    link: "Call: +91 98765 43210 or Email: bookings@theahomes.com"
                }
            ],
            rooms: [
                {
                    name: "Mountain View Room",
                    description: "Double bed, private bathroom, balcony"
                },
                {
                    name: "Deluxe Suite",
                    description: "King bed, sitting area, premium bathroom, large balcony"
                },
                {
                    name: "Family Room",
                    description: "1 double bed + 2 single beds, spacious bathroom"
                }
            ]
        },
        gallery: {
            title: "Gallery",
            images: []
        }
    }
};

// Save test data to localStorage
localStorage.setItem('guidebookData', JSON.stringify(testData));

// Test functions
function testGuidebookDisplay() {
    console.log("Testing Guidebook Display...");
    
    // Test property information display
    const propertyName = document.getElementById('property-name').textContent;
    const propertyLocation = document.getElementById('property-location').textContent;
    const propertyDescription = document.getElementById('property-description').textContent;
    
    console.log("Property Name:", propertyName === testData.propertyName ? "✓" : "✗");
    console.log("Property Location:", propertyLocation === testData.location ? "✓" : "✗");
    console.log("Property Description:", propertyDescription === testData.description ? "✓" : "✗");
    
    // Test navigation menu
    const navItems = document.querySelectorAll('.nav-item');
    console.log("Navigation Menu Items:", navItems.length === 6 ? "✓" : "✗");
    
    // Test section items
    const sectionItems = document.querySelectorAll('.section-item');
    console.log("Section Items:", sectionItems.length === 3 ? "✓" : "✗");
    
    // Test section content loading
    const sectionIds = ['location', 'amenities', 'food', 'wifi-rules', 'emergency', 'nearby', 'book', 'gallery'];
    
    sectionIds.forEach(sectionId => {
        // Simulate clicking on a section
        loadSectionContent(sectionId);
        
        // Check if section content is loaded
        const sectionContent = document.getElementById('section-content');
        const isActive = sectionContent.classList.contains('active');
        const hasContent = sectionContent.innerHTML.trim() !== '';
        
        console.log(`Section ${sectionId} Content:`, isActive && hasContent ? "✓" : "✗");
    });
    
    // Test gallery viewer
    if (typeof openGallery === 'function') {
        try {
            openGallery(0);
            const galleryViewer = document.querySelector('.gallery-viewer-container');
            const isActive = galleryViewer.classList.contains('active');
            
            console.log("Gallery Viewer:", isActive ? "✓" : "✗");
            
            // Close gallery
            closeGallery();
        } catch (error) {
            console.log("Gallery Viewer: ✗ (Error:", error.message + ")");
        }
    } else {
        console.log("Gallery Viewer: ✗ (Function not found)");
    }
    
    console.log("Guidebook Display Tests Completed");
}

// Run tests when the page is loaded
window.addEventListener('load', function() {
    // Wait for all scripts to initialize
    setTimeout(function() {
        testGuidebookDisplay();
    }, 1000);
});
