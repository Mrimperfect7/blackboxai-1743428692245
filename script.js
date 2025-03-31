// Global variables
const videoData = [
    {
        id: 1,
        title: "How to Build a YouTube Clone with Tailwind CSS",
        channel: "Web Dev Tutorials",
        views: "1.2M views",
        timestamp: "3 days ago",
        duration: "12:34",
        thumbnail: "https://images.pexels.com/photos/1234853/pexels-photo-1234853.jpeg"
    },
    {
        id: 2,
        title: "Learn JavaScript in 1 Hour",
        channel: "Code Masters",
        views: "856K views",
        timestamp: "1 week ago",
        duration: "58:21",
        thumbnail: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg"
    },
    {
        id: 3,
        title: "Tailwind CSS Crash Course",
        channel: "UI Design Pro",
        views: "450K views",
        timestamp: "2 weeks ago",
        duration: "45:12",
        thumbnail: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg"
    },
    {
        id: 4,
        title: "Building Modern Web Apps",
        channel: "Dev Tutorials",
        views: "320K views",
        timestamp: "1 month ago",
        duration: "1:22:45",
        thumbnail: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg"
    }
];

// DOM elements
const videoGrid = document.getElementById('video-grid');
const header = document.getElementById('header');

// Initialize the app
function init() {
    renderHeader();
    renderVideoGrid();
    setupEventListeners();
}

// Render header component
function renderHeader() {
    header.innerHTML = `
        <header class="sticky top-0 bg-white shadow-sm z-10">
            <div class="flex items-center justify-between px-4 py-2">
                <div class="flex items-center">
                    <div class="text-red-600 mr-4">
                        <i class="fab fa-youtube text-3xl"></i>
                    </div>
                    <div class="hidden md:block text-2xl font-semibold">YouTube</div>
                </div>
                
                <div class="flex-1 max-w-2xl mx-4">
                    <div class="relative">
                        <input type="text" placeholder="Search" 
                            class="w-full border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:border-blue-500">
                        <button class="absolute right-0 top-0 h-full bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-5 hover:bg-gray-200">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                
                <div class="flex items-center space-x-4">
                    <button class="p-2 rounded-full hover:bg-gray-100">
                        <i class="fas fa-video"></i>
                    </button>
                    <button class="p-2 rounded-full hover:bg-gray-100">
                        <i class="fas fa-bell"></i>
                    </button>
                    <button class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        <i class="fas fa-user"></i>
                    </button>
                </div>
            </div>
        </header>
    `;
}

// Render video grid
function renderVideoGrid() {
    videoGrid.innerHTML = videoData.map(video => `
        <div class="video-card cursor-pointer">
            <div class="relative mb-2 overflow-hidden rounded-lg video-thumbnail transition-transform duration-300">
                <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-auto">
                <div class="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                    ${video.duration}
                </div>
            </div>
            <div class="flex">
                <div class="flex-shrink-0 mr-3">
                    <div class="w-9 h-9 rounded-full bg-gray-300"></div>
                </div>
                <div>
                    <h3 class="font-medium text-sm line-clamp-2">${video.title}</h3>
                    <p class="text-gray-600 text-xs mt-1">${video.channel}</p>
                    <p class="text-gray-600 text-xs">${video.views} • ${video.timestamp}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality would be added here
    console.log('Event listeners setup');
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);