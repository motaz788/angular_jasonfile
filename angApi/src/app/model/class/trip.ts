export interface Trip {
    id: number;
    image:string,
    imagetitle:string,
    title:string,
    destination : string;
    pricePerPerson: number;
    description: string;
    included: string[];
    languageOptions:string[],
  }
  
  export interface TripsResponse {
    trips: Trip[];
  }