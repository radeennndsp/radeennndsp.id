async function getMessages(locale: string) {
  try {
    const messages = await import(`@/message/${locale}.json`);
    return messages.default;
  } catch {
    console.warn(`Locale file not found for: ${locale}, fallback ke English`);
    const fallback = await import(`@/messages/en.json`);
    return fallback.default;
  }
}
