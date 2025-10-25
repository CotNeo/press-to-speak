# Press-to-Speak Translation App

A real-time voice translation mobile application that allows users to speak in one language and instantly translate their speech to another language with voice output.

## 📱 Overview

This project enables users to:
- Speak in their native language
- Get instant translation to their selected target language
- Hear the translated text in their preferred voice
- Manage their profile and subscription settings

## 🏗️ Project Structure

```
press-to-speak/
├── client/          # React Native mobile app (Android/iOS)
├── server/          # Node.js & Express REST API
└── README.md
```

### Components
- **Client**: React Native mobile application for Android and iOS
- **Server**: Node.js and Express-based REST API
- **Database**: MongoDB for user registration and translation data storage

## ✨ Features

### Core Functionality
- **Speech Recognition**: Convert user's voice to text using Google or ChatGPT APIs
- **Text Translation**: Real-time translation to selected language using ChatGPT or Google Translate API
- **Text-to-Speech**: Play translated text with voice output similar to user's voice
- **User Management**: Registration, login, and subscription management
- **Language Selection**: Support for multiple languages
- **Audio Visualization**: Real-time audio spectrum display

### User Interface
- **Speak Screen**: Main interface for voice input and translation
- **Profile Screen**: User account and settings management
- **Language Selector**: Choose source and target languages
- **Speech Button**: Press-to-speak functionality with visual feedback

## 🛠️ Technologies

### Frontend (Client)
- **React Native** - Cross-platform mobile development
- **JavaScript** - Programming language
- **React Native Audio** - Audio recording and playback
- **React Native Speech** - Speech recognition

### Backend (Server)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### APIs & Services
- **Google Speech-to-Text API** - Voice recognition
- **Google Translate API** - Text translation
- **Google Text-to-Speech API** - Voice synthesis
- **ChatGPT API** - Alternative translation service

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) and npm
- **MongoDB** (Local installation or MongoDB Atlas)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **React Native CLI** (`npm install -g react-native-cli`)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/CotNeo/press-to-speak.git
cd press-to-speak
```

### 2. Server Setup

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create environment variables file:

Create a `.env` file in the server directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
GOOGLE_API_KEY=your_google_api_key
OPENAI_API_KEY=your_openai_api_key
```

Start the server:

```bash
npm run dev
```

The server will run on `http://localhost:5000`

### 3. Client Setup

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

For iOS, install CocoaPods dependencies:

```bash
cd ios && pod install && cd ..
```

Create environment variables file:

Create a `.env` file in the client directory:

```env
API_URL=http://localhost:5000/api
```

### 4. Database Setup

Make sure MongoDB is running locally or use MongoDB Atlas:

- **Local MongoDB**: Ensure MongoDB service is running
- **MongoDB Atlas**: Use the connection string in your `.env` file

## 🏃‍♂️ Running the Application

### Android

```bash
# Start Metro bundler
npx react-native start

# Run on Android (in a new terminal)
npx react-native run-android
```

### iOS (macOS only)

```bash
# Start Metro bundler
npx react-native start

# Run on iOS (in a new terminal)
npx react-native run-ios
```

## 📱 Usage

1. **Launch the app** on your device or emulator
2. **Register or login** to access the application
3. **Select languages** using the language selector
4. **Press and hold** the speech button to start recording
5. **Speak your message** in the source language
6. **Release the button** to stop recording
7. **View the translation** on screen and listen to the audio output

## 🔧 Configuration

### API Keys Setup

1. **Google APIs**:
   - Enable Speech-to-Text API
   - Enable Translate API
   - Enable Text-to-Speech API
   - Get API key from Google Cloud Console

2. **OpenAI API** (Optional):
   - Get API key from OpenAI platform
   - Add to server `.env` file

### Environment Variables

#### Server (.env)
```env
MONGO_URI=mongodb://localhost:27017/press-to-speak
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
GOOGLE_API_KEY=your-google-api-key
OPENAI_API_KEY=your-openai-api-key
```

#### Client (.env)
```env
API_URL=http://localhost:5000/api
```

## 🧪 Testing

Run tests for the server:

```bash
cd server
npm test
```

## 📁 Project Structure Details

### Server Structure
```
server/
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   ├── authController.js   # Authentication logic
│   ├── speechController.js # Speech processing
│   └── userController.js   # User management
├── middlewares/
│   ├── authMiddleware.js   # JWT authentication
│   └── errorHandler.js     # Error handling
├── models/
│   └── User.js            # User data model
├── routes/
│   ├── authRoutes.js      # Authentication routes
│   ├── speechRoutes.js    # Speech processing routes
│   └── userRoutes.js      # User management routes
├── services/
│   └── speechService.js   # Speech processing service
├── utils/
│   └── validators.js      # Input validation
└── index.js               # Server entry point
```

### Client Structure
```
client/
├── components/
│   ├── AudioSpectrum.js    # Audio visualization
│   ├── LanguageSelector.js # Language selection
│   └── SpeechButton.js     # Speech input button
├── screens/
│   ├── ProfileScreen.js    # User profile
│   └── SpeakScreen.js      # Main translation screen
├── services/
│   └── api.js             # API communication
├── styles/
│   └── commonStyles.js    # Shared styles
├── utils/
│   └── helpers.js         # Utility functions
└── App.js                 # Main app component
```

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**:
   ```bash
   npx react-native start --reset-cache
   ```

2. **Android build issues**:
   ```bash
   cd android && ./gradlew clean && cd ..
   npx react-native run-android
   ```

3. **iOS build issues**:
   ```bash
   cd ios && pod install && cd ..
   npx react-native run-ios
   ```

4. **Database connection issues**:
   - Check MongoDB is running
   - Verify connection string in `.env`
   - Check network connectivity

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section
2. Search existing issues
3. Create a new issue with detailed description
4. Include logs and error messages

## 🔮 Future Enhancements

- [ ] Offline translation support
- [ ] More language options
- [ ] Voice customization
- [ ] Translation history
- [ ] Export functionality
- [ ] Multi-user support
- [ ] Real-time collaboration

