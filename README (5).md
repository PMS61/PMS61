# 🌟 NavDrishti - Smart Navigation for the Visually Impaired

[![Flutter](https://img.shields.io/badge/Flutter-3.9.2+-blue.svg)](https://flutter.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

NavDrishti is an innovative IoT-based smart navigation system designed to assist visually impaired individuals with safe and independent mobility. The project combines a mobile application with a smart blind stick equipped with sensors to provide real-time obstacle detection, GPS navigation, and emergency support.

## 📋 Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Hardware](#hardware)


## ✨ Features

### For Visually Impaired Users
- 🔗 **Smart Stick Integration** - Bluetooth connectivity with ESP32-based smart stick
- 🚨 **Real-time Obstacle Detection** - Voice alerts for obstacles, potholes, and vehicles
- 🗺️ **GPS Navigation** - Navigate to destinations using OpenStreetMap
- 📷 **Surroundings Description** - AI-powered camera to identify and describe objects
- 🆘 **Emergency SOS** - One-tap emergency alerts to guardians with location
- 🎙️ **Voice Interface** - Complete voice control and feedback
- 📍 **Journey Tracking** - Automatic journey logging and history

### For Guardians
- 📍 **Live Location Tracking** - Real-time monitoring of loved ones
- 🔔 **Instant Alerts** - Push notifications for emergencies and safety events
- 📊 **Journey History** - View past trips and travel patterns
- 🔋 **Device Monitoring** - Check smart stick battery and connection status
- 👥 **Multi-User Support** - Monitor multiple visually impaired users

## 🏗️ Architecture

```
┌─────────────────┐
│  Mobile App     │
│   (Flutter)     │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼──┐  ┌──▼────┐
│ BLE  │  │Backend│
│Device│  │Services│
└──────┘  └───┬───┘
              │
      ┌───────┴───────┐
      │               │
  ┌───▼────┐    ┌────▼─────┐
  │Supabase│    │ Firebase │
  │Database│    │   FCM    │
  └────────┘    └──────────┘
```

## 🚀 Getting Started

### Prerequisites

- Flutter SDK 3.9.2 or higher
- Dart SDK 3.9.2 or higher
- Android Studio / Xcode
- Physical device (for BLE and camera testing)
- Supabase account
- Firebase account

### Quick Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/navdrishti.git
   cd navdrishti
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Configure Supabase**
   - Create a Supabase project
   - Run SQL from `lru/supabase_setup.sql`
   - Update `lib/core/config/supabase_config.dart`

4. **Configure Firebase**
   - Follow guide in `lru/FIREBASE_SETUP.txt`
   - Add `google-services.json` and `GoogleService-Info.plist`
   - Update `lib/core/config/firebase_options.dart`

5. **Run the app**
   ```bash
   flutter run
   ```

📖 **Detailed setup instructions:** See `lru/QUICKSTART_GUIDE.txt`

## 📁 Project Structure

```
lib/
├── core/
│   ├── config/          # App configuration
│   ├── models/          # Data models
│   ├── services/        # Business logic services
│   ├── theme/           # App theming
│   └── router/          # Navigation
└── features/
    ├── auth/            # Authentication
    ├── home/            # Home screens
    ├── device/          # BLE device connection
    ├── navigation/      # GPS navigation
    ├── camera/          # Image recognition
    ├── alerts/          # Alert system
    ├── profile/         # User profile
    └── settings/        # App settings

lru/                     # Documentation & Setup Files
├── supabase_setup.sql           # Database schema
├── FIREBASE_SETUP.txt           # Firebase guide
├── PROJECT_README.txt           # Complete documentation
├── QUICKSTART_GUIDE.txt         # Quick setup
├── HARDWARE_SETUP.txt           # Hardware assembly
├── esp32_firmware.ino           # ESP32 code
└── PROJECT_SUMMARY.txt          # Project overview
```
## 🔧 Hardware

### Smart Stick Components
- ESP32 DevKit
- HC-SR04 Ultrasonic Sensors (2x)
- IR Sensors (2x)
- Vibration Motor
- Li-ion Battery with charging circuit

**Total Cost:** ~₹1,400 per unit

## 🛠️ Technologies

### Mobile App
- **Flutter** - Cross-platform framework
- **Riverpod** - State management
- **Go Router** - Navigation
- **Supabase** - Backend & database
- **Firebase** - Push notifications
- **BLE** - Device communication
- **Google ML Kit** - Image recognition

### Backend
- **Supabase** - PostgreSQL + Realtime
- **Firebase Cloud Messaging** - Push notifications
- **PostGIS** - Geospatial data

### Hardware
- **ESP32** - Microcontroller
- **Arduino** - Firmware development
- **BLE** - Wireless communication

## 🧪 Testing

```bash
# Run all tests
flutter test

# Run with coverage
flutter test --coverage

# Run on device
flutter run
```

## 🏗️ Build

### Android
```bash
flutter build apk --release
flutter build appbundle --release
```

### iOS
```bash
flutter build ios --release
flutter build ipa --release
```

## 💡 Key Highlights

- ✅ **Affordable** - Well under ₹3,000 per unit target
- ✅ **Comprehensive** - Complete solution with hardware and software
- ✅ **Accessible** - Voice-first interface design
- ✅ **Real-time** - Live obstacle detection and location tracking
- ✅ **Scalable** - Built on modern, scalable technologies

---

**Made with ❤️ for the visually impaired community by team lrucache13**


