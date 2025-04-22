import { createColumnHelper } from '@tanstack/react-table';
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

const columnHelper = createColumnHelper();
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

  //Toggle yes/no buttons Onboarded
  const [selected, setSelected] = useState(null);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
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


      setData(customerData.items);
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
  const cols = useMemo(() => [
    columnHelper.accessor(row => row?.pictures?.logo?.url,
      {
        id: "logo", // must provide an ID when using function accessor
        header: "Logo",
        cell: info => (
          <img
            src={info.getValue() || "https://cataas.com/cat/gif?type=square"}
            alt="Logo"
            width= "32"
            height= "32"
            style={{ borderRadius: "50%" }}
          />
        ),
        enableSorting: false,
      }
    ),
    columnHelper.accessor("name", {
      header: "Name",
      enableSorting: true,
    }),
    columnHelper.accessor("lastUpdated", {
      header: "Last Booking",
      enableSorting: true,
    }),
    columnHelper.accessor("upcoming_events", {
      header: "Upcoming Events",
      enableSorting: true,
    }),
    columnHelper.accessor("onboardingCompleted", {
      header: "Onboarded",
      enableSorting: true,
    })],
    []);
  
    const handleClick = (value) => {
      if (selected === value) {
        setSelected(null); 
      } else {
        setSelected(value);
      }
    };

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
                 onClick={() => handleClick('yes')}
                 className={`customersDashboard.yesNoButton ${selected === 'yes' ? 'customersDashboard.selectedButton' : 'customersDashboard.unselectedButton'}`}
              >
                Yes
              </button>
              <div className={customersDashboard.verticalLine}></div>
              <button
                 onClick={() => handleClick('no')}
                className={` customersDashboard.yesNoButton ${selected === 'yes' ? 'customersDashboard.selectedButton' : 'customersDashboard.unselectedButton'}`}
              >
                No
              </button>
            </div>
          </div>
        </div>

        <Table
          columns={cols}
          data={data} // Use fetchData to get the data
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