import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  PriceRef = React.createRef();
  StatusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.PriceRef.current.value),
      status: this.StatusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    e.currentTarget.reset();
  };
  render() {
    return (
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
    );
  }
}

export default AddFishForm;
