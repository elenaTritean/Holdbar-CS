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


export default function CreateNewCustomerLayout() {

    const [selectButton, setSelectButton] = useState("")
    const [understoryDomain, setUnderstoryDomain] = useState("");
    const [validationStatus, setValidationStatus] = useState(null);
    const [isChecking, setIsChecking] = useState(false);



    const handleButtonOnClick = (buttonDomain) => {
        setSelectButton(buttonDomain)
        setValidationStatus(null);
    }

    const handleUnderstoryInputChange = (e) => {
        setUnderstoryDomain(e.target.value);
        setValidationStatus(null);
    }

    const validateCustomDomain = () => {
        const isUnderstoryDomain = understoryDomain.endsWith(".understory.io");

        if (!isUnderstoryDomain) {
            setIsChecking(false);
            return
        }
    }

    const validateUnderstoryDomain = async () => {

        if (!understoryDomain.trim()) return;
        console.log("hey")
        setIsChecking(true);


        try {
            const response = await axios.get("https://api.app.dev.understory.io/sudo/domains", { params: { domain: understoryDomain.trim(), type: "subdomain" } });
            if (response.status == 200) {
                setValidationStatus("available");
            } else {
                setValidationStatus("unavailable");
            }
        } catch (error) {
            console.error("URL written is not in the Understory domain");
            setValidationStatus("error");
        } finally {
            setIsChecking(false);
        }
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
        { value: "dk", label: "Denmark" },
        { value: "no", label: "Norway" },
        { value: "gb", label: "United Kingdom" },
        { value: "se", label: "Sweden" },
        { value: "de", label: "Germany" },
        { value: "fi", label: "Finland" },
        { value: "it", label: "Italy" },
    ]



    return (
        <FormProvider>
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
                                                className={selectButton === "Custom" ? createNew.toggleDomainOn : createNew.toggleDomainOff}>Custom</button>
                                            <button type="button" onClick={() => handleButtonOnClick("Understory")}
                                                className={selectButton === "Understory" ? createNew.toggleDomainOn : createNew.toggleDomainOff} >Understory</button>
                                        </div>

                                        {selectButton === "Custom" ?
                                            (<div>
                                                <FormInput label="URL" name={"CustomDomain"} placeholder="www.companyname.com" onBlur={validateCustomDomain} onChange={handleUnderstoryInputChange} value={understoryDomain} required />
                                                {validationStatus === "error" && (<p style={{ color: "red" }}>This is an Understory domain.</p>)}
                                            </div>) :
                                            (<div>
                                                <FormInput label="URL" name={"UnderstoryDomain"} placeholder="www.companyname.understory.io" onBlur={validateUnderstoryDomain} onChange={handleUnderstoryInputChange} value={understoryDomain}
                                                    textAid={(validationStatus === "unavailable") ?"Domain is already taken" : (validationStatus==="error") ? "Error validating domain":"Domain is available" } required />

                                            </div>)}

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

                            <section>

                                <div className={createNew.pairWrapper}>
                                    <div className={createNew.cardAlignment}>
                                        <h2 style={{ ...theme.h3, ...theme.normal }}>Contact</h2>
                                        <Card width="320px" paddingBottom="40px">
                                            <FormInput label="Owner name" name="ownerName" required />
                                            <FormInput label="Email" name="companyEmail" pattern={/^[^@]+@[^@]+\.[^@]+$/} required
                                                textAid="Please include @" />
                                            <FormInput label="Phone number" name="companyPhone" />
                                        </Card>
                                    </div>

                                </div>

                            </section>
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
        </FormProvider>
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