import React from "react";

const LicenceeAccountPart = () => {
  return (
    <div>
      <form action="">
        <div class="">
          <h1 className="heading">Licensee</h1>
          <div className="btn-row">
            <div className="magazinName">
              <button type="submit" className="magazin-btn">
                Name
              </button>
            </div>
            <div className="btn-position">
              <button type="submit" className="btn-coupon-free">
                + Add Licensee Account
              </button>
            </div>
          </div>
          <div className="coupon-data">
            <table className="coupon-table">
              <tr className="coupon-tr">
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Access</th>
                <th>Action</th>
              </tr>
              <hr className="coupon-hr" />
              <tr className="coupon-tr">
                <td>No data</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>

          <div className="show-row">
            <div className="ShowEntries">
              <h3 className="Entries">Showing 0 to 0 of 0 entries</h3>
            </div>
            <div className="btn-tagle">
              <button type="submit" className="btn-Previous">
                Previous
              </button>
              <button type="submit" className="btn-Next">
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LicenceeAccountPart;
