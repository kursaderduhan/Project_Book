import {context, PersistentUnorderedMap, ContractPromiseBatch, logging} from "near-sdk-as";

const IDEA_LIMIT = 25;

@nearBindgen
export class ProjectIdea{
    id: string;
    idea: string;
    ideaOwner: string;
    
    constructor(idea: string){
        this.id = context.blockIndex.toString().slice(2, 8);
        this.idea = idea;
        this.ideaOwner = context.sender;    
    }
    static addIdea(idea: string): ProjectIdea {
        assert(projectsStorage.length < IDEA_LIMIT, "IDEA_LIMIT");
        assert(idea.length > 0, "Idea must not be empty!");
        let projectIdea = new ProjectIdea(idea);
        projectsStorage.set(projectIdea.id, projectIdea);
        return projectIdea;
    }
    static getIdea(id: string): ProjectIdea | null {
        return projectsStorage.get(id);
    }
    static donation(ideaId: string): void {
        const idea = ProjectIdea.getIdea(ideaId);
        assert(idea != null, "idea not found"); 
        ContractPromiseBatch.create(idea!.ideaOwner).transfer(context.attachedDeposit);
        logging.log("Donation succesfull");
    }
}

export const projectsStorage = new PersistentUnorderedMap<string, ProjectIdea>("ps");