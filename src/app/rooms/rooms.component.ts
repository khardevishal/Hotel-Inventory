import { Component, OnInit } from '@angular/core';
import { RoomList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent{
  availableRooms = 3;

  selectedRoom!: RoomList;

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Luxury Room",
      ammenities: "Free WiFi, 24*7 Water",
      checkInTime: new Date('11-Nov-2020'),
      price: 500
    },
    {
      roomNumber: 2,
      roomType: "Deluxe Room",
      ammenities: "Free WiFi, 24*7 Water",
      checkInTime: new Date('1-Nov-2020'),
      price: 1000
    },
    {
      roomNumber: 3,
      roomType: "Economy Room",
      ammenities: "Free WiFi, 24*7 Water",
      checkInTime: new Date('31-Nov-2020'),
      price: 300
    }
  ]

  selectRoom(room: RoomList)
  {
    this.selectedRoom = room;
  }

  addRoom()
  {
    const room1: RoomList = {
        roomNumber: 4,
        roomType: "Economy Room",
        ammenities: "Free WiFi, 24*7 Water",
        checkInTime: new Date('05-Nov-2020'),
        price: 2000
    }

    this.roomList.push(room1);
  }

  roomNo!: number;
  roomTy!: string;  
  amme!: string;
  checkIn!: Date;
  pri!: number;


  addYourRoom()
  {
    const addRoom: RoomList = {
      roomNumber: this.roomNo,
      roomType: this.roomTy,
      ammenities: this.amme,
      checkInTime: this.checkIn,
      price: this.pri
    }

    this.roomList.push(addRoom);
  }


  deleteRoom(room: RoomList)
  {
    const index = this.roomList.indexOf(room);
    this.roomList.splice(index, 1);
    console.log(index);
  }
}
