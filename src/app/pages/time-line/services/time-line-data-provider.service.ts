import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Truck } from '../models/truck.interface';
import { Order } from '../models/order.interface';

@Injectable()
export class TimeLineDataProviderService {

  constructor() { }

  getAllTruck(): Observable<Truck[]> {
    return of(
      truckList.map(item => (<Truck>{
        assignedOrderId: item.assignedOrderId,
        name: item.name
      }))
    );
  }

  getAllOrders(): Observable<Order[]> {
    return of(
      ordersList.map(item => (<Order>{
        id: item.id,
        from: item.from,
        to: item.to
      }))
    );
  }
}


const truckList: any[] = [
  { "name": "OOF692", "assignedOrderId": ["order1", "order2"] },
  { "name": "KYX004", "assignedOrderId": ["order3", "order4", "order5", "order6", "order7", "order8"] },
  { "name": "CDC185", "assignedOrderId": ["order9", "order10", "order11"] },
  { "name": "JMB997", "assignedOrderId": ["order12", "order13", "order14", "order15", "order16"] },
  { "name": "DYE397", "assignedOrderId": ["order17", "order18", "order19", "order20"] },
  { "name": "ROW576", "assignedOrderId": ["order21", "order22"] },
  { "name": "OOZ206", "assignedOrderId": ["order23", "order24", "order25", "order26"] },
  { "name": "OGM882", "assignedOrderId": ["order27", "order28", "order29", "order30", "order31", "order32"] },
  { "name": "QSQ484", "assignedOrderId": ["order33", "order34", "order35"] },
  { "name": "EQR450", "assignedOrderId": ["order36", "order37", "order38", "order39"] },
  { "name": "ACA134", "assignedOrderId": ["order40", "order41", "order42", "order43", "order44"] },
  { "name": "NOK463", "assignedOrderId": ["order45", "order46"] },
  { "name": "PDK346", "assignedOrderId": ["order47", "order48", "order49", "order50", "order51"] },
  { "name": "HHA961", "assignedOrderId": ["order52", "order53", "order54", "order55"] },
  { "name": "DGS431", "assignedOrderId": ["order56", "order57", "order58", "order59", "order60"] },
  { "name": "ZCA919", "assignedOrderId": ["order61", "order62", "order63"] },
  { "name": "RLY023", "assignedOrderId": ["order64", "order65", "order66", "order67", "order68"] },
  { "name": "RLY024", "assignedOrderId": ["order69"] },
  { "name": "RLY025", "assignedOrderId": ["order70"] },
  { "name": "RLY026", "assignedOrderId": ["order71"] },
  { "name": "RLY027", "assignedOrderId": ["order72"] },
  { "name": "RLY028", "assignedOrderId": ["order73"] },
  { "name": "RLY029", "assignedOrderId": ["order74"] },
  { "name": "RLY334", "assignedOrderId": ["order75"] },
  { "name": "RLY054", "assignedOrderId": ["order76"] },
  { "name": "RLY044", "assignedOrderId": ["order77"] },
  { "name": "RLY034", "assignedOrderId": ["order78"] },


  
];

const ordersList: any[] = [
  { "id": "order1", "from": "2020.02.01 10:00:00", "to": "2020.02.01 18:35:00" },
  { "id": "order2", "from": "2020.02.01 19:27:00", "to": "2020.02.02 04:22:00" },
  { "id": "order3", "from": "2020.02.01 10:00:00", "to": "2020.02.02 01:20:00" },
  { "id": "order4", "from": "2020.02.02 02:09:00", "to": "2020.02.02 09:11:00" },
  { "id": "order5", "from": "2020.02.02 10:26:00", "to": "2020.02.03 08:18:00" },
  { "id": "order6", "from": "2020.02.03 09:52:00", "to": "2020.02.04 09:10:00" },
  { "id": "order7", "from": "2020.02.04 11:32:00", "to": "2020.02.04 22:59:00" },
  { "id": "order8", "from": "2020.02.04 23:31:00", "to": "2020.02.05 09:18:00" },
  { "id": "order9", "from": "2020.02.01 16:00:00", "to": "2020.02.02 12:57:00" },
  { "id": "order10", "from": "2020.12.02 15:52:00", "to": "2020.12.03 14:40:00" },
  { "id": "order11", "from": "2020.02.03 18:24:00", "to": "2020.02.04 07:11:00" },
  { "id": "order12", "from": "2020.02.01 07:00:00", "to": "2020.02.01 19:37:00" },
  { "id": "order13", "from": "2020.02.01 22:22:00", "to": "2020.02.02 08:02:00" },
  { "id": "order14", "from": "2020.02.02 08:45:00", "to": "2020.02.03 02:03:00" },
  { "id": "order15", "from": "2020.02.03 03:06:00", "to": "2020.02.03 18:22:00" },
  { "id": "order16", "from": "2020.02.03 20:32:00", "to": "2020.02.04 13:03:00" },
  { "id": "order17", "from": "2020.02.01 12:00:00", "to": "2020.02.02 08:29:00" },
  { "id": "order18", "from": "2020.02.02 11:12:00", "to": "2020.02.02 22:44:00" },
  { "id": "order19", "from": "2020.02.03 01:16:00", "to": "2020.02.03 15:06:00" },
  { "id": "order20", "from": "2020.02.03 19:08:00", "to": "2020.02.04 15:49:00" },
  { "id": "order21", "from": "2020.02.01 09:00:00", "to": "2020.02.01 20:47:00" },
  { "id": "order22", "from": "2020.02.02 00:27:00", "to": "2020.02.02 17:32:00" },
  { "id": "order23", "from": "2020.02.01 12:00:00", "to": "2020.02.01 20:31:00" },
  { "id": "order24", "from": "2020.02.01 23:04:00", "to": "2020.02.02 10:38:00" },
  { "id": "order25", "from": "2020.02.02 12:49:00", "to": "2020.02.03 06:02:00" },
  { "id": "order26", "from": "2020.02.03 08:33:00", "to": "2020.02.04 03:04:00" },
  { "id": "order27", "from": "2020.02.01 15:00:00", "to": "2020.02.02 07:30:00" },
  { "id": "order28", "from": "2020.02.02 12:06:00", "to": "2020.02.03 09:31:00" },
  { "id": "order29", "from": "2020.02.03 14:20:00", "to": "2020.02.04 03:58:00" },
  { "id": "order30", "from": "2020.02.04 07:56:00", "to": "2020.02.05 02:18:00" },
  { "id": "order31", "from": "2020.02.05 05:57:00", "to": "2020.02.05 13:51:00" },
  { "id": "order32", "from": "2020.02.05 16:07:00", "to": "2020.02.06 02:32:00" },
  { "id": "order33", "from": "2020.02.01 13:00:00", "to": "2020.02.02 05:57:00" },
  { "id": "order34", "from": "2020.02.02 07:30:00", "to": "2020.02.03 06:38:00" },
  { "id": "order35", "from": "2020.02.03 07:35:00", "to": "2020.02.03 17:12:00" },
  { "id": "order36", "from": "2020.02.01 11:00:00", "to": "2020.02.02 04:35:00" },
  { "id": "order37", "from": "2020.02.02 09:22:00", "to": "2020.02.02 20:10:00" },
  { "id": "order38", "from": "2020.02.02 21:22:00", "to": "2020.02.03 06:30:00" },
  { "id": "order39", "from": "2020.02.03 07:30:00", "to": "2020.02.04 05:51:00" },
  { "id": "order40", "from": "2020.02.01 14:00:00", "to": "2020.02.02 04:15:00" },
  { "id": "order41", "from": "2020.02.02 07:23:00", "to": "2020.02.02 16:50:00" },
  { "id": "order42", "from": "2020.02.02 21:49:00", "to": "2020.02.03 13:57:00" },
  { "id": "order43", "from": "2020.02.03 15:14:00", "to": "2020.02.04 11:54:00" },
  { "id": "order44", "from": "2020.02.04 15:01:00", "to": "2020.02.05 14:00:00" },
  { "id": "order45", "from": "2020.02.01 07:00:00", "to": "2020.02.01 19:51:00" },
  { "id": "order46", "from": "2020.02.01 23:03:00", "to": "2020.02.02 08:39:00" },
  { "id": "order47", "from": "2020.02.01 11:00:00", "to": "2020.02.02 01:05:00" },
  { "id": "order48", "from": "2020.02.02 04:26:00", "to": "2020.02.02 17:05:00" },
  { "id": "order49", "from": "2020.02.02 19:50:00", "to": "2020.02.03 09:52:00" },
  { "id": "order50", "from": "2020.02.03 11:01:00", "to": "2020.02.03 21:24:00" },
  { "id": "order51", "from": "2020.02.04 02:24:00", "to": "2020.02.04 20:23:00" },
  { "id": "order52", "from": "2020.02.01 12:00:00", "to": "2020.02.02 06:56:00" },
  { "id": "order53", "from": "2020.02.02 10:36:00", "to": "2020.02.03 03:30:00" },
  { "id": "order54", "from": "2020.02.03 06:11:00", "to": "2020.02.03 14:07:00" },
  { "id": "order55", "from": "2020.02.03 17:52:00", "to": "2020.02.04 07:53:00" },
  { "id": "order56", "from": "2020.09.01 15:00:00", "to": "2020.09.02 01:58:00" },
  { "id": "order57", "from": "2020.02.02 05:20:00", "to": "2020.02.02 20:39:00" },
  { "id": "order58", "from": "2020.02.02 23:21:00", "to": "2020.02.03 11:38:00" },
  { "id": "order59", "from": "2020.02.03 14:48:00", "to": "2020.02.04 06:36:00" },
  { "id": "order60", "from": "2020.02.04 10:13:00", "to": "2020.02.05 09:07:00" },
  { "id": "order61", "from": "2020.02.01 12:00:00", "to": "2020.02.02 10:30:00" },
  { "id": "order62", "from": "2020.06.02 11:42:00", "to": "2020.06.03 00:57:00" },
  { "id": "order63", "from": "2020.02.03 05:59:00", "to": "2020.02.03 14:41:00" },
  { "id": "order64", "from": "2020.02.01 13:00:00", "to": "2020.02.02 03:51:00" },
  { "id": "order65", "from": "2020.02.02 07:01:00", "to": "2020.02.03 05:48:00" },
  { "id": "order66", "from": "2020.02.03 08:06:00", "to": "2020.02.03 18:17:00" },
  { "id": "order67", "from": "2020.02.03 20:48:00", "to": "2020.02.04 11:16:00" },
  { "id": "order68", "from": "2020.05.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order69", "from": "2020.05.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order70", "from": "2020.05.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order71", "from": "2020.05.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order72", "from": "2020.05.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order73", "from": "2020.05.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order74", "from": "2020.01.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order75", "from": "2020.01.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order76", "from": "2020.01.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order77", "from": "2020.01.04 15:58:00", "to": "2020.05.05 07:01:00" },
  { "id": "order78", "from": "2020.01.04 15:58:00", "to": "2020.05.05 07:01:00" },
];