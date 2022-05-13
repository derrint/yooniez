export const copyToClipboard = (text: string) => {
  if (typeof text === 'string') {
    navigator.clipboard.writeText(text);
  }
};
