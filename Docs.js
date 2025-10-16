document.addEventListener('DOMContentLoaded', () => {
    
    // Inisiasi Tahun di Footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Ambil Data Dokumen untuk Pencarian
    const docItems = document.querySelectorAll('#docs-body .doc-item');
    const docsData = [];
    docItems.forEach(item => {
        const id = item.id;
        const title = item.querySelector('h3').textContent;
        docsData.push({ id, title });
    });

    const searchInput = document.getElementById('searchInput');
    const HEADER_OFFSET = 80; // Sesuaikan dengan tinggi #hero-section di CSS

    // Fungsi Navigasi Scroll
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - HEADER_OFFSET - 20, // Offset header + sedikit jarak
                behavior: 'smooth'
            });
        }
    }

    // **LOGIKA SHORTCUT KEYBOARD (Ctrl + K / Cmd + K)**
    document.addEventListener('keydown', (e) => {
        if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) { 
            e.preventDefault(); 
            searchInput.focus();
        }
    });


    // Fungsi untuk menyembunyikan hasil search dan menavigasi
    window.hideResultsAndNavigate = function(e) {
        e.preventDefault(); 
        
        const href = e.target.getAttribute('href');
        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            smoothScrollTo(targetId);
        }

        document.getElementById('searchResults').style.display = 'none';
        searchInput.value = ''; 
    }
    
    // 1. Logika Live Search
    window.filterDocs = function() {
        const searchResults = document.getElementById('searchResults');
        const filter = searchInput.value.toLowerCase();

        searchResults.innerHTML = '';
        const MAX_RESULTS = 3; 

        if (filter.length < 2) { 
            searchResults.style.display = 'none';
            return;
        }

        searchResults.style.display = 'block';

        const filtered = docsData.filter(doc => 
            doc.title.toLowerCase().includes(filter)
        );

        if (filtered.length > 0) {
            const topResults = filtered.slice(0, MAX_RESULTS); 
            
            topResults.forEach(doc => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="#${doc.id}" onclick="hideResultsAndNavigate(event)">${doc.title}</a>`; 
                searchResults.appendChild(listItem);
            });
            
            if (filtered.length > MAX_RESULTS) {
                const listItem = document.createElement('li');
                listItem.classList.add('no-results');
                listItem.textContent = `... ${filtered.length - MAX_RESULTS} hasil lainnya ditemukan`;
                searchResults.appendChild(listItem);
            }
            
        } else {
            const listItem = document.createElement('li');
            listItem.classList.add('no-results');
            listItem.textContent = 'Tidak ada catatan atau tutorial yang cocok.';
            searchResults.appendChild(listItem);
        }
    }

    // 2. Navigasi Scroll untuk Sidebar
    const sidebarLinks = document.querySelectorAll('#sidebar-list a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const targetId = href.substring(1);
                smoothScrollTo(targetId);
            }
        });
    });
});