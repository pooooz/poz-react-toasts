import warningIcon from 'assets/icons/warning.svg';
import errorIcon from 'assets/icons/error.svg';
import infoIcon from 'assets/icons/info.svg';
import successIcon from 'assets/icons/success.svg';

export const iconsMap = new Map<ToastType, string>([
  ['info', infoIcon],
  ['warning', warningIcon],
  ['error', errorIcon],
  ['success', successIcon],
]);
