export async function uploadOrder(uploadedFile: File) {
    // Create FormData to properly send the file
    const formData = new FormData();
    formData.append('order', uploadedFile);

    try {
        const response = await fetch('/api/orders/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        return response.json();
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
}