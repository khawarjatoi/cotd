import React from "react";

class EditFish extends React.Component {
  handleChange = e => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
          placeholder="Fish Name"
        />
        <input
          type="text"
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
          placeholder="Fish Price"
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
          placeholder="Fish Desc"
        ></textarea>
        <input
          type="text"
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
          placeholder="Fish Image"
        />
        <button onClick={() => this.props.removeFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFish;
