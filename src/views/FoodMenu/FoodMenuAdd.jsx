import React, {useState} from "react";
import { Col, Card, Form, Button, Image } from "react-bootstrap";
import defaultImage from "../../assets/img/default.jpg";
import CKEditor from 'ckeditor4-react';


const FoodMenuAdd = () => {
  // const [count, setCount] = useState(true);
  const [checked, setChecked] = useState(false);
  return (
    <Card>
      <Card.Header className="d-flex">
        <Card.Title className="m-0 py-2">Food Menu Add</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNameTH">
              <Form.Label>Name TH / ชื่อภาษาไทย</Form.Label>
              <Form.Control/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridNameEN">
              <Form.Label>Name EN /  ชื่อภาอังกฤษ</Form.Label>
              <Form.Control/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.File id="exampleFormControlFile1" label="File Image" />
              <Image className="img-view" src={defaultImage} alt="Example" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.File id="exampleFormControlFile1" label="File Gallery" />
              <Image className="img-view" src={defaultImage} alt="Example" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
              <Form.Label>Type / ประเภท</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicCheckbox">
              <Form.Label>แสดงสไลส์ / Slide show</Form.Label>
              <Form.Control className="check" type="checkbox"/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridscriptTH">
              <Form.Label>สคริปภาษาไทย / script TH</Form.Label>
              <Form.Control as="textarea"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridscriptEN">
              <Form.Label>สคริปภาษาอังกฤษ / script EN</Form.Label>
              <Form.Control as="textarea"/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridscriptTH">
              <Form.Label>เนื้อหาภาษาไทย / Detail TH</Form.Label>
              <CKEditor
                        // data={this.state.events_detail_th}
                        // onChange={this.onEditorTHChange}
                        config={{
                        filebrowserBrowseUrl:'http://localhost:3000/#/gallery/',
                        }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridscriptEN">
              <Form.Label>เนื้อหาภาษาอังกฤษ / Detail EN</Form.Label>
              <CKEditor
                        // data={this.state.events_detail_th}
                        // onChange={this.onEditorTHChange}
                        config={{
                        filebrowserBrowseUrl:'http://localhost:3000/#/gallery/',
                        }}
              />
            </Form.Group>
          </Form.Row>


          

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="d-flex">
       
      </Card.Footer>
    </Card>
  );
};

export default FoodMenuAdd;
