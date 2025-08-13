
import MenuItem from '@/components/MenuItem';
import menuData from '@/data/menus.json'
export default function Home() {
  return (
    <div className="relative">
      <div className="text-center mb-6">
        <h1 className="text-[24px] font-bold">Selamat Datang!👋</h1>
        <div>Portal ini untuk memudahkan akses ke form dan data warga Perumahan Bukit Sultan Tahap II.</div>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        {menuData && menuData.length > 0 &&menuData.map((item, index) =>
          <MenuItem
            key={index}
            {...item}
            path={item.path === null ? '' : item.path}
            url={item.url === null ? '' : item.url}
          />
        )}
      </div>
    </div>
  );
}
