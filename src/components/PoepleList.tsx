"use client";

import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/lib/firebaseClient";
import streetFilterData from '@/data/street-street.json';

type PeopleTypes = {
    email: string;
    fullName: string;
    gender: string;
    house_block: string;
    house_number: number;
    owner_name: string;
    owner_phone: string;
    ownership_status: string;
    phone: string;
};

type PeopleTableTypes = {
    id: string;
    fullName: string;
    ownershipStatus: string;
    block: string;
    number: number;
};

export default function PeopleList() {
    const [people, setPeople] = useState<PeopleTableTypes[]>([]);
    const [selectedStreet, setSelectedStreet] = useState<string>(""); // dipakai untuk filter
    const [streetRules, setStreetRules] = useState<Record<string, (p: PeopleTableTypes) => boolean>>({});
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [totalRecord, setTotalRecord] = useState<number>(0);

    // Load rules dari JSON
    useEffect(() => {
        const rulesObj = streetFilterData.reduce((acc, street) => {
            acc[street.name] = (p: PeopleTableTypes) =>
                street.rules.some(
                    (r) =>
                        p.block === r.block &&
                        p.number >= r.min &&
                        p.number <= r.max
                );
            return acc;
        }, {} as Record<string, (p: PeopleTableTypes) => boolean>);

        setStreetRules(rulesObj);
    }, []);

    // Load data warga dari Firebase
    useEffect(() => {
        const wargaRef = ref(db, "warga");
        const unsubscribe = onValue(wargaRef, (snapshot) => {
            const data = snapshot.val() || {};

            const formatData: PeopleTableTypes[] = Object.entries(data).map(
                ([id, item]) => ({
                    id,
                    fullName: (item as PeopleTypes).fullName.toLocaleLowerCase(),
                    ownershipStatus: (item as PeopleTypes).ownership_status,
                    block: (item as PeopleTypes).house_block,
                    number: (item as PeopleTypes).house_number,
                })
            );

            setPeople(formatData);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
      console.log('selectedStreet', selectedStreet)
      
      const getTotalRecord = () => {
        const street = streetFilterData.find(item => item.name === selectedStreet);
        if (!street) return;
        const streetOne = (street.rules[0].max - street.rules[0].min) + 1;
        const streetTwo = (street.rules[1].max - street.rules[1].min) + 1;
        const total = streetOne + streetTwo;
        setTotalRecord(total)
      }

      getTotalRecord()
    }, [selectedStreet])
    

    // Filter data
    const filteredPeople =
        selectedStreet && streetRules[selectedStreet]
            ? people.filter((p) => {
                const matchesStreet = streetRules[selectedStreet](p);
                const query = searchQuery.toLowerCase();
                const matchesSearch =
                    p.fullName.toLowerCase().includes(query) ||
                    p.ownershipStatus.toLowerCase().includes(query) ||
                    p.block.toLowerCase().includes(query) ||
                    p.number.toString().includes(query);

                return matchesStreet && matchesSearch;
            })
            : [];

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                {/* Search */}
                <input
                    type="text"
                    placeholder="Cari nama, status, blok, atau nomor"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border px-2 py-1 rounded-md w-full outline-none focus:border-blue-300"
                />

                {/* Dropdown filter lorong */}
                <select
                    value={selectedStreet}
                    onChange={(e) => setSelectedStreet(e.target.value)}
                    className="border rounded-md px-2 py-1 focus:border-blue-300"
                >
                    <option value="" disabled>
                        Pilih Lorong
                    </option>
                    {Object.keys(streetRules).map((street) => (
                        <option key={street} value={street}>
                            {street}
                        </option>
                    ))}
                </select>
            </div>

            {/* List warga */}
            <ul className="border rounded-lg">
                {filteredPeople.map((item) => (
                    <li
                        key={item.id}
                        className="grid grid-cols-5 border-b last:border-b-0 py-3 px-4"
                    >
                        <div className="col-span-2">
                            <div className="text-xs text-neutral-500">Nama</div>
                            <div className="capitalize">{item.fullName}</div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-xs text-neutral-500">No. Rumah</div>
                            <div className="capitalize">{item.ownershipStatus} {item.block}-{item.number}</div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-xs text-neutral-500">Status</div>
                            {item.ownershipStatus}
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                Total terdaftar { filteredPeople.length } dari { totalRecord } kepala keluarga di { selectedStreet }
            </div>
        </div>
    );
}
