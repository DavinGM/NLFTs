document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle menu saat tombol diklik
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Tutup menu saat link navigasi diklik (untuk mobile)
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});