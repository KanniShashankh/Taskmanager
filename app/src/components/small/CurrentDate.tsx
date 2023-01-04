import React, { useState } from 'react';

const DateTimePicker = () => {
  const [useCurrent, setUseCurrent] = useState(false);

  return (
    <div className="flex items-center">
      <input
        className="w-1/2 px-4 py-2 rounded-l-lg border border-gray-400"
        type="date"
        disabled={useCurrent}
      />
      <input
        className="w-1/2 px-4 py-2 rounded-r-lg border border-gray-400"
        type="time"
        disabled={useCurrent}
      />
      <input
        className="form-checkbox"
        type="checkbox"
        checked={useCurrent}
        onChange={(e) => setUseCurrent(e.target.checked)}
      />
      <label className="ml-2">Use current date and time</label>
    </div>
  );
}

export default DateTimePicker;
