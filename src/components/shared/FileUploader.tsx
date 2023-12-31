import React, {useCallback, useState} from 'react'
// FileWithPath is a type for the path
import {FileWithPath, useDropzone} from 'react-dropzone'
import { Button } from '../ui/button';

// defining the type
type FileUploadProps = {
    fieldChange : (FILES: File[]) => void;
    mediaUrl: string;
}

const FileUploader = ({fieldChange, mediaUrl}: FileUploadProps) => {
    const [file, setFile] = useState<File[]>([]);
    const [fileUrl, setFileUrl] = useState(mediaUrl);

    // function
    const onDrop = useCallback((acceptedFiles : FileWithPath[]) => {
         setFile(acceptedFiles);
         fieldChange(acceptedFiles);
         // first file [0] we accepted we are extracting the url from tht
         setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    }, [])
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept:{
            'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.svg'],
        }
    })


  return (
    <div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'>
      <input {...getInputProps()}  className='cursor-pointer'/>
      {
        fileUrl ?(
            <div className='flex flex-1 justify-center w-full p-5 lg:p-10'>
                <img src={fileUrl} alt="image" 
                className='file_uploader-img'
                />
            </div>
        ):(
            <div className="file_uploader-box">
                 <img 
                 src="/assets/icons/file-upload.svg" 
                 alt="file-upload"
                 width={96}
                 height={77} 
                 />
                 <h3 className='base-medium text-light-2 mb-2 mt-6'>
                    Drag photo here
                 </h3>
                 <p className='text-light-4 small-regular mb-6'>
                    SVG, PNG, JPG
                 </p>
                 <Button className='shad-button_dark_4'>
                    Upload Image
                 </Button>
            </div>
        )
          
      }
    </div>  
    )

}
export default FileUploader