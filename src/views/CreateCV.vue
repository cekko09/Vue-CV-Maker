<template>
  <div class="" style="">
    <div class="row">
      <div class="col-md-5 mt-5 border">
        <div
          class="d-flex personal-collapse justify-content-between p-4 border-bottom mt-2"
        >
          <h2>Personal İnfo</h2>

          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePersonal"
            aria-expanded="false"
            aria-controls="collapsePersonal"
          >
            Göster
          </button>
        </div>

        <div class="collapse" id="collapsePersonal">
          <form action="" class="p-2">
            <div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-6">
                    <label for="">Ad</label>
                    <input type="text" v-model="ad" class="form-control" />
                  </div>
                  <div class="col-md-6">
                    <label for="">Soyad</label>
                    <input type="text" v-model="soyad" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-12">
                    <label for="">E-Posta Adresi</label>
                    <input type="email" v-model="mail" class="form-control" />
                  </div>
                  <div class="col-md-6">
                    <label for="">Doğum Yeri</label>
                    <input type="email" v-model="dogum" class="form-control" />
                  </div>
                  <div class="col-md-6">
                    <label for="">Cinsiyet</label>
                    <input
                      type="text"
                      v-model="cinsiyet"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="">LinkedIn</label>
                    <input
                      type="text"
                      v-model="linkedIn"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="">Ünvan</label>
                    <input type="text" v-model="unvan" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-12">
                    <label for="">Telefon numarası</label>
                    <input type="text" v-model="tel" class="form-control" />
                  </div>
                  <div class="col-md-12">
                    <label for="">Adres</label>
                    <input type="text" v-model="adres" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                @click="saveToLocalStorage"
                class="btn btn-primary mt-2"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
        <div
          class="d-flex personal-collapse justify-content-between border-bottom p-4 mt-2"
        >
          <h2>Eğitimler</h2>
          <div>
            <button
              type="button"
              @click="addEducation"
              id="beceri_ekle"
              class="beceri_ekle_btn btn btn-success me-2"
            >
              +
            </button>
            <button
              type="button"
              @click="removeEducation"
              id="beceri_ekle"
              class="beceri_ekle_btn btn btn-danger me-2"
            >
              -
            </button>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEducation"
              aria-expanded="false"
              aria-controls="collapseEducation"
            >
              Göster
            </button>
          </div>
        </div>
        <div class="collapse" id="collapseEducation">
          <form action="" class="p-2">
            <div
              v-for="(egitim, index) in egitimler"
              :key="index"
              class="pb-3 border-bottom"
            >
              <div class="form-group">
                <div class="row">
                  <div class="col-md-12">
                    <label for="">Eğitim</label>
                    <input
                      type="text"
                      v-model="egitim.bolum"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Eğitim Kurumu</label>
                    <input
                      type="text"
                      v-model="egitim.universite"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Şehir</label>
                    <input
                      type="text"
                      v-model="egitim.sehir"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-6">
                    <label for="">Başlangıç Tarihi</label>
                    <input
                      type="text"
                      v-model="egitim.baslangic"
                      class="form-control"
                    />
                  </div>

                  <div class="col-md-6">
                    <label for=""></label>
                    <label for="">Bitiş Tarihi</label>
                    <input
                      type="text"
                      v-model="egitim.bitis"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-12">
                    <label for="">Açıklama</label>
                    <input
                      type="text"
                      v-model="egitim.aciklama"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                @click="saveToLocalStorage"
                class="btn btn-primary mt-2"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
        <div
          class="d-flex personal-collapse justify-content-between border-bottom p-4 mt-2"
        >
          <h2>Deneyimler</h2>
          <div>
            <button
              type="button"
              @click="addExperience"
              id="beceri_ekle"
              class="beceri_ekle_btn btn btn-success me-2"
            >
              +
            </button>
            <button
              type="button"
              @click="removeExperience"
              id="beceri_ekle"
              class="beceri_ekle_btn btn btn-danger me-2"
            >
              -
            </button>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExperience"
              aria-expanded="false"
              aria-controls="collapseExperience"
            >
              Göster
            </button>
          </div>
        </div>
        <div class="collapse" id="collapseExperience">
          <form action="" class="p-2">
            <div
              v-for="(deneyim, index) in deneyimler"
              :key="index"
              class="pb-3 border-bottom"
            >
              <div class="form-group">
                <div class="row">
                  <div class="col-md-12">
                    <label for="">Görev</label>
                    <input
                      type="text"
                      v-model="deneyim.gorev"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Kurum</label>
                    <input
                      type="text"
                      v-model="deneyim.kurum"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Şehir</label>
                    <input
                      type="text"
                      v-model="deneyim.sehir"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-6">
                    <label for="">Başlangıç Tarihi</label>
                    <input
                      type="text"
                      v-model="deneyim.baslangic"
                      class="form-control"
                    />
                  </div>

                  <div class="col-md-6">
                    <label for=""></label>
                    <label for="">Bitiş Tarihi</label>
                    <input
                      type="text"
                      v-model="deneyim.bitis"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-12">
                    <label for="">Açıklama</label>
                    <input
                      type="text"
                      v-model="deneyim.aciklama"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                @click="saveToLocalStorage"
                class="btn btn-primary mt-2"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
        <div
          class="d-flex personal-collapse justify-content-between border-bottom p-4 mt-2"
        >
          <h2>Beceriler</h2>

          <div>
            <button
              type="button"
              @click="addSkill"
              id="beceri_ekle"
              class="beceri_ekle_btn btn btn-success me-2"
            >
              +
            </button>
            <button
              type="button"
              @click="removeSkill"
              id="beceri_ekle"
              class="beceri_ekle_btn btn btn-danger me-2"
            >
              -
            </button>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSkills"
              aria-expanded="false"
              aria-controls="collapseSkills"
            >
              Göster
            </button>
          </div>
        </div>
        <div class="collapse" id="collapseSkills">
          <form action="" class="p-2">
            <div id="skills">
              <div class="form-group">
                <div
                  class="row"
                  v-for="(beceri, index) in beceriler"
                  :key="index"
                >
                  <div class="col-md-12">
                    <label for="">Beceri</label>
                    <input
                      type="text"
                      v-model="beceriler[index]"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div v-html="renderedBecerilerHtml"></div>
            </div>
            <div>
              <button
                type="button"
                @click="saveToLocalStorage"
                class="btn btn-primary mt-2"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
        <div
          class="d-flex personal-collapse justify-content-between border-bottom p-4 mt-2"
        >
          <h2>Diller</h2>
          <div>
            <button
              type="button"
              @click="addLanguage"
              id="beceri_ekle"
              class="beceri_ekle_btn btn btn-success me-2"
            >
              +
            </button>
            <button
              type="button"
              @click="removeLanguage"
              id="beceri_ekle"
              class="beceri_ekle_btn btn btn-danger me-2"
            >
              -
            </button>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLanguage"
              aria-expanded="false"
              aria-controls="collapseLanguage"
            >
              Göster
            </button>
          </div>
        </div>
        <div class="collapse" id="collapseLanguage">
          <form action="" class="p-2">
            <div v-for="(dil, index) in diller" :key="index">
              <div class="form-group">
                <div class="row">
                  <div class="col-md-6">
                    <label for="">Dil</label>
                    <input type="text" v-model="dil.dil" class="form-control" />
                  </div>
                  <div class="col-md-6">
                    <label for="">Seviye</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="A1-B1 etc.."
                      v-model="dil.seviye"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                @click="saveToLocalStorage"
                class="btn btn-primary mt-2"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
        <button type="button" class="btn btn-primary" @click="exportPdf">
          PDF
        </button>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-6 mt-5 p-0 ">
        <div id="resume" class="border-start  border-bottom">
          <div id="print_sec">
            <div class="main_resume_info">
              <div class="main_info_section_1">
                <h1>{{ ad }} {{ soyad }}</h1>
                <h3>{{ unvan }}</h3>
              </div>
              <div class="d-flex main_info_section_2">
                <v-icon name="fa-envelope" /> <span>{{ mail }}</span>
                <v-icon name="fa-phone-alt" /> <span>{{ tel }}</span>
                <v-icon name="fa-location-arrow"></v-icon>
                
                <span>{{ adres }}</span>
              </div>
            </div>
            <div class="secondary">
              <div class="row">
                <div class="col-8">
                  <div class="secondary_resume_info p-4">
                    <div class="secondary_resume_info_section1">
                      <h3>Eğitimler</h3>
                      <div
                        class="education_section mb-3"
                        v-for="(egitim, index) in egitimler"
                        :key="index"
                      >
                        <div class="d-flex justify-content-between">
                          <strong class="okunan_bolum">{{
                            egitim.bolum
                          }}</strong>
                          <span class="okunan_bolum_tarihleri"
                            >{{ egitim.baslangic }} - {{ egitim.bitis }}
                          </span>
                        </div>
                        <div>
                          <p class="universite">{{ egitim.universite }}</p>
                          <p class="egitim_aciklama">- {{ egitim.aciklama }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="third_resume_info p-4">
                    <div class="third_resume_info_section1 mb-3">
                      <h3>Deneyimler</h3>
                      <div
                        class="experience_section mb-3"
                        v-for="(deneyim, index) in deneyimler"
                        :key="index"
                      >
                        <div class="d-flex justify-content-between">
                          <strong class="gorev">{{ deneyim.gorev }}</strong>
                          <span class="deneyim_tarihleri"
                            >{{ deneyim.baslangic }} - {{ deneyim.bitis }}</span
                          >
                        </div>
                        <div>
                          <p class="kurum">
                            {{ deneyim.kurum }} , {{ deneyim.sehir }}
                          </p>
                          <p class="deneyim_aciklama">
                            - {{ deneyim.aciklama }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-4 border-start border-end p-0">
                  <div class="side_info_section p-4">
                    <div class="personal_info_side">
                      <h3>Kişisel Bilgiler</h3>
                      <h6>Doğum Yeri</h6>
                      <p>{{ dogum }}</p>

                      <h6>Cinsiyet</h6>
                      <p>{{ cinsiyet }}</p>
                      <h6>linkedIn</h6>
                      <p>{{ linkedIn }}</p>
                    </div>
                    <div class="skill_info_side">
                      <h3>Beceriler</h3>
                      <div v-for="(skill, index) in beceriler" :key="index">
                        <p>{{ skill }}</p>
                      </div>
                    </div>
                    <div class="language_info_side">
                      <h3>Diller</h3>

                      <p v-for="(dil, index) in diller" :key="index">
                        {{ dil.dil }} - <strong>Seviye:</strong>
                        {{ dil.seviye }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      ad: "Cenk",
      soyad: "Yalçın",
      mail: "cekkooo09@gmail.com",
      unvan: "Web Developer",
      tel: "5074909790",
      adres: "denizli/pamukkale",
      dogum: "Nazilli",
      cinsiyet: "Erkek",
      linkedIn: "https://www.linkedin.com/in/cenk-yalcin-780a651b3/",
      egitimler: [
        {
          bolum: "Bilgisayar Mühendisliği",
          universite: "Pamukkale Universitesi",
          sehir: "Denizli",
          baslangic: "10.10.2024",
          bitis: "15.10.2029",
          aciklama:
            "Pamukkale Universitesinde bilgisayar mühendisliği bölümünü 2.04 ortalama ile bitirdim",
        },
      ],
      deneyimler: [
        {
          gorev: "Full-Stack Web developer",
          kurum: "Cross Web Yazılım",
          aciklama:
            "Cross Web Yazılım firmasında projelerde Full-stack Developer olarak görev aldım. çalıştıgım süre boyunca vue js react js laravel php mysql gibi teknolojiler kullandım",
          baslangic: "11.12.2024",
          bitis: "01.07.2028",
          sehir: "Denizli",
        },
      ],
      diller: [
        {
          dil: "İngilizce",
          seviye: "B1",
        },
      ],
      genislik: 0,
      beceriler: ["HTML"],
    };
  },
  mounted() {
    // Sayfa yüklendiğinde local storage'dan verileri al
    this.loadDataFromLocalStorage();
  },

  methods: {
     
    saveToLocalStorage() {
      // Her klavye girişinde form verilerini local storage'a kaydet
      localStorage.setItem("form-data", JSON.stringify(this.$data));
      alert("Kaydedildi");
    },
    loadDataFromLocalStorage() {
      // Sayfa yüklendiğinde local storage'daki verileri form alanlarına yükle
      const data = JSON.parse(localStorage.getItem("form-data"));
      if (data) {
        Object.assign(this.$data, data);
      }
    },
    addSkill() {
      this.beceriler.push("Yeni Beceri");
    },

    removeSkill() {
      this.beceriler.pop(); // Beceriler listesinden son elemanı çıkar
    },
    addExperience() {
      this.deneyimler.push({
        gorev: "Görev",
        kurum: "Kurum",
        sehir: "Şehir",
        baslangic: "Baslangıç Tarihi",
        bitis: "Bitiş Tarihi",
        aciklama: "aciklama",
      });
    },

    removeExperience() {
      this.deneyimler.pop(); // Beceriler listesinden son elemanı çıkar
    },
    addEducation() {
      this.egitimler.push({
        bolum: "Yeni",
        universite: "yeni",
        sehir: "yeni",
        baslangic: "Baslangıç Tarihi",
        bitis: "Bitiş Tarihi",
        aciklama: "yeni",
      });
    },

    removeEducation() {
      this.egitimler.pop(); // Beceriler listesinden son elemanı çıkar
    },
    addLanguage() {
      this.diller.push({
        dil: "yeni dil",
        seviye: "yeni seviye",
      });
    },

    removeLanguage() {
      this.diller.pop(); // Beceriler listesinden son elemanı çıkar
    },
    exportPdf() {
      const resume = document.getElementById("print_sec");
      var opt = {
        html2canvas: {  scrollY: 0, useCORS: true },

       
      };
      html2pdf().set(opt).from(resume).toContainer().save();
    },
  },
};
</script>
<style >
* {
  box-sizing: border-box !important;
}
.skill_info_side p {
  margin: 2px;
}
#resume {
  width: 210mm !important;
}
#print_sec {
  width: 100%;
}
.row {
  margin: 0 !important;
}
.secondary {
  width: 100%;
  overflow: hidden;
}
.beceri_ekle_btn {
  padding: 5;
}
.beceri_arttir,
.beceri_azalt {
  margin: 10px;
  transition: 0.3s ease;
  padding: 5px 15px 5px 15px;
  background-color: #f6f6f6;
}
.beceri_arttir:hover,
.beceri_azalt:hover {
  cursor: pointer;
  background-color: #e6e6e6;
}
.personal_info_side p,
h6 {
  margin-bottom: 5px;
  padding: 0 5px 0 0;
  word-break: break-all;
}
.egitim_aciklama {
  margin: 0;
}
.universite {
  margin: 0;
}
.okunan_bolum_tarihleri {
  padding: 0;
}
.deneyim_aciklama {
  margin: 0;
}
.kurum {
  margin: 0;
}
.deneyim_tarihleri {
  padding: 0;
}
.main_resume_info {
  width: 100%;
  background-color: #313846;
}
.main_resume_info h1 {
  color: #fff;
  padding: 10px;
  margin: 0;
}
.main_info_section_2 {
  padding: 10px;
  overflow: hidden;
}
.main_resume_info svg {
  color: white;
}
.main_resume_info h3,
span {
  padding: 10px;
  color: rgb(176, 176, 176);

  margin: 0;
}
.main_resume_info div {
  align-items: center;
}
.card {
  width: 80%;
  height: auto;
  display: block;
  position: relative;
  margin: 8px 0;
  padding: 0 10px;
  border: 1px solid #aaa;
  border-radius: 4px;
}

.card-header,
.card-content {
  margin: 10px 0;
}

.card-header {
  cursor: pointer;
}

.card-header span {
  font-weight: 600;
}

.card-body {
  height: 0;
  overflow: hidden;
  transition: 0.3s;
}

.icon {
  float: right;
}

hr {
  margin: 0;
  height: 1px;
  display: block;
  border-width: 0;
  border-top: 1px solid #aaa;
}
@media only screen and (max-width: 600px){
  #resume {
  width: 100% !important;
}
 #resume h1 {
  font-size: .7rem;
}
 #resume span {
  font-size: .5rem;
}
 #resume p {
  font-size: .7rem;
}

  #resume h2 {
  font-size: .7rem;
}
 #resume h3 {
  font-size: .7rem;
}
 #resume h4 {
  font-size: .7rem;
}

 #resume h5 {
  font-size: .7rem;
}
 #resume h6 {
  font-size: .7rem;
}
}
</style>
