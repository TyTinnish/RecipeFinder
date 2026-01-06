# Smart Pantry – AI-Assisted Recipe and Shopping Assistant

## 1. Project Overview
Smart Pantry is a web-based application that helps users keep track of ingredients in their pantry, automatically suggest recipes based on available items, and manage shopping lists. When an ingredient runs low, the app integrates with the Google Tasks API to add it to a shopping list.

---

## 2. Objectives and Success Criteria
### Objectives:
- Build a web-accessible pantry management system using Flask and MySQL.
- Track ingredient quantities, expiration dates, and categories.
- Generate recipe suggestions based on available ingredients using algorithms or an AI/LLM.
- Automatically add missing or low-stock ingredients to a shopping list using the Google Tasks API.
- Implement a simple, intuitive user interface for managing pantry items and recipes.

### Success Criteria:
- Users can add, update, and delete ingredients, and all changes persist in the database.
- The recipe suggestion engine returns relevant recipes based on current ingredients.
- Low-stock ingredients are correctly added to the shopping list.
- Application runs locally via Flask and passes all functional test cases.
- Test coverage of ≥70% for all features.
- Demo video demonstrates a full workflow from ingredient tracking to recipe suggestions and shopping list updates.

---

## 3. Project Scope
### In Scope:
- Ingredient CRUD operations (Create, Read, Update, Delete)
- Recipe suggestion engine using current ingredients
- Integration with Google Tasks API for shopping list management
- Web-based UI for managing ingredients and viewing suggested recipes
- Test plan and automated tests for all features

### Out of Scope:
- Real-time collaboration between multiple users
- Advanced AI/ML recipe recommendations beyond simple heuristics or LLM API usage
- Mobile application (native Android or iOS version)
- Payment or e-commerce features

---

## 4. Team Roles and Responsibilities
| Role | Name | Responsibilities |
|------|------|------------------|
| Scrum Master | Ethan | Oversees sprint planning, meetings, and progress tracking. |
| Product Owner | Ty | Defines priorities and ensures requirements are met. |
| Developer(s) | Aubree | Implement assigned features: ingredient management, recipe engine, Google Tasks integration. |
| Tester(s) | Samgar | Design and execute test cases for specific features. |
| Reviewer(s) | Kaavyy | Approve or reject merge requests and ensure quality. |

---

## 5. Stakeholders
- Students and home cooks who want to manage pantry inventory
- Users who want AI-assisted recipe suggestions
- Team members responsible for development, testing, and deployment
- Course instructors for evaluation

---

## 6. Assumptions and Constraints
- The app will run locally using Flask and connect to the assigned MySQL database.
- Google Tasks API access will be available and used for shopping list updates.
- Team members have basic experience with Python, Flask, and MySQL.
- Time is limited to the SE101 project timeline.

---

## 7. Risks and Mitigation Strategies
| Risk | Impact | Mitigation Strategy |
|------|---------|---------------------|
| API rate limits or authentication issues with Google Tasks | High | Test API early and implement fallback options |
| Recipe algorithm not returning useful suggestions | Medium | Use simple heuristics and iterate based on testing |
| Merge conflicts | Medium | Use feature branches, frequent commits, and code reviews |
| Team scheduling conflicts | Medium | Coordinate weekly meetings and GitLab issue tracking |

---

## 8. Tools and Technologies
- Language: Python  
- Framework: Flask  
- Database: MySQL  
- Version Control: GitLab  
- Testing: pytest or unittest  
- AI/LLM: Python logic or LLM API for recipe suggestions  
- Google Tasks API for shopping list integration  
- Frontend: HTML, CSS, JavaScript, optional Bootstrap

---

## 9. Deliverables
| Deliverable | Description | Location |
|--------------|-------------|-----------|
| Project Charter | Defines the project scope and goals | `docs/charter.md` |
| Requirements & Design Docs | User stories, use cases, and domain models | `docs/` |
| Source Code | Implementation of features | `src/` |
| Tests | Unit and integration tests | `tests/` |
| Demo Video | Demonstration of final product | `docs/demo.mp4` |

---

## 10. Approval
By approving this charter, all team members agree to the scope, responsibilities, and objectives outlined above.

**Team Number: 28**  
**Date: November 4, 2025**
