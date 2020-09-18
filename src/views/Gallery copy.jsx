import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardHeader,
  Col,
  CardLink,
  FormGroup,
  Input,
  Label,
  // Row,
} from 'reactstrap';
import axios from 'axios';
import GLOBALS from "../../GLOBALS";
import FileModel from '../../models/FileModel';
import '../../scss/gallery.scss';

var file_model = new FileModel();

function getUrlParam(paramName) {
  console.log("Test",paramName);

  var reParam = new RegExp('(?:[\?&]|&)' + paramName + '=([^&]+)', 'i');
  var match = window.location.href.match(reParam);
console.log(window.location);
console.log(match);

  return (match && match.length > 1) ? match[1] : null;
}


function returnFileUrl(url){
  // console.log(url);
  
  // console.log('this is:', this);
   var funcNum = getUrlParam('CKEditorFuncNum');
   var fileUrl = url;
   console.log(window.opener);
  window.opener.CKEDITOR.tools.callFunction(funcNum, fileUrl, function () {
    // --------Get the reference to a dialog window.
    var dialog = this.getDialog();
    // --------Check if this is the Image Properties dialog window.
    if (dialog.getName() == 'image') {
      // --------Get the reference to a text field that stores the "alt" attribute.
      var element = dialog.getContentElement('info', 'txtAlt');
      // --------Assign the new value.
      if (element)
        element.setValue('alt text');
    }
    // Return "false" to stop further execution. In such case CKEditor will ignore the second argument ("fileUrl")
    // and the "onSelect" function assigned to the button that called the file manager (if defined).
    // return false;
    
  });
  console.log(fileUrl);
  console.log(funcNum);
  console.log(window.opener);
  window.close();
}
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      imageAlbum: [],
      distinctAlbum:[],
      selectedFileall: null,
      gallery_file: '',
    }
    // this.getUrlParam = this.getUrlParam.bind(this);
    // this.returnFileUrl = this.returnFileUrl.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangealbum = this.onChangealbum.bind(this);
    // this.deleteGallery = this.deleteGallery.bind(this);
  }
  async componentDidMount() {
    // const gallerydata = await file_model.getGalleryBy()
    this.setState({
      gallery_file: await file_model.getGalleryBy()
    });
  }
  checkMimeType=(event)=>{
    let filesonly = event.target.files 
    let err = []
   const types = ['image/png', 'image/jpeg', 'image/gif']
    for(var x = 0; x<filesonly.length; x++) {
         if (types.every(type => filesonly[x].type !== type)) {
         err[x] = filesonly[x].type+' is not a supported format\n';
       }
     };
   return true;
  }

  checkFileSize=(event)=>{
    let filesonly = event.target.files
    let size = 2000000 
    let err = []; 
    for(var x = 0; x<filesonly.length; x++) {
      if (filesonly[x].size > size) {
        err[x] = filesonly[x].type+'is too large, please pick a smaller file\n';
      }
    };
    return true;
  }
  maxSelectFile=(event)=>{
    let filesmany = event.target.files
        if (filesmany.length > 20) { 
          alert("อัฟโหลดรูปภาพสูงสุดรอบละ 20 รูปภาพ")
           return false;
      }
    return true;
  }

  async onChangealbum(event){
    var filesmany = event.target.files;
    if(this.maxSelectFile(event) && this.checkMimeType(event) && this.checkFileSize(event)){
      this.setState({ selectedFileall: filesmany });
      
      for (var i = 0; i < filesmany.length; i++) {
        if (this.state.distinctAlbum.indexOf(filesmany[i].name) === -1) { 
          this.state.distinctAlbum.push(filesmany[i].name);
          this.state.imageAlbum.push(
            URL.createObjectURL(filesmany[i])
          );
        } else {
          alert(filesmany[i].name + " already selected")
        }
      }
    }
  }

 

  removeAlbum(reAlbum,distinctAlbum,reFile) {
    console.log(this.state.distinctAlbum);
    
    console.log("123",reFile);
    console.log("145",reAlbum,'===',distinctAlbum);
    const informationAlbum = this.state.imageAlbum.filter(ele => ele != reAlbum );
    this.setState({ imageAlbum: informationAlbum });
    
    const informationDustinctAlbum = this.state.distinctAlbum.filter(ele => ele != distinctAlbum );
    this.setState({ distinctAlbum: informationDustinctAlbum });
    // let  distinctAlbum = [... this.state.distinctAlbum];

    let arrayFile = [...this.state.selectedFileall]; 
    console.log("121",arrayFile);
    let indexFile = arrayFile.indexOf(reFile);
    if (indexFile !== null) {
      arrayFile.splice(indexFile, 1);
      this.setState({selectedFileall: arrayFile});
      
    }
    console.log(this.state.imageAlbum);
    console.log(this.state.distinctAlbum);
    console.log(this.state.selectedFileall);
  }
  
  deleteGallery(imagedelete){
    var arr = {};
    console.log(imagedelete);
    
    arr['gallery_file'] = imagedelete;
    console.log(arr);
    file_model.deleteGalleryBy(arr);

    const information = this.state.gallery_file.filter(ele => ele !== imagedelete );
    this.setState({ gallery_file: information });
    console.log("5555",this.state.gallery_file);
    
  }

  async onClickHandler() {
    // console.log(this.state.selectedFileall);
    
    const data = new FormData();
    if(this.state.selectedFileall){
      for(var x = 0; x<this.state.selectedFileall.length; x++) {
        data.append('file', this.state.selectedFileall[x])
      }
    }
    axios.post(GLOBALS.SERVICE_URL+"file/gallery", data, {
      onUploadProgress: ProgressEvent => {
      },
    });
    this.setState({
      imageAlbum : []
    });
    this.componentDidMount();
  }
    render() {
      const ShowImage = [];
      const GalleryA = [];
      const GalleryB = [];
      const GalleryC = [];
      const GalleryD = [];
      const gallery_url = GLOBALS.SERVICE_URL+'gallery/';
      // console.log(this.state.imageAlbum);
      
      for(let j = 0; j < this.state.imageAlbum.length ; j++ ){
        ShowImage.push(
          <Col  xs="12"  sm="4" md="3" className="p-3">
            <FormGroup className="gallery-box">
              {this.state.imageAlbum[j] && ( 
                <Button className="btn-close p-0 img-close mr-4 mt-1" onClick={event=>this.removeAlbum(this.state.imageAlbum[j],this.state.distinctAlbum[j],j)} ><i className="fa fa-close fa-lg"></i></Button>
              )}
              <CardImg className="gallery-add" src={this.state.imageAlbum[j]} />

            </FormGroup>
          </Col>
        );
      }
      
      var y = 1;
      for(let x = 0; x < this.state.gallery_file.length ; x++ ){
        if(y < 5){
          if(y === 1){
            GalleryA.push(
              <FormGroup >
                <Button className="btn-close p-0 img-close" onClick={event=>this.deleteGallery(this.state.gallery_file[x])} ><i className="fa fa-close fa-lg"></i></Button>
                <Button className="btn-gallery" onClick={()=>returnFileUrl(gallery_url + this.state.gallery_file[x])}><CardImg className="gallery-show" src={gallery_url + this.state.gallery_file[x]} /></Button>
              </FormGroup>
            );
          }else if(y === 2){
            GalleryB.push(
              <FormGroup >
                <Button className="btn-close p-0 img-close" onClick={event=>this.deleteGallery(this.state.gallery_file[x])} ><i className="fa fa-close fa-lg"></i></Button>
                <Button className="btn-gallery" onClick={()=>returnFileUrl(gallery_url + this.state.gallery_file[x])}><CardImg className="gallery-show" src={gallery_url + this.state.gallery_file[x]} /></Button>
              </FormGroup>
            );
          }else if(y === 3){
            GalleryC.push(
              <FormGroup >
                <Button className="btn-close p-0 img-close" onClick={event=>this.deleteGallery(this.state.gallery_file[x])} ><i className="fa fa-close fa-lg"></i></Button>
                <Button className="btn-gallery" onClick={()=>returnFileUrl(gallery_url + this.state.gallery_file[x])}><CardImg className="gallery-show" src={gallery_url + this.state.gallery_file[x]} /></Button>
              </FormGroup>
            );
          }else if(y === 4){
            GalleryD.push(
              <FormGroup >
                <Button className="btn-close p-0 img-close" onClick={event=>this.deleteGallery(this.state.gallery_file[x])} ><i className="fa fa-close fa-lg"></i></Button>
                <Button className="btn-gallery" onClick={()=>returnFileUrl(gallery_url + this.state.gallery_file[x])}><CardImg className="gallery-show" src={gallery_url + this.state.gallery_file[x]} /></Button>
              </FormGroup>
            );
          }
          y++;
          if(y === 5){
            y = 1;
          }
        }
      };
            

      return (
        <div className="gallery">
          <Card>
            <CardHeader className="text-center">
              <h1>Gallery Management</h1>
            </CardHeader>
            <CardBody>
              <FormGroup row className="my-0">
              <Col xs="6" sm="6">
                  <FormGroup className="text-right">
                    <Label htmlFor="album_gallery_image">เพิ่มรูปภาพ</Label>
                  </FormGroup>
                </Col>
                <Col xs="6" sm="6">
                  <FormGroup>
                    <Input type="file" className="maket-input" color="success"  multiple onChange={e => this.onChangealbum(e)}/>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row className="my-0">
                {ShowImage}
              </FormGroup>
                {ShowImage.length ? 
                  <FormGroup className="text-center">
                    <Button type="submit" size="md" className="m-1" color="success" onClick={this.onClickHandler}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                  </FormGroup>
                : null }
              <FormGroup row className="mt-5">
                <Col xs="12" sm="12">
                  <FormGroup className="text-center">
                    <Label><h1>Gallery List</h1></Label>
                  </FormGroup>
                </Col>
                <FormGroup row className="gallery-box">
                  <Col xs="12"  sm="4" md="3" className="p-0">
                    {GalleryA}
                  </Col>
                  <Col xs="12"  sm="4" md="3" className="p-0">
                    {GalleryB}
                  </Col>
                  <Col xs="12"  sm="4" md="3" className="p-0">
                  {GalleryC}
                  </Col>
                  <Col xs="12"  sm="4" md="3" className="p-0">
                  {GalleryD}
                  </Col>
                </FormGroup >
              </FormGroup>
            </CardBody>
          </Card>
          
        </div>

    );
  }
}
  

export default Gallery;
