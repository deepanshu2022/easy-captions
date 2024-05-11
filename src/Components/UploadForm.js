'use client';

import axios from "axios";
import { useState } from "react";
import Loader from "./loader";
import { useRouter } from "next/navigation";

export default function  UploadForm() {

  const [isUploading , setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if(files.length > 0) {
      const file = files[0];
      setIsUploading(true);
        const res = await axios.postForm('/api/upload', {
          file,
          maxBodyLength: 104857600, //100mb
          maxContentLength: 104857600, //100mb
        });

      setIsUploading(false);
      const newName = res.data.newName;
      router.push('/'+newName);
    }
  }
    
  
  return(
    <div className="text-center mb-8">
      <label className={`bg-green-600 px-6 py-2 rounded-full inline-flex gap-3 border-2 border-purple-700/50 hover:bg-violet-600 cursor-pointer ${isUploading ? 'bg-violet-600' : ''}`}>
        {isUploading ? (
          <div className="flex items-center">
            <Loader />
            <span className="ml-2">Uploading..</span>
          </div>
          ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
            <span>Choose File</span>
          </>
        )}
        <input onChange={upload} type="file" className="hidden" />
      </label>
    </div>

  
    )
}