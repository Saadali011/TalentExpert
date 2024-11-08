import React from "react";

// Replace with the actual paths for these assets
import gifbanner from "../../assets/gifbanner.gif"; // Adjust path if needed

export default function Sponsers() {
  return (
    <div className="container-sm-fluid  p-0 m-0"  style={{backgroundColor :"#F8F8F4",       }}>
      {/* Full-width and height GIF banner that is responsive */}
      <img
        src={gifbanner}
        // style={{ minHeight: "430px", }}
        alt="Header GIF"
        className="w-100 " // Full width and height
      />
    </div>
  );
}
