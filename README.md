# havadurumuuygulama
hava durumu uygulamaı
# Hava Durumu Uygulaması

Bu basit hava durumu uygulaması, kullanıcının girdiği şehir adına göre hava durumu bilgilerini alacak ve ekranda gösterecektir. Kullanıcı, geçerli bir şehir adı girdiğinde hava durumu bilgilerini alacak, geçersiz bir şehir adı girdiğinde ise hata mesajı görecektir.

## Nasıl Çalışır?

Kullanıcı bir şehir adını input alanına girer ve "Ara" butonuna tıklar. Uygulama, OpenWeatherMap API'sini kullanarak girilen şehir adının hava durumu verilerini çeker ve ekranda gösterir.

## Özellikler

- Kullanıcı dostu arayüz.
- Hava durumu bilgileri için gerçek zamanlı API kullanımı.
- Geçerli bir şehir adı girildiğinde sıcaklık, nem oranı ve rüzgar hızı gibi hava durumu bilgilerini gösterir.
- Geçersiz bir şehir adı girildiğinde hata mesajı gösterir.

## Gereksinimler

- İnternet bağlantısı.
- Tarayıcı (Google Chrome, Mozilla Firefox, vb.).

## Kurulum

1. Bu GitHub deposunu klonlayın veya ZIP dosyası olarak indirin.
2. `index.html`, `styles.css`, ve `script.js` dosyalarını tarayıcınızda çalıştırın.
3. API kullanımı için OpenWeatherMap'den bir API anahtarı alın ve `script.js` dosyasında `apiKey` değişkenine yapıştırın.

```javascript
// script.js

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "BURAYA_API_ANAHTARINIZI_YAZIN";
    // ...
}
