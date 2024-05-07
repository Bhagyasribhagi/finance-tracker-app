import React, { Component } from "react";
import { descriptionState } from "../Home";
import "./index.css";

interface DescriptionProps {
  descriptionData: descriptionState[];
}

class Editoption extends Component<DescriptionProps> {
  handleEdit = (index: number) => {
    // Implement edit functionality here
    console.log("Edit item at index", index);
    // const selectedItem = this.props.descriptionData[index];
  };

  handleDelete = (index: number) => {
    // Implement delete functionality here
    console.log("Delete item at index", index);
  };

  render() {
    const { descriptionData } = this.props;

    return (
      <div>
        <ul className="discripte">
          {descriptionData.map((item: descriptionState, index: number) => (
            <li className="li-item" key={index}>
              <div className="separate">
                <img src={item.imageUrl} alt="img" className="img-ele" />
                <div>
                  <h3 className="desc-name">{item.type}</h3>
                  <h4 className="date">
                    Date: {item.month}, {item.year}
                  </h4>
                </div>
                <div>
                  <h1 className="money">$125,00</h1>
                </div>
              </div>

              <div className="buttons">
                <button onClick={() => this.handleEdit(index)} className="btn1">
                  Edit
                </button>
                <div />
                <div>
                  <button
                    onClick={() => this.handleDelete(index)}
                    className="btn3"
                  >
                    Delete
                  </button>
                </div>
               
              </div>
              <hr/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Editoption;
