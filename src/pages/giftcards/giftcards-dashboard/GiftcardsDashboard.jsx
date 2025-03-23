import React, { useState, useEffect } from 'react'
import Table from "../../../components/table/Table"
import { SearchIcon } from '../../../components/styling/icons/SearchIcon';
import giftcardsDashboard from "./GiftcardsDashboard.module.css"
import { useTheme } from '../../../components/styling/ThemeContext';
import { AddGiftcardIcon } from '../../../components/styling/icons/AddGiftcardIcon';

export default function GiftcardsDashboard() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const theme=useTheme()

    const columns = React.useMemo(
        () => [
          {
            Header: "User",
            accessor: "user",
          },
          {
            Header: "Card ID",
            accessor: "card_id",
          },
          {
            Header: "Value",
            accessor: "value",
          },
          {
            Header: "Amount left",
            accessor: "amount_left",
          },
          {
            Header: "Expiry Date",
            accessor: "exp_date",
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
        []
      );

      const fetchData = async () => {
        try {
          const response = await fetch("/GIFTCARD-DUMMY-DATA.json");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const customerData = await response.json();
          setData(customerData);
        } catch (error) {
          console.error("Error fetching data:", error);
          setData([]);
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

      
      if (isLoading) {
        return <p>Loading data...</p>;
  }

  return (
    <div>
        <div className={giftcardsDashboard.searchAddWrapper}>
            <div className={giftcardsDashboard.searchBarWrapper}>
                <div style={{ display: "flex", width: "18px" }}>
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    placeholder="Search account"
                    className={giftcardsDashboard.searchBar}
                    style={{ ...theme.h4, ...theme.normal }}>
                    </input>
            </div>
            <div style={{marginLeft:"10px"}}>
                <AddGiftcardIcon/>
            </div>
        </div>
        
    
        <Table data={data} columns={columns}/>
    </div>
  )
}
