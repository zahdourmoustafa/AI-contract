"use client"
import { UploadModal } from "@/components/modals/upload-modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Dashboard(){

    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    return(
        <div className="flex flex-col items-center justify-center">
            <Button onClick={()=> setIsUploadModalOpen(true)}> upload</Button>
            <UploadModal 
            isOpen={isUploadModalOpen} 
            onClose={() => setIsUploadModalOpen(false)}
            onUploadComplete={()=> setIsUploadModalOpen(true)} />
        </div>
    )
}