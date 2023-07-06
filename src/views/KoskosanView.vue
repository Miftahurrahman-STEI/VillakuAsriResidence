<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <nav></nav>
  <header>
    <div class="container">
      <div class="wrapper">
        <h3 class="title1">Selamat Datang</h3>
        <h1 class="title2">Villaku Asri Residence</h1>
        <div class="rating">
          <img src="../assets/stars.png" alt="star">
          <img src="../assets/stars.png" alt="star">
          <img src="../assets/stars.png" alt="star">
          <img src="../assets/stars.png" alt="star">
          <img src="../assets/stars.png" alt="star">
          <p>4,8 Ulasan Google</p>
        </div>
        <div class="location-details">
          <p>Disamping pagar SICC SENTUL CITY, Dekat AEON MALL, STIE TAZZKIA, Univ Trisakti, serta lokasi - lokasi dan
            wisata alam lainnya disekitar sentul city.</p>
          <div class="info">
            <img src="../assets/Vectorlampu.png" alt="lampu">
            <p>Bila ada acara di SICC, Bungallow ini sangat strategis utk disewa.<br />Hanya tinggal jalan kaki ke SICC
            </p>
          </div>
        </div>
        <div class="landingpage-navigation">
          <router-link to="/bungallow" class="button">Bungallow</router-link>
          <router-link to="/koskosan" class="button">Kos Kosan</router-link>
        </div>
      </div>
      <img src="../assets/koskosan.jpeg" alt="kos kosan" class="overview-koskosan">
    </div>
  </header>
  <main class="content">
    <div class="container-content">
      <div class="judul-utama">
        <h1>Kos Kosan</h1>
      </div>
      <div class="fasilitas">
        <h3>Fasilitas</h3>
        <span></span>
      </div>
      <div class="icon-fasilitas">
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
          </svg>
          <p>AC / Non AC</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
          </svg>
          <p>Wifi</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
          </svg>
          <p>Tempat Tidur</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
          </svg>
          <p>Lemari Pakaian</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
          </svg>
          <p>Meja Lipat</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
          </svg>
          <p>Kamar mandi Dalam</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16H496c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16H284.4zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24zM288 464V352H512V464c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zM48 320h80 16 32c26.5 0 48 21.5 48 48s-21.5 48-48 48H160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V336c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160v32h16zM24 464H200c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>
          <p>Dapur bersama perlantai</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
          </svg>
          <p>CCTV</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z" />
          </svg>
          <p>Parkiran Luas</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <p>Lokasi Pinggir Jalan Raya</p>
        </div>
        <div class="icon-containter">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z" />
          </svg>
          <p>Lapangan Olahraga</p>
        </div>
      </div>
      <div class="halamandepan">
        <div class="judul-halamandepan">
          <h3>Halaman Depan</h3>
          <span></span>
        </div>
        <div class="container-card">
          <div class="card-halamandepan">
            <img src="../assets/koskosan/halamandepan6.jpeg" alt="halaman depan">
            <img src="../assets/koskosan/halamandepan5.jpeg" alt="halaman depan">
            <img src="../assets/koskosan/halamandepan4.jpeg" alt="halaman depan">
            <img src="../assets/koskosan/halamandepan2.jpeg" alt="halaman depan">
            <img src="../assets/koskosan.jpeg" alt="halaman depan">
          </div>
        </div>
      </div>
      <div class="lorong">
        <div class="judul-lorong">
          <h3>Lorong</h3>
          <span></span>
        </div>
        <div class="container-card">
          <div class="card-lorong">
            <img src="../assets/koskosan/lorong5.jpeg" alt="lorong">
            <img src="../assets/koskosan/lorong4.jpeg" alt="lorong">
            <img src="../assets/koskosan/lorong8.jpeg" alt="lorong">
            <img src="../assets/koskosan/lorong3.jpeg" alt="lorong">
            <img src="../assets/koskosan/lorong2.jpeg" alt="lorong">
            <img src="../assets/koskosan/lorong1.jpeg" alt="lorong">
          </div>
        </div>
      </div>
      <div class="ruangan">
        <div class="judul-ruangan">
          <h3>Ruangan</h3>
          <span></span>
        </div>
        <div class="container-card">
          <div class="card-ruangan">
            <img src="../assets/koskosan/ruangan1.jpeg" alt="ruangan">
            <img src="../assets/koskosan/ruangan2.jpeg" alt="ruangan">
            <img src="../assets/koskosan/ruangan3.jpeg" alt="ruangan">
            <img src="../assets/koskosan/ruangan4.jpeg" alt="ruangan">
            <img src="../assets/koskosan/ruangan5.jpeg" alt="ruangan">
            <img src="../assets/koskosan/ruangan6.jpeg" alt="ruangan">
          </div>
        </div>
        <!-- carousel card ulasan -->
        <div class="container-card">
          <h2>Ulasan</h2>
          <ul class="cards">
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p>Tempatnya strategis dan nyaman, parkiran luas, CCTV, dan penjagaan 24jam</p>
                </div>
                <div class="ulasan-user">
                  <h3>Abang Kumis</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p>Fasilitas nyaman, keamanan 24jam, recommended bgt buat pekerja, mahasiswa, akses deket kemana mana👍
                  </p>
                </div>
                <div class="ulasan-user">
                  <h3>Tegar Maulana</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p>Bersih</p>
                </div>
                <div class="ulasan-user">
                  <h3>Daud Setiawan</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p></p>
                </div>
                <div class="ulasan-user">
                  <h3>azaria zalsa</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p></p>
                </div>
                <div class="ulasan-user">
                  <h3>wi deanto él sarosa</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p></p>
                </div>
                <div class="ulasan-user">
                  <h3>Sak Bahagia Mu</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p></p>
                </div>
                <div class="ulasan-user">
                  <h3>Sak Bahagia Mu</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p></p>
                </div>
                <div class="ulasan-user">
                  <h3>Vania Tirsa Azalia</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p></p>
                </div>
                <div class="ulasan-user">
                  <h3>Sutiaman Ujang</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p></p>
                </div>
                <div class="ulasan-user">
                  <h3>Henry Ardika Fatih</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p></p>
                </div>
                <div class="ulasan-user">
                  <h3>Suhada Edward</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
            <li class="card">
              <div>
                <div class="card-content">
                  <div class="ulasan-card">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                    <img src="../assets/stars.png" alt="stars">
                  </div>
                </div>
                <div class="ulasan-deskripsi">
                  <p></p>
                </div>
                <div class="ulasan-user">
                  <h3>Sofy Anggraheni</h3>
                  <p>Review Google</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="peta">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1981.8587399738026!2d106.8458442!3d-6.5573046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c798ee4ffde9%3A0x26ee544786731e91!2sVillaku%20asri%20residence!5e0!3m2!1sid!2sid!4v1688021925607!5m2!1sid!2sid"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="footer_location">
            <h1 id="title_location">Lokasi</h1>
            <p>Ds cipambuan rt 01/01, Cipambuan, Kec. Babakan Madang,<br />Kabupaten Bogor, Jawa Barat 16811</p>
            <a href="https://wa.me/+6281280499596" class="button_contact"><img src="../assets/brand-whatsapp.png"
                alt="whatsapp" />Hubungi Kami Sekarang</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  width: 100%;
  height: 55px;
  background-color: #FF008B;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}




.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  margin-top: 2rem;
  gap: 8rem;
}

.rating {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  color: #000;
}

.location-details {
  margin-top: 1.5rem;
  color: #000;
}

.info {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  margin-top: 1.5rem;
  color: #000;
}

.landingpage-navigation {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 2rem;
}

.landingpage-navigation .button {
  display: flex;
  justify-content: left;
  align-items: center;
  border: none;
  border-radius: 136px;
  margin: 3rem 0;
  padding: .8rem 1.6rem;
  cursor: pointer;
}

.landingpage-navigation .button:nth-child(1) {
  background-color: transparent;
  border: 1px solid #FF008B;
}

.landingpage-navigation .button:nth-child(2) {
  background-color: #FF008B;
  color: #fff;
}

.info {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 1.5rem;
}

.overview-koskosan {

  border-radius: 8px;
}

.content .container-card .card-lorong {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.icon-containter {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
}

.icon-containter svg {
  width: 1.8rem;
  height: 1.8rem;
  fill: #DB2777;
}

@media (min-width: 1024px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  nav {
    width: 100%;
    height: 55px;
    background-color: #FF008B;
  }

  header {
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: 3rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .rating {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
    color: #000;
  }

  .title1 {
    font-size: 32px;
    font-family: 'Inter', sans-serif;
    color: #000;
  }

  .title2 {
    font-size: 42px;
    font-family: 'Inter', sans-serif;
    color: #000;
    font-weight: bold;
  }

  .rating {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
  }

  .location-details {
    margin-top: 1.5rem;
  }

  .info {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 1.5rem;
  }

  .landingpage-navigation {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 2rem;
  }

  .landingpage-navigation .button {
    display: flex;
    justify-content: left;
    align-items: center;
    border: none;
    border-radius: 136px;
    cursor: pointer;
  }

  .landingpage-navigation .button:nth-child(1) {
    background-color: transparent;
    border: 1px solid #FF008B;
  }

  .landingpage-navigation .button:nth-child(2) {
    background-color: #FF008B;
    color: #fff;
  }

  .location-details {
    margin-top: 1.5rem;
  }

  .landingpage-navigation a {
    text-decoration: none;
    color: #000;
  }

  .landingpage-navigation .button:nth-child(1):hover {
    background-color: #FF008B;
    color: #fff;
  }

  .landingpage-navigation .button:nth-child(2):hover {
    background-color: transparent;
    color: #000;
    border: 1px solid #FF008B;
  }

  .info {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
    margin-top: 1.5rem;
  }

  .overview-koskosan {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 680px;
    height: 480px;
    border-radius: 8px;
  }

  .container-content {
    margin-top: 2rem;
    margin-bottom: 10rem;
  }

  .container-content h1 {
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    color: #000;
    margin-left: 4rem;
    margin-bottom: 2rem;
  }

  .container-content h3 {
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
    margin-bottom: .5rem;
  }

  .container-content span {
    display: block;
    width: 241px;
    height: 10px;
    background-color: #FC2947;
    border-radius: 100px;
    margin-bottom: 1.5rem;
  }

  .content .icon-fasilitas {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
    gap: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 5rem;
    padding-left: 4rem;
  }

  .content .judul-halaman-depan h3 {
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: #000;
  }

  .content .container-card .card-halamandepan,
  .lorong .container-card .card-lorong,
  .ruangan .container-card .card-ruangan {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 4rem;

    width: 100%;
    height: 100%;
    gap: 1rem;
  }

  .content .container-card img {
    width: 100%;
    max-height: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }

  .halamandepan {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  /* title tiap foto */
  .fasilitas,
  .lorong .judul-lorong,
  .ruangan .judul-ruangan,
  .halamandepan .judul-halamandepan {
    padding-left: 4rem;
  }

  .lorong {

    margin: 8rem 0;
  }

  .ruangan {
    margin-bottom: 4.5rem;
  }

  .peta {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10rem;
    text-align: center;
  }

  .peta .footer_location #title_location {
    font-size: 45px;
    text-align: center;
    font-weight: bold;
    color: #000;
    padding-left: 0;
  }

  .footer_location p {
    color: #000;
    font-size: 16px;
    margin-bottom: 2rem;
  }

  .peta .footer_location .button_contact {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 20px 0;
    border-radius: 21px;
    background-color: #FBEB31;
    color: #000;
    gap: 10px;
    cursor: pointer;
  }

  .peta .footer_location .button_contact img {
    width: 20px;
    height: 20px;
  }

  /* ulasan carousel */
  .container-card {
    max-width: 1400px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .container-card h2 {
    font-size: 30px;
    color: #000;
    font-weight: bold;
    margin-left: 4rem;
  }

  .cards {
    display: flex;
    padding: 25px 0px;
    margin-left: 4rem;
    list-style: none;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .card {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    background: var(--white);
    border-radius: 12px;
    border: 2px solid #B3B3B3;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
  }

  .card .card-content .ulasan-card {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 7px;

  }

  .card .card-content .ulasan-card img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
    object-fit: contain;
  }

  .card .ulasan-deskripsi {
    margin-bottom: 10px;
  }

  .card .ulasan-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card .ulasan-user h3 {
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
    border-right: 3px solid lightgray;
    padding-right: 10px;
    color: #000;
  }

  .card .ulasan-user p {
    display: flex;
    justify-content: left;
    align-items: center;
    font-style: italic;
    color: #B8BABD;
  }

  .card .card-content img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .card:not(:last-child) {
    margin-right: 10px;
  }

  .card .card-link-wrapper {
    margin-top: auto;
  }

  .card .card-link {
    display: inline-block;
    text-decoration: none;
    color: white;
    background: var(--red);
    padding: 6px 12px;
    border-radius: 8px;
    transition: background 0.2s;
  }

  .card:hover .card-link {
    background: var(--darkred);
  }

  .cards::-webkit-scrollbar {
    height: 12px;
  }

  .cards::-webkit-scrollbar-thumb,
  .cards::-webkit-scrollbar-track {
    border-radius: 92px;
  }

  .cards::-webkit-scrollbar-thumb {
    background: var(--darkred);
  }

  .cards::-webkit-scrollbar-track {
    background: var(--thumb);
  }

  @media (min-width: 500px) {
    .card {
      flex-basis: calc(50% - 10px);
    }

    .card:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media (min-width: 1100px) {
    .card {
      flex-basis: calc(25% - 30px);
    }

    .card:not(:last-child) {
      margin-right: 40px;
    }
  }


  /* FOOTER STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
  .page-footer {
    position: fixed;
    right: 0;
    bottom: 50px;
    display: flex;
    align-items: center;
    padding: 5px;
    z-index: 1;
  }

  .page-footer a {
    display: flex;
    margin-left: 4px;
  }
}
</style>