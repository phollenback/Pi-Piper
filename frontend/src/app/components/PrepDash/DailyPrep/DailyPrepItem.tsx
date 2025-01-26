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

const DailyPrepItem: React.FC<DailyPrepProps> = ({prepItem, onButtonClick} : DailyPrepProps) => {
    const [note, setNote] = useState("");

    const handleClick = () => {
        onButtonClick(prepItem);
      }
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNote = e.target.value; // Get the value from the input event
        setNote(newNote);
        prepItem.note = newNote; // It's better to handle state updates in a parent component
      }

      return (
        <Card 
            sx={{ 
                maxWidth: "100%", 
                backgroundColor: prepItem.status === 'complete' ? 'rgb(229, 133, 133)' : 'rgb(228, 237, 195)', // creamier body color
                border: '2px solid black', // black border
                boxShadow: 3, // shadow effect
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
                        onChange={handleSearch} // Pass the event correctly
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
                        backgroundColor: prepItem.status === 'complete' ? 'rgb(221, 79, 79)' : 'rgb(74, 173, 78)', // Red for 'complete', Green otherwise
                        color: "white"
                    }}
                />
            </CardActions>
        </Card>
    );
}


export default DailyPrepItem;