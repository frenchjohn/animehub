document.getElementById('categoriesBtn').addEventListener('click', function() {
    const dropdown = document.getElementById('categoriesDropdown');
    dropdown.style.display = dropdown.style.display === 'grid' ? 'none' : 'grid';
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('categoriesDropdown');
    const button = document.getElementById('categoriesBtn');
    
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

// Smooth scroll for header links
const smoothLinks = document.querySelectorAll('a.nav-btn[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});