import { Component } from '@angular/core';
import { XanoClient, XanoSessionStorage } from  "@xano/js-sdk";
import { ERealtimeAction } from '@xano/js-sdk/lib/enums/realtime-action';

import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
  
})
export class ChatComponent {
  private xanoClient: XanoClient;
  messages: any;


  constructor() {
    this.xanoClient = new XanoClient({
     
      apiGroupBaseUrl: 'https://x8ki-letl-twmt.n7.xano.io/api:GCTaLgRn',
      realtimeConnectionHash: 'kouv6Rn-R-C-aY-B5L51v-KODtY',
   
    });
  }
  ngOnInit()
   {   
   
    
    this.xanoClient.setDataSource("live");
const channel = this.xanoClient.channel("chatroom");


this.xanoClient.get("https://x8ki-letl-twmt.n7.xano.io/api:GCTaLgRn/messages", {
	sort_by:  "message",
}).then(
	(response) => {
		// Success!
	},
	(error) => {
		// Failure
	}
);
this.xanoClient.post("https://x8ki-letl-twmt.n7.xano.io/api:GCTaLgRn/messages", {
	
}).then(
	(response) => {
		// Success!
	},
	(error) => {
		// Failure
	}
);




// Listening to all events

channel.on(function(action: any) {
	console.log("Received action", action);
});
channel.on(ERealtimeAction.Message,(action:any) => { console.log("Success", action);},(error:any) => {console.log("Failed" ,error)});
channel.history();
channel.message({ message: "Hello world!" });

  }
  
  
}

