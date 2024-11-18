import React, { useState, useEffect} from 'react'
import { SearchIcon } from '../../../components/styling/icons/SearchIcon'

import Select from "react-select";


const dropdown=[
            {value:"danish", label:"Danish"},
            {value:"norwegian", label:"Norwegian"},
            {value:"english", label:"English"},
            {value:"swedish", label:"Swedish"},
            {value:"german", label:"German"}

]

import { useTheme } from "../../../components/styling/ThemeContext"
import CustomersDashboardStyles from "../customers-dashboard/CustomersDashboard.module.css"
import Table from './table/Table';

export default function CustomersDashboard() {

  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 

  const columns = React.useMemo(()=>[
    {
      Header:"Name",
      accessor:"name"
    },

    {
      Header:"Last Booking",
      accessor:"last_booking"
    },

    {
      Header:"Upcoming Events",
      accessor:"upcoming_events"
    },

    {
      Header:"Onboarded",
      accessor:"onboarded"
    },

  ], []);

    const theme= useTheme()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/DUMMY-DATA.json"); 
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const dummyData = await response.json();
            setData(dummyData.myArray || dummyData); 
          } catch (error) {
            console.error('Error fetching data:', error);
            setData([]); 
          } finally {
            setIsLoading(false); 
          }
        };
    
        fetchData();
      }, []);
    
      if (isLoading) {
        return <p>Loading data...</p>; // Display a loading message while fetching data
      }

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
                <Select style={{...theme.h4, ...theme.normal}} options={dropdown}/>
                <p style={{...theme.h4, ...theme.normal}}>Onboarded</p>
                <div className={CustomersDashboardStyles.yesNoButtonsWrapper}>
                    <button className={CustomersDashboardStyles.yesNoButton}>Yes</button>
                    <button className={CustomersDashboardStyles.yesNoButton}>No</button>
                </div>

            </div>
            <Table data={data} columns={columns}/>
        </div>
    )
}
