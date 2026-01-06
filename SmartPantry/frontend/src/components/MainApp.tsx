import { useState } from 'react';
import Sidebar from './Sidebar';
import RecipeCard from './RecipeCard';
import { Filter, SlidersHorizontal, LogOut } from 'lucide-react';

interface Ingredient {
  id: string;
  name: string;
  category: string;
  icon: string;
}

interface Recipe {
  id: string;
  name: string;
  image: string;
  matchedIngredients: number;
  totalIngredients: number;
  missingIngredients: string[];
  tags: string[];
  difficulty: string;
  timeMinutes: number;
}

const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Creamy Tomato Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzY0MDQ4MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    matchedIngredients: 6,
    totalIngredients: 7,
    missingIngredients: ['Heavy Cream'],
    tags: ['Vegetarian'],
    difficulty: 'Easy',
    timeMinutes: 25,
  },
  {
    id: '2',
    name: 'Mediterranean Salad Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzY0MDQyMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    matchedIngredients: 8,
    totalIngredients: 8,
    missingIngredients: [],
    tags: ['Vegan', 'Gluten-Free'],
    difficulty: 'Easy',
    timeMinutes: 15,
  },
  {
    id: '3',
    name: 'Chickpea Curry',
    image: 'https://images.unsplash.com/photo-1729824159986-376b49c6b7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY0MDg5OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    matchedIngredients: 7,
    totalIngredients: 9,
    missingIngredients: ['Coconut Milk', 'Garam Masala'],
    tags: ['Vegan', 'Gluten-Free', 'Dairy-Free'],
    difficulty: 'Medium',
    timeMinutes: 35,
  },
  {
    id: '4',
    name: 'Vegetable Soup',
    image: 'https://images.unsplash.com/photo-1701109876066-7fc0c08da447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VwJTIwYm93bHxlbnwxfHx8fDE3NjQwMDI4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    matchedIngredients: 9,
    totalIngredients: 9,
    missingIngredients: [],
    tags: ['Vegan', 'Gluten-Free', 'Dairy-Free'],
    difficulty: 'Easy',
    timeMinutes: 30,
  },
  {
    id: '5',
    name: 'Stir-Fried Vegetables',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlyJTIwZnJ5fGVufDF8fHx8MTc2NDA4OTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    matchedIngredients: 6,
    totalIngredients: 7,
    missingIngredients: ['Sesame Oil'],
    tags: ['Vegan', 'Dairy-Free'],
    difficulty: 'Easy',
    timeMinutes: 20,
  },
  {
    id: '6',
    name: 'Black Bean Tacos',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvc3xlbnwxfHx8fDE3NjQwODk5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    matchedIngredients: 7,
    totalIngredients: 8,
    missingIngredients: ['Tortillas'],
    tags: ['Vegetarian'],
    difficulty: 'Easy',
    timeMinutes: 20,
  },
];

interface MainAppProps {
  onLogout: () => void;
}

export default function MainApp({ onLogout }: MainAppProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: '1', name: 'Tomatoes', category: 'Produce', icon: '🍅' },
    { id: '2', name: 'Onions', category: 'Produce', icon: '🧅' },
    { id: '3', name: 'Garlic', category: 'Produce', icon: '🧄' },
    { id: '4', name: 'Bell Peppers', category: 'Produce', icon: '🫑' },
    { id: '5', name: 'Carrots', category: 'Produce', icon: '🥕' },
    { id: '6', name: 'Basil', category: 'Spices', icon: '🌿' },
    { id: '7', name: 'Oregano', category: 'Spices', icon: '🌿' },
    { id: '8', name: 'Cumin', category: 'Spices', icon: '🌿' },
    { id: '9', name: 'Black Beans', category: 'Proteins', icon: '🫘' },
    { id: '10', name: 'Chickpeas', category: 'Proteins', icon: '🫘' },
    { id: '11', name: 'Rice', category: 'Grains', icon: '🍚' },
    { id: '12', name: 'Pasta', category: 'Grains', icon: '🍝' },
    { id: '13', name: 'Olive Oil', category: 'Pantry Essentials', icon: '🫒' },
    { id: '14', name: 'Salt', category: 'Pantry Essentials', icon: '🧂' },
    { id: '15', name: 'Pepper', category: 'Pantry Essentials', icon: '⚫' },
  ]);

  const [selectedDietaryFilters, setSelectedDietaryFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('match');

  const handleAddIngredient = (ingredient: Ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleRemoveIngredient = (id: string) => {
    setIngredients(ingredients.filter((ing) => ing.id !== id));
  };

  const toggleDietaryFilter = (filter: string) => {
    if (selectedDietaryFilters.includes(filter)) {
      setSelectedDietaryFilters(selectedDietaryFilters.filter((f) => f !== filter));
    } else {
      setSelectedDietaryFilters([...selectedDietaryFilters, filter]);
    }
  };

  // Filter recipes
  let filteredRecipes = MOCK_RECIPES;
  if (selectedDietaryFilters.length > 0) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      selectedDietaryFilters.every((filter) => recipe.tags.includes(filter))
    );
  }

  // Sort recipes
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortBy === 'match') {
      const aMatch = a.matchedIngredients / a.totalIngredients;
      const bMatch = b.matchedIngredients / b.totalIngredients;
      return bMatch - aMatch;
    } else if (sortBy === 'time') {
      return a.timeMinutes - b.timeMinutes;
    } else if (sortBy === 'difficulty') {
      const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
      return difficultyOrder[a.difficulty as keyof typeof difficultyOrder] - difficultyOrder[b.difficulty as keyof typeof difficultyOrder];
    }
    return 0;
  });

  const dietaryOptions = ['Vegan', 'Vegetarian', 'Halal', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar
        ingredients={ingredients}
        onAddIngredient={handleAddIngredient}
        onRemoveIngredient={handleRemoveIngredient}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-slate-900">Recipe Matches</h1>
              <p className="text-slate-600">
                {sortedRecipes.length} recipes match your pantry
              </p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </header>

        {/* Filter Toolbar */}
        <div className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700">Dietary:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleDietaryFilter(option)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedDietaryFilters.includes(option)
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="match">Match %</option>
                <option value="time">Time Required</option>
                <option value="difficulty">Difficulty</option>
              </select>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
