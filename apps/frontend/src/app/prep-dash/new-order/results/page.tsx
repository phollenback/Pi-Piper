import { List, ListDivider, ListItem } from "@mui/joy";

export default function ResultsPage() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-start justify-center p-4">
                <div className="bg-zinc-200 p-4 rounded-md">
                    <h3>Results</h3>
                </div>
            </div>
            <div className="flex flex-1 p-8">
                <div className="">
                    <List variant="outlined" sx={{ minWidth: 240, borderRadius: 'sm' }}>
                        <ListItem>
                            
                            Ingredient name
                        </ListItem>
                        <ListDivider inset="gutter" />
                        <ListItem>
                            Boyd Burt
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    )
}