// import React from "react";
// import FeedbackForm from "./FeedbackForm";

// const PopupModal = ({ product, onClose }) => {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button onClick={onClose}>✖</button>
//         <img src={product.image} alt={product.name} />
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p>Price: {product.price}</p>

//         <FeedbackForm productId={product.id} />
//       </div>
//     </div>
//   );
// };

// export default PopupModal;
import React from "react";
import FeedbackForm from "./FeedbackForm";

const PopupModal = ({ product, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>✖</button>
        <img src={`/${product.image}`} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ₹{product.price}</p>
        <FeedbackForm productId={product.id} />
      </div>
    </div>
  );
};

export default PopupModal;
