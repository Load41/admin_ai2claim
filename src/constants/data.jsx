import { Link } from "react-router-dom";
import { svgIcons } from "./icons";
import { companyOne, companyTwo, manWorkerFive } from "./imageData";

export const trackingDasboardColumns = [
  {
    title: 'Load ID',
    dataIndex: 'LoadID',
    key: 'LoadID',
  },
  {
    title: 'Track ID',
    dataIndex: 'TrackID',
    key: 'TrackID',
  },
  {
    title: 'Broker',
    dataIndex: 'Broker',
    key: 'Broker',
  },
  {
    title: 'Origin',
    key: 'Origin',
    dataIndex: 'Origin',
  },
  {
    title: 'Pickup Date',
    key: 'PickupDate',
    dataIndex: 'PickupDate',
  },
  {
    title: 'Destination',
    key: 'Destination',
    dataIndex: 'Destination',
  },
  {
    title: 'Drop Date',
    key: 'DropDate',
    dataIndex: 'DropDate',
  },
  {
    title: 'Current Location',
    key: 'CurrentLocation',
    dataIndex: 'CurrentLocation',
  },
  {
    title: 'Status',
    key: 'Status',
    dataIndex: 'Status',
  },
  {
    title: 'Action',
    key: 'Action',
    dataIndex: 'Action',
  },
];
export const trackingDasboardData = [
  {
    key: '1',
    LoadID: '32098',
    TrackID: '8762311',
    Broker: 'Tim Cook',
    Origin: "Sedilia, MO",
    PickupDate: "2024-07-24",
    Destination: "Omele,NE",
    DropDate: "24-08-2024",
    CurrentLocation: "Sedilia",
    Status: "Not-started",
    Action: <div className="d-flex align-items-center gap-4">
      <Link to="/">{svgIcons.mapIcon}</Link>
      <Link to="/">{svgIcons.chatIcon}</Link>
      <Link to="/">{svgIcons.pencilIcon}</Link>
      <Link to="/">{svgIcons.deleteIcon}</Link>
    </div>
  },
  {
    key: '2',
    LoadID: '32098',
    TrackID: '8762311',
    Broker: 'Tim Cook',
    Origin: "Sedilia, MO",
    PickupDate: "2024-07-24",
    Destination: "Omele,NE",
    DropDate: "24-08-2024",
    CurrentLocation: "Sedilia",
    Status: "Not-started",
    Action: <div className="d-flex align-items-center gap-4">
      <Link to="/">{svgIcons.mapIcon}</Link>
      <Link to="/">{svgIcons.chatIcon}</Link>
      <Link to="/">{svgIcons.pencilIcon}</Link>
      <Link to="/">{svgIcons.deleteIcon}</Link>
    </div>
  },
  {
    key: '3',
    LoadID: '32098',
    TrackID: '8762311',
    Broker: 'Tim Cook',
    Origin: "Sedilia, MO",
    PickupDate: "2024-07-24",
    Destination: "Omele,NE",
    DropDate: "24-08-2024",
    CurrentLocation: "Sedilia",
    Status: "Not-started",
    Action: <div className="d-flex align-items-center gap-4">
      <Link to="/">{svgIcons.mapIcon}</Link>
      <Link to="/">{svgIcons.chatIcon}</Link>
      <Link to="/">{svgIcons.pencilIcon}</Link>
      <Link to="/">{svgIcons.deleteIcon}</Link>
    </div>
  },
  {
    key: '4',
    LoadID: '32098',
    TrackID: '8762311',
    Broker: 'Tim Cook',
    Origin: "Sedilia, MO",
    PickupDate: "2024-07-24",
    Destination: "Omele,NE",
    DropDate: "24-08-2024",
    CurrentLocation: "Sedilia",
    Status: "Not-started",
    Action: <div className="d-flex align-items-center gap-4">
      <Link to="/">{svgIcons.mapIcon}</Link>
      <Link to="/">{svgIcons.chatIcon}</Link>
      <Link to="/">{svgIcons.pencilIcon}</Link>
      <Link to="/">{svgIcons.deleteIcon}</Link>
    </div>
  },
  {
    key: '5',
    LoadID: '32098',
    TrackID: '8762311',
    Broker: 'Tim Cook',
    Origin: "Sedilia, MO",
    PickupDate: "2024-07-24",
    Destination: "Omele,NE",
    DropDate: "24-08-2024",
    CurrentLocation: "Sedilia",
    Status: "Not-started",
    Action: <div className="d-flex align-items-center gap-4">
      <Link to="/">{svgIcons.mapIcon}</Link>
      <Link to="/">{svgIcons.chatIcon}</Link>
      <Link to="/">{svgIcons.pencilIcon}</Link>
      <Link to="/">{svgIcons.deleteIcon}</Link>
    </div>
  },
  {
    key: '6',
    LoadID: '32098',
    TrackID: '8762311',
    Broker: 'Tim Cook',
    Origin: "Sedilia, MO",
    PickupDate: "2024-07-24",
    Destination: "Omele,NE",
    DropDate: "24-08-2024",
    CurrentLocation: "Sedilia",
    Status: "Not-started",
    Action: <div className="d-flex align-items-center gap-4">
      <Link to="/">{svgIcons.mapIcon}</Link>
      <Link to="/">{svgIcons.chatIcon}</Link>
      <Link to="/">{svgIcons.pencilIcon}</Link>
      <Link to="/">{svgIcons.deleteIcon}</Link>
    </div>
  },
];

export const managementCardData = [
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "250",
    projectsPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "251",
    projectsPending: "21",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "252",
    projectsPending: "22",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "253",
    projectsPending: "23",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "254",
    projectsPending: "24",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]
export const crewCardData = [
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "255",
    projectsPending: "25",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "256",
    projectsPending: "26",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "257",
    projectsPending: "27",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "258",
    projectsPending: "28",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "259",
    projectsPending: "29",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]
export const clientsCardData = [
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "260",
    projectsPending: "60",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "261",
    projectsPending: "61",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "262",
    projectsPending: "62",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "263",
    projectsPending: "63",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "264",
    projectsPending: "64",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]
export const projectCardSwiperBreakPoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  576: {
    slidesPerView: 1.2,
    spaceBetween: 10,
  },
  767: {
    slidesPerView: 1.6,
    spaceBetween: 15,
  },
  992: {
    slidesPerView: 2.2,
    spaceBetween: 15,
  },
  1200: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  1366: {
    slidesPerView: 2.1,
    spaceBetween: 15,
  },
  1600: {
    slidesPerView: 2.4,
    spaceBetween: 20,
  },
  1680: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  1900: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
};

export const managementListData = [
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "250",
    projectsPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "251",
    projectsPending: "21",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "252",
    projectsPending: "22",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "253",
    projectsPending: "23",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "254",
    projectsPending: "24",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "260",
    projectsPending: "60",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "261",
    projectsPending: "61",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "262",
    projectsPending: "62",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "263",
    projectsPending: "63",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "264",
    projectsPending: "64",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]

export const crewListData = [
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "260",
    projectsPending: "60",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "261",
    projectsPending: "61",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "262",
    projectsPending: "62",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "263",
    projectsPending: "63",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "264",
    projectsPending: "64",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "250",
    projectsPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "251",
    projectsPending: "21",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "252",
    projectsPending: "22",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "253",
    projectsPending: "23",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "254",
    projectsPending: "24",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]

export const clientListData = [
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "263",
    projectsPending: "63",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "264",
    projectsPending: "64",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "262",
    projectsPending: "62",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "260",
    projectsPending: "60",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "261",
    projectsPending: "61",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "250",
    projectsPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "251",
    projectsPending: "21",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "252",
    projectsPending: "22",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "253",
    projectsPending: "23",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "254",
    projectsPending: "24",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]

export const managementListPendingData = [
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "263",
    projectsPending: "63",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "264",
    projectsPending: "64",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "262",
    projectsPending: "62",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "260",
    projectsPending: "60",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "261",
    projectsPending: "61",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "250",
    projectsPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "251",
    projectsPending: "21",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "252",
    projectsPending: "22",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "253",
    projectsPending: "23",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "254",
    projectsPending: "24",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]

export const crewListPendingData = [
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "260",
    projectsPending: "60",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "261",
    projectsPending: "61",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "262",
    projectsPending: "62",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "263",
    projectsPending: "63",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "264",
    projectsPending: "64",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "250",
    projectsPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "251",
    projectsPending: "21",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "252",
    projectsPending: "22",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "253",
    projectsPending: "23",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "254",
    projectsPending: "24",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]

export const clientListPendingData = [
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "263",
    projectsPending: "63",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "264",
    projectsPending: "64",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "262",
    projectsPending: "62",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "260",
    projectsPending: "60",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "261",
    projectsPending: "61",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Andy",
    projectsDone: "250",
    projectsPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Tom",
    projectsDone: "251",
    projectsPending: "21",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "252",
    projectsPending: "22",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "253",
    projectsPending: "23",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    name: "Massy Doklad",
    projectsDone: "254",
    projectsPending: "24",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]

export const crewRejectedListData = [
  {
    img: companyOne,
    projectName: "ROOFLINE",
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    projectsReason: "in sufficient details due it, we are unable to process the request. in sufficient details due it, we are unable to process the request.",
    projectDone: "257",
    projectPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyTwo,
    projectName: "ROOFLINE",
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    projectsReason: "in sufficient details due it, we are unable to process the request. in sufficient details due it, we are unable to process the request.",
    projectDone: "257",
    projectPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: manWorkerFive,
    projectName: "ROOFLINE",
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    projectsReason: "in sufficient details due it, we are unable to process the request. in sufficient details due it, we are unable to process the request.",
    projectDone: "257",
    projectPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]

export const managementRejectedListData = [
  {
    img: companyTwo,
    projectName: "ROOFLINE",
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    projectsReason: "in sufficient details due it, we are unable to process the request. in sufficient details due it, we are unable to process the request.",
    projectDone: "257",
    projectPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
  {
    img: companyOne,
    projectName: "ROOFLINE",
    ratingProjectData: [
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
      { icon: svgIcons.starIcon },
    ],
    projectsReason: "in sufficient details due it, we are unable to process the request. in sufficient details due it, we are unable to process the request.",
    projectDone: "257",
    projectPending: "20",
    address: "1006 W Centennial Rd, Papillion, NE 68046, United States."
  },
]
