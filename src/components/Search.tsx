import { useState } from "react";
import { Category_Type } from "../constants/types";

const Search = ({
  categories,
  handleClickCategorySearch,
  handleNameSearch,
}: {
  categories: Category_Type[];
  handleClickCategorySearch: (ct: string) => void;
  handleNameSearch: (query: string) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  const handleCategorySearch = () => {
    handleClickCategorySearch(selectedOption); // Trigger the category search
  };

  const handleProductNameSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleNameSearch(searchInput); // Trigger the name search
  };

  return (
    <div className="bg-red-600 mb-5 flex justify-between">
      <div className="flex gap-2">
        <select
          className="select w-full max-w-xs"
          value={selectedOption}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedOption(value);
            if (value === "reset") {
              handleClickCategorySearch("reset"); 
            }
          }}
        >
          <option value="reset">Reset</option>
          <option value="" disabled>
            Search by category
          </option>
          {categories?.map((one: Category_Type) => (
            <option key={one?.category_id} value={one?.name}>
              {one?.name}
            </option>
          ))}
        </select>
        <button className="btn" onClick={handleCategorySearch}>
          Search
        </button>
      </div>
      <form className="p-2 flex items-center" onSubmit={handleProductNameSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="p-1 text-md rounded-lg px-2 border-none outline-none"
          placeholder="Search by product name"
        />
        <button className="btn btn-sm ml-2 btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
