import React from 'react'
import { SearchIcon } from '../../../components/styling/icons/SearchIcon'
import CustomersDashboardStyles from "../customers-dashboard/CustomersDashboard.module.css"
import Select from "react-select";
import Table from './Table';
const dropdown=[
            {value:"danish", label:"Danish"},
            {value:"norwegian", label:"Norwegian"},
            {value:"english", label:"English"},
            {value:"swedish", label:"Swedish"},
            {value:"german", label:"German"}

]

export default function CustomersDashboard() {
    return (
        
        //the customer dashboard wrapper
        <div>
            {/*the filters wrapper*/}
            <div className={CustomersDashboardStyles.filtersWrapper}>
                {/*the search input wrapper*/}
                <div className={CustomersDashboardStyles.searchBarWrapper}>
                    <SearchIcon />
                    <input type="text" placeholder="Search account" className={CustomersDashboardStyles.searchBar}></input>
                </div>
                <Select options={dropdown}/>

            </div>
            <Table/>
        </div>
    )
}
