import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  icons = [
    {
      name: 'Notification',
      img: 'assets/Notification Gray.jpg',
    },
    {
      name: 'Security',
      //img: 'assets/Security Gray.jpg'
    },
    {
      name: 'Theme',
      //img: 'assets/Them.jpg'
    },
    {
      name: 'Chat Wallpaper',
      //img: 'assets/Them.jpg'
    },
    {
      name: 'Blocked',
      //img: 'assets/Them.jpg'
    },
    {
      name: 'Desktop Settings',
      //img: 'assets/Them.jpg'
    },
    {
      name: 'Keyboard Shortcuts',
      //img: 'assets/Them.jpg'
    },
    {
      name: 'Help',
      //img: 'assets/Them.jpg'
    }
  ];
}
