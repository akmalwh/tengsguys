document.getElementById('redirectButton').addEventListener('click', function() {
    const audio = document.getElementById('backgroundMusic');
    audio.volume = 0.25; // Mengatur volume ke 30%
    audio.play(); // Memulai musik

    // Tambahkan kelas animasi
    document.body.classList.add('fade-out');

    // Tunggu 3 detik sebelum mengarahkan ke halaman baru
    setTimeout(function() {
        window.open('https://forms.gle/eYBBNDtEDCaHmHSN6', '_blank'); // Ganti dengan URL yang diinginkan
    }, 3000);
});