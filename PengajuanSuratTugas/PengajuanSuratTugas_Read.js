function dEdit() {
  alert("Apakah anda yakin ingin mengedit data ini?");
}
function dnew() {
  alert("Apakah anda yakin ingin menambahkan data baru?");
}
function goToCreate() {
    // Berpindah ke file Create
    window.location.href = "PengajuanSuratTugas_Create.html";
}
function hapusBaris(button) {
    // 1. Tampilkan konfirmasi ke user
    const konfirmasi = confirm("Apakah Anda yakin ingin menghapus data ini?");

    if (konfirmasi) {
        // 2. Cari elemen baris (tr) tempat tombol tersebut berada
        // button -> td -> tr
        const baris = button.parentElement.parentElement;
        
        // 3. Hapus baris tersebut dari tabel
        baris.remove();

        // 4. Opsional: Tampilkan pesan sukses
        alert("Data berhasil dihapus.");
    }
}