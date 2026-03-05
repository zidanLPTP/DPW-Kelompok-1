function updateJumlahData() {
    const tabel = document.getElementById("tabelTugas");
    const tbody = tabel.getElementsByTagName("tbody")[0];
    const jumlah = tbody.rows.length;
    document.getElementById("jumlahData").innerText = jumlah;
}

function goToCreate() {
    window.location.href = "PengajuanSuratTugas_Create.html";
}

function dnew() {
    alert("Menuju halaman formulir pengajuan baru...");
}

function dEdit(nama) {
    const konfirmasi = confirm("Apakah anda yakin ingin mengedit data milik " + nama + "?");
    if (konfirmasi) {
        window.location.href = "PengajuanSuratTugas_Update.html";
    }
}


function hapusBaris(button) {
    const konfirmasi = confirm("Apakah Anda yakin ingin menghapus data ini?");

    if (konfirmasi) {
        const baris = button.parentElement.parentElement;
        baris.remove(); 

        updateJumlahData();
        alert("Data berhasil dihapus dari sistem.");
    }
}