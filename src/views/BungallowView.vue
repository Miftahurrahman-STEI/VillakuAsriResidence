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
            <p>Disamping pagar SICC SENTUL CITY, Dekat AEON MALL, STIE TAZZKIA,<br/>Univ Trisakti, serta lokasi - lokasi dan wisata alam lainnya disekitar sentul city.</p>
          <div class="info">
            <img src="../assets/Vectorlampu.png" alt="lampu">
            <p>Bila ada acara di SICC, Bungallow ini sangat strategis utk disewa.<br/>Hanya tinggal jalan kaki ke SICC</p>
          </div>
        </div>
        <div class="landingpage-navigation">
          <router-link to="/bungallow" class="button">Bungallow</router-link>
          <router-link to="/koskosan" class="button">Kos Kosan</router-link>
        </div>
      </div>
        <img src="../assets/bungalow/overview2.jpeg" alt="bungallow"  class="overview-bungallow">
    </div>
  </header>
  <main class="content">
    <div class="container-content">
      <div class="judul-utama">
        <h1>Bungallow</h1>
      </div>
      <div class="fasilitas">
        <h3>Fasilitas</h3>
        <span></span>
      </div>
      <div class="icon-fasilitas">
        <div class="content-fasilitas">
          <div>
            <img src="../assets/icon-kamartidur.png" alt="fasilitas-bungallow">
          </div>
            <p>4 Kamar Tidur</p>
        </div>
        <div class="content-fasilitas">
          <div>
            <img src="../assets/icon-parkir.png" alt="fasilitas-bungallow">
          </div>
          <p class="text-kecil">Parkiran Luas<br/>Tempat Parkir menampung 5 mobil sedan/SUV</p>
        </div>
        <div class="content-fasilitas">
          <div>
            <img src="../assets/icon-ac.png" alt="fasilitas-bungallow">
          </div>
          <p>Full AC</p>
        </div>
        <div class="content-fasilitas">
          <div>
            <img src="../assets/icon-kamarmandi.png" alt="fasilitas-bungallow">
          </div>
          <p>Kamar mandi Dalam</p>
        </div>
        <div class="content-fasilitas">
          <div>
            <img src="../assets/icon-waterheater.png" alt="fasilitas-bungallow">
          </div>
          <p>Water Heater</p>
        </div>
        <div class="content-fasilitas">
          <div>
            <img src="../assets/icon-wifi.png" alt="fasilitas-bungallow">
          </div>
          <p>Wifi</p>
        </div>
        <div class="content-fasilitas">
          <div>
            <img src="../assets/icon-pembantu.png" alt="fasilitas-bungallow">
          </div>
          <p>1 MT Pembantu</p>
        </div>
      </div>
      <div class="halamandepan">
          <div class="judul-halamandepan">
            <h3>Halaman Depan</h3>
            <span></span>
          </div>
          <div class="container-card">
            <div class="card-halamandepan">
                <img src="../assets/bungalow/halamandepan1.jpeg" alt="halaman depan">
                <img src="../assets/bungalow/halamandepan2.jpeg" alt="halaman depan">
            </div>
        </div>
      </div>
      <div class="ruangtamu">
          <div class="judul-ruangtamu">
            <h3>Ruang Tamu</h3>
            <span></span>
          </div>
        <div class="container-card">
          <div class="card-ruangtamu">
            <img src="../assets/bungalow/ruangtamu3.jpeg" alt="ruang tamu">
            <img src="../assets/bungalow/ruangtamu2.jpeg" alt="ruang tamu">
            <img src="../assets/bungalow/ruangtamu4.jpeg" alt="ruang tamu">
          </div>
        </div>
      </div>
      <div class="dapur">
          <div class="judul-dapur">
            <h3>Dapur</h3>
            <span></span>
          </div>
          <div class="container-card">
            <div class="card-dapur">
              <img src="../assets/bungalow/dapur1.jpeg" alt="dapur">
              <img src="../assets/bungalow/dapur2.jpeg" alt="dapur">
              <img src="../assets/bungalow/dapur3.jpeg" alt="dapur">
            </div>
          </div>
        </div>
      <div class="kamar-tidur">
          <div class="judul-kamar-tidur">
            <h3>Kamar Tidur</h3>
            <span></span>
          </div>
          <div class="container-card">
            <div class="card-kamar-tidur">
              <img src="../assets/bungalow/kamartidur1.jpeg" alt="kamar tidur">
              <img src="../assets/bungalow/kamartidur2.jpeg" alt="kamar tidur">
              <img src="../assets/bungalow/kamartidur3.jpeg" alt="kamar tidur">
              <img src="../assets/bungalow/kamartidur4.jpeg" alt="kamar tidur">
            </div>
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
                      <p>Fasilitas nyaman, keamanan 24jam, recommended bgt buat pekerja, mahasiswa, akses deket kemana mana👍</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1981.8587399738026!2d106.8458442!3d-6.5573046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c798ee4ffde9%3A0x26ee544786731e91!2sVillaku%20asri%20residence!5e0!3m2!1sid!2sid!4v1688021925607!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="footer_location">
              <h1 id="title_location">Lokasi</h1>
              <p>Ds cipambuan rt 01/01, Cipambuan, Kec. Babakan Madang,<br/>Kabupaten Bogor, Jawa Barat 16811</p>
              <a href="https://wa.me/+6281280499596" class="button_contact"><img src="../assets/brand-whatsapp.png" alt="whatsapp"/>Hubungi Kami Sekarang</a>
            </div>
        </div>
    </div>
  </main>
</template>

<style scoped>
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  nav{
    width: 100%;
    height: 55px;
    background-color: #FF008B;
  }
  
  header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .wrapper{
    margin: 4rem;
  }

  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .rating{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
    color: #000;
  }

  .location-details{
    margin-top: 1.5rem;
    color: #000;
  }

  .info{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
    margin-top: 1.5rem;
    color: #000;
  }

  .landingpage-navigation{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 2rem;
  }
  .landingpage-navigation .button{
    display: flex;
    justify-content: left;
    align-items: center;
    border: none;
    border-radius: 136px;
    margin: 3rem 0;
    padding: 20px 30px;
    cursor: pointer;
  }
  .landingpage-navigation .button:nth-child(1){
    background-color: #FF008B;
    color: #fff;
  }
  
  .landingpage-navigation .button:nth-child(2){
    background-color: transparent;
    border: 1px solid #FF008B;
  }

  .overview-bungallow{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 650px;
    height: 480px;
    border-radius: 8px;
  }

  .content .container-card .card-ruangtamu{
    display: flex; 
    justify-content: center;
    align-items: center; 
    flex-wrap: wrap;
  }

@media (min-width: 1024px) {
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  nav{
    width: 100%;
    height: 55px;
    background-color: #FF008B;
  }
  header{
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: 3rem;
  }

  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .rating{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
    color: #000;
  }
  .title1{
    font-size: 32px;
    font-family: 'Inter', sans-serif;
    color: #000;
  }
  .title2{
    font-size: 42px;
    font-family: 'Inter', sans-serif;
    color: #000;
    font-weight: bold;
  }
  .rating{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
  }
  .location-details{
    margin-top: 1.5rem;
  }
  .info{
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 1.5rem;
  }
  .landingpage-navigation{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 2rem;
  }
  .landingpage-navigation .button{
    display: flex;
    justify-content: left;
    align-items: center;
    border: none;
    border-radius: 136px;
    padding: 20px 30px;
    cursor: pointer;
  }
  .landingpage-navigation .button:nth-child(1){
    background-color: #FF008B;
    border: 1px solid #FF008B;
  }
  .landingpage-navigation .button:nth-child(2){
    color: #000;
    background-color: transparent;
  } .location-details{
    margin-top: 1.5rem;
  }
  .landingpage-navigation a{
    text-decoration:none;
    color: #000;
  }
  .landingpage-navigation .button:nth-child(1):hover{
    background-color: transparent;
    border: 1px solid #FF008B;
    color: #000;
  }
  
  .landingpage-navigation .button:nth-child(2):hover{
    background-color: #FF008B;
    color: #fff;
  }
  
  .info{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
    margin-top: 1.5rem;
  }
  .content{
    display: flex;
    justify-content: left;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }
  .container-content h1{
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-size: 40px;
    font-weight: bold;
    color: #000;
    padding-left: 4rem;
  }
  .container-content h3{
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: #000;
  }

  .container-content span{
    display: flex;
    width: 241px;
    height: 10px;
    background-color: #FC2947;
    border-radius: 100px;
    margin-bottom: 1.5rem;
  }
  .content .icon-fasilitas{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
    gap: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 5rem;
    padding-left: 4rem;
  }

  .icon-fasilitas .content-fasilitas{
    display:flex;
    justify-content: left;
    align-items: center;
    gap: 1.5rem;
    color: #000;
    font-size: 24px;
  }

  .icon-fasilitas .content-fasilitas .text-kecil{
    font-size: 20px;
    font-weight: 500;
  }

  .icon-fasilitas .content-fasilitas div{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-fasilitas .content-fasilitas img{
    width: 42px;
    height: 42px;
    object-fit: contain;
  }

  .content .judul-halaman-depan h3{
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: #000;
  }
  .content .container-card .card-halamandepan{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    gap: 1rem;
  }
  .ruangtamu .container-card .card-ruangtamu,
  .dapur .container-card .card-dapur,
  .kamar-tidur .container-card .card-kamar-tidur{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
  }

  .content .container-card img{
    width: 400px;
    height: 276px;
    object-fit: cover;
    border-radius: 10px;
  }

  .halamandepan{
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  /* title tiap foto */
  .fasilitas,
  .kamar-tidur .judul-kamar-tidur,
  .ruangtamu .judul-ruangtamu,
  .dapur .judul-dapur,
  .halamandepan .judul-halamandepan{
    padding-left: 4rem;
  }

  .ruangtamu{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  .dapur{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-bottom: 4.5rem;
  }
  .kamar-tidur{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-bottom: 4.5rem;
  }

  .peta{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10rem;
    text-align: center;
  }
  .peta .footer_location #title_location{
    font-size: 45px;
    text-align: center;
    font-weight: bold;
    color:#000;
    padding-left: 0;
  }
  .footer_location p{
    color:#000;
    font-size: 16px;
    margin-bottom: 2rem;
  }
  .peta .footer_location .button_contact{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 20px 0;
    border-radius: 21px;
    background-color: #FBEB31;
    color:#000;
    gap: 10px;
    cursor: pointer;
  }
  .peta .footer_location .button_contact img{
    width: 20px;
    height: 20px;
  }


  /* ulasan carousel */
  .container-card {
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto;
}
.container-card h2{
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

.card .card-content .ulasan-card{
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 7px;

}
.card .card-content .ulasan-card img{
  display:flex;
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
.card .ulasan-user{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.card .ulasan-user h3{
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  border-right: 3px solid lightgray;
  padding-right: 10px;
  color: #000;
}
.card .ulasan-user p{
  display:flex;
  justify-content:left;
  align-items:center;
  font-style: italic;
  color:#B8BABD;
}

.card .card-content img{
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