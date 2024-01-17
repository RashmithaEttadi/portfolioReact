import React from "react";


const MoveToTop = ({ children }) => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      return (
        <div onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          {children}
        </div>
      );
}

export default MoveToTop;