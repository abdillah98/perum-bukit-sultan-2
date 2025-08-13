import PoepleList from '@/components/PoepleList'
import React from 'react'

export default function People() {
  return (
    <div className="flex flex-col gap-4">
        <div>
            <h1 className="font-bold text-xl mb-2">Data Warga</h1>
            <p>Daftar warga Perum. Bukit Sultan 2. Silahkan pilih gang/lorong anda untuk menampilkan data warga.</p>
        </div>
        <PoepleList />
    </div>
  )
}
