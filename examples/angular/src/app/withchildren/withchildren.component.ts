import { Component, Input } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';

@Component({
  selector: 'app-withchildren',
  templateUrl: './withchildren.component.html',
  styleUrls: ['./withchildren.component.css']
})
export class WithchildrenComponent {

  @Input()
  name = '';

  @Input()
  builderBlock = null;

  @Input()
  builderState = null;

  @Input()
  sectionA = null;

  @Input()
  sectionB = null;

}

BuilderBlock({
  tag: 'WithchildrenComponent',
  name: 'With Children Component',
  canHaveChildren: true,
  inputs: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'sectionA',
      type: 'blocks',
      hideFromUI: true,
      helperText: 'This is an editable region where you can drag and drop blocks.',
      defaultValue: [
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Text',
            options: {
              text: 'Section A Editable in Builder...',
            },
          },
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              flexShrink: '0',
              boxSizing: 'border-box',
              marginTop: '20px',
              lineHeight: 'normal',
              height: 'auto',
              textAlign: 'center',
            },
          },
        },
      ],
    },
    {
      name: 'sectionB',
      type: 'blocks',
      hideFromUI: true,
      helperText: 'This is an editable region where you can drag and drop blocks.',
      defaultValue: [
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Text',
            options: {
              text: 'Section B Editable in Builder...',
            },
          },
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              flexShrink: '0',
              boxSizing: 'border-box',
              marginTop: '20px',
              lineHeight: 'normal',
              height: 'auto',
              textAlign: 'center',
            },
          },
        },
      ],
    },
  ],
})(WithchildrenComponent);
