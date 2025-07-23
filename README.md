# 🏥 Multilingual Medical Chatbot using RAG, LLM & Translation APIs

An AI-powered medical assistant chatbot that supports multilingual medical queries with real-time translation, intelligent retrieval, and LLM-generated answers. Built using a RAG (Retrieval-Augmented Generation) pipeline, this system provides accurate medical responses from **The Gale Encyclopedia of Medicine** and presents them in the user's native language with a clean and interactive frontend.

---

## 🌟 Features

- 🌐 **Multilingual Support**  
  Ask questions in any language and receive a translated answer in the same language.

- 📚 **Authoritative Medical Knowledge**  
  Responses are grounded in *The Gale Encyclopedia of Medicine*.

- 💬 **RAG-based Smart Q&A**  
  Uses LangChain to fetch context-aware responses through vector similarity.

- 🗣️ **Text-to-Speech Integration** *(optional)*  
  Readable voice output for enhanced accessibility.

- 🎨 **Modern UI/UX**  
  Beautiful, responsive interface using Tailwind CSS & shadcn/ui components.

---

## 🧰 Tech Stack

### ⚙️ Backend

- **FastAPI** – REST API framework
- **LangChain** – RAG pipeline orchestration
- **Hugging Face Embeddings** – Text vector embeddings
- **Groq API** – High-speed LLM for generating responses
- **Together API** – Language translation (input/output)
- **Pinecone** – Vector similarity search engine
- **The Gale Encyclopedia of Medicine** – Source dataset

### 🖥️ Frontend

- **Next.js** – React-based frontend framework
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – Component library for modern UI

### ☁️ DevOps

- **GitHub Actions** – CI/CD for automated deployment
- **AWS EC2** – Hosting backend and frontend

---

## 🧠 How It Works

```mermaid
graph TD
A[User Question (any language)] --> B[Translate via Together API]
B --> C[Embedding via Hugging Face]
C --> D[Search Context from Pinecone]
D --> E[LangChain Prompt with Retrieved Docs]
E --> F[Groq LLM generates response]
F --> G[Translate back to original language]
G --> H[Return Answer to Frontend]
