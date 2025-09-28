/**
 * Open Graph Meta Tags Generator
 * Usage: Call setOGTags() with the appropriate parameters in each HTML file
 */

function setOGTags({
    title = 'GhostVista Gets Grounded',
    description = 'Follow GhostVista on his hilarious misadventures as he navigates the challenges of being grounded.',
    type = 'website',
    url = window.location.href,
    image = window.location.origin + '/Images/GVGG.png',
    siteName = 'GhostVista Gets Grounded',
    locale = 'en_US'
} = {}) {
    // Create or update meta tags
    const metaTags = [
        // Basic Open Graph
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: type },
        { property: 'og:url', content: url },
        { property: 'og:image', content: image },
        { property: 'og:site_name', content: siteName },
        { property: 'og:locale', content: locale },
        
        // Twitter Card (for better Twitter sharing)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        
        // Additional recommended tags
        { name: 'description', content: description },
        { name: 'author', content: 'GhostVista Team' },
        { name: 'robots', content: 'index, follow' },
    ];
    
    // Add or update each meta tag
    metaTags.forEach(tag => {
        let element = document.querySelector(`meta[property="${tag.property}" i], meta[name="${tag.name}" i]`);
        
        if (!element) {
            element = document.createElement('meta');
            if (tag.property) {
                element.setAttribute('property', tag.property);
            } else if (tag.name) {
                element.setAttribute('name', tag.name);
            }
            document.head.appendChild(element);
        }
        
        element.setAttribute('content', tag.content);
    });
    
    // Set the page title if it's not already set
    if (!document.title) {
        document.title = title;
    }
}

// Call this function in each HTML file with the appropriate parameters
// Example:
// setOGTags({
//     title: 'Page Title',
//     description: 'Page Description',
//     url: 'https://example.com/page',
//     image: 'https://example.com/image.jpg'
// });
