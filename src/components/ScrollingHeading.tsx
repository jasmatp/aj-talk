import React from "react";

const ScrollingHeading = () => {
  return (
    <div className="bg-warning overflow-hidden">
      <p
        className="text-dark fw-bold m-1"
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          animation: "scroll-left 60s linear infinite",
        }}
      >
        'Website is currently under development. We are working hard to bring
        you new features and improvements. Thank you for your patience and
        understanding.(વેબસાઇટ હાલમાં વિકાસ હેઠળ છે. અમે નવી સુવિધાઓ અને સુધારાઓ
        લાવવા માટે મહેનત કરી રહ્યા છીએ. તમારી સહનશક્તિ અને સમજદારી માટે આભાર.)'
      </p>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingHeading;
