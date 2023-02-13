# Awesome UI Lib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0.

# Installation

This is how to install the components:

```bash
npm install @ziggymusician/awesome-ui
```

or

```bash
yarn add @ziggymusician/awesome-ui
```

And on your application module:

```ts
import { AuiCardModule } from '@ziggymusician/awesome-ui';

@NgModule({
  declarations: [ ...],
  imports: [
    BrowserModule,
    ....,
    AuiCardModule
],
})
export class AppModule { }
```

# Using the Awesome UI Card Component

In your template, use the component as below:

```html
<aui-card
  icon="icon.svg"
  title="Title here"
  width="300px"
  height="400px"
></aui-card>
```

Inheriting the width/height from the parent container:

```html
<div style="width: 300px; height: 350px;">
  <aui-card icon="icon.svg" title="Title here"></aui-card>
</div>
```

Set as active Card (has hover effect):

```html
<aui-card
  icon="icon.svg"
  title="Title here"
  width="300px"
  height="400px"
  [isActive]="true"
></aui-card>
```

Apply hover effect to all cards (not only `active`):

```html
<aui-card
  icon="icon.svg"
  title="Title here"
  width="300px"
  height="400px"
  [isActive]="true"
  [isHoverOnlyActive]="false"
></aui-card>
```

Listen to the button/link click event:

```html
<aui-card
  icon="icon.svg"
  title="Title here"
  width="300px"
  height="400px"
  [isActive]="true"
  [isHoverOnlyActive]="false"
  (cardClick)="onMoreInfo()"
></aui-card>
```

# License

[MIT](https://opensource.org/licenses/MIT)
