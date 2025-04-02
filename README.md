# Digital Guidebook SaaS Application - Documentation

## Overview
This is a Micro-SaaS web application that serves as a digital guidebook for Airbnb and homestay hosts. It allows hosts to create and manage their digital guidebooks through an admin panel, which automatically updates the guidebook that guests can view.

## Project Structure
The application is organized into two main directories:

1. **public/** - Contains the guest-facing guidebook
   - `index.html` - Main guidebook page
   - `css/` - Stylesheets for the guidebook
   - `js/` - JavaScript files for guidebook functionality
   - `assets/` - Images and other media files

2. **admin/** - Contains the host-facing admin panel
   - `index.html` - Admin dashboard
   - `css/` - Stylesheets for the admin panel
   - `js/` - JavaScript files for admin functionality

## Features

### Guidebook Features
- Property information display with images
- Navigation menu with icons
- Sections for location, reviews, WiFi & rules, emergency contacts, etc.
- Amenities, food, and gallery sections with images
- Responsive design for mobile and desktop viewing

### Admin Panel Features
- Comprehensive dashboard for property management
- Forms for all guidebook sections
- Image upload functionality
- Dynamic field management
- Preview functionality
- Real-time updates to the guidebook

## Deployment Instructions

### Option 1: Deploy as a Static Website
1. Upload the entire `digital-guidebook-saas` directory to your web hosting service
2. Ensure the directory structure is maintained
3. Access the guidebook at `your-domain.com/path/to/digital-guidebook-saas/public/index.html`
4. Access the admin panel at `your-domain.com/path/to/digital-guidebook-saas/admin/index.html`

### Option 2: Local Deployment
1. Extract the `digital-guidebook-saas.zip` file to your local machine
2. Open the public guidebook by opening `public/index.html` in a web browser
3. Open the admin panel by opening `admin/index.html` in a web browser

## Usage Instructions

### For Hosts (Admin Panel)
1. Open the admin panel (`admin/index.html`)
2. Navigate through the sidebar menu to access different sections
3. Fill in your property details in each section
4. Upload images where applicable
5. Click "Save Changes" in each section to save your data
6. Use the "Preview" tab to see how your guidebook looks
7. Click "Publish Changes" to finalize your guidebook

### For Guests (Guidebook)
1. Open the guidebook (`public/index.html`)
2. Browse through the navigation menu to access different sections
3. Click on section items (Amenities, Food, Gallery) to view detailed information
4. Use the gallery viewer to browse through property images

## Technical Details
- Built with HTML, CSS, and JavaScript
- Data is stored in localStorage (for MVP)
- No server-side code required
- Fully responsive design

## Future Enhancements (Not Included in MVP)
- Authentication system for hosts
- Payment processing
- Multiple property management
- Custom domain support
- Analytics dashboard

## Support
For any issues or questions, please contact the developer.

---

Thank you for using the Digital Guidebook SaaS Application!
