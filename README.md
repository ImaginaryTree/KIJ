# Enigma Encryption

### Description
Enigma adalah nama mesin penyandi yang digunakan oleh Jerman Nazi untuk mengirim pesan rahasia selama Perang Dunia II. Mesin ini menggunakan sistem rotor elektromekanik yang dapat mengubah huruf-huruf menjadi sandi yang sangat sulit ditebak. Mesin ini dianggap sebagai mesin kriptografi teraman pada masanya, tetapi berhasil dipecahkan oleh pihak Sekutu dengan bantuan dari kriptografer Polandia dan Britania, seperti Alan Turing1. Pemecahan Enigma memberikan keuntungan strategis bagi Sekutu dan mempercepat berakhirnya perang.

### How Enigma Works ?

- Mesin Enigma memiliki papan ketik, lampu, rotor, dan steker. Papan ketik digunakan untuk memasukkan huruf yang ingin disandikan, lampu digunakan untuk menampilkan huruf yang telah disandikan, rotor digunakan untuk mengubah huruf menjadi sandi, dan steker digunakan untuk menambah tingkat kerumitan sandi.
- Setiap rotor memiliki 26 kontak listrik di kedua sisinya, yang masing-masing mewakili satu huruf alfabet. Kontak-kontak ini dihubungkan dengan kabel internal yang mengacak huruf-huruf. Misalnya, kontak A di sisi kiri rotor dapat dihubungkan dengan kontak F di sisi kanan rotor, dan seterusnya.
- Setiap kali operator menekan sebuah huruf di papan ketik, sinyal listrik akan mengalir dari papan ketik ke steker, lalu ke rotor pertama. Rotor pertama akan mengubah huruf menjadi sandi sesuai dengan kabel internalnya. Misalnya, jika operator menekan A, rotor pertama dapat mengubahnya menjadi F.
- Sinyal listrik kemudian akan bergerak ke rotor kedua, yang juga akan mengubah huruf menjadi sandi sesuai dengan kabel internalnya. Misalnya, jika rotor kedua menerima F dari rotor pertama, ia dapat mengubahnya menjadi L.
- Sinyal listrik akan terus bergerak ke rotor ketiga, dan seterusnya sampai mencapai rotor terakhir. Rotor terakhir akan mengirim sinyal listrik ke sebuah komponen yang disebut reflektor, yang akan memantulkan sinyal listrik kembali ke rotor-rotor sebelumnya. Reflektor juga memiliki kabel internal yang mengacak huruf-huruf. Misalnya, jika reflektor menerima L dari rotor terakhir, ia dapat memantulkannya menjadi R.
- Sinyal listrik kemudian akan bergerak kembali ke rotor-rotor sebelumnya dalam urutan terbalik, dan mengubah huruf menjadi sandi lagi sesuai dengan kabel internalnya. Misalnya, jika rotor terakhir menerima R dari reflektor, ia dapat mengubahnya menjadi T.
- Sinyal listrik akhirnya akan mencapai steker lagi, dan kemudian ke lampu yang sesuai dengan huruf sandi. Misalnya, jika steker menerima T dari rotor pertama, ia dapat menyalakan lampu U.
- Dengan demikian, operator akan melihat bahwa huruf A telah disandikan menjadi U. Proses ini akan diulangi untuk setiap huruf dalam pesan asli.
- Yang membuat mesin Enigma sulit ditebak adalah bahwa setiap rotor dapat diputar ke posisi yang berbeda sebelum memulai penyandian. Posisi awal ini disebut sebagai kunci atau setting. Setiap perubahan posisi rotor akan menghasilkan sandi yang berbeda untuk huruf yang sama. Misalnya, jika rotor pertama diputar satu langkah ke kanan sebelum penyandian dimulai, maka A tidak akan disandikan menjadi U lagi, tetapi menjadi huruf lain.
- Selain itu, operator juga dapat menukar posisi beberapa pasang huruf di steker sebelum memulai penyandian. Hal ini juga akan menambah tingkat kerumitan sandi. Misalnya, jika operator menukar A dengan Z di steker, maka A tidak akan disandikan menjadi U lagi, tetapi menjadi Z.
- Untuk menyandikan atau menyahsandikan pesan dengan mesin Enigma, operator harus mengetahui kunci atau setting yang digunakan. Kunci ini biasanya ditentukan oleh aturan harian atau bulanan yang dibagikan oleh komando militer Jerman. Kunci ini harus dirahasiakan dari pihak musuh agar pesan tidak dapat dibaca.

### Referensi

[Rotor Wiring Setting : https://en.wikipedia.org/wiki/Enigma_rotor_details](https://en.wikipedia.org/wiki/Enigma_rotor_details)
