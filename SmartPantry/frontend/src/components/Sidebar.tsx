import { useState } from 'react';
import { Plus, Trash2, X } from 'lucide-react';

interface Ingredient {
  id: string;
  name: string;
  category: string;
  icon: string;
}

interface SidebarProps {
  ingredients: Ingredient[];
  onAddIngredient: (ingredient: Ingredient) => void;
  onRemoveIngredient: (id: string) => void;
}

export default function Sidebar({ ingredients, onAddIngredient, onRemoveIngredient }: SidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    category: 'Produce',
    icon: '🥬',
  });

  const categories = ['Produce', 'Spices', 'Proteins', 'Grains', 'Pantry Essentials'];

  const categoryIcons: { [key: string]: string } = {
    Produce: '🥬',
    Spices: '🌿',
    Proteins: '🫘',
    Grains: '🌾',
    'Pantry Essentials': '🍯',
  };

  const groupedIngredients = ingredients.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) {
      acc[ingredient.category] = [];
    }
    acc[ingredient.category].push(ingredient);
    return acc;
  }, {} as { [key: string]: Ingredient[] });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newIngredient.name.trim()) {
      onAddIngredient({
        id: Date.now().toString(),
        name: newIngredient.name,
        category: newIngredient.category,
        icon: categoryIcons[newIngredient.category] || '🥬',
      });
      setNewIngredient({ name: '', category: 'Produce', icon: '🥬' });
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-emerald-900">Pantry</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
              title="Add Ingredient"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <p className="text-slate-600">
            {ingredients.length} ingredients
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {categories.map((category) => {
            const categoryIngredients = groupedIngredients[category] || [];
            if (categoryIngredients.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-slate-700 mb-3 px-2">{category}</h3>
                <div className="space-y-1">
                  {categoryIngredients.map((ingredient) => (
                    <div
                      key={ingredient.id}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 group"
                    >
                      <span className="text-2xl">{ingredient.icon}</span>
                      <span className="flex-1 text-slate-700">{ingredient.name}</span>
                      <button
                        onClick={() => onRemoveIngredient(ingredient.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-red-600 hover:bg-red-50 rounded transition-all"
                        title="Remove ingredient"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {ingredients.length === 0 && (
            <div className="text-center py-12 px-4">
              <p className="text-slate-500">
                No ingredients yet. Click the + button to add your first ingredient!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Ingredient Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-slate-900">Add Ingredient</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="ingredientName" className="block text-slate-700 mb-2">
                  Ingredient Name
                </label>
                <input
                  id="ingredientName"
                  type="text"
                  value={newIngredient.name}
                  onChange={(e) => setNewIngredient({ ...newIngredient, name: e.target.value })}
                  placeholder="e.g., Avocado"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-slate-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={newIngredient.category}
                  onChange={(e) =>
                    setNewIngredient({
                      ...newIngredient,
                      category: e.target.value,
                      icon: categoryIcons[e.target.value],
                    })
                  }
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors"
                >
                  Add Ingredient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
