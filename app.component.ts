import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrders;

   constructor(private http:HttpClient){
    this.columnDefs = [
      {headerName: 'LOB', field: 'LOB',rowGroup:true },
      {headerName: 'SubLob', field: 'SubLob' },
      {headerName: 'ChangeBucket', field: 'ChangeBucket'},
	  {headerName: 'Auto_Manual', field: 'Auto_Manual'},
	  {headerName: 'Task', field: 'Task'},
	  {headerName: 'Total', field: 'Total'},
	  {headerName: 'PreImpl', field: 'PreImpl'},
	  {headerName: 'PreImpl_L1', field: 'PreImpl_L1'},
	  {headerName: 'PreImpl_AD', field: 'PreImpl_AD'},
	  {headerName: 'PreImpl_L2', field: 'PreImpl_L2'},
	  {headerName: 'Impl', field: 'Impl'},
	  {headerName: 'Impl_L1', field: 'Impl_L1'},
	  {headerName: 'Impl_AD', field: 'Impl_AD'},
	  {headerName: 'Impl_L2', field: 'Impl_L2'},
	  {headerName: 'PostImpl', field: 'PostImpl'},
	  {headerName: 'PostImpl_L1', field: 'PostImpl_L1'},
	  {headerName: 'PostImpl_AD', field: 'PostImpl_AD'},
	  {headerName: 'PostImpl_L2', field: 'PostImpl_L2'}
    ];  
  }

rowData:any;

ngOnInit(){
  
}

onGridReady(params){
  this.gridApi = params.api;
  this.gridColumnApi=params.columnApi;
  this.http.get("assets/source.json").subscribe( data => {
    console.log(data);
    params.api.setRowData(data);
  } )
}

}
