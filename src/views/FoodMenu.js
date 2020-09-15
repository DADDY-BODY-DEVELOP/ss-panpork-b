import React from "react";
import { Card, Button, Table, Pagination } from "react-bootstrap";
import { BiStar, BiEdit, BiTrash, BiAddToQueue } from "react-icons/bi";
import { FoodMenuTH, FoodMenuTD } from "../pages/users/UsersData";
import defaultImage from "../assets/img/default.jpg";
// var FoodMenuTH = [
//   {
//     text: "NO.",
//     css: "first",
//   },
//   {
//     text: "Image",
//     css: "image",
//   },
//   {
//     text: "NameTH",
//     css: "name",
//   },
//   {
//     text: "NameEN",
//     css: "name",
//   },
//   {
//     text: "Manager",
//     css: "manager",
//   },
// ];

const FoodMenu = () => {
  return (
    <Card>
      <Card.Header className="d-flex">
        <Card.Title className="m-0 py-2">Food Menu</Card.Title>
        <Button variant="icon" className="ml-auto py-2">
          <BiAddToQueue />
        </Button>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              {FoodMenuTH.map((FoodMenuTH, key) => {
                return (
                  <th key={key} className={FoodMenuTH.css}>
                    {FoodMenuTH.text}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {FoodMenuTD.map((prop, key) => {
              console.log(prop);
              return (
                <tr key={key}>
                  <td className="first">{key + 1}</td>
                  <td className="image">
                    {/* <img src={defaultImage} alt="" /> */}
                    <img src={"assets/img/default.jpg"} alt="" />
                  </td>
                  <td className="name">{prop.nameTH}</td>
                  <td className="name">{prop.nameEN}</td>
                  <td className="manager">
                    <Button className="star">
                      <BiStar />
                    </Button>
                    <Button className="edit">
                      <BiEdit />
                    </Button>
                    <Button className="trash">
                      <BiTrash />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer className="d-flex">
        <Pagination className="ml-auto">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Card.Footer>
    </Card>
  );
};

export default FoodMenu;
