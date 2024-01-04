### Fungsi atur_posisi_rotor(rotor_position):
    RETURN rotor_position % 26

### Fungsi plugboard(huruf):
    // Masukkan kode konfigurasi plugboard di sini
    RETURN hasil_perubahan_huruf

### Fungsi enkripsi_rotor(huruf):
    // Masukkan kode rotasi dan enkripsi huruf melalui rotor di sini
    RETURN hasil_enkripsi

### Fungsi proses_enkripsi(karakter):
    GLOBAL rotor_1, rotor_2, rotor_3, rotor_1Position, rotor_2Position, rotor_3Position, reflector

    hasil_plugboard = plugboard(karakter)
    hasil_enkripsi = enkripsi_rotor(hasil_plugboard)

    RETURN hasil_enkripsi

### Fungsi enkripsi_pesan():
    rotor_1Position = atur_posisi_rotor(int(input()))
    rotor_2Position = atur_posisi_rotor(int(input()))
    rotor_3Position = atur_posisi_rotor(int(input()))

    pesan = input("Masukkan pesan: ").upper()
    pesan_enkripsi = ""

    FOR karakter IN pesan:
        pesan_enkripsi += proses_enkripsi(karakter)

    PRINT(f'Hasil enkripsi: {pesan_enkripsi}')

### FUNGSI
