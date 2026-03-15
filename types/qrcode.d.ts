declare module 'qrcode' {
  interface QRCodeToDataURLOptions {
    width?: number;
    margin?: number;
    color?: { dark?: string; light?: string };
  }
  function toDataURL(content: string, options?: QRCodeToDataURLOptions): Promise<string>;
}
