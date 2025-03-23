# Torque Drawer

The easiest way to add Torque functionality to your application is to use the `TorqueDrawer` component that comes bundled inside of the Torque UI library.&#x20;

A user will be able to:

- View available offers/campaigns
- Track their progress
- Complete requirements
- Claim rewards

### Usage

To use the Torque Drawer, simply import it into your application and render it in your page. (Also ensure that you've set up the `TorqueProvider` already as a parent to the drawer.)

```tsx
import "@torque-labs/torque-ui/index.css";
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

#### Props

| Prop            | Type   | Description                                                           |
| --------------- | ------ | --------------------------------------------------------------------- |
| buttonClassName | string | Additional class names to apply to the button which opens the drawer. |
| buttonLabel     | string | The label of the button which opens the drawer.                       |
