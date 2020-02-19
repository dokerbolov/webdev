export interface Product
{
  name:string,
  rating:number,
  description:string,
  image:string,
  link:string
}

export const products = [
  {
    name: 'CHUWI LapBook',
    rating: 5,
    description: 'CHUWI LapBook Pro 14.1 Inch Intel Gemini-Lake N4100 Quad Core 8GB RAM 256GB SSD Windows 10 Laptop with Backlit Keyboard',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/H1a2f0a43af2542f9bb7d213311613fe4T/CHUWI-LapBook-Pro-14-1-Inch-Intel-Gemini-Lake-N4100-Quad-Core-8GB-RAM-256GB-SSD.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/32982839253.html?spm=a2g0o.tm75989.9778834960.3.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=04821a81-168d-4cea-90b7-848145ce1ba0'
  },
  {
    name: 'Drawing Digital Tablet',
    rating: 4.9,
    // tslint:disable-next-line: max-line-length
    description: 'GAOMON PD1161 IPS HD Graphics Drawing Digital Tablet Monitor Pen Display with 8 Shortcut Keys & 8192 levels Battery-Free Pen',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/HTB1nlnda3aH3KVjSZFjq6AFWpXaD/GAOMON-PD1161-IPS-HD-Graphics-Drawing-Digital-Tablet-Monitor-Pen-Display-with-8-Shortcut-Keys-8192.jpg_50x50.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/33028093884.html?spm=a2g0o.tm75989.9778834960.5.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=04821a81-168d-4cea-90b7-848145ce1ba0'
  },
  {
    name: 'Home Camera',
    rating: 5.0,
    // tslint:disable-next-line: max-line-length
    description: 'Fake Dummy Camera Outdoor Waterproof Home Camera Solar Power Simulation Camera With LED light Security Surveillance',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/Hd759df371c2b4448a558e965f7a820fdL/Fake-Dummy-Camera-Outdoor-Waterproof-Home-Camera-Solar-Power-Simulation-Camera-With-LED-light-Security-Surveillance.jpg_50x50.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/4000262471010.html?spm=a2g0o.tm75989.9778834960.16.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=96a704ba-f1ed-4d4e-b32d-cf8d2e5793c1'
  },
  {
    name: 'Electric Aroma',
    rating: 4.6,
    // tslint:disable-next-line: max-line-length
    description: 'KBAYBO 300ml USB Electric Aroma air diffuser wood grain Ultrasonic air humidifier cool mist maker with 7 colors lights for home',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/H8278edadf403495296daaa6bf83e33f3F/KBAYBO-300ml-USB-Electric-Aroma-air-diffuser-wood-grain-Ultrasonic-air-humidifier-cool-mist-maker-with.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/32857808886.html?spm=a2g0o.tm75989.9778834960.7.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=5d159167-6214-4437-a9ee-d771090db91e'
  },
  {
    name: 'RAM',
    rating: 4.8,
    // tslint:disable-next-line: max-line-length
    description: 'Original Kingston HyperX FURY DDR4 2666MHz 8GB 16GB Desktop RAM Memory CL16 DIMM 288-pin Desktop Internal Memory For Gaming',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/HTB1j_NWKCzqK1RjSZFjq6zlCFXay/Original-Kingston-HyperX-FURY-DDR4-2666MHz-8GB-16GB-Desktop-RAM-Memory-CL16-DIMM-288-pin-Desktop.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/32981048419.html?spm=a2g0o.tm75989.1124449980.2.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=3ea0df9f-5a11-4417-af07-341b5b0fd91c'
  },
  {
    name: 'Graphic Video Card',
    rating: 4.6,
    // tslint:disable-next-line: max-line-length
    description: 'Original GPU Veineda Graphics Cards HD6450 2GB DDR3 HDMI Graphic Video Card PCI Express For ATI Radeon Gaming',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/HTB1EAU_llUSMeJjy1zjq6A0dXXaj/Original-GPU-Veineda-Graphics-Cards-HD6450-2GB-DDR3-HDMI-Graphic-Video-Card-PCI-Express-For-ATI.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/32836727694.html?spm=a2g0o.tm75989.1124449980.1.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=3ea0df9f-5a11-4417-af07-341b5b0fd91c'
  },
  {
    name: 'Gaming Mouse',
    rating: 4.9,
    // tslint:disable-next-line: max-line-length
    description: 'PICTEK PC257 Gaming Mouse Wired 12000 DPI Ergonomic Mouse USB With RGB Backlit 10 Programmable Buttons For Computer Gamer Mice',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/H3cd52e1659e94d3e9bd2a29d6669ebb6H/PICTEK-PC257-Gaming-Mouse-Wired-12000-DPI-Ergonomic-Mouse-USB-With-RGB-Backlit-10-Programmable-Buttons.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/4000171337345.html?spm=a2g0o.tm75989.6574424220.4.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=a282bcf4-ebc4-4059-83ad-d7514682175d'
  },
  {
    name: 'Card Memory',
    rating: 4.9,
    // tslint:disable-next-line: max-line-length
    description: 'SanDisk Micro SD Card Memory Card 16GB 32GB 64GB 128GB MicroSD Max 80M/s Uitra C10 TF card C4 8G cartao de memoria',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/HTB15onlj7KWBuNjy1zjq6AOypXaW/SanDisk-Micro-SD-Card-Memory-Card-16GB-32GB-64GB-128GB-MicroSD-Max-80M-s-Uitra-C10.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/32740307068.html?spm=a2g0o.tm75989.5294439650.1.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=bb54ab23-5d53-49e4-a541-675c4ccde657'
  },
  {
    name: 'Hair Dryer',
    rating: 4.6,
    // tslint:disable-next-line: max-line-length
    description: 'SHUNLIFA 2200W Powerful Professional Hair Dryer Tools Dryer Negative Ion Hair Dryers Electric Blow Dryer Hot / Cold Air Blower',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/Hf158d24b4e5e47479c8e42a02b4e628dm/SHUNLIFA-2200W-Powerful-Professional-Hair-Dryer-Tools-Dryer-Negative-Ion-Hair-Dryers-Electric-Blow-Dryer-Hot.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/4000287033783.html?spm=a2g0o.tm75989.6538008180.7.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=0b75e4f3-cb7f-4a9a-a137-cb8e3a056f1e'
  },
  {
    name: 'Stickers',
    rating: 4.6,
    // tslint:disable-next-line: max-line-length
    description: '100Pcs Custom Stickers Cartoon Sticker Cute Sticker Scrapbooking Stationery Label Sticker Laptop Sticker Bike Bomb Sticker Girls',
    // tslint:disable-next-line: max-line-length
    image: 'https://ae01.alicdn.com/kf/Hb0a7091bff7d44688541e073d2a919ffm/100Pcs-Custom-Stickers-Cartoon-Sticker-Cute-Sticker-Scrapbooking-Stationery-Label-Sticker-Laptop-Sticker-Bike-Bomb-Sticker.jpg',
    // tslint:disable-next-line: max-line-length
    link: 'https://www.aliexpress.com/item/4000267735960.html?spm=a2g0o.tm75989.1540578180.9.2f0428dc0SHqgg&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=0da3d642-cb91-4199-8c17-3b29c34c1c0b'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
