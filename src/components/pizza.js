import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variation, setVariation] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="m-5 shadow p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div className="d-flex">
        <div className="w-100">
          <p>Varient</p>
          <select
            className="form-control"
            onChange={(k) => setVariation(k.target.value)}
          >
            {pizza.varients.map((varient, i) => (
              <option key={i} value={varient}>
                {varient}
              </option>
            ))}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity</p>
          <select
            className="form-control m-1"
            onChange={(k) => setQuantity(k.target.value)}
          >
            {[...Array(10).keys()].map((value, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex">
        <div className="w-100 mt-1">
          <p> Price : {pizza.prices[0][variation] * quantity} Ks.</p>
        </div>
        <div className="w-100">
          <button className="btn mt-1">ADD TO CART</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <img
          src={pizza.image}
          style={{ height: "400px", width: "400px", alignSelf: "center" }}
        />
        <Modal.Body>{pizza.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pizza;
