import React, {useState} from "react";
import "../../AllCss.css";

function DashboardPart() {
    const [inactive, setInactive] = useState(false);
  return (
    <>
    
    <div className={`container ${inactive ? "inactive" : ""}`}></div>
    <div className="card-container">
      <div class="card item1">
        <img
          src="https://www.insightssuccess.in/wp-content/uploads/2020/09/Insightssuccess.jpg"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div class="card-body">
          <h5 class="card-title">Magazines</h5>
        </div>
      </div>
      <div class="card item2">
        <img
          src="https://www.qusoft.com/wp-content/uploads/2020/05/Quick-Report-Development-1.png"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div class="card-body">
          <h5 class="card-title">Report</h5>
        </div>
      </div>
      <div class="card item3">
        <img
          src="https://media-exp3.licdn.com/dms/image/C4D12AQHie9cbhw5L7w/article-cover_image-shrink_720_1280/0/1616408166313?e=1632355200&v=beta&t=Z0pDXfadJLdNOQedIaQPkYfJ0C1bP-1uMxUMTEFkblE"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div class="card-body">
          <h5 class="card-title">Branded Newsstand App</h5>
        </div>
      </div>
      </div>
    </>
  );
}

export default DashboardPart;
