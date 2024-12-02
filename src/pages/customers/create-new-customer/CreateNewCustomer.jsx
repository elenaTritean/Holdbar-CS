import React, { useState } from 'react'
import { FormInput, FormProvider } from '../../../components/FormContext'
import { useTheme } from '../../../components/styling/ThemeContext'
import { useForm } from "../../../components/FormContext"
import { Card } from '../../../components/Card'
import DropdownMenu from "../../../components/DropdownMenu"
import createNew from "./CreateNewCustomerLayout.module.css"
import { Dropzone } from './dropzone/Dropzone'
export default function CreateNewCustomerLayout() {


    const[selectButton, setSelectButton]=useState("")
    const[uploadState,setUploadState] = useState("")

    const handleButtonOnClick = (buttonDomain) =>{
        setSelectButton(buttonDomain)
    }

    const progress={
        setUploadState()
    }

    const theme = useTheme();

    const dropdownLanguage = [
        { value: "danish", label: "Danish" },
        { value: "norwegian", label: "Norwegian" },
        { value: "english", label: "English" },
        { value: "swedish", label: "Swedish" },
        { value: "german", label: "German" },
      ];

    const dropdownCurrency = [
        { value: "dkk", label: "DKK" },
        { value: "gdp", label: "GDP" },
        { value: "usd", label: "USD" },
        { value: "nok", label: "NOK" },
        { value: "sek", label: "SEK" },
        { value: "eur", label: "EUR" },
    ]

    const dropdownCountryOfReg = [
        { value: "denmark", label: "Denmark" },
        { value: "norway", label: "Norway" },
        { value: "united kingdom", label: "United Kingdom" },
        { value: "sweden", label: "Sweden" },
        { value: "germany", label: "Germany" },
        { value: "finland", label: "Finland" },
        { value: "italy", label: "Italy" },
    ]

    

    return (
        <FormProvider>
            <div className={createNew.mainContent}>
                <h1 style={{...theme.h1,...theme.medium}}>New Account</h1>
            
            <form>

            <section>
                <div className={createNew.pairWrapper}>
                    <div className={createNew.cardAlignment}>
                        <h2 style={{...theme.h3,...theme.normal}}>Profile</h2>
                        <Card width="320px" paddingBottom="30px">
                            <div style={{...theme.h4,...theme.normal}} className={createNew.logoAndNameWrapper}>
                                <Dropzone/>

                                <FormInput label="Company name" name="companyName" required/>
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
                                (<FormInput label="URL" name={"CustomDomain"} placeholder="www.companyname.com" 
                                    onValidate={()=>{}} required/>):
                                (<FormInput label="URL" name={"HoldbarDomain"} placeholder="www.companyname.holdbar.com" required/>)
                                }
                                
                                <div style={{marginTop:"22px"}}>
                                    <DropdownMenu name={"language"} options={dropdownLanguage} placeholder="Language"/>
                                </div>
                            </Card>
                        </div>
                    </div>  

                </div>

                <div>  
                    <h2 style={{...theme.h3,...theme.normal}}>About</h2>
                    <textarea className={createNew.textarea} required/>  
                </div>

            </section>

                <hr style={{marginTop:"30px"}}/>
            
            <section>
                
                <div className={createNew.pairWrapper}>
                    <div className={createNew.cardAlignment}>
                        <h2 style={{...theme.h3,...theme.normal}}>Contact</h2>
                        <Card width="320px"  paddingBottom="40px">
                            <FormInput label="Owner name" name="ownerName" required/>
                            <FormInput label="Email" name="email" pattern={/^[^@]+@[^@]+\.[^@]+$/} required
                            textAid="Please include @"/>
                            <FormInput label="Phone number" name="phoneNumber" />
                        </Card>
                    </div>

                    <div className={createNew.cardAlignment}>
                        <h2 style={{...theme.h3,...theme.normal}}>Location</h2>
                        <Card width="320px" paddingBottom="40px">
                            <FormInput label="Address" name="address" required/>
                            <FormInput label="Zipcode" name="zipcode" required/>
                            <FormInput label="City" name="city" required/>
                        </Card>
                    </div>
                </div>
            
            </section>

                <hr/>

                <div className={createNew.pairWrapper}>
                    <div className={createNew.cardAlignment}>

                        <h2 style={{...theme.h3,...theme.normal}}>Currency</h2>
                        <Card width="250px" paddingBottom="30px">
                            <DropdownMenu name={"currency"} options={dropdownCurrency} placeholder="Currency"/>
                        </Card>
                    </div>

                    <div className={createNew.cardAlignment}>
                        <h2 style={{...theme.h3,...theme.normal}}>VAT compliance data</h2>
                        <Card width="340px" paddingBottom="45px">
                            <DropdownMenu name={"CountryOfReg"} options={dropdownCountryOfReg} placeholder="Country of registration"/>
                            <FormInput label="VAT number" name="vatNumber" required/>
                        </Card>

                    </div>
                </div>
                
                <div className={createNew.saveButtonWrapper}>
                        <SubmitButton/>
                        <button className={createNew.cancelButton}>Cancel</button>
                </div>



                </form>
            </div>
        </FormProvider>
    )
}

const SubmitButton =()=>{
    
    const {formState} = useForm ()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const save={
            companyName:formState.companyName,
            companyEmail: formState.email,
            companyPhone: formState.phoneNumber,
            cvrNr:formState.vatNumber,
            ownerName:formState.ownerName,
            //create a website input later
            website: "",

            domain:({
            type: 'subdomain',
            domain: "",
            }),

            storefront: ({
            languages:[],
            }),

            defaultCurrency: "",
            description: "",

            location: ({
            address: formState.address,
            city: formState.city,
            country:"" ,
            zipCode: formState.zipcode,
            }),

            vatCompliance: {
            lastUpdated: "",
            country: "",
            vatNumber: "",
            }}
            console.log(formState)
            }

    return(
        <button className={createNew.saveButton} type="submit" onClick={handleSubmit}>Save</button>
    )
} 