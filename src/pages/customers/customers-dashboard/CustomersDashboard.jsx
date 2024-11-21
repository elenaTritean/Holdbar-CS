import React, { useState, useEffect } from "react";
import { SearchIcon } from "../../../components/styling/icons/SearchIcon";
import { useTheme } from "../../../components/styling/ThemeContext";
import customersDashboardStyles from "../customers-dashboard/CustomersDashboard.module.css";
import Table from "./table/Table";
import DropdownMenu from "../../../components/DropdownMenu";

// Define dropdown options array
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
    <div>
      {/* Filters Wrapper */}
      <div className={customersDashboardStyles.filtersWrapper}>
        {/* Search Bar Wrapper */}
        <div className={customersDashboardStyles.searchBarWrapper}>
          <div style={{ display: "flex", width: "18px" }}>
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search account"
            className={customersDashboardStyles.searchBar}
            style={{ ...theme.h4, ...theme.normal }}
          ></input>
        </div>

        {/* Pass the dropdown array as a prop to DropdownMenu */}
        <DropdownMenu options={dropdown} placeholder="Select country"/>

        {/* Onboarded Wrapper */}
        <div className={customersDashboardStyles.onboardedWrapper}>
          <p style={{ ...theme.h4, ...theme.normal }}>Onboarded</p>
          <div className={customersDashboardStyles.yesNoButtonsWrapper}>
            <button className={customersDashboardStyles.yesNoButton}>Yes</button>
            <div className={customersDashboardStyles.verticalLine}></div>
            <button className={customersDashboardStyles.yesNoButton}>No</button>
          </div>
        </div>
      </div>

      {/* Table Component */}
      <Table data={data} columns={columns} />
    </div>
  );
}