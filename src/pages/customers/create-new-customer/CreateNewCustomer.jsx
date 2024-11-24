import React from 'react'
import { FormInput, FormProvider } from '../../../components/FormContext'
import { useTheme } from '../../../components/styling/ThemeContext'
import {LogoPlaceholder} from "../../../components/styling/icons/LogoPlaceholder"
import { Card } from '../../../components/Card'
import DropdownMenu from "../../../components/DropdownMenu"
import createNew from "./CreateNewCustomerLayout.module.css"
export default function CreateNewCustomerLayout() {

    const dropdown = [
        { value: "", label: "" },
        { value: "", label: "" },
        { value: "", label: "" },
        { value: "", label: "" },
        { value: "", label: "" },
      ];
    const theme = useTheme();
    return (
        <FormProvider>
            <div>
                <h1 style={{...theme.h1,...theme.medium}}>New Account</h1>
                <form>

            <section>
                <div className={createNew.pairWrapper}>
                    <div style={{display:"flex", flexDirection:"column",width:"50%",justifyContent:"flex-start"}}>
                        <h2 style={{...theme.h3,...theme.normal}}>Profile</h2>
                        <Card width="320px" height="220px">
                            <div style={{...theme.h4,...theme.normal}} className={createNew.logoAndNameWrapper}>
                                
                                <div className={createNew.logoPWrapper}>
                                    <p style={{...theme.h5,...theme.greyColor}} className={createNew.companyLogoP}>Company logo</p>
                                    <div style={{marginBottom:"10px",boxSizing:"border-box"}}>
                                        <LogoPlaceholder />
                                    </div>
                                    <p className={createNew.p} style={{ paddingBottom:"10px",...theme.h5, ...theme.medium }}>Drag and drop the image or <span style={{color:"rgb(2, 39, 194)",paddingLeft:"3px",paddingRight:"3px"}}>browse</span> to upload</p>
                                    <p className={createNew.p} style={{ ...theme.h6, ...theme.normal,...theme.greyColor }}>Accepted files: png, jpg, jpeg, gif</p>
                                    <p className={createNew.p} style={{ ...theme.h6, ...theme.normal,...theme.greyColor }}>Preferably without a background and at maximum resolution.</p>
                                </div>

                                <FormInput label="Company name" name="companyName" />
                            </div>
                        </Card>
                    </div>
                    
                
                    <div>
                        <div style={{display:"flex", flexDirection:"column",width:"50%",justifyContent:"flex-start"}}>
                            <h2 style={{...theme.h3,...theme.normal}} >Domain</h2>
                            <Card width="360px" height="150px">
                                <div>
                                    <button>Custom</button>
                                    <button>Holdbar</button>
                                </div>
                                <FormInput placeholder="www.companyname.com"/>
                                <DropdownMenu options={dropdown} placeholder="Language"/>
                            </Card>
                        </div>
                    </div>  

                </div>

                <div>  
                    <h2 style={{...theme.h3,...theme.normal}}>About</h2>
                    <textarea style={{width:"100%",maxWidth:"100%"}}/>  
                </div>

            </section>

                <hr style={{marginTop:"30px"}}/>
            
            <section>
                
                <div className={createNew.pairWrapper}>
                    <div>
                        <h2 style={{...theme.h3,...theme.normal}}>Contact</h2>
                        <Card>
                            <FormInput label="Owner name" name="ownerName" />
                            <FormInput label="Email" name="email" />
                            <FormInput label="Phone number" name="phoneNumber" />
                        </Card>
                    </div>

                    <div>
                        <h2 style={{...theme.h3,...theme.normal}}>Location</h2>
                        <Card>
                            <FormInput label="Address" name="address" />
                            <FormInput label="Zipcode" name="zipcode" />
                            <FormInput label="City" name="city" />
                        </Card>
                    </div>
                </div>
            
            </section>

                <hr/>

                <h2 style={{...theme.h3,...theme.normal}}>Currency</h2>
                <Card>
                    <DropdownMenu placeholder="Currency"/>
                </Card>

                <h2 style={{...theme.h3,...theme.normal}}>VAT compliance data</h2>
                <Card>
                    <FormInput label="Country of registration" name="countryOfRegistration" />
                    <FormInput label="VAT number" name="vatNumber" />
                </Card>

                <button>Save</button>



                </form>
            </div>
        </FormProvider>
    )
}
