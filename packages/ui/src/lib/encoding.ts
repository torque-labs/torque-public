/**
 * Converts a base64 string to a Uint8Array
 *
 * @param base64 - The base64 encoded string to convert
 *
 * @returns A Uint8Array containing the decoded binary data
 */
export function base64ToUint8Array(base64: string) {
  const binaryString = atob(base64);

  const encoder = new TextEncoder();

  const uIntArray = encoder.encode(binaryString);

  return uIntArray;
}
