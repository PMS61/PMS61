# CogniSphere: AI-Powered Learning for the Future

CogniSphere is an advanced, AI-driven 3D tutor platform that delivers personalized, multimodal learning experiences. Designed for the next generation of education, it dynamically curates and explains syllabus content using the power of Retrieval-Augmented Generation (RAG), a 3D interface, and rich visual processing of textbooks and handwritten notes.

---

## 🚀 Features

- 📚 **Personalized Learning Roadmap**  
  Upload your syllabus and textbooks to generate a custom roadmap tailored to your academic goals.

- 🤖 **AI Tutor with Gemini Pro (or Equivalent LLM)**  
  Get answers, summaries, and in-depth explanations using advanced natural language models.

- 🧠 **Retrieval-Augmented Generation (RAG)**  
  Real-time knowledge retrieval from uploaded notes and materials for contextual responses.

- 📸 **Image Processing Core**  
  OCR and visual parsing of handwritten notes, textbook pages, and diagrams to extract interactive content.

- 🎞️ **Multimodal Crash Courses**  
  Learn through a blend of annotated videos, interactive diagrams, presentations, and AI-summarized notes.

- 📝 **Assessment & Feedback**  
  Post-topic quizzes/tests dynamically generated to reinforce learning and ensure mastery.

- 📊 **Progress Tracking & Adaptive Learning**  
  Visualize progress and let the roadmap auto-adjust based on your performance.

---

## 🧱 Tech Stack

| Component     | Tech Used                           |
|---------------|------------------------------------|
| **Frontend**  | Next.js                            |
| **Backend**   | Supabase                           |
| **AI Engine** | Gemini Pro (or equivalent LLM)     |
| **RAG**       | Vector Search + Contextual Indexing|
| **OCR & CV**  | Tesseract.js / OpenCV / Mediapipe  |
| **Storage**   | Supabase Storage / CDN             |

---

## 🔍 Core Modules

### 1. 📥 Input Interface
- Upload syllabus PDFs, textbook scans, or handwritten notes.
- Input queries or concept prompts via chat.

### 2. 🧩 RAG Engine
- Parses and indexes documents into chunks.
- Performs similarity-based retrieval and combines it with LLM response generation.

### 3. 🎨 Image Processing Core
- **OCR:** Extracts text from scanned textbook images.
- **Diagram Segmentation:** Isolates labeled diagrams and flowcharts.
- **Formula Recognition:** Converts handwritten or printed equations to LaTeX.
- **Content Structuring:** Classifies into headings, subtopics, definitions, visuals, and examples.

### 4. 🎓 Learning Experience
- **3D/2D AI Tutor Avatar** (via React Three Fiber or Manim)
- Multimodal crash courses with:
  - Auto-generated videos
  - PPT slides
  - Notes
- Visual explanations embedded with interactive diagrams and captions.

### 5. 🧪 Assessments
- Auto-generated quizzes with MCQs, short answers, and diagram labeling.
- Integrated feedback and retry mechanisms.

### 6. 📈 Progress Tracker
- Topic-wise completion status
- Performance analytics
- AI-driven suggestions to revisit weak areas

---

## 🧪 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cognisphere.git
cd cognisphere
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
LLM_API_KEY=your-gemini-or-llm-key
OCR_API_KEY=your-ocr-key-if-using-third-party
```

### 4. Start Development Server

```bash
npm run dev
```

---

## 🧠 How It Works

### 🔁 Retrieval-Augmented Generation

1. User uploads syllabus or notes.  
2. Data is chunked and embedded using vector representations.  
3. When queried, the most relevant chunks are retrieved.  
4. LLM generates answers using this curated context.

### 🖼️ Image-Aware Learning Pipeline

1. Input images undergo OCR + segmentation.  
2. Visual components (diagrams, graphs, formulas) are separated.  
3. Metadata and context are attached to each image.  
4. These are transformed into:
   - Annotated videos  
   - Linked notes  
   - PPT content  
   - Quiz visuals

---

## 🔮 Future Scope

- 🎮 **Gamified Learning:** XP, badges, and level-based progression.  
- 👥 **Group Learning Mode:** Share and collaborate on roadmaps.  
- 📅 **Study Scheduler:** Auto-generate weekly learning tasks.  
- 🧾 **Citation & Bibliography Generator:** From textbook scans.  
- 🧑‍🏫 **AR/VR Classroom with Teacher Model:**  
  Fully immersive virtual classrooms with AI-generated teachers explaining concepts in 3D, accessible via AR glasses or VR headsets.

---

## 📁 Folder Structure

```bash
cognisphere/
├── components/         # Reusable UI components
├── pages/              # Next.js pages
├── lib/                # RAG logic, OCR, LLM integration
├── public/             # Static assets
├── styles/             # Global styles
├── utils/              # Helper functions
├── tests/              # Test cases (unit/integration)
└── README.md           # Project documentation
```

---

## ✅ To-Do

- [x] Basic RAG integration  
- [x] Syllabus upload + parsing  
- [ ] AI-generated PPTs from notes  
- [ ] 2D/3D avatar integration  
- [ ] Diagram-aware assessments  
- [ ] User dashboard with analytics  
- [ ] Deployment setup (Vercel + Supabase)

---

## 🤝 Contributing

We welcome contributions! Please fork the repo and submit a pull request.

1. Fork this repository  
2. Create your feature branch (`git checkout -b feature/feature-name`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push to the branch (`git push origin feature/feature-name`)  
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🧠 Credits

- Gemini Pro by Google DeepMind / PaLM API  
- Supabase for backend infrastructure  
- Tesseract.js / OpenCV for OCR  
- Manim/React Three Fiber for avatar rendering  
- Your amazing contributions!

---

## 🌐 Live Demo (Coming Soon)

> Deployed on Vercel with Supabase backend integration.