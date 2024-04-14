// Buat objek XMLHttpRequest
var xhr = new XMLHttpRequest();

// Atur fungsi yang akan dipanggil ketika permintaan selesai
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        // Respons diterima dari server
        if (xhr.status == 200) {
            // Tangani respons yang berhasil
            console.log(xhr.responseText);
        } else {
            // Tangani kesalahan respons
            console.error('Terjadi kesalahan:', xhr.status);
        }
    }
};

// Atur metode permintaan dan URL target
xhr.open('GET', 'https://republika.co.id/', true);

// Kirim permintaan ke server
xhr.send();
