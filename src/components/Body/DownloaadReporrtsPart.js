import React from "react";

const DownloaadReporrtsPart = () => {
  return (
    <div className="Downl-container">
      <h1 className="heading">Publisher Download Report</h1>
      <div className="DownloaadReporrts">
        <div className="DownloaadReporrts-input">
          <select name="Name" id="Name">
            <option value="volvo">All Magazines</option>
            <option value="saab">1 Magazine</option>
            <option value="opel">5 Magazines</option>
            <option value="audi">Custom Range</option>
          </select>
          <select name="Name" id="Name">
            <option value="volvo">Today</option>
            <option value="saab">This Weel</option>
            <option value="opel">Months</option>
            <option value="audi">Custom Range</option>
          </select>
        </div>
        <button className="btn-DownloaadReporrts">GenerateReport</button>
      </div>
    </div>
  );
};

export default DownloaadReporrtsPart;
