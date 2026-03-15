'use client';

import React, { useState, useMemo } from 'react';

const ZODIAC = [
  'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius',
];
const ZODIAC_CUTOFF = [20, 19, 21, 20, 21, 21, 23, 23, 23, 24, 23, 22];

function getZodiac(d: Date): string {
  const month = d.getMonth();
  const day = d.getDate();
  const idx = day < ZODIAC_CUTOFF[month] ? month : (month + 1) % 12;
  return ZODIAC[idx];
}

function getDayOfWeek(d: Date): string {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
}

export default function AgeCalculatorWidget() {
  const [birthStr, setBirthStr] = useState('');
  const [todayStr, setTodayStr] = useState(() => new Date().toISOString().slice(0, 10));

  const result = useMemo(() => {
    const birth = birthStr ? new Date(birthStr) : null;
    const today = new Date(todayStr);
    if (!birth || isNaN(birth.getTime()) || birth > today) return null;
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    const nextBday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday < today) nextBday.setFullYear(today.getFullYear() + 1);
    const diff = nextBday.getTime() - today.getTime();
    const daysToBday = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return {
      years,
      months,
      days,
      daysToBday,
      dayOfWeek: getDayOfWeek(birth),
      zodiac: getZodiac(birth),
    };
  }, [birthStr, todayStr]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Date of birth</span>
          <input
            type="date"
            value={birthStr}
            onChange={(e) => setBirthStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Age as of (date)</span>
          <input
            type="date"
            value={todayStr}
            onChange={(e) => setTodayStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50"
          />
        </label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-2xl font-bold text-[#2F281D]">
            {result.years} years, {result.months} months, {result.days} days old
          </p>
          <p className="text-[#2F281D]/70">Born on a {result.dayOfWeek}</p>
          <p className="text-[#2F281D]/70">Zodiac sign: {result.zodiac}</p>
          <p className="text-[#2F281D]/70">Next birthday in {result.daysToBday} days</p>
        </div>
      )}
    </div>
  );
}
