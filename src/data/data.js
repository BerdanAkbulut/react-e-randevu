const data = [
  {
    id: 1,
    hastaAdi: 'Ahmet',
    hastaSoyadi: 'Kırmızıgül',
    email: 'ahmetkirmizigul@hotmail.com',
    telefon: '05354344455',
    tcNo: '23232167867',
    il: 'İstanbul',
    hastaneAdi: 'Okmeydanı Devlet Hastanesi',
    ilce: 'Okmeydanı',
    bolum: 'Dahiliye',
    doktorAdi: 'Sevim Gül',
    randevuSaati: '12:00',
  },
  {
    id: 2,
    hastaAdi: 'Oğuzhan',
    hastaSoyadi: 'Gül',
    email: 'oguzhangul@gmail.com',
    telefon: '05462326655',
    tcNo: '48732167867',
    il: 'İstanbul',
    hastaneAdi: 'Okmeydanı Devlet Hastanesi',
    ilce: 'Okmeydanı',
    sifre: '123456789',
    bolum: 'Kulak Burun Boğaz',
    doktorAdi: 'Sevim Gül',
    randevuSaati: '12:00',
  },
  {
    id: 3,
    hastaAdi: 'Ömer',
    hastaSoyadi: 'Kılıç',
    email: 'omerkilic@hotmail.com',
    telefon: '05324366649',
    tcNo: '98442167867',
    doktorAdi: 'Sevim Gül',
    il: 'İstanbul',
    hastaneAdi: 'Okmeydanı Devlet Hastanesi',
    ilce: 'Okmeydanı',
    sifre: '1122334455',
    bolum: 'Psikiyatri',
    randevuSaati: '12:00',
  },
];
const istanbulIlce = ['Alibeyköy', 'Eyüp', 'Gaziosmanpaşa'];
const edirneIlce = ['Şükrüpaşa', 'Fatih', 'Ayşekadın'];

const alibeykoy = [
  'Alibeyköy Hastanesi',
  'Başarı Hastanesi',
  'Avrasya Hastanesi',
];
const gaziosmanpasa = [
  'Gaziosmanpaşa Devlet Hastanesi',
  'Yeniyüzyıl Üniversitesi Hastanesi',
];
const eyup = ['Eyup Devlet Hastanesi', 'Duygu Hastanesi'];

const fatih = ['1. Murat Devlet Hastanesi', 'Özel Trakya Hastanesi'];

const istanbul = [alibeykoy, eyup];
const edirne = [fatih];
const iller = [istanbul, edirne];
const doktorlar = [
  'Yusuf Yazıcı',
  'Arda Turan',
  'Turan Çavuş',
  'Hasan Ali Kaldırım',
];
const bolumler = [
  'Psikiyatri',
  'Kulak Burun Boğaz',
  'Dahiliye',
  'Beyin ve Sinir Cerrahisi',
  'Cildiye',
  'Çocuk Sağlığı ve Hastalıkları',
  'Nöroloji',
  'Radyoloji',
  'Kadın Hastalıkları',
  'Beslenme ve Diyet',
];
export {
  data,
  iller,
  istanbulIlce,
  edirneIlce,
  alibeykoy,
  eyup,
  gaziosmanpasa,
  doktorlar,
  bolumler,
};
