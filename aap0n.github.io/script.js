document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const hamburger = document.querySelector('.hamburger-icon');
    const sidebar = document.querySelector('.sidebar');

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('active');
            document.body.classList.toggle('sidebar-open');
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (sidebar && sidebar.classList.contains('active')) {
            if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        }
    });

    // Prevent sidebar clicks from closing it
    sidebar && sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Handle submenu
    const projectsToggle = document.querySelector('.project-toggle');
    if (projectsToggle) {
        projectsToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    // Add mouse move effect for contact items
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / item.clientWidth) * 100;
            const y = ((e.clientY - rect.top) / item.clientHeight) * 100;
            item.style.setProperty('--mouse-x', `${x}%`);
            item.style.setProperty('--mouse-y', `${y}%`);
        });
    });
});