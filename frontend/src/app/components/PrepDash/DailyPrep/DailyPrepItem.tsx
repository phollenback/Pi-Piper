import Card from "@mui/material/Card";
import PrepListItem from "../../../types/models/PrepListItem";
import { useState } from "react"
import CardContent from "@mui/material/CardContent";
import InputField from "../../Elements/login/InputField";
import Button from "../../Elements/Button";
import CardActions from "@mui/material/CardActions";

interface DailyPrepProps {
    prepItem: PrepListItem;
    onButtonClick: (item: PrepListItem) => void;
}

// Dynamic prep item card that changes appearance based on completion status and allows note addition
const DailyPrepItem: React.FC<DailyPrepProps> = ({prepItem, onButtonClick} : DailyPrepProps) => {
    const [note, setNote] = useState("");

    // Updates prep item status in parent component
    const handleClick = () => {
        onButtonClick(prepItem);
    }

    // Manages note input and updates prep item state
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNote = e.target.value;
        setNote(newNote);
        prepItem.note = newNote;
    }

    return (
        <Card 
            sx={{ 
                maxWidth: "100%", 
                backgroundColor: prepItem.status === 'complete' ? 'rgb(229, 133, 133)' : 'rgb(228, 237, 195)',
                border: '2px solid black',
                boxShadow: 3,
                marginBottom: '6px',
                padding: '4px'
            }}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className='flex-start'>
                    <p className='text-3xl'>{prepItem.name}</p>
                    <p>{prepItem.description}</p>
                    <InputField
                        id="search"
                        type="text"
                        placeholder={"daily notes..."}
                        value={note}
                        onChange={handleSearch}
                    />
                </div>
                <div>
                    <p>Quantity:</p>
                    <p className='text-3xl'>{prepItem.quantity} {prepItem.unit}</p>
                </div>
                <div>
                    <p>Status:</p>
                    <p className='text-3xl'>{prepItem.status}</p>
                </div>
            </CardContent>
            <CardActions sx={{ justifyContent: prepItem.status === 'complete' ? 'flex-start' : 'flex-end' }}>
                <Button
                    label={prepItem.status === 'complete' ? 'Cancel' : 'Complete'}
                    onClick={handleClick}
                    size='medium'
                    style={{
                        backgroundColor: prepItem.status === 'complete' ? 'rgb(221, 79, 79)' : 'rgb(74, 173, 78)',
                        color: "white"
                    }}
                />
            </CardActions>
        </Card>
    );
}

export default DailyPrepItem;