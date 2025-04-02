// Gallery Viewer JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery functionality
    initGallery();
});

// Initialize gallery
function initGallery() {
    // Create gallery viewer container
    const galleryViewerContainer = document.createElement('div');
    galleryViewerContainer.className = 'gallery-viewer-container';
    galleryViewerContainer.innerHTML = `
        <div class="gallery-viewer">
            <div class="gallery-image-container">
                <img src="" alt="Gallery Image" id="gallery-current-image">
            </div>
            <div class="gallery-controls">
                <button class="gallery-prev"><i class="fas fa-chevron-left"></i></button>
                <div class="gallery-counter"><span id="gallery-current">1</span> / <span id="gallery-total">0</span></div>
                <button class="gallery-next"><i class="fas fa-chevron-right"></i></button>
            </div>
            <button class="gallery-close"><i class="fas fa-times"></i></button>
        </div>
    `;
    
    document.body.appendChild(galleryViewerContainer);
    
    // Add event listener to gallery section
    document.getElementById('gallery').addEventListener('click', function() {
        loadGalleryImages();
    });
    
    // Add event listeners to gallery controls
    document.querySelector('.gallery-close').addEventListener('click', closeGallery);
    document.querySelector('.gallery-prev').addEventListener('click', showPrevImage);
    document.querySelector('.gallery-next').addEventListener('click', showNextImage);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!document.querySelector('.gallery-viewer-container.active')) return;
        
        if (e.key === 'Escape') {
            closeGallery();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });
}

// Global variables for gallery
let currentGalleryIndex = 0;
let galleryImages = [];

// Load gallery images
function loadGalleryImages() {
    const guidebookData = loadGuidebookData();
    
    if (guidebookData.images && guidebookData.images.gallery && guidebookData.images.gallery.length > 0) {
        galleryImages = guidebookData.images.gallery;
        
        // Update gallery content
        const galleryContent = document.getElementById('section-content');
        galleryContent.innerHTML = `
            <h2>Gallery</h2>
            <div class="gallery-grid">
                ${galleryImages.map((src, index) => `
                    <div class="gallery-thumbnail" data-index="${index}">
                        <img src="${src}" alt="Gallery Image ${index + 1}">
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add event listeners to thumbnails
        document.querySelectorAll('.gallery-thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                openGallery(index);
            });
        });
        
        // Show gallery section
        galleryContent.classList.add('active');
        galleryContent.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Show empty gallery message
        const galleryContent = document.getElementById('section-content');
        galleryContent.innerHTML = `
            <h2>Gallery</h2>
            <div class="empty-gallery-message">
                <p>No gallery images available yet.</p>
            </div>
        `;
        
        // Show gallery section
        galleryContent.classList.add('active');
        galleryContent.scrollIntoView({ behavior: 'smooth' });
    }
}

// Open gallery viewer
function openGallery(index) {
    if (galleryImages.length === 0) return;
    
    currentGalleryIndex = index;
    
    // Update image
    document.getElementById('gallery-current-image').src = galleryImages[currentGalleryIndex];
    
    // Update counter
    document.getElementById('gallery-current').textContent = currentGalleryIndex + 1;
    document.getElementById('gallery-total').textContent = galleryImages.length;
    
    // Show gallery viewer
    document.querySelector('.gallery-viewer-container').classList.add('active');
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

// Close gallery viewer
function closeGallery() {
    document.querySelector('.gallery-viewer-container').classList.remove('active');
    
    // Enable body scroll
    document.body.style.overflow = '';
}

// Show previous image
function showPrevImage() {
    if (galleryImages.length === 0) return;
    
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    
    // Update image with fade effect
    const galleryImage = document.getElementById('gallery-current-image');
    galleryImage.style.opacity = '0';
    
    setTimeout(() => {
        galleryImage.src = galleryImages[currentGalleryIndex];
        galleryImage.style.opacity = '1';
        
        // Update counter
        document.getElementById('gallery-current').textContent = currentGalleryIndex + 1;
    }, 300);
}

// Show next image
function showNextImage() {
    if (galleryImages.length === 0) return;
    
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    
    // Update image with fade effect
    const galleryImage = document.getElementById('gallery-current-image');
    galleryImage.style.opacity = '0';
    
    setTimeout(() => {
        galleryImage.src = galleryImages[currentGalleryIndex];
        galleryImage.style.opacity = '1';
        
        // Update counter
        document.getElementById('gallery-current').textContent = currentGalleryIndex + 1;
    }, 300);
}
