import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headingText = 'Exercise – Bootstrap Panel';
  content = [
    {
      heading: 'Lorem ipsum dolor sit amet.',
      body: `Consectetur adipiscing elit. Donec non purus vitae sapien ultricies semper. Fusce ut sapien laoreet,
        pretium ligula nec, consectetur elit. Suspendisse aliquam placerat scelerisque. Nunc vel viverra enim.
        Pellentesque ullamcorper sapien vehicula felis tristique tempus. Donec vitae massa nec massa placerat
        elementum at ut urna. Mauris at mauris consectetur, faucibus augue a, dictum purus. Nulla et erat id
        ipsum condimentum ullamcorper. Quisque ac nunc nisl. Curabitur ut malesuada risus. Nam fermentum aliquam
        nulla sit amet aliquet. Fusce finibus venenatis nulla at hendrerit. Nulla et vulputate arcu.`
    },
    {
      heading: 'Aliquam eleifend quis orci dignissim faucibus.',
      body: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam sit
        amet egestas urna, eu tristique elit. Sed varius id nisi vel volutpat. Mauris libero metus, viverra sed
        eros nec, elementum tristique diam. Pellentesque ac malesuada sem. Proin a turpis faucibus, lacinia justo
        nec, commodo elit. Sed lobortis mauris ornare ipsum tempor, sit amet pellentesque enim ultrices.`
    }
  ];
}
