import { useState } from "react";
import { Category_Type } from "../constants/types";
import { FaSearch } from "react-icons/fa";

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
    handleClickCategorySearch(selectedOption);
  };

  const handleProductNameSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleNameSearch(searchInput);
  };

  return (
    <div className="mb-5 flex justify-between bg-white rounded-xl">
      <div className="flex gap-2">
        <select
          className="select w-full max-w-xs border border-blue-500"
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
        <button className="btn bg-blue-500 hover:bg-blue-600 text-white" onClick={handleCategorySearch}>
          Search
        </button>
      </div>
      <form className="flex items-center" onSubmit={handleProductNameSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="py-3 relative border border-blue-500 text-md rounded-lg px-2 pl-10 outline-none"
          placeholder="Search by product name"
        />
        <FaSearch className="absolute ml-3" />
        <button className="btn ml-2 bg-blue-500 hover:bg-blue-600 text-white" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
