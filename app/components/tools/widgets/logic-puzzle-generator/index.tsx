'use client';

import React, { useState, useMemo } from 'react';

function generateSudoku(): number[][] {
  const grid = Array(9).fill(null).map(() => Array(9).fill(0));
  function valid(r: number, c: number, n: number): boolean {
    for (let i = 0; i < 9; i++) if (grid[r][i] === n || grid[i][c] === n) return false;
    const br = Math.floor(r / 3) * 3, bc = Math.floor(c / 3) * 3;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (grid[br + i][bc + j] === n) return false;
    return true;
  }
  function solve(): boolean {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (grid[r][c] === 0) {
          const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
          for (const n of nums) {
            if (valid(r, c, n)) {
              grid[r][c] = n;
              if (solve()) return true;
              grid[r][c] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  solve();
  return grid;
}

function hideCells(grid: number[][], level: 'easy' | 'medium' | 'hard'): number[][] {
  const count = level === 'easy' ? 35 : level === 'medium' ? 45 : 52;
  const copy = grid.map((row) => [...row]);
  const positions = [];
  for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) positions.push([r, c]);
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * positions.length);
    const [r, c] = positions[idx];
    copy[r][c] = 0;
    positions.splice(idx, 1);
  }
  return copy;
}

export default function LogicPuzzleGeneratorWidget() {
  const [level, setLevel] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [puzzle, setPuzzle] = useState<number[][] | null>(null);

  const generate = () => setPuzzle(hideCells(generateSudoku(), level));

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Difficulty</span>
        <select value={level} onChange={(e) => setLevel(e.target.value as 'easy' | 'medium' | 'hard')} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <button type="button" onClick={generate} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Generate Sudoku</button>
      {puzzle && (
        <div className="inline-block border-2 border-[#2F281D]">
          {puzzle.map((row, r) => (
            <div key={r} className="flex">
              {row.map((cell, c) => (
                <div
                  key={c}
                  className={`w-10 h-10 flex items-center justify-center text-[#2F281D] font-bold border border-[#2F281D]/30 ${(r + 1) % 3 === 0 && r < 8 ? 'border-b-2' : ''} ${(c + 1) % 3 === 0 && c < 8 ? 'border-r-2' : ''}`}
                >
                  {cell || ''}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
