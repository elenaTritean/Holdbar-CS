import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import dropzone from "./Dropzone.module.css"
import { useTheme } from "../../../../components/styling/ThemeContext"
import {LogoPlaceholder} from "../../../../components/styling/icons/LogoPlaceholder"
export const Dropzone = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
    }, [])

    const theme = useTheme()

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

    return (
        <form>
            <div className={dropzone.logoPWrapper}>
                <p style={{position: 'absolute', top: '-17px', left: '10px', background: 'white', padding: '0 5px' }} className={dropzone.companyLogoP}>
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
                    <>
                        <LogoPlaceholder/>
                        <p style={{ textAlign:"center" }}>Drop logo here...</p>
                    </>
                    ) : (
                    <>
                        <LogoPlaceholder/>
                        <p style={{ textAlign:"center"}}>
                            Drag and drop the image or <span style={{color: 'rgb(2, 39, 194)'}}>browse</span> to upload
                        </p>
                    </>    
                        )
                }
                </div>

                <p className= {dropzone.p} style={{...theme.h6,...theme.normal,...theme.greyColor}}></p>
                
                <p className={dropzone.p} style={{...theme.h6,...theme.normal,...theme.greyColor}}></p>
            </div>
        </form>
    )
}
