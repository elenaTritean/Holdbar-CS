import React, { useState, useEffect } from "react";
import { SearchIcon } from "../../../components/styling/icons/SearchIcon";
import { useTheme } from "../../../components/styling/ThemeContext";
import customersDashboard from "../customers-dashboard/CustomersDashboard.module.css";
import Table from "../../../components/table/Table";
import DropdownMenu from "../../../components/DropdownMenu";
import { FormProvider } from "../../../components/FormContext";


const dropdown = [
  { value: "danish", label: "Danish" },
  { value: "norwegian", label: "Norwegian" },
  { value: "english", label: "English" },
  { value: "swedish", label: "Swedish" },
  { value: "german", label: "German" },
];

export default function CustomersDashboard() {

  const theme = useTheme();

  const queryParams = new URLSearchParams(location.search);


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "pictures.logo.url",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Last Booking",
        accessor: "lastUpdated",
      },
      {
        Header: "Upcoming Events",
        accessor: "upcoming_events",
      },
      {
        Header: "Onboarded",
        accessor: "onboardingCompleted",
      },
    ],
    []
  );

  const fetchData = async () => {
    try {
      const initialCountry = queryParams.get ("country");
      const initialOnboarded = queryParams.get("isOnboarded");
      const initialSort = queryParams.get("sortby") ||"name";
      const initialSortOrder = queryParams.get ("sort") || "asc";
      const response = await fetch(`https://api.app.dev.understory.io/sudo/customers/?isOnboarded=${initialOnboarded}&sort=${initialSortOrder}&sortby=${initialSort}&country=${initialCountry}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const customerData = await response.json();
      setData(customerData.items);
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
    <FormProvider>
      <div>
        {/* Filters Wrapper */}
        <div className={customersDashboard.filtersWrapper}>
          {/* Search Bar Wrapper */}
          <div className={customersDashboard.searchBarWrapper}>
            <div style={{ display: "flex", width: "18px" }}>
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search account"
              className={customersDashboard.searchBar}
              style={{ ...theme.h4, ...theme.normal }}
            ></input>
          </div>

          {/* Pass the dropdown array as a prop to DropdownMenu */}
          <DropdownMenu options={dropdown} placeholder="Select country" />

          {/* Onboarded Wrapper */}
          <div className={customersDashboard.onboardedWrapper}>
            <p style={{ ...theme.h4, ...theme.normal }} className={customersDashboard.pButton}>Onboarded</p>
            <div className={customersDashboard.yesNoButtonsWrapper}>
              <button className={`${customersDashboard.yesNoButton} ${customersDashboard.pButton}`}>Yes</button>
              <div className={customersDashboard.verticalLine}></div>
              <button className={`${customersDashboard.yesNoButton} ${customersDashboard.pButton}`}>No</button>
            </div>
          </div>
        </div>

        <Table data={data} columns={columns} />
      </div>
    </FormProvider>
  );
}