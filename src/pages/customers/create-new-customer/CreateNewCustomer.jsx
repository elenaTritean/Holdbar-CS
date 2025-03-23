import React, { useState } from 'react'
import { FormInput, FormProvider } from '../../../components/FormContext'
import { useTheme } from '../../../components/styling/ThemeContext'
import { useForm } from "../../../components/FormContext"
import { Card } from '../../../components/Card'
import DropdownMenu from "../../../components/DropdownMenu"
import createNew from "./CreateNewCustomerLayout.module.css"
import { Dropzone } from './dropzone/Dropzone'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import danishFlag from "../../../assets/images/icon_dkflag.svg" 
import norwayFlag from "../../../assets/images/icon_norwayflag.svg"
import germanFlag from "../../../assets/images/icon_germanflag.svg"
import swedishFlag from "../../../assets/images/icon_swedishflag.svg"
import ukFlag from "../../../assets/images/icon_ukflag.svg"



export default function CreateNewCustomerLayout() {


    const [selectDomainType, setSelectDomainType] = useState("Understory")
    const [validationStatus, setValidationStatus] = useState();

    const { formState } = useForm()



    const handleButtonOnClick = (domainType) => {
        setSelectDomainType(domainType)
    }


/*
Description
When an error occurs, JavaScript will stop and generate an error message.

Note
The technical term for this is is: JavaScript throws an exception.

JavaScript creates an Error object with two properties: name and message.

The try...catch...finally statements combo handles errors without stopping JavaScript.

The try statement defines the code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.

Both catch and finally are optional, but you must use one of them.

Note
Using throw with try and catch, lets you control program flow and generate custom error messages.*/

/* Async Syntax
The keyword async before a function makes the function return a promise:*/

/*"I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is an Object that links Producing code and Consuming code */

/* Promise Syntax
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

/* "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) {  code if successful  },
  function(error) {  code if some error  }
); 
*/

    const validateDomain = async() => {
        
        try {
            console.log(formState.domain)
            const response = await axios.get("https://api.app.dev.understory.io/sudo/domains", { params: { domain: formState.domain, type: "Understory" === selectDomainType ? "subdomain" : "custom"} });
            console.log(response)
            if (response.status == 200) {
                setValidationStatus("error");

            } else {
                setValidationStatus("available");

                console.log("error")
    }
        } catch (error) {
            console.log("error")
    }}


    const theme = useTheme();

    const dropdownLanguage = [
        { value: "danish", label: "Danish", flag: danishFlag },
        { value: "norwegian", label: "Norwegian", flag: norwayFlag },
        { value: "english", label: "English" , flag: ukFlag },
        { value: "swedish", label: "Swedish", flag: swedishFlag },
        { value: "german", label: "German", flag: germanFlag },
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
        { value: "dk", label: "Denmark" },
        { value: "no", label: "Norway" },
        { value: "gb", label: "United Kingdom" },
        { value: "se", label: "Sweden" },
        { value: "de", label: "Germany" },
        { value: "fi", label: "Finland" },
        { value: "it", label: "Italy" },
    ]



    return (

            <div className={createNew.mainContent}>
                <h1 style={{ ...theme.h1, ...theme.medium }}>New Account</h1>

                <form>

                    <section>
                        <div className={createNew.pairWrapper}>
                            <div className={createNew.cardAlignment}>
                                <h2 style={{ ...theme.h3, ...theme.normal }}>Profile</h2>
                                <Card width="320px" paddingBottom="30px">
                                    <div style={{ ...theme.h4, ...theme.normal }} className={createNew.logoAndNameWrapper}>
                                        <Dropzone />

                                        <FormInput label="Company name" name="companyName" required />
                                    </div>
                                </Card>
                            </div>


                            <div>
                                <div className={createNew.cardAlignment}>
                                    <h2 style={{ ...theme.h3, ...theme.normal }} >Domain</h2>
                                    <Card width="360px" paddingBottom="30px">
                                        <div className={createNew.buttonToggle}>
                                            <button type="button" onClick={() => handleButtonOnClick("Custom")}
                                                className={selectDomainType === "Custom" ? createNew.toggleDomainOn : createNew.toggleDomainOff}>Custom</button>
                                            <button type="button" onClick={() => handleButtonOnClick("Understory")}
                                                className={selectDomainType === "Understory" ? createNew.toggleDomainOn : createNew.toggleDomainOff} >Understory</button>
                                        </div>

                                        

                                        {selectDomainType === "Custom" ?
                                        
                                            <div>
                                                <FormInput label="URL" name={"domain"} placeholder="www.companyname.com" onBlur={validateDomain} className={createNew.domainInput} defaultValue={"Custom"}  required />
                                            </div>
                                            :
                                            (<label className={createNew.domainLabel} >
                                                <div>
                                                    <FormInput label="URL" name={"domain"} placeholder="companyname" onBlur={validateDomain}   defaultValue={"Understory"}
                                                        textAid={(validationStatus === "error") ? "Domain is already taken" :"Domain is available" } required />
                                                </div>
                                            </label>)}

                                        <div style={{ marginTop: "22px" }}>
                                            <DropdownMenu name={"language"} options={dropdownLanguage} placeholder="Language" />
                                        </div>
                                    </Card>
                                </div>
                            </div>

                        </div>

                        <div>
                            <h2 style={{ ...theme.h3, ...theme.normal }}>About</h2>
                            <textarea className={createNew.textarea} name={"description"} required />
                        </div>

                    </section>

                    <hr style={{ marginTop: "30px" }} />

                    <section>


                                <div className={createNew.pairWrapper}>
                                    <div className={createNew.cardAlignment}>
                                        <h2 style={{ ...theme.h3, ...theme.normal }}>Contact</h2>
                                        <Card width="320px" paddingBottom="40px">
                                            <FormInput label="Owner name" name="ownerName" required />
                                            <FormInput label="Email" name="companyEmail" pattern={/^[^@]+@[^@]+\.[^@]+$/} required
                                                textAid="Please include @" />
                                            <FormInput type="tel" label="Phone number" name="companyPhone" />
                                        </Card>
                                    </div>

                                

                                    <div className={createNew.cardAlignment}>
                                        <h2 style={{ ...theme.h3, ...theme.normal }}>Location</h2>
                                        <Card width="320px" paddingBottom="40px">
                                            <FormInput label="Address" name="address" required />
                                            <FormInput label="Zipcode" name="zipCode" required />
                                            <FormInput label="City" name="city" required />
                                        </Card>
                                    </div>
                        </div>

                    </section>

                    <hr />

                    <div className={createNew.pairWrapper}>
                        <div className={createNew.cardAlignment}>

                            <h2 style={{ ...theme.h3, ...theme.normal }}>Currency</h2>
                            <Card width="250px" paddingBottom="30px">
                                <DropdownMenu name={"currency"} options={dropdownCurrency} placeholder="Currency" />
                            </Card>
                        </div>

                        <div className={createNew.cardAlignment}>

                            <div className={createNew.cardAlignment}>
                                <h2 style={{ ...theme.h3, ...theme.normal }}>VAT compliance data</h2>
                                <Card width="340px" paddingBottom="45px">
                                    <DropdownMenu name={"country"} options={dropdownCountryOfReg} placeholder="Country of registration" />
                                    <FormInput label="VAT number" name="vatNumber" required />
                                </Card>

                            </div>
                        </div>
                    </div>

                    <div className={createNew.saveButtonWrapper}>
                        <button className={createNew.cancelButton}>Cancel</button>
                        <SubmitButton />
                    </div>



                </form>
            </div>
    )
}


const SubmitButton = () => {

    const [uploadProgress, setUploadProgress] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const { formState } = useForm()

    const url = "https://fuh1mfyoz3.execute-api.eu-west-1.amazonaws.com/sudo/customers/";
    const config = {
        onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
        },
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        setUploadProgress(0);


        const form = new FormData();

        form.append("companyName", formState.companyName)
        form.append("language", formState.language)
        form.append("description", formState.description ?? "")
        form.append("ownerName", formState.ownerName)
        form.append("domain",formState.domain)
        form.append("domainType", selectDomainType)
        form.append("companyEmail", formState.companyEmail)
        form.append("companyPhone", formState.companyPhone)
        form.append("address", formState.address)
        form.append("zipCode", formState.zipCode)
        form.append("city", formState.city)
        form.append("currency", formState.currency)
        form.append("country", formState.country)
        form.append("vatNumber", formState.vatNumber)

        form.append("logo", formState.logo)


        axios
            .put(url, form, config)
            .then((response) => {
                console.log("Upload successful", response.data);
                setUploadProgress(null);
                setRedirect(true);
            })
            .catch((error) => {
                alert("Upload failed");
                console.error(error);
                setUploadProgress(null);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    if (redirect) {
        return <Navigate to="/customers" replace={true} />
    }

    return (
        <button className={createNew.saveButton} type="submit" style={{ '--progress-width': `${uploadProgress ?? 0}%` }} onClick={handleSubmit} disabled={isSubmitting}>
            <span className="saveButtonText">
                {isSubmitting ? `Saving... ${uploadProgress}%` : "Save"}
            </span>
        </button>
    )
    
}