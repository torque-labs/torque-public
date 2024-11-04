# Torque Drawer

## Overview

The Torque Drawer is a component that displays a list of available offers and campaigns for the user. It allows users to track their progress, claim rewards, and complete requirements.

## Usage

To use the Torque Drawer, simply import it into your application and render it in your page. (Also ensure that you've set up the TorqueProvider already as a parent to the drawer.)

```tsx
import "@torque-labs/torque-ui/styles.css";
import { TorqueDrawer } from "@torque-labs/torque-ui";

function MyApp() {
  return (
    <div>
      <h1>My Solana App</h1>

      <TorqueDrawer buttonClassName="text-base" buttonLabel="Open Torque" />
    </div>
  );
}
```

### Props

| Prop            | Type   | Description                                                           |
| --------------- | ------ | --------------------------------------------------------------------- |
| buttonClassName | string | Additional class names to apply to the button which opens the drawer. |
| buttonLabel     | string | The label of the button which opens the drawer.                       |
