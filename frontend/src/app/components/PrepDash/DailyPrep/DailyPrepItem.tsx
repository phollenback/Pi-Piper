import Card from "@mui/material/Card";
import { PrepListItem } from "@/app/types/models/PrepListItem";
import { useState } from "react"
import CardContent from "@mui/material/CardContent";
import InputField from "../../Elements/login/InputField";
import Button from "../../Elements/Button";

interface DailyPrepProps {
    prepItem: PrepListItem;
    onButtonClick: (item: PrepListItem) => void;
}

// Dynamic prep item card that changes appearance based on completion status and allows note addition
const DailyPrepItem: React.FC<DailyPrepProps> = ({prepItem, onButtonClick} : DailyPrepProps) => {
    const [note, setNote] = useState(prepItem.note || "");

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

    const isComplete = prepItem.status === 'complete';
    const cardBgColor = isComplete ? 'rgb(239, 68, 68, 0.1)' : 'rgb(74, 173, 78, 0.1)';
    const buttonBgColor = isComplete ? 'rgb(239, 68, 68)' : 'rgb(74, 173, 78)';

    return (
        <Card 
            sx={{ 
                width: "100%",
                backgroundColor: cardBgColor,
                border: '1px solid rgba(0, 0, 0, 0.12)',
                borderLeft: `6px solid ${buttonBgColor}`,
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                marginBottom: '12px',
                transition: 'all 0.2s ease-in-out',
                transform: 'translateY(0)',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 8px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.06)',
                },
            }}
        >
            <CardContent sx={{ 
                padding: '20px',
                '&:last-child': { paddingBottom: '20px' }
            }}>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-grow space-y-2 min-w-[50%]">
                        <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {prepItem.name}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                isComplete 
                                    ? 'bg-red-100 text-red-800' 
                                    : 'bg-green-100 text-green-800'
                            }`}>
                                {prepItem.status}
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm">{prepItem.description}</p>
                        <div className="w-full max-w-md">
                            <InputField
                                id="notes"
                                type="text"
                                placeholder="Add notes..."
                                value={note}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="text-center">
                            <p className="text-sm font-medium text-gray-500 mb-1">Quantity</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {prepItem.quantity}
                                <span className="text-base ml-1 text-gray-600">
                                    {prepItem.unit}
                                </span>
                            </p>
                        </div>

                        <Button
                            label={isComplete ? 'Undo' : 'Complete'}
                            onClick={handleClick}
                            size="medium"
                            style={{
                                backgroundColor: buttonBgColor,
                                color: "white",
                                fontWeight: "600",
                                padding: "8px 20px",
                                borderRadius: "8px",
                                transition: "all 0.2s ease",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                border: "none"
                            }}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default DailyPrepItem;