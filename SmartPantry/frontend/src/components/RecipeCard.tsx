import { Clock, ChefHat } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const matchPercentage = Math.round((recipe.matchedIngredients / recipe.totalIngredients) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative h-48">
        <ImageWithFallback
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-emerald-600">{matchPercentage}% Match</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-slate-900 mb-2">{recipe.name}</h3>

        <div className="flex items-center gap-4 mb-3 text-slate-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.timeMinutes} min</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        <div className="mb-3">
          <p className="text-slate-700">
            {recipe.matchedIngredients} of {recipe.totalIngredients} ingredients
          </p>
          {recipe.missingIngredients.length > 0 && (
            <p className="text-amber-600">
              Missing: {recipe.missingIngredients.join(', ')}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
