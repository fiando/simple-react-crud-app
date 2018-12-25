
# Simple CRUD React App

Project yang berfungsi sebagai template CRUD yang menggunakan teknologi React JS sebagai FrontEnd.

Aplikasi ini bekerja dengan Simple REST PHP untuk proses Create, Read, Update, dan Delete.

## Getting Started

Ikuti langkah - langkah dibawah untuk mulai menggunakan maupun modifikasi setelah berhasil melakukan instalasi awal.

### Prerequisites

NodeJS ( untuk menjalankan aplikasi React ) dan Web Server akan diperlukan ( untuk memanggil API )

Install NodeJS - [NodeJS](https://nodejs.org/en/)
Install Web Server - [XAMPP](XAMPP%20https://www.apachefriends.org/index.html)


### Installing

Semua yang diperlukan sudah ada di package.json, jadi setelah mendownload aplikasi ini.Jalankan perintah berikut :

```
npm install
```

Jika sudah melakukan instalasi paket, coba jalankan dengan

```
npm start
```
Jika menggunakan yarn
```
yarn start
```

Sampai disini aplikasi belum bisa berjalan sempurna, karena belum melakukan instalasi Simple REST PHP.

Instalasi Simple REST PHP dengan cara mengekstrak file zip bernama php-rest-api.zip.

Letakkan di direktori website web server ( htdocs / www / html )

Pastikan web server sudah menyala dan lakukan import database MySQL bernama **api_db**

Silahkan akses PHP REST API yang sudah diinstall.

Jika berhasil, maka lakukan penyesuaian pengambilan URL REQUEST maupun RESPONSE pada setiap Components React.

Silahkan ubah string "http://localhost/d/php-rest-api/" menyesuaikan dengan nama direktori PHP REST API yang sudah berada di direktori web server.

    CreateProductComponent.js
    DeleteProductComponent.js
    ReadOneProductComponent.js
    ReadProductsComponent.js
    UpdateProductComponent.js
    
Misal dimasukkan di folder C:\htdocs\simple-api
Bisa modifikasi menjadi http://localhost/simple-api

Oke, sampai sini aplikasi sudah bisa berjalan dengan semestinya

## Built With

Aplikasi ini dibangun dengan ReactJS 16.7.0, Bootstrap 4.2.1, Jquery 3.3.1.
Aplikasi ini menggunakan Simple REST PHP.

## Contributing

Sangat terbuka untuk ide & masukkan dari publik.

## Authors

Bobby Fiando S.

## Acknowledgments

* Simple React CRUD - https://www.codeofaninja.com/2016/07/react-crud-tutorial.html
* Simple REST API - https://www.codeofaninja.com/2017/02/create-simple-rest-api-in-php.html