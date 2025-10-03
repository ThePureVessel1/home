
document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
    
    // Initial loading state
    root.innerHTML = `
        <div class="min-h-screen bg-hollow-dark flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]"></div>
            <div class="absolute inset-0 opacity-20">
                <div class="absolute top-20 left-10 w-2 h-2 bg-glow animate-pulse rounded-full"></div>
                <div class="absolute top-40 right-20 w-1 h-1 bg-glow animate-pulse delay-1000 rounded-full"></div>
                <div class="absolute bottom-20 left-1/4 w-3 h-3 bg-glow animate-bounce delay-2000 rounded-full"></div>
                <div class="absolute bottom-1/2 right-1/3 w-2 h-2 bg-glow animate-pulse delay-3000 rounded-full"></div>
            </div>
            
            <div class="text-center relative z-10">
                <div class="w-24 h-24 border-4 border-glow border-t-transparent rounded-full animate-spin mx-auto mb-6 shadow-lg"></div>
                <h2 class="text-2xl font-cinzel text-glow uppercase tracking-wider mb-2">Awakening in Hallownest</h2>
                <p class="text-muted-glow text-sm">Journey through the shadows... Preparing your portfolio</p>
                <div class="mt-8 text-xs text-muted-glow">
                    <p>Delve deeper into the void (7 seconds)</p>
                </div>
            </div>
        </div>
    `;

    // After 7 seconds, load the main content with fade-in
    setTimeout(() => {
        root.innerHTML = `
            <div class="min-h-screen bg-hollow-dark transition-opacity duration-1000 opacity-100">
                <div class="scenery-bg"></div>

                <!-- Header -->
                <header class="bg-hollow-dark/80 border-b border-glow/30 py-2 px-4 backdrop-blur-sm">
                    <div class="container mx-auto flex justify-between items-center">
                        <h1 class="text-sm font-cinzel text-glow uppercase tracking-wider">THV Studios</h1>
                        <div class="w-20 h-6 bg-muted-glow/20 rounded-sm flex items-center justify-center">
                            <span class="text-xs text-muted-glow font-inter">Banner Space</span>
                        </div>
                    </div>
                </header>

                <!-- Bio Section -->
                <section class="py-12 px-4">
                    <div class="container mx-auto text-center max-w-2xl">
                        <h2 class="text-2xl md:text-3xl font-cinzel text-glow mb-4 uppercase tracking-wide">
                            Welcome to the Void
                        </h2>
                        <p class="text-muted-glow mb-6 font-inter leading-relaxed">
                            I am a digital artist and developer crafting ethereal worlds inspired by forgotten realms. 
                            My portfolio showcases custom illustrations, interactive experiences, and adoptable creations. 
                            Open for commissions – let's weave your visions into reality.
                        </p>
                        <button class="btn btn-primary font-inter" onclick="alert('Contact form would open here - replace with your email/form link!')">
                            Commission Inquiry
                        </button>
                    </div>
                </section>

                <!-- Portfolio Section -->
                <section class="py-12 px-4">
                    <div class="container mx-auto">
                        <h2 class="text-2xl font-cinzel text-glow mb-8 text-center uppercase tracking-wide">Portfolio Visions</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            <!-- Portfolio 1 -->
                            <div class="card-hollow relative group cursor-pointer">
                                <div class="relative">
                                    <img 
                                        src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Hollow%20Knight%20inspired%20dark%20fantasy%20artwork%20with%20gothic%20insects%20and%20ancient%20ruins%20in%20deep%20blues%20and%20purples&id=portfolio-1" 
                                        alt="Portfolio artwork 1: Dark fantasy scene evoking Hollow Knight's Hallownest with mysterious creatures and glowing essence"
                                        class="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div class="watermark">THV</div>
                                </div>
                                <div class="p-4">
                                    <button class="btn btn-ghost w-full font-inter" onclick="window.open('https://example.com/project-1', '_blank')">
                                        <span style="display: inline-flex; align-items: center;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0e0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Explore
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <!-- Portfolio 2 -->
                            <div class="card-hollow relative group cursor-pointer">
                                <div class="relative">
                                    <img 
                                        src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Hollow%20Knight%20inspired%20dark%20fantasy%20artwork%20with%20gothic%20insects%20and%20ancient%20ruins%20in%20deep%20blues%20and%20purples&id=portfolio-2" 
                                        alt="Portfolio artwork 2: Dark fantasy scene evoking Hollow Knight's Hallownest with mysterious creatures and glowing essence"
                                        class="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div class="watermark">THV</div>
                                </div>
                                <div class="p-4">
                                    <button class="btn btn-ghost w-full font-inter" onclick="window.open('https://example.com/project-2', '_blank')">
                                        <span style="display: inline-flex; align-items: center;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0e0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Explore
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <!-- Portfolio 3 -->
                            <div class="card-hollow relative group cursor-pointer">
                                <div class="relative">
                                    <img 
                                        src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Hollow%20Knight%20inspired%20dark%20fantasy%20artwork%20with%20gothic%20insects%20and%20ancient%20ruins%20in%20deep%20blues%20and%20purples&id=portfolio-3" 
                                        alt="Portfolio artwork 3: Dark fantasy scene evoking Hollow Knight's Hallownest with mysterious creatures and glowing essence"
                                        class="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div class="watermark">THV</div>
                                </div>
                                <div class="p-4">
                                    <button class="btn btn-ghost w-full font-inter" onclick="window.open('https://example.com/project-3', '_blank')">
                                        <span style="display: inline-flex; align-items: center;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0e0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Explore
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <!-- Portfolio 4 -->
                            <div class="card-hollow relative group cursor-pointer">
                                <div class="relative">
                                    <img 
                                        src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Hollow%20Knight%20inspired%20dark%20fantasy%20artwork%20with%20gothic%20insects%20and%20ancient%20ruins%20in%20deep%20blues%20and%20purples&id=portfolio-4" 
                                        alt="Portfolio artwork 4: Dark fantasy scene evoking Hollow Knight's Hallownest with mysterious creatures and glowing essence"
                                        class="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div class="watermark">THV</div>
                                </div>
                                <div class="p-4">
                                    <button class="btn btn-ghost w-full font-inter" onclick="window.open('https://example.com/project-4', '_blank')">
                                        <span style="display: inline-flex; align-items: center;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0e0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Explore
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                                                  class="w-full h-48 object-cover"
                                />
                                <div class="p-4 text-center">
                                    <h3 class="text-glow font-cinzel text-sm mb-2">Voidling #2</h3>
                                    <p class="text-muted-glow text-xs mb-3">Whispering essence guardian</p>
                                    <button class="btn btn-outline w-full font-inter" onclick="downloadPet(2)">
                                        <span style="display: inline-flex; align-items: center;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0e0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" y1="15" x2="12" y2="3"></line>
                                            </svg>
                                            Adopt & Download
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <!-- Pet 3 -->
                            <div class="card-hollow overflow-hidden relative">
                                <img 
                                    src="https://placeholder-image-service.onrender.com/image/300x300?prompt=Cute%20digital%20pet%20in%20Hollow%20Knight%20style%3A%20small%20insect-like%20creature%20with%20glowing%20eyes%20and%20ancient%20armor%20in%20dark%20fantasy%20setting&id=pet-3" 
                                    alt="Adoptable digital pet 3: Whimsical insect companion with ethereal glow, ready for adoption"
                                    class="w-full h-48 object-cover"
                                />
                                <div class="p-4 text-center">
                                    <h3 class="text-glow font-cinzel text-sm mb-2">Voidling #3</h3>
                                    <p class="text-muted-glow text-xs mb-3">Ancient cavern explorer</p>
                                    <button class="btn btn-outline w-full font-inter" onclick="downloadPet(3)">
                                        <span style="display: inline-flex;

                                                                  <span style="display: inline-flex; align-items: center;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0e0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" y1="15" x2="12" y2="3"></line>
                                            </svg>
                                            Adopt & Download
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <!-- Pet 4 -->
                            <div class="card-hollow overflow-hidden relative">
                                <img 
                                    src="https://placeholder-image-service.onrender.com/image/300x300?prompt=Cute%20digital%20pet%20in%20Hollow%20Knight%20style%3A%20small%20insect-like%20creature%20with%20glowing%20eyes%20and%20ancient%20armor%20in%20dark%20fantasy%20setting&id=pet-4" 
                                    alt="Adoptable digital pet 4: Whimsical insect companion with ethereal glow, ready for adoption"
                                    class="w-full h-48 object-cover"
                                />
                                <div class="p-4 text-center">
                                    <h3 class="text-glow font-cinzel text-sm mb-2">Voidling #4</h3>
                                    <p class="text-muted-glow text-xs mb-3">Mystic dream weaver</p>
                                    <button class="btn btn-outline w-full font-inter" onclick="downloadPet(4)">
                                        <span style="display: inline-flex; align-items: center;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0e0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" y1="15" x2="12" y2="3"></line>
                                            </svg>
                                            Adopt & Download
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Footer -->
                <footer class="bg-hollow-dark/80 py-8 px-4 border-t border-glow/30 backdrop-blur-sm">
                    <div class="container mx-auto text-center">
                        <h3 class="text-lg font-cinzel text-glow mb-4 uppercase">Echoes from the Abyss</h3>
                        <p class="text-muted-glow mb-4 font-inter">
                            © ${new Date().getFullYear()} THV Studios. All rights reserved. 
                            All artwork and digital pets are original creations protected by copyright. 
                            Personal use and adoption permitted; commercial use requires written permission. 
                            Edit this section as needed for your specific legal requirements.
                        </p>
                        <p class="text-xs text-muted-glow mb-4">
                            Inspired by the world of Hollow Knight. Not affiliated with Team Cherry.
                        </p>
                        <div class="flex justify-center space-x-4">
                            <button class="btn btn-ghost font-inter" onclick="alert('Contact: email@example.com - Replace with your details!')">
                                Contact
                            </button>
                            <button class="btn btn-ghost font-inter" onclick="alert('Commissions info: Starting at $50 - Customize as needed!')">
                                Commissions
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        `;
    }, 7000);

    // Global function for downloading pets (called by onclick)
    function downloadPet(petNumber) {
        // Replace this URL with your actual file URL (e.g., 'https://your-site.com/pets/voidling-' + petNumber + '.png')
        const fileUrl = `https://example.com/downloads/THV-Voidling-${petNumber}.png`;
        
        // Simulate download
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = `THV-Voidling-${petNumber}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // For demo: Alert if file doesn't exist (remove in production)
        if (fileUrl.includes('example.com')) {
            alert(`Download simulated for Voidling #${petNumber}! In production, replace the URL with your real file host (e.g., AWS S3, Dropbox). High-res PNG ready for personal use.`);
        }
    }
});
