'use client'
import FileUpload from "@/components/PrepDash/OrderUpload/FileUpload"
export default function NewOrderPage() {

    return (
        <>
            <div className="flex h-screen items-start justify-center">
                <div className="bg-zinc-200 p-4 rounded-md">
                    <h3>Upload an Order</h3>
                    <FileUpload />

                </div>
            </div>
        </>
    )
}