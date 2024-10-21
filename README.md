# Task 18 - MongoDB Mongosh App

## 🎯 Objective
The objective of this task is to introduce you to the basics and terminology of MongoDB. You will create a MongoDB project, define collections, and insert specific documents into those collections. This README outlines the specific MongoDB shell commands used to achieve the project outcomes.

---

## 📋 Requirements
Trainees are expected to create a MongoDB project according to the following requirements. Additionally, they should create a README file in their repositories that outlines the MongoDB shell commands used. The README should provide clear instructions on how to start the MongoDB shell (Mongosh) and utilize the necessary commands effectively.

### Project Outcomes:

1. **Create a database** named `Codetribe`.
2. **Create three collections** named:
   - Facilitators
   - Trainees
   - Projects
3. **Insert documents** into these collections:
   - **Facilitators Collection**: Insert a document that contains the following fields:
     - Name
     - Location
     - Course
   - **Trainees Collection**: Insert a document with the following fields:
     - Name
     - Location
     - Facilitator
   - **Projects Collection**: Insert a document with the following fields:
     - Name
     - Course
     - Lesson

---

## 🔧 Setup Instructions

### 1. Start MongoDB Shell (Mongosh)
To interact with MongoDB, you'll need to start the MongoDB shell (Mongosh) on your local system. Follow these steps:

1. Open your terminal or command prompt.
2. Start the MongoDB server if it's not already running by executing:
   ```bash
   mongod
