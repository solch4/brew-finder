export interface APIBrewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1?: string;
  address_2?: string;
  address_3: any;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude?: string;
  latitude?: string;
  phone?: string;
  website_url?: string;
  state: string;
  street?: string;
}

export interface Brewery {
  id: string;
  name: string;
  phone: string;
  street: string;
}
