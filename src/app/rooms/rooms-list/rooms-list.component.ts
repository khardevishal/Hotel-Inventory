//import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { RoomList } from './room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  @Output() deletedRoom = new EventEmitter<RoomList>();
  
  selectRoom(room: RoomList)
  {
    this.selectedRoom.emit(room);
  }

  deleteRoom(room: RoomList)
  {
    this.deletedRoom.emit(room);
  }
}
