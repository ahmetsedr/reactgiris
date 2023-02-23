# React girişten önce
```
// axios kütüphanesini "axios" olarak içe aktar
import axios from "axios";

// async fonksiyonu tanımla, veri nesnesi ID'sini parametre olarak alır
async function getData(item) {
    try {
        // Kullanıcı verilerini almak için axios ile istek gönder ve sonucunu users değişkenine ata
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + item)
        // Gönderi verilerini almak için axios ile istek gönder ve sonucunu posts değişkenine ata
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + item)

        // Kullanıcı ve gönderi verilerini console'a yazdır
        console.log("USERS : ", users)
        console.log("POSTS : ", posts)
    }
    // Eğer istekler sırasında bir hata olursa, hatayı yakala ve console'a yazdır
    catch (err) {
        console.log(err)
    }
}
```
Bu JavaScript kodu, axios kütüphanesi kullanılarak veri çekme işlemini gerçekleştiriyor. Kod, getData adında bir async fonksiyon içeriyor. Bu fonksiyon, bir veri nesnesi ID'sini parametre olarak alıyor.

getData fonksiyonu içinde, önce axios ile "https://jsonplaceholder.typicode.com/users/" ve "https://jsonplaceholder.typicode.com/posts?id=" adreslerine istek gönderiliyor. Bu isteklerin sonucunda, kullanıcı ve gönderi verileri elde ediliyor.

Veriler alındıktan sonra, console.log kullanılarak, elde edilen kullanıcı ve gönderi verileri yazdırılıyor.

Eğer istekler sırasında bir hata oluşursa, try-catch yapısı kullanılarak hatanın yakalanması ve console'a yazdırılması sağlanıyor.

Bu modül, bir başka dosyada (index.js) getData fonksiyonunu içe aktarılarak kullanılabilir hale getiriliyor. Bu şekilde, console.log(getData(1)) kullanılarak getData fonksiyonunun çalıştırılması sağlanıyor.
### Bu bir patika.dev ödevidir. Başarılar 👏
