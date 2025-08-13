import React from 'react'
import waGroups from '@/data/wa-groups.json'

export default function WaGroups() {
  return (
    <div className="flex flex-col gap-4">
        <div>
            <h1 className="font-bold text-xl mb-2">Groups Whatsapp</h1>
            <p>Daftar group whatsapp Perum. Bukit Sultan 2. </p>
        </div>
        <ul className="border rounded-lg">
            {waGroups.map((item, index) =>
                <li key={index} className="flex justify-between border-b last:border-b-0 py-3 px-4">
                    <div>📌 {item.groupsName}</div>
                    <a href={item.groupsUrl} target="_blank" rel="noopener" className="block bg-blue-100 text-blue-500 font-bold text-xs px-3 py-1 rounded">
                        Join
                    </a>
                </li>
            )}
        </ul>
    </div>
  )
}
