import React from 'react'
import rulesData from '@/data/rules.json'

export default function page() {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h1 className="font-bold text-xl mb-2">AD & ART</h1>
                <p>Daftar dokumen AD dan ART Perum. Bukit Sultan 2. </p>
            </div>
            <ul className="border rounded-lg">
                {rulesData.map((item, index) =>
                    <li key={index} className="flex justify-between border-b last:border-b-0 py-2 px-4">
                        <div>📄 {item.documentName}</div>
                        {item.downloadURL.length > 0 ?
                            <a 
                                href={item.downloadURL} 
                                target="_blank" 
                                rel="noopener" 
                                className="block font-bold text-xs px-3 py-1 rounded bg-blue-100 text-blue-500"
                            >
                                Unduh
                            </a> :
                            <a 
                                href="#"
                                className="block font-bold text-xs px-3 py-1 rounded bg-red-100 text-red-500 cursor-not-allowed"
                            >
                                Draft
                            </a>
                        }
                    </li>
                )}
            </ul>
        </div>
    )
}
