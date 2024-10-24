/**
 * Convert base64 to Uint8Array
 *
 * @param base64 - A base64 encoded string
 *
 * @returns A Uint8Array of the decoded data
 */
export function base64ToUint8Array(base64: string) {
  const binaryString = Buffer.from(base64, "base64").toString("binary");
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
