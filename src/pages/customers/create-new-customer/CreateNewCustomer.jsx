import React, { useState } from 'react'
import { FormInput, FormProvider } from '../../../components/FormContext'
import { useTheme } from '../../../components/styling/ThemeContext'
import { Card } from '../../../components/Card'
import DropdownMenu from "../../../components/DropdownMenu"
import createNew from "./CreateNewCustomerLayout.module.css"
import { Dropzone } from './dropzone/Dropzone'
export default function CreateNewCustomerLayout() {

    const[selectButton, setSelectButton]=useState("")

    const handleButtonOnClick = (buttonDomain) =>{
        setSelectButton(buttonDomain)
        
    }


    const theme = useTheme();

    const dropdown = [
        { value: "danish", label: "Danish" },
        { value: "norwegian", label: "Norwegian" },
        { value: "english", label: "English" },
        { value: "swedish", label: "Swedish" },
        { value: "german", label: "German" },
      ];
    return (
        <FormProvider>
            <div class={createNew.mainContent}>
                <h1 style={{...theme.h1,...theme.medium}}>New Account</h1>
                <form>

            <section>
                <div className={createNew.pairWrapper}>
                    <div className={createNew.cardAlignment}>
                        <h2 style={{...theme.h3,...theme.normal}}>Profile</h2>
                        <Card width="320px" paddingBottom="30px">
                            <div style={{...theme.h4,...theme.normal}} className={createNew.logoAndNameWrapper}>
                                <Dropzone/>

                                <FormInput label="Company name" name="companyName" />
                            </div>
                        </Card>
                    </div>
                    
                
                    <div>
                        <div className={createNew.cardAlignment}>
                            <h2 style={{...theme.h3,...theme.normal}} >Domain</h2>
                            <Card width="360px" paddingBottom="30px">
                                <div className={createNew.buttonToggle}>
                                    <button type="button" onClick={() => handleButtonOnClick("Custom")} 
                                            className={selectButton === "Custom" ? createNew.toggleDomainOn:createNew.toggleDomainOff}>Custom</button>
                                    <button type="button" onClick={() => handleButtonOnClick("Holdbar")}
                                            className={selectButton === "Holdbar" ? createNew.toggleDomainOn:createNew.toggleDomainOff}>Holdbar</button>
                                </div>
                                {
                                (selectButton==="Custom")?
                                (<FormInput label="URL" name={"CustomDomain"} placeholder="www.companyname.com"/>):
                                (<FormInput label="URL" name={"HoldbarDomain"} placeholder="www.companyname.holdbar.com"/>)
                                }
                                
                                <div style={{marginTop:"22px"}}>
                                    <DropdownMenu options={dropdown} placeholder="Language"/>
                                </div>
                            </Card>
                        </div>
                    </div>  

                </div>

                <div>  
                    <h2 style={{...theme.h3,...theme.normal}}>About</h2>
                    <textarea className={createNew.textarea}/>  
                </div>

            </section>

                <hr style={{marginTop:"30px"}}/>
            
            <section>
                
                <div className={createNew.pairWrapper}>
                    <div className={createNew.cardAlignment}>
                        <h2 style={{...theme.h3,...theme.normal}}>Contact</h2>
                        <Card width="320px"  paddingBottom="40px">
                            <FormInput label="Owner name" name="ownerName" />
                            <FormInput label="Email" name="email" />
                            <FormInput label="Phone number" name="phoneNumber" />
                        </Card>
                    </div>

                    <div className={createNew.cardAlignment}>
                        <h2 style={{...theme.h3,...theme.normal}}>Location</h2>
                        <Card width="320px" paddingBottom="40px">
                            <FormInput label="Address" name="address" />
                            <FormInput label="Zipcode" name="zipcode" />
                            <FormInput label="City" name="city" />
                        </Card>
                    </div>
                </div>
            
            </section>

                <hr/>

                <div className={createNew.pairWrapper}>
                    <div className={createNew.cardAlignment}>

                        <h2 style={{...theme.h3,...theme.normal}}>Currency</h2>
                        <Card width="250px" paddingBottom="30px">
                            <DropdownMenu placeholder="Currency"/>
                        </Card>
                    </div>

                    <div className={createNew.cardAlignment}>
                        <h2 style={{...theme.h3,...theme.normal}}>VAT compliance data</h2>
                        <Card width="340px" paddingBottom="45px">
                            <FormInput label="Country of registration" name="countryOfRegistration" />
                            <FormInput label="VAT number" name="vatNumber" />
                        </Card>

                    </div>
                </div>
                
                <div className={createNew.saveButtonWrapper}>
                        <button className={createNew.saveButton}>Save</button>
                </div>



                </form>
            </div>
        </FormProvider>
    )
}
