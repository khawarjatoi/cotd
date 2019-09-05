import React from "react";

class Inventory extends React.Component {
  nameRef = React.createRef();
  PriceRef = React.createRef();
  StatusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      Price: parseFloat(this.PriceRef.current.value),
      Status: this.StatusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };

    this.props.addFish(fish);
  };
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <form className="fish-edit" onSubmit={this.createFish}>
          <input type="text" ref={this.nameRef} placeholder="Fish Name" />
          <input type="text" ref={this.PriceRef} placeholder="Fish Price" />
          <select ref={this.StatusRef}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea ref={this.descRef} placeholder="Fish Desc"></textarea>
          <input type="text" ref={this.imageRef} placeholder="Fish Image" />
          <button type="submit">+ Add Item</button>
        </form>
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
