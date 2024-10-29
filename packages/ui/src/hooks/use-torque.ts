import { useContext } from "react";

import { TorqueContext } from "#/providers";

/**
 * The useTorque hook returns the Torque context.
 *
 * @returns The Torque context
 */
export function useTorque() {
  const context = useContext(TorqueContext);

  if (context === undefined) {
    throw new Error("useTorque must be used within an TorqueProvider");
  }

  return context;
}
