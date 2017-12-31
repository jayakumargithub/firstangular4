import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent {

 authors = ['Author1', 'Author2', 'Author3'];

 onSave($event) {
   $event.stopPropagation();
   console.log( $event.target.value + '....');
 }

 onDivClicked() {
  console.log('Div was clicked');
}
}
