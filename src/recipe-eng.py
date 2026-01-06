import os
from dotenv import load_dotenv
from google import genai
import json


load_dotenv()


API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
   raise RuntimeError("GEMINI_API_KEY not found in .env file")


client = genai.Client(api_key=API_KEY)


user_ingredients = ["bread", "cheese", "eggs"]
ingredients_text = "\n".join(user_ingredients)


response = client.models.generate_content(
   model="gemini-3-pro-preview",
   contents=f"""
Using the following user ingredients:


{ingredients_text}


Generate multiple recipes that the user can realistically make with these ingredients.
Also, if there are some recipes that require only one or two additional ingredients, feel free to include those as well and add them into "missing ingredients".
If needed, you may include additional common pantry ingredients (salt, pepper, oil, butter, water, etc.).


Return the result ONLY as a JSON object in the exact structure below.
Do NOT include extra text, explanations, markdown, or comments.


{{
   "name": "Recipe Name",
   "description": "Short 1-2 sentence summary of the dish.",
   "ingredients": [
       {{
           "item": "ingredient name",
           "quantity": "amount + unit (optional)"
       }}
   ],
   "missing_ingredients": [
       {{
           "item": "ingredient name",
           "quantity": "amount + unit (optional)"
       }}
   ],
   "instructions": [
       "Step 1 instruction.",
       "Step 2 instruction.",
       "Step 3 instruction."
   ],
   "estimated_time_minutes": 0,
   "difficulty": "easy | medium | hard",
   "servings": 0,
   "image_url": "https://example.com/recipe-image.jpg",
   "source_url": "https://example.com/original-recipe"
}}


   """,
)


# Convert AI response to JSON
recipes = json.loads(response.text)


# Print the JSON nicely
print(json.dumps(recipes, indent=2))


# Save JSON to recipes.json in src/
with open("recipes.json", "w") as f:
   json.dump(recipes, f, indent=2)