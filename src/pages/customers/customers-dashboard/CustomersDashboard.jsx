import React, { useState, useEffect } from "react";
import { SearchIcon } from "../../../components/styling/icons/SearchIcon";

import Select from "react-select";

import { useTheme } from "../../../components/styling/ThemeContext";
import customersDashboardStyles from "../customers-dashboard/CustomersDashboard.module.css";
import Table from "./table/Table";

const dropdown = [
  { value: "danish", label: "Danish" },
  { value: "norwegian", label: "Norwegian" },
  { value: "english", label: "English" },
  { value: "swedish", label: "Swedish" },
  { value: "german", label: "German" },
];

export default function CustomersDashboard() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },

      {
        Header: "Last Booking",
        accessor: "last_booking",
      },

      {
        Header: "Upcoming Events",
        accessor: "upcoming_events",
      },

      {
        Header: "Onboarded",
        accessor: "onboarded",
      },
    ],
    []
  );

  const theme = useTheme();

  const fetchData = async () => {
    try {
      const response = await fetch("/DUMMY-DATA.json");
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
    //the customer dashboard wrapper
    <div>
      {/*the filters wrapper*/}
      <div className={customersDashboardStyles.filtersWrapper}>
        {/*the search input wrapper*/}
        <div className={customersDashboardStyles.searchBarWrapper}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search account"
            className={customersDashboardStyles.searchBar}
          ></input>
        </div>
        <Select style={{ ...theme.h4, ...theme.normal }} options={dropdown} />
        <p style={{ ...theme.h4, ...theme.normal }}>Onboarded</p>
        <div className={customersDashboardStyles.yesNoButtonsWrapper}>
          <button className={customersDashboardStyles.yesNoButton}>Yes</button>
          <button className={customersDashboardStyles.yesNoButton}>No</button>
        </div>
      </div>
      <Table data={data} columns={columns} />
    </div>
  );
}
