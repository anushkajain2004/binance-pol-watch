# 🚀 Real-Time POL Token Flow Tracker on Polygon

## 📌 Project Overview

This is my custom blockchain project designed to track **real-time POL token transfers** on the **Polygon network**, with a focus on **cumulative net-flows to and from Binance addresses**.
🔗 [Live Dashboard – binance-pol-watch](https://lovable.dev/projects/534ed09a-29bb-4d7a-b8f0-51b73a9261b5)



---


## 🛠️ Technologies Used

- **Frontend**: React + TypeScript + Tailwind CSS + shadcn-ui (built using Lovable)
- **Backend**: Rust-based real-time indexer (hosted separately)
- **Blockchain**: Polygon Network
- **Token**: POL
- **Database**: SQLite
- **Deployment**: Lovable + GitHub

---

## 📊 What This Project Does

- Tracks POL token transfers involving Binance addresses
- Calculates cumulative net-flows (inflows – outflows)
- Displays real-time charts and historical tables
- Designed for future scalability to support more exchanges

---

## 🧠 Architecture

- **Rust Indexer**: Connects to Polygon RPC, listens to blocks, identifies POL transfers, stores data in SQLite
- **API Layer**: Serves net-flow data to frontend
- **React Dashboard**: Visualizes token flows, address activity, and trends

---



