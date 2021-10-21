import React from "react";

const CoupanPart = () => {
  return (
    <>
      <form action="">
        <div class="">
          <h1 className="heading">Free Coupon</h1>
          <div className="btn-row">
            <div className="magazinName">
              <button type="submit" className="magazin-btn">
                Magazine Name
              </button>
            </div>
            <div className="btn-position">
              <button type="submit" className="btn-coupon-free">
                Add Free Coupon
              </button>
              <button type="submit" className="btn-coupon-analytics">
                View Analytics
              </button>
            </div>
          </div>
          <div className="coupon-data">
            <table className="coupon-table">
              <tr className="coupon-tr">
                <th>Magazine Name</th>
                <th>Code</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Total Coupon</th>
                <th>Action</th>
              </tr>
              <hr className="coupon-hr" />
              <tr className="coupon-tr">
                <td>No Record</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>

          <div className="show-row">
            <div className="ShowEntries">
              <h3 className="Entries">Showing 1 to 1 of 1 entries</h3>
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
    </>
  );
};

export default CoupanPart;
