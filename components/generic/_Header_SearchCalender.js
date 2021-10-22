import { UsersIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";

const SearchCalender = () => {
  const today = new Date();
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  const handleRangeSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const range = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <div>
        <DateRangePicker
          ranges={[range]}
          minDate={today}
          rangeColors={["#fd5b61"]}
          onChange={handleRangeSelect}
        />
        <div>
          <div className="border-b mb-4 pb-1 flex justify-between">
            <p className="text-semibold">Number of Guests</p>
            <div className="flex">
              <UsersIcon className="h-6" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number"
                className="w-12 pl-2 outline-none text-red-600"
              />
            </div>
          </div>
          <div className="flex justify-evenly">
            <button className="text-button">Cancel</button>
            <button className="text-button text-[#fd5b61]" type="text">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCalender;
