import React from 'react'
import { FormInput, FormProvider } from '../../../components/FormContext'
import { useTheme } from '../../../components/styling/ThemeContext'
import {LogoPlaceholder} from "../../../components/styling/icons/LogoPlaceholder"
import { Card } from '../../../components/Card'
import DropdownMenu from "../../../components/DropdownMenu"
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
                <h1 style={{...theme.h3,...theme.normal}}>New Account</h1>
                <form>
                <div>
                    <h2 style={{...theme.h3,...theme.normal}}>Profile</h2>
                    <Card>
                        <div style={{...theme.h4,...theme.normal}}>
                            <label>Company logo</label>
                            <div>
                                <LogoPlaceholder/>
                            </div>
                            <FormInput label="Company name" name="companyName" />
                        </div>
                    </Card>
                </div>
                <div>
                    <h2 style={{...theme.h3,...theme.normal}}>Domain</h2>
                    <Card>
                            <button>Custom</button>
                            <button>Holdbar</button>
                            <FormInput placeholder="www.companyname.com"/>
                            <DropdownMenu options={dropdown} placeholder="Language"/>
                    </Card>
                </div>    
                <h2 style={{...theme.h3,...theme.normal}}>About</h2>
                <Card>
                    
                </Card>

                <hr/>
                
                <h2 style={{...theme.h3,...theme.normal}}>Contact</h2>
                <Card>
                    <FormInput label="Owner name" name="ownerName" />
                    <FormInput label="Email" name="email" />
                    <FormInput label="Phone number" name="phoneNumber" />
                </Card>

                <h2 style={{...theme.h3,...theme.normal}}>Location</h2>
                <Card>
                    <FormInput label="Address" name="address" />
                    <FormInput label="Zipcode" name="zipcode" />
                    <FormInput label="City" name="city" />
                </Card>

                <hr/>

                <h2 style={{...theme.h3,...theme.normal}}>Team members</h2>
                <Card>
                    <FormInput label="Name" name="name" />
                    <FormInput label="Email" name="email" />
                    <FormInput label="Phone number" name="phoneNumber" />
                    <button>+</button>
                </Card>

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
