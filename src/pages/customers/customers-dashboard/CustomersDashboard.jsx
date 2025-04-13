import React, {
  useState, useEffect, useMemo, useCallback
} from "react";
import { SearchIcon } from "../../../components/styling/icons/SearchIcon";
import { useTheme } from "../../../components/styling/ThemeContext";
import customersDashboard from "../customers-dashboard/CustomersDashboard.module.css";
import Table from "../../../components/table/Table";
import DropdownMenu from "../../../components/DropdownMenu";
import { usePagination } from "../../../components/table/usePagination";
import { FormProvider } from "../../../components/FormContext";
import { useSorting } from "../../../components/table/useSorting";


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
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(queryParams.get("sortby") || "name");
  const [sortOrder, setSortOrder] = useState(queryParams.get("sort") || "asc");

  // Add pagination and sorting hooks
  const { limit, onPaginationChange, skip, pagination } = usePagination();
  const { sorting, onSortingChange, field, order } = useSorting();

  // Define handleSort before columns
  const handleSort = (column) => {
    const newSortOrder = sortBy === column && sortOrder === "asc" ? "desc" : "asc";
    setSortBy(column);
    setSortOrder(newSortOrder);

    // Update the query string in the URL
    const newQueryParams = new URLSearchParams(location.search);
    newQueryParams.set("sortby", column);
    newQueryParams.set("sort", newSortOrder);
    window.history.pushState(null, "", `?${newQueryParams.toString()}`);

    // Fetch the updated data
    fetchData();
  };


  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true); // Set loading state to true
      const initialCountry = queryParams.get("country");
      const initialOnboarded = queryParams.get("isOnboarded");

      // API call with pagination and sorting parameters
      const response = await fetch(
        `https://api.app.dev.understory.io/sudo/customers/?isOnboarded=${initialOnboarded}&sort=${order}&sortby=${field}&country=${initialCountry}&limit=${limit}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const customerData = await response.json();

      // Update state with fetched data
      setData(customerData.items); // Assuming `items` contains the data
      setCount(customerData.totalCount || 0); // Assuming `totalCount` contains the total number of items
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setCount(0);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  }, [queryParams, field, order, limit, skip]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Define columns after handleSort
  const cols = useMemo(
    () => [
      {
        Header: "Logo",
        accessor: "pictures?.logo?.url",
        Cell: ({ value }) => (
          <img
            src={value || "https://media.dev.holdbar.com/onboard-ai/holdbar.com-3c0f194a.webp"} // Fallback to placeholder
            alt="Logo"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            className="logoImage"
          />
        ),
        id: "logo", // Unique ID for the column
        disableSortBy: true, // Disable sorting for the logo column
      },
      {
        Header: "Name",
        accessor: "name",
        getSortByToggleProps: () => ({
          onClick: () => handleSort("name"),
        }),
      },
      {
        Header: "Last Booking",
        accessor: "lastUpdated",
        getSortByToggleProps: () => ({
          onClick: () => handleSort("lastUpdated"),
        }),
      },
      {
        Header: "Upcoming Events",
        accessor: "upcoming_events",
        getSortByToggleProps: () => ({
          onClick: () => handleSort("upcoming_events"),
        }),
      },
      {
        Header: "Onboarded",
        accessor: "onboardingCompleted",
        getSortByToggleProps: () => ({
          onClick: () => handleSort("onboardingCompleted"),
        }),
      },
    ],
    [handleSort]
  );

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
            <p
              style={{ ...theme.h4, ...theme.normal }}
              className={customersDashboard.pButton}
            >
              Onboarded
            </p>
            <div className={customersDashboard.yesNoButtonsWrapper}>
              <button
                className={`${customersDashboard.yesNoButton} ${customersDashboard.pButton}`}
              >
                Yes
              </button>
              <div className={customersDashboard.verticalLine}></div>
              <button
                className={`${customersDashboard.yesNoButton} ${customersDashboard.pButton}`}
              >
                No
              </button>
            </div>
          </div>
        </div>

        <Table
          cols={cols}
          data={fetchData} // Use fetchData to get the data
          loading={isLoading}
          onPaginationChange={onPaginationChange}
          onSortingChange={onSortingChange}
          rowCount={count}
          pagination={pagination}
          sorting={sorting}
        />
      </div>
    </FormProvider>
  );
}