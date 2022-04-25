import { projectsStorage, ProjectIdea } from './model'

// donate to the owner of the idea
export function donation(idea: string): void {
  ProjectIdea.donation(idea);
} 

// idea - to add a idea to blockchain.
export function addIdea(idea: string): string{
  return ProjectIdea.addIdea(idea);
}

// returns added a idea via id parameter.
export function getIdea(id: string): ProjectIdea | null{
  return ProjectIdea.getIdea(id);
}

// returns all ideas that addedto blockchain.
export function getIdeas(): Array<ProjectIdea> {
  return projectsStorage.values();
}
