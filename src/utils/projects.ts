// Wait for the DOM to load completely
window.addEventListener('load', function(): void {
    // Type definitions for DOM elements
    const backgrounds: NodeListOf<HTMLImageElement> = document.querySelectorAll('.bgImg');
    const projectsSection: HTMLElement | null = document.getElementById('projects-section');
    
    // Early return if projectsSection is null
    if (!projectsSection) {
        console.error('Projects section not found');
        return;
    }
    const projectsSectionTop: number = projectsSection.offsetTop;
    const projectsSectionHeight: number = projectsSection.offsetHeight;
    // Update backgrounds and content based on scroll position
    function updateContent(): void {
        // Get scroll position relative to the projects section
        const scrollPosition: number = window.scrollY;
        
        const relativeScroll: number = scrollPosition - projectsSectionTop;
      
        // Only update if we're in the projects section
        if (scrollPosition >= projectsSectionTop && scrollPosition < (projectsSectionTop + projectsSectionHeight)) {
            // Calculate which project should be active (0-4)
            // The key change: Use a 50vh offset (half a slide height) to trigger earlier
            const slideHeight: number = projectsSectionHeight / 5; // 5 projects
            const halfSlideHeight: number = slideHeight / 2; // Half of a slide height
            
            // Use the adjusted position (with half slide offset) to determine the active index
            const adjustedScroll: number = relativeScroll + halfSlideHeight;
            const activeIndex: number = Math.min(4, Math.floor(adjustedScroll / slideHeight));
            
            // Update backgrounds
            backgrounds.forEach((bg: HTMLImageElement, index: number): void => {
                if (index === activeIndex) {
                    bg.classList.remove('inactive-bg');
                    bg.classList.add('active-bg');
                } else {
                    bg.classList.remove('active-bg');
                    bg.classList.add('inactive-bg');
                }
            });
        }
    }
    
    // Initial update
    updateContent();
    
    // Add scroll event listener
    window.addEventListener('scroll', updateContent);
});