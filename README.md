# 💰 Finance AI RAG Chatbot

> An AI-powered Multi-Agent Retrieval-Augmented Generation (RAG) chatbot that provides accurate, context-aware answers to finance-related queries using semantic search, vector databases, and Large Language Models.

![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![RAG](https://img.shields.io/badge/RAG-AI-orange)
![LLM](https://img.shields.io/badge/LLM-Powered-red)
![FAISS](https://img.shields.io/badge/FAISS-VectorDB-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

# 📌 Project Overview

Finance AI RAG Chatbot is an intelligent web-based assistant designed to answer finance-related questions using a Multi-Agent Retrieval-Augmented Generation (RAG) architecture.

Unlike traditional chatbots, the system retrieves relevant information from uploaded financial documents before generating responses. It combines semantic search, vector embeddings, document reranking, and Large Language Models (LLMs) to produce accurate, explainable, and context-aware answers while minimizing hallucinations.

The application features a modern React frontend, a FastAPI backend, and an AI-powered retrieval pipeline for efficient document understanding and question answering.

---

# ✨ Key Features

- 💬 AI-powered finance question answering
- 📄 Upload and analyse financial PDF documents
- 🔍 Retrieval-Augmented Generation (RAG)
- 🤖 Multi-Agent AI architecture
- 📚 Semantic search using FAISS Vector Database
- ⚡ Intelligent document retrieval and reranking
- 🧠 Hallucination reduction using retrieved context
- 📊 Table-aware document reasoning
- 📑 Context-aware answer generation
- 🌐 Modern React-based chat interface
- 🔒 Secure document processing

---

# 🛠️ Technology Stack

## Frontend
- React
- JavaScript
- HTML
- CSS

## Backend
- Python
- FastAPI
- Uvicorn

## AI & Machine Learning
- Large Language Models (LLMs)
- LangChain
- LlamaIndex

## Retrieval
- FAISS Vector Database
- Sentence Transformers
- Cross Encoder Reranker

## Document Processing
- PDFPlumber
- Recursive Character Text Splitter

---

# 📂 Project Structure

```text
Finance-AI-RAG-Chatbot
│
├── backend/
│   ├── agents/
│   ├── models/
│   ├── vector_db/
│   ├── app.py
│   ├── upload.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── datasets/
│
├── README.md
├── LICENSE
└── .gitignore
```

---

# 🏗️ System Architecture

```text
                 User
                   │
                   ▼
          React Frontend
                   │
                   ▼
           FastAPI Backend
                   │
                   ▼
         Query Processing Agent
                   │
                   ▼
       Document Retrieval Agent
          (FAISS Vector Search)
                   │
                   ▼
      Cross Encoder Reranking Agent
                   │
                   ▼
        Reasoning & Response Agent
                   │
                   ▼
       Large Language Model (LLM)
                   │
                   ▼
          Final Response to User
```

---

# 🔄 Working Flow

1. User uploads one or more financial documents.
2. The documents are processed and converted into text.
3. The extracted text is divided into smaller chunks.
4. Vector embeddings are generated for every chunk.
5. The embeddings are stored in a FAISS Vector Database.
6. The user asks a finance-related question.
7. The Retrieval Agent searches for the most relevant document chunks.
8. A Cross Encoder reranks the retrieved results.
9. The selected context is sent to the Large Language Model.
10. The chatbot generates a context-aware response.
11. The final answer is displayed through the React interface.

---
## 📸 Application Screenshots

### Home Page

<img width="1690" height="860" alt="Screenshot 2026-07-30 075227" src="https://github.com/user-attachments/assets/caa05a02-aa0e-4a3a-9e53-22f0c5c8c7dc" />


### Upload Documents

<img width="1612" height="816" alt="image" src="https://github.com/user-attachments/assets/e39eab1e-c967-4646-b36a-a3a69400ffd5" />


### Chat Interface

<img width="1643" height="852" alt="image" src="https://github.com/user-attachments/assets/a6e85c72-2da5-4c38-aa0f-4477753a1442" />


### Generated Response

<img width="1553" height="1013" alt="image" src="https://github.com/user-attachments/assets/ac2a04ce-a501-49e6-bfb7-1de860bb4152" />


# 🧠 Multi-Agent Pipeline

- 📥 Document Upload Agent
- 📄 Document Processing Agent
- ✂️ Text Chunking Agent
- 🔍 Retrieval Agent
- 📊 Reranking Agent
- 🤖 Reasoning Agent
- 📝 Response Generation Agent

---

# 📊 Example Query

### User

```text
What is the difference between a Mutual Fund and an ETF?
```

### Chatbot Response

```text
Mutual Funds and ETFs are investment vehicles that pool money from multiple investors.

• Mutual Funds are priced once at the end of the trading day.

• ETFs trade throughout the day like stocks.

• ETFs generally have lower expense ratios and greater liquidity compared to Mutual Funds.
```

---

# 🚀 Future Enhancements

- 📈 Live stock market integration
- 📊 Financial dashboard and analytics
- 📑 Automatic financial report summarisation
- 🌍 Multi-language support
- 🎤 Voice-enabled chatbot
- ☁️ Cloud deployment
- 👤 User authentication
- 📱 Mobile application support

---

# 📦 Installation

### Clone the repository

```bash
git clone https://github.com/Mohana47596/Finance-AI-RAG-Chatbot.git
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🎯 Applications

- Financial Question Answering
- Investment Knowledge Assistant
- Financial Report Analysis
- Banking Support Assistant
- Personal Finance Learning
- AI-based Financial Research

---

# 👩‍💻 Author

**Mohana Dokara**

B.Tech Computer Science and Engineering

AI & Machine Learning Enthusiast

GitHub: https://github.com/Mohana47596

---

