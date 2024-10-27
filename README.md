# Press-to-Speak Çeviri Uygulaması

Bu proje, kullanıcıların bas-konuş özelliğiyle sesli giriş yaparak girdikleri metni anlık olarak seçilen dile çevirmelerini ve çevrilmiş metni kullanıcıya aynı ses tonunda dinletmelerini sağlayan bir mobil uygulamadır.

## Proje İçeriği

- **Client**: React Native kullanılarak geliştirilmiş mobil uygulama (Android/iOS).
- **Server**: Node.js ve Express tabanlı REST API.
- **Veritabanı**: MongoDB kullanılarak kullanıcı kayıt ve çeviri verileri saklanmaktadır.

## Özellikler

- **Ses Tanıma (Speech-to-Text)**: Google veya ChatGPT API’leri kullanılarak kullanıcının sesini metne dönüştürür.
- **Çeviri (Text Translation)**: ChatGPT veya Google Translate API ile seçilen dile anlık olarak çeviri yapar.
- **Sesli Çıktı (Text-to-Speech)**: Çevrilen metni, kullanıcının sesine benzer bir şekilde dinletir.
- **Profil ve Abonelik Yönetimi**: Kullanıcı kayıt, giriş ve abonelik yönetimi.

## Kurulum

### Gereksinimler

- Node.js ve npm
- MongoDB (Yerel veya MongoDB Atlas)
- Android Studio veya Xcode (React Native emülatör için)

### Sunucu Kurulumu (Server)

1. **Server klasörüne gidin**:
    ```bash
    cd server
    ```

2. **Bağımlılıkları yükleyin**:
    ```bash
    npm install
    ```

3. **Ortam değişkenlerini ayarlayın**:
   `server` dizininde bir `.env` dosyası oluşturun ve aşağıdaki bilgileri ekleyin:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    ```

4. **Server'ı başlatın**:
    ```bash
    npm run dev
    ```

### İstemci Kurulumu (Client)

1. **Client klasörüne gidin**:
    ```bash
    cd client
    ```

2. **Bağımlılıkları yükleyin**:
    ```bash
    npm install
    ```

3. **Ortam değişkenlerini ayarlayın**:
   `client` dizininde bir `.env` dosyası oluşturun ve aşağıdaki bilgiyi ekleyin:
    ```plaintext
    API_URL=http://localhost:5000/api
    ```

4. **Uygulamayı Çalıştırın**:

    - Android:
        ```bash
        npx react-native run-android
        ```

    - iOS (sadece macOS üzerinde):
        ```bash
        npx react-native run-ios
        ```

## Kullanım

1. Uygulamayı başlattıktan sonra kullanıcı kaydı yaparak veya giriş yaparak sisteme erişin.
2. `Speak` ekranında dil seçimi yaparak bas-konuş özelliğini kullanın.
3. Konuştuğunuz metin, seçtiğiniz dile çevrilerek ekranda gösterilir ve sesli çıktı olarak dinletilir.

## Teknolojiler

- **Frontend (Client)**: React Native
- **Backend (Server)**: Node.js, Express.js
- **Veritabanı**: MongoDB
- **API’ler**: Google Speech-to-Text, Google Translate, Google Text-to-Speech veya ChatGPT API

## Katkıda Bulunma

1. Bu projeyi forklayın.
2. Yeni bir özellik üzerinde çalışın.
3. Değişikliklerinizi bir pull request olarak gönderin.

## Lisans

MIT Lisansı.
