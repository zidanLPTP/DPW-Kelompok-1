const formUpdate = document.getElementById('formPengajuan');

if (formUpdate) {
    formUpdate.onsubmit = function(event) {
        event.preventDefault(); 

        const pengusul = document.getElementById('pengusul').value;
        const nip = document.getElementById('nip').value;

        if (pengusul === "" || nip === "") {
            alert("Peringatan: Nama Pengusul dan NIP tidak boleh kosong!");
        } else if (nip.length < 8) {
            alert("Validasi Gagal: NIP harus terdiri dari minimal 8 karakter.");
        } else {
            alert("Sukses! Perubahan data untuk " + pengusul + " berhasil disimpan.");
            window.location.href = "PengajuanSuratTugas_Read.html";
        }
    };
}