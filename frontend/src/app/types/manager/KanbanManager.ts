import PrepListItem from "../models/PrepListItem";

class KanbanManager {
    private todoItems: PrepListItem[] = [];
    private completeItems: PrepListItem[] = [];

    constructor(prepItems: PrepListItem[], category: number | null | undefined) {
        this.splitItems(prepItems, category);
    }

    private splitItems(items: PrepListItem[], category: number | null | undefined) {
        items.forEach(item => {
            if (category === null || category === undefined || item.category === category || item.category === 6) {
                if (item.status === 'complete') {
                    this.completeItems.push(item);
                } else if (item.status === 'in-progress' || item.status === 'todo') {
                    this.todoItems.push(item);
                }
            }
        });
    }

    public toggleItemStatus(prepItem: PrepListItem): [PrepListItem[], PrepListItem[]] {
        const updatedItem: PrepListItem = { ...prepItem, status: prepItem.status === 'complete' ? 'todo' : 'complete' };
    
        if (updatedItem.status === 'complete') {
            this.todoItems = this.todoItems.filter(item => item.prep_list_id !== updatedItem.prep_list_id);
            this.completeItems.push(updatedItem);
        } else {
            this.completeItems = this.completeItems.filter(item => item.prep_list_id !== updatedItem.prep_list_id);
            this.todoItems.push(updatedItem);
        }
        return [this.getTodoItems(), this.getCompleteItems()]; // Return updated lists
    }

    public getTodoItems() {
        return this.todoItems;
    }

    public getCompleteItems() {
        return this.completeItems;
    }
}

export default KanbanManager;