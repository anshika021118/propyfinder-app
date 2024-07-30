import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropyfinderService } from 'src/app/services/propyfinder.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {
  property=[];
  imageUrls=[];
  imagesLoaded=false;
  property_id: number;


  constructor(private route: ActivatedRoute,private propService:PropyfinderService) { }
  // properties: any[] = [
  //   { developer:"DLF" ,properties: 'DLF ULTIMA', bhk: '3BHK-2BHK', priceRange: '3CR-5CR',location:"Sector 81, Gurgaon" },
  //   { developer:"DLF" ,properties: 'DLF SKYCOURT', bhk: '2BHK-3BHK', priceRange: '1CR-2CR',location:"Sector 86, Gurgaon" },
  //   { developer:"M3M",properties: 'M3M ANTALYA HILLS', bhk: '2BHK-4BHK', priceRange: '1CR-4CR',location:"Sector 79, Gurgaon" },
  //   { developer:"Indiabulls Infraestate",properties: 'Indiabulls Golf City', bhk: '1BHK-4BHK', priceRange: '35.48L-1.64Cr' },
  //   { developer:"Godrej Properties",properties: 'Godrej Grandeur', bhk: '3BHK', priceRange: '2.22 Cr-2.40 Cr',location:"Sector 106, Gurgaon" },
  //   { developer:"DLF",properties: 'DLF The Primus', bhk: '3BHK-4BHK', priceRange: '2.22 Cr-2.40 Cr',location:"Sector 82A, Gurgaon" },
  //   { developer:"DLF",properties: 'DLF Independent Floors At DLF City Phase III', bhk: '4BHK', priceRange: '4Cr-6.5Cr',location:"Sector 24, Gurgaon" },
  //   { developer:"Godrej Properties",properties: 'Godrej River Royale', bhk: '3BHK-4BHK', priceRange: '2.5Cr-3.41Cr',location:"Mahalunge, Pune" },
  //   { developer:"Indiabulls Infraestate",properties: 'Indiabulls Golf City', bhk: '1BHK-4BHK', priceRange: '35.48L-1.64Cr',location:"Khopoli, Mumbai " },
  //   { developer:"DLF",properties: 'DLF The Arbour', bhk: '4BHK', priceRange: '7.70Cr-8.01Cr',location:"Sector 63, Gurgaon" },
  //   { developer:"DLF",properties: 'DLF Imperial Residences', bhk: '4BHK', priceRange: '4.53Cr-6.24Cr',location:"Sector 24, Gurgaon" },
  //   { developer:"Omaxe Limited",properties: 'Omaxe The Grand Centaurien', bhk: '2BHK-4BHK', priceRange: '59.85L-1.09Cr',location:"Zone L Dwarka, Delhi" }
  // ];

    
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.property_id = params['properties?'];
      console.log("propertyName",this.property_id);
    });
    this.getPropertyImagesList(this.property_id);
    this.getProperty(this.property_id);

  }

  getProperty(property_id:number){
    this.propService.getPropertyById(property_id).subscribe(
      (apiResponse:any[])=>{
        this.property = apiResponse;
        console.log("mainPropertiesList$", this.property); // Print the list after loading the data      
      },
      ()=>{
        console.log("Error fething data");
      }

    )
  }

  getPropertyImagesList(property_id:number){
    this.propService.getPropertyImageById(property_id).subscribe(
      (apiResponse:any[])=>{
        this.imageUrls = apiResponse;
        console.log("ImageUrl", this.imageUrls); // Print the list after loading the data     
        this.imagesLoaded=true; 
      },
      ()=>{
        console.log("Error fething data");
      },
      ()=>{
        
      }

    )
  }



}
