---
type: project
aliases:
  - Production Hybrid RAG System for Government Tender Intelligence
tags:
  - project
  - selected-project
  - rag
  - document-intelligence
  - generative-ai
technologies:
  - Python
  - FastAPI
  - LangChain
  - FAISS
  - BM25
  - Qdrant
  - LLaMA
  - Mistral
  - React
  - Qwen2-VL
  - RapidFuzz
  - Pydantic
repository: "https://github.com/prathameshfuke/TenderExtractPro"
---

# TenderExtractPro

Production hybrid RAG system for government tender intelligence, built by [[Prathamesh Fuke]].

## Stack

Python, FastAPI, LangChain, FAISS, BM25, Qdrant, LLaMA, Mistral, React.

## Highlights

- Architected a production-grade 6-stage hybrid RAG pipeline for extracting technical specifications and scope-of-work data from large government tender documents.
- Combined BM25 sparse retrieval with FAISS/Qdrant semantic retrieval and semantic chunking, achieving 85-90% extraction accuracy on multi-section tender PDFs.
- Designed anti-hallucination safeguards using RapidFuzz grounding verification and strict Pydantic schema validation to reject unsupported LLM outputs.
- Implemented parent-child retrieval architecture and multimodal Qwen2-VL table recovery for OCR-heavy pages and complex tables.
- Reduced manual procurement review time from hours to under 3 minutes through structured JSON extraction with source-level citations.
- Built a full-stack React and FastAPI platform with interactive document Q&A and company-profile-based tender scoring.

## Key Stats

- 6-stage AI pipeline
- 85-90% extraction accuracy
- Under 3 minute document processing
- BM25 plus dense retrieval plus multimodal OCR
- Production-grade grounding validation

## Links

- GitHub: [TenderExtractPro](https://github.com/prathameshfuke/TenderExtractPro)
- [[External Links]]

## Related

- [[Selected Projects]]
- [[DataSmith AI - Generative AI Engineer Intern]]
- [[Hybrid RAG Engineering]]
- [[LLM Optimization and Quantization]]
- [[Production MLOps and Evaluation]]
- [[Generative AI]]
