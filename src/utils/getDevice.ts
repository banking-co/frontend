import { Device, Platform } from "store/models";

const getUserAgent = () => navigator.userAgent || navigator.vendor;
const checkIsAndroid = () => /android/i.test(getUserAgent());
const checkIsIOS = () => /iPad|iPhone|iPod/.test(getUserAgent());
const checkIsMacOS = () => /Mac/i.test(getUserAgent()) && !checkIsIOS();
const checkIsWindows = () =>
  /Win(dows)?/i.test(getUserAgent()) || /windows phone/i.test(getUserAgent());

export const getDevice = (): Device => {
  if (checkIsWindows() || checkIsMacOS()) {
    return Device.Desktop;
  }

  return Device.Mobile;
};

export const getPlatform = (): Platform => {
  if (checkIsIOS() || checkIsMacOS()) {
    return Platform.iOS;
  }

  if (checkIsAndroid() || checkIsWindows()) {
    return Platform.Android;
  }

  return Platform.Android;
};
