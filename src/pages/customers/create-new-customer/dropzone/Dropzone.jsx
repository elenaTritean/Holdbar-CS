import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import dropzone from "./Dropzone.module.css"
import { useTheme } from "../../../../components/styling/ThemeContext"
import {LogoPlaceholder} from "../../../../components/styling/icons/LogoPlaceholder.module.css/LogoPlaceholder"
import { useForm } from "../../../../components/FormContext"

export const Dropzone = () => {
    
    const {handleChange}=useForm();

    const [files, setFiles]= useState([])
    const onDrop = useCallback(acceptedFiles => {
        if(acceptedFiles?.length){
            setFiles(previousFiles =>[
                ...previousFiles,
                ...acceptedFiles.map((file) =>{
                    handleChange({target:{name:"logo",value:file}})
                    return Object.assign(file, {preview:URL.createObjectURL(file) })}              
                )
            
            ])
        }
    }, [])

    const theme = useTheme()

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

    return (
            <div className={dropzone.logoPWrapper}>
                <p  className={dropzone.companyLogoP}>
                    Company logo
                </p>

                <div {...getRootProps({
                        style: {
                            border: 'none',
                            height: '100%', 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }
                })}>
                
                <input {...getInputProps()}/>
                {isDragActive ? (
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <LogoPlaceholder/>
                        <p style={{ textAlign:"center" }}>Drop logo here...</p>
                    </div>
                    ) : (
                    <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                        <LogoPlaceholder src={files[0]?.preview}/>                        
                        <p style={{ textAlign:"center"}}>Drag and drop the image or <span style={{color: 'rgb(2, 39, 194)'}}>browse</span> to upload
                        </p>
                    </div> )}

                <p  style={{...theme.h6,...theme.normal,...theme.greyColor}}></p>
                <p className={dropzone.p} style={{...theme.h6,...theme.normal,...theme.greyColor}}></p>
                </div>

            </div>
    )
}
