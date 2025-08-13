import React from 'react'
import notulensData from '@/data/notulens.json'

export default function Notulens() {
  return (
    <div className="flex flex-col gap-4">
        <div>
            <h1 className="font-bold text-xl mb-2">Notulensi</h1>
            <p>Daftar dokumen hasil rapat Perum. Bukit Sultan 2. </p>
        </div>
        <ul className="border rounded-lg">
            {notulensData.map((item, index) =>
                <li key={index} className="flex justify-between border-b last:border-b-0 py-3 px-4">
                    <div>📄 {item.documentName}</div>
                    <a href={item.downloadURL} target="_blank" rel="noopener" className="block bg-blue-100 text-blue-500 font-bold text-xs px-3 py-1 rounded">
                        Unduh
                    </a>
                </li>
            )}
        </ul>
    </div>
  )
}
