# Tıkla Gelsin

Tıkla Gelsin işe alım case'inin yapılmış halidir.

Toplamda 4 sayfadan oluşmaktadır. Bunlar;
  - Splash ekranı
  - Giriş ekranı
  - Ürün listeleme ekranı
  - Sepet ekranı
 
 şeklinde belirlenmiştir.

# Genel Bilgiler

- Redux Saga kullanılmıştır.
- Local'e kaydetme işlemi için AsyncStorage kullanılmıştır.
- Ikonlar flaticon adresinden alınmıştır.
- Token ve sepet kontrolü yapabilmek için ek olarak Splash ekranı yapılmıştır.
- Deeplinking entegrasyonu android için yapılmıştır ve test edilmiştir. Bayram dolayısıyla iOS tarafında entegrasyon yapılamamıştır.
- Deeplinking için uri-scheme paketinden yararlanılmıştır. Deeplinking ile sepete ürün eklemek için;
```
npx uri-scheme open app://tiklagelsin/id=3
```
komutu ile 3 id'li ürün sepete eklenebilir.

# Giriş Ekranı
  1. Giriş ekranı, mail ve şifre alanları ile en alttaki giriş yap butonundan oluşur. İki alan da doldurulmadan ve geçerli bir mail adresi yazılmadan giriş yap butonu aktif olmaz.
	
  2. Eğer geçerli bir mail adresi yazılmazsa kullanıcıya bununla ilgili bir uyarı metni gösterilir.
	
  3. Token bilgileri local storage üzerine kaydedilir. Böylece uygulama kapansa dahi tekrar açıldığında giriş yapılmış gibi davranış gösterilir. Hızlı olması açısından AsyncStorage kullanılmıştır. Gerçek senaryoda keychain ile birlikte şifrelenmiş token bilgisi kullanılır.
  
# Ürün Listeleme Ekranı
  1. Bu ekranın header kısmı çıkış yapma, başlık ve sepet olmak üzere üç kısımdan oluşur.
    
		- Çıkış yap butonuna basıldığında localdeki ve reduxta tutulan değerler silinir ve giriş ekranına yönlendirme yapılır.
    
		- Sepet butonuna tıklanıldığı zaman sepet ekranına yönlendirme yapılır ve sepette ne kadar ürün varsa bu butonun sağ üst köşesinde o sayı gösterilir.
   
  2. Header kısmının altında arama kısmı bulunmaktadır. Ürünlerin "içindekiler" kısmındaki kelimelerin filtrelenmesi burada yapılır. Örneğin "Sal" yazılırsa, içerisinde sadece "Salatalık" olan ürünler listelenir.
	   
  3. Sayfanın içeriğinde tüm ürünler listelenmiştir. Bu ürünler JSON dosyasından çekilmiştir.
		   
  4. Ürünlerin sağ tarafında sepete ekle butonu bulunmaktadır. Üzerinde ürünün fiyatı yazmaktadır. Bu butona tıklanıldığında ürün sepete eklenir ve sağ üstteki sepet butonunun üzerindeki sayı artar.
		   
  5. Sepete eklenen ürünler redux'a kaydedilir. Hızlı olması açısından aynı zamanda AsyncStorage ile locale "@TGBasket" key değeri ile kaydedilmiştir.
		
# Sepet Ekranı

1. Eğer sepette ürün yoksa, bu ekranda sadece sepet boş uyarısı gösterilir. 

2. Sepette ürün varsa ürünler ve bu ürünlerden kaç tane eklendiği gösterilir. Sağda bulunan + ve - butonları ile sepetten ürün çıkarma veya ekleme yapılabilir.

3. Eğer 2 numaralı ürün eklenmişse, sepet tutarına 3 TL indirim yapılır.

4. Sepetteki ürün listesinin alt kısmında fiyat kısmı bulunur.

5. Sayfanın en altında satın alma butonu bulunmaktadır. Butona tıklandığında sepet boşaltılır.

6. Deeplinking ile uygulama açıkken sepete ürün eklenebilir ama sadece android tarafında test edilmiştir. Bayram tatili dolayısıyla bu özelliği ios tarafında aktifleştirmek için fırsat olmadı. 
		
		
