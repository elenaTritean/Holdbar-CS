import React, { useState, useEffect, useMemo } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import Table from "../../../components/table/Table";
import { SearchIcon } from '../../../components/styling/icons/SearchIcon';
import giftcardsDashboard from "./GiftcardsDashboard.module.css";
import { useTheme } from '../../../components/styling/ThemeContext';
import { AddGiftcardIcon } from '../../../components/styling/icons/AddGiftcardIcon';
import { usePagination } from "../../../components/table/usePagination";
import { useSorting } from "../../../components/table/useSorting";

const columnHelper = createColumnHelper();

export default function GiftcardsDashboard() {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0); // for total item count (if paginated)

  const { pagination, onPaginationChange, limit, skip } = usePagination();
  const { sorting, onSortingChange, field, order } = useSorting();

  useEffect(() => {
    const fetchGiftcards = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://api.app.dev.understory.io/sudo/giftcards?limit=${limit}&skip=${skip}&sortby=${field}&sort=${order}`
        );

        if (!response.ok) throw new Error("Failed to fetch giftcards");

        const result = await response.json();
        setData(result.items || []);
        setCount(result.totalCount || 0);
      } catch (err) {
        console.error(err);
        setData([]);
        setCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGiftcards();
  }, [limit, skip, field, order]);

  const cols = useMemo(() => [
    columnHelper.accessor("user", {
      header: "User",
    }),
    columnHelper.accessor("card_id", {
      header: "Card ID",
    }),
    columnHelper.accessor("value", {
      header: "Value",
    }),
    columnHelper.accessor("amount_left", {
      header: "Amount Left",
    }),
    columnHelper.accessor("exp_date", {
      header: "Expiry Date",
    }),
    columnHelper.accessor("status", {
      header: "Status",
    }),
  ], []);

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
            style={{ ...theme.h4, ...theme.normal }}
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <AddGiftcardIcon />
        </div>
      </div>

      <Table
        columns={cols}
        data={data}
        loading={isLoading}
        onPaginationChange={onPaginationChange}
        onSortingChange={onSortingChange}
        rowCount={count}
        pagination={pagination}
        sorting={sorting}
      />
    </div>
  );
}
