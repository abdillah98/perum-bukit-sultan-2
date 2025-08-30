import React from 'react'
import rulesData from '@/data/docs.json'
import Link from 'next/link'

export default function Docs() {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h1 className="font-bold text-xl mb-2">Dokumen</h1>
                <p>Daftar dokumen terkait Perum. Bukit Sultan 2. </p>
            </div>
            <ul className="border rounded-lg">
                {rulesData.map((item, index) =>
                    <li key={index} className="flex justify-between border-b last:border-b-0 py-3 px-4">
                        <div>📄 {item.documentName}</div>
                        {item.status === 'process' 
                            ? <ButtonLink label="Unduh" path="/on-progress" />
                            : <ButtonLink label="Unduh" path={item.downloadURL} blank />
                        }
                    </li>
                )}
            </ul>
        </div>
    )
}


const ButtonLink: React.FC<{label: string, path: string, blank?: boolean}> = ({label, path, blank}) => {


    if (blank) {
        return (
            <a 
                href={path} 
                target="_blank" 
                rel="noopener" 
                className="block font-bold text-xs px-3 py-1 rounded bg-blue-100 text-blue-500"
            >
                {label}
            </a>
        )
    }
    
    return (
        <Link 
            href={path} 
            className="block font-bold text-xs px-3 py-1 rounded bg-blue-100 text-blue-500"
        >
            {label}
        </Link>
    )
}