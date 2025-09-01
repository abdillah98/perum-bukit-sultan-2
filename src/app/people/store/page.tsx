// src/components/UploadPeople.tsx
"use client";

import React from "react";
import { ref, set } from "firebase/database";
import { db } from "@/lib/firebaseClient";
import people from "@/data/people.json"; // pastikan path people.json sesuai

export default function UploadPeople() {
  const handleUpload = async () => {
    try {
      for (const person of people) {
        // bikin key dari block + number, hapus spasi dan lowercase
        const block = String(person.house_block).replace(/\s+/g, "").toLowerCase();
        const number = String(person.house_number).replace(/\s+/g, "").toLowerCase();
        const key = `${block}_${number}`;

        await set(ref(db, `people/${key}`), person);
      }

      alert("✅ Data berhasil di-upload ke Firebase!");
    } catch (error) {
      console.error("Gagal upload data:", error);
      alert("❌ Gagal upload data. Lihat console untuk detail.");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Upload People Data</h2>
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Upload ke Firebase
      </button>
    </div>
  );
}
