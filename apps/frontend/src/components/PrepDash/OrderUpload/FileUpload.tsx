import { uploadOrder } from "@/app/actions/orderActions";

export default function FileUpload() {
    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            // Prevent default form submission
            event.preventDefault();
            
            // Call the upload function and await its response
            const response = await uploadOrder(file);
            console.log('Upload successful:', response);
        } catch (error) {
            console.error('Upload failed:', error);
        }

       
    }
    
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
                type="file"   
                accept="image/jpeg,image/jpg,image/png,image/heic"
                onChange={handleImageUpload} 
                title="Upload an Order" 
                placeholder="Upload an Order" 
                className="border-2 border-gray-300 rounded-md p-2"
            />
            {/* Remove the submit button since we're handling upload on file selection */}
        </form>
    ) 
}