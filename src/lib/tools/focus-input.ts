export function focusInput(htmlInputElement: HTMLInputElement | null) {
  if (htmlInputElement) {
    setTimeout(() => {
      htmlInputElement.focus();
    }, 0);
  }
}
