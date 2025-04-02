// Test script for the Admin Panel
// This script tests the functionality of the admin panel by simulating user interactions

// Test functions
function testAdminPanel() {
    console.log("Testing Admin Panel...");
    
    // Test navigation
    const navItems = document.querySelectorAll('.admin-nav li');
    console.log("Admin Navigation Items:", navItems.length === 10 ? "✓" : "✗");
    
    // Test form sections
    const formSections = document.querySelectorAll('.content-section');
    console.log("Admin Form Sections:", formSections.length === 10 ? "✓" : "✗");
    
    // Test property info form
    const propertyInfoForm = document.getElementById('property-info-form');
    console.log("Property Info Form:", propertyInfoForm ? "✓" : "✗");
    
    // Test dynamic fields functionality
    try {
        // Test adding a dynamic field
        const addRoomAmenityBtn = document.getElementById('add-room-amenity');
        if (addRoomAmenityBtn) {
            const initialCount = document.querySelectorAll('#room-amenities .dynamic-field').length;
            addRoomAmenityBtn.click();
            const newCount = document.querySelectorAll('#room-amenities .dynamic-field').length;
            console.log("Dynamic Field Addition:", newCount > initialCount ? "✓" : "✗");
        } else {
            console.log("Dynamic Field Addition: ✗ (Button not found)");
        }
        
        // Test adding a section
        const addMealBtn = document.getElementById('add-meal');
        if (addMealBtn) {
            const initialCount = document.querySelectorAll('.meal-section').length;
            addMealBtn.click();
            const newCount = document.querySelectorAll('.meal-section').length;
            console.log("Section Addition:", newCount > initialCount ? "✓" : "✗");
        } else {
            console.log("Section Addition: ✗ (Button not found)");
        }
    } catch (error) {
        console.log("Dynamic Fields Test: ✗ (Error:", error.message + ")");
    }
    
    // Test form submission
    try {
        // Fill in a form field
        const propertyNameInput = document.getElementById('property-name');
        if (propertyNameInput) {
            const originalValue = propertyNameInput.value;
            const testValue = "Test Property Name";
            propertyNameInput.value = testValue;
            
            // Submit the form
            const saveBtn = propertyInfoForm.querySelector('.btn-save');
            if (saveBtn) {
                // Create a mock event to prevent actual form submission
                const mockEvent = {
                    preventDefault: function() {}
                };
                
                // Get the form submit handler
                const formHandler = propertyInfoForm.onsubmit;
                if (formHandler) {
                    formHandler(mockEvent);
                    
                    // Check if data was saved to localStorage
                    const savedData = JSON.parse(localStorage.getItem('guidebookData'));
                    console.log("Form Submission:", savedData && savedData.propertyName === testValue ? "✓" : "✗");
                    
                    // Restore original value
                    propertyNameInput.value = originalValue;
                } else {
                    console.log("Form Submission: ✗ (Handler not found)");
                }
            } else {
                console.log("Form Submission: ✗ (Save button not found)");
            }
        } else {
            console.log("Form Submission: ✗ (Input not found)");
        }
    } catch (error) {
        console.log("Form Submission Test: ✗ (Error:", error.message + ")");
    }
    
    // Test preview functionality
    const previewFrame = document.getElementById('preview-frame');
    console.log("Preview Frame:", previewFrame ? "✓" : "✗");
    
    console.log("Admin Panel Tests Completed");
}

// Run tests when the page is loaded
window.addEventListener('load', function() {
    // Wait for all scripts to initialize
    setTimeout(function() {
        testAdminPanel();
    }, 1000);
});
