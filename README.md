# Axios

Axios ve Fetch en popüler veri çekme kütüphaneleridir

Faydaları:

- Özelleştirilebilir
- Axios, otomatik olarak Json verilerini işler
- Hata ayıklama özellikleri vardır
- HTTP isteklerini (get, post, delete, put)

Kullanım:

- Projeye Axios kütüphanesini kuruyoruz.(npm i axios)
- Kullanmak istediğiniz yerlerde Axios import ediyoruz

  //Verilerin tutulacağı stateyi ayarlama
  const [productList, setProductList] = useState([]);
  //Eski Metod
  useEffect(() => {
  fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((productList) =>
  console.log("ikinci dönen yanıt", productList.products)
  )
  .catch((err) => console.log("Veri çekme hatası", err));
  }, []);

  useEffect(() => {
  axios
  .get("https://dummyjson.com/products")
  .then((res) => setProductList(res?.data?.products))
  .catch((err) => console.log("axiosget hatası", err));
  }, []);
  // console.log("Ürünler State", productList);

HTTP isteği Yapma:

- Veri Alma isteği Yapma
- axios.get("endpoint")

Yeni veri ekleme isteği
-axios.post('endpoint',{gönderilecekVeri})

Veri Silme İsteği

- axios.delete('endpoint/silinecekId')

Veri Güncelleme

- axios.put("endpoint/id", güncellenecekEleman)

# Json Server

- Sahte bir API oluşturmaya yarar
- Kendi bilgisayarımızda bir API oluşturur
- Oluşturduğu API'nın temeli bir json dosyasıdır

Faydaları:

- Prototype Oluşturma: Gerçek API kullanılmadığı zaman hızlıca basit bir versiyonu oluşturulabilir.
- Fronted geliştirmede kolaylık sağlar.
- Kullanımı basittir.

Kullanım:

- Json serveri projeye indirip kurulur. (npm i json-server)
- proje klasör içerisine bir json dosyası oluşturulur.
- json dosyası içerisine tutmak istediğimiz yapıya göre veriler eklenir.

# Sık Kullanılan JS Dizi Metodları

- filter(): istenilen parametreye göre bir dizi döndürür.(genelde Silme işlemlerinde kullanılır.)
- find(): İstenilen elemanı diziden bulur. (Tek eleman döndürür.)
- slice(): istenilen elemanın yerine başka bir eleman koymak için kullanılır. (dizi döndürür.)
- splice(): diziyi ikiye bölmeye yarar.
- findIndex(): istenilen elemanın indexini bulur.(eleman döndürür)
- map(): dizideki tüm elemanları teker teker döner
