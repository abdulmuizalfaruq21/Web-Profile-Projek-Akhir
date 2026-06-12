document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efek Navigasi saat di-Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(253, 251, 247, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(76, 43, 8, 0.08)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(253, 251, 247, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(76, 43, 8, 0.05)';
        }
    });

    // 2. Navigasi Responsif (Hamburger Menu)
    const menuToggle = document.getElementById('mobile-menu');
    const navLink = document.querySelector('.nav-link');

    if (menuToggle && navLink) {
        menuToggle.addEventListener('click', () => {
            navLink.classList.toggle('active');
            
            // Animasi tombol hamburger jadi 'X'
            const bars = menuToggle.querySelectorAll('.bar');
            bars[0].style.transform = navLink.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
            bars[1].style.opacity = navLink.classList.contains('active') ? '0' : '1';
            bars[2].style.transform = navLink.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
        });

        // Tutup menu otomatis saat link diklik (khusus mobile)
        document.querySelectorAll('.nav-link a').forEach(link => {
            link.addEventListener('click', () => {
                navLink.classList.remove('active');
                const bars = menuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // 3. Interaksi Form Kontak (Simulasi Kirim Pesan)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.innerText;
            
            // Mengubah status tombol
            submitBtn.innerText = 'Mengirim...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Terima kasih! Pesan berhasil dikirim.');
                form.reset();
                submitBtn.innerText = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});