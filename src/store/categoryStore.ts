// src/store/categoryStore.ts
import { create } from "zustand";

interface CategoryState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: "영화",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export default useCategoryStore;
