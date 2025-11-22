import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  selectedCategory: Category | 'Todos';
  onSelectCategory: (category: Category | 'Todos') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories = ['Todos', ...Object.values(Category)];

  return (
    <div className="py-8 overflow-x-auto hide-scrollbar">
      <div className="flex space-x-2 px-4 min-w-max">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat as Category | 'Todos')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border ${
                isActive
                  ? 'bg-fuxion-blue text-white border-fuxion-blue shadow-md transform scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-fuxion-blue hover:text-fuxion-blue'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};