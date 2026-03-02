function dEdit() {
  alert("Apakah anda yakin ingin mengedit data ini?");
}
function dnew() {
  alert("Apakah anda yakin ingin menambahkan data baru?");
}
function goToCreate() {
    window.location.href = "PengajuanSuratTugas_Create.html";
}
function hapusBaris(button) {
    const konfirmasi = confirm("Apakah Anda yakin ingin menghapus data ini?");

    if (konfirmasi) {
        const baris = button.parentElement.parentElement;
        baris.remove();
        alert("Data berhasil dihapus.");
    }
}