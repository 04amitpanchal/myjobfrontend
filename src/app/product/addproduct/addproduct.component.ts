import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../proservice.service';
import { pro } from '../productclass';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  // arr:pro[]=[];
  // id:number;
  // p_name:string;
  // price:number;
  // mfg:string;
  // image:string;
  // selectedFile:File=null;
    arr:pro[]=[];
    id:number;
    name:string;
    price:number;
    mfg:string;
    image:string;
    selectedFile:File=null;
  constructor(public _addpro:ProserviceService) { }

  ngOnInit() {
  }
  onChange(value){
    this.selectedFile=<File>value.target.files[0];
  }

  // onChange(value)
  // {
  //   this.selectedFile=<File>value.target.files[0];
  // }

  onadd(item:pro){
    const fd=new FormData();
    fd.append('id',this.id.toString());
    fd.append('name',this.name);
    fd.append('price',this.price.toString());
    fd.append('mfg',this.mfg);
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this._addpro.addproduct(fd).subscribe(
      (data:any)=>{
          this.arr.push(new pro(this.id,this.name,this.price,this.mfg,this.image));
          console.log(data);
      }
    );
  }
  // onadd(item:pro)
  // {

  //   const fd=new FormData();
  //   fd.append('id',this.id.toString());
  //   fd.append('name',this.p_name);
  //   fd.append('price',this.price.toString());
  //   fd.append('mfg',this.mfg);
  //   //fd.append('p_status',this.sts1);
  //   fd.append('image',this.selectedFile,this.selectedFile.name);
  //   this._addpro.addProduct(fd).subscribe(
  //     (data:any)=>{
  //        this.arr.push(new pro(this.id,this.p_name,this.price,this.mfg,this.image));
  //       console.log(data);
  //     }
  //   );

  // }
}
