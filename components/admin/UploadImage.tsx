// components/UploadImage.tsx
'use client';

import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

export default function UploadImage({ onUpload }: { onUpload: (url: string) => void }) {
  const [preview, setPreview] = useState('');

  return (
    <div className="space-y-2">
      <CldUploadButton
        uploadPreset="First Preset" // Set this in your Cloudinary settings
        onSuccess={(result: any) => {
          // Cloudinary returns the uploaded image info in result.info
          ;
          const url = result.info?.secure_url as string;
          setPreview(url);
          onUpload(url);
        }}
        onError={(error: any) => {
          console.error('Upload failed:', error);
        }}
        className="w-full"
        options={{ maxFiles: 1, maxFileSize: 5 * 1024 * 1024 }} // Limit to 1 file and max size of 5MB
      />
      {preview && <img src={preview} alt="preview" className="w-40 rounded shadow" />}
    </div>
  );
}
