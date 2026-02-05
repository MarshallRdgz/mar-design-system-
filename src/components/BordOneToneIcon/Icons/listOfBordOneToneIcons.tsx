import { ComponentProps, FunctionComponent } from 'react';
import { BORD_ONE_TONE_ICONS } from '../BordOneToneIcon.types';
import BordActivityIcon from './BordActivityIcon';
import BordAirplayIcon from './BordAirplayIcon';
import BordAlertCircleWarningIcon from './BordAlertCircleWarningIcon';
import BordAlertOctagonWarningIcon from './BordAlertOctagonWarningIcon';
import BordAlertTriangleWarningIcon from './BordAlertTriangleWarningIcon';
import BordAlignCenterIcon from './BordAlignCenterIcon';
import BordAlignJustifyIcon from './BordAlignJustifyIcon';
import BordAlignLeftIcon from './BordAlignLeftIcon';
import BordAlignRightIcon from './BordAlignRightIcon';
import BordAnchorIcon from './BordAnchorIcon';
import BordApertureIcon from './BordApertureIcon';
import BordArchiveIcon from './BordArchiveIcon';
import BordArrowDownCircleIcon from './BordArrowDownCircleIcon';
import BordArrowDownLeftIcon from './BordArrowDownLeftIcon';
import BordArrowDownRightIcon from './BordArrowDownRightIcon';
import BordArrowDownIcon from './BordArrowDownIcon';
import BordArrowLeftCircleIcon from './BordArrowLeftCircleIcon';
import BordArrowLeftIcon from './BordArrowLeftIcon';
import BordArrowRightCircleIcon from './BordArrowRightCircleIcon';
import BordArrowRightIcon from './BordArrowRightIcon';
import BordArrowUpCircleIcon from './BordArrowUpCircleIcon';
import BordArrowUpLeftIcon from './BordArrowUpLeftIcon';
import BordArrowUpRightIcon from './BordArrowUpRightIcon';
import BordArrowUpIcon from './BordArrowUpIcon';
import BordAtSignIcon from './BordAtSignIcon';
import BordAwardIcon from './BordAwardIcon';
import BordBarChart2Icon from './BordBarChart2Icon';
import BordBarChartIcon from './BordBarChartIcon';
import BordBarCode2Icon from './BordBarCode2Icon';
import BordBatteryChargingIcon from './BordBatteryChargingIcon';
import BordBatteryIcon from './BordBatteryIcon';
import BordBluetoothIcon from './BordBluetoothIcon';
import BordBoldIcon from './BordBoldIcon';
import BordBookOpenIcon from './BordBookOpenIcon';
import BordBookIcon from './BordBookIcon';
import BordBookmarkIcon from './BordBookmarkIcon';
import BordBordIcon from './BordBordIcon';
import BordBoxIcon from './BordBoxIcon';
import BordBriefcaseIcon from './BordBriefcaseIcon';
import BordBuilding3Icon from './BordBuilding3Icon';
import BordCalendarIcon from './BordCalendarIcon';
import BordCameraOffIcon from './BordCameraOffIcon';
import BordCameraIcon from './BordCameraIcon';
import BordCastIcon from './BordCastIcon';
import BordCheckCircleIcon from './BordCheckCircleIcon';
import BordCheckSquareIcon from './BordCheckSquareIcon';
import BordCheckIcon from './BordCheckIcon';
import BordChevronsDownIcon from './BordChevronsDownIcon';
import BordChevronsLeftIcon from './BordChevronsLeftIcon';
import BordChevronsRightIcon from './BordChevronsRightIcon';
import BordChevronsUpIcon from './BordChevronsUpIcon';
import BordChromeIcon from './BordChromeIcon';
import BordCircleIcon from './BordCircleIcon';
import BordClipboardIcon from './BordClipboardIcon';
import BordClockIcon from './BordClockIcon';
import BordCloudDrizzleIcon from './BordCloudDrizzleIcon';
import BordCloudLightningIcon from './BordCloudLightningIcon';
import BordCloudOffIcon from './BordCloudOffIcon';
import BordCloudRainIcon from './BordCloudRainIcon';
import BordCloudSnowIcon from './BordCloudSnowIcon';
import BordCloudIcon from './BordCloudIcon';
import BordCodeIcon from './BordCodeIcon';
import BordCodepenIcon from './BordCodepenIcon';
import BordCodesandboxIcon from './BordCodesandboxIcon';
import BordCoffeeIcon from './BordCoffeeIcon';
import BordColumnsIcon from './BordColumnsIcon';
import BordCommandIcon from './BordCommandIcon';
import BordCompassIcon from './BordCompassIcon';
import BordCopyIcon from './BordCopyIcon';
import BordCornerDownLeftIcon from './BordCornerDownLeftIcon';
import BordCornerDownRightIcon from './BordCornerDownRightIcon';
import BordCornerLeftDownIcon from './BordCornerLeftDownIcon';
import BordCornerLeftUpIcon from './BordCornerLeftUpIcon';
import BordCornerRightDownIcon from './BordCornerRightDownIcon';
import BordCornerRightUpIcon from './BordCornerRightUpIcon';
import BordCornerUpLeftIcon from './BordCornerUpLeftIcon';
import BordCornerUpRightIcon from './BordCornerUpRightIcon';
import BordCpuIcon from './BordCpuIcon';
import BordCreditCardIcon from './BordCreditCardIcon';
import BordCropIcon from './BordCropIcon';
import BordCrosshairIcon from './BordCrosshairIcon';
import BordDatabaseIcon from './BordDatabaseIcon';
import BordDeleteIcon from './BordDeleteIcon';
import BordDiscIcon from './BordDiscIcon';
import BordDollarSignIcon from './BordDollarSignIcon';
import BordDownloadCloudIcon from './BordDownloadCloudIcon';
import BordDownloadIcon from './BordDownloadIcon';
import BordDropletIcon from './BordDropletIcon';
import BordEdit2Icon from './BordEdit2Icon';
import BordEdit3Icon from './BordEdit3Icon';
import BordEditIcon from './BordEditIcon';
import BordExternalLinkIcon from './BordExternalLinkIcon';
import BordEyeOffIcon from './BordEyeOffIcon';
import BordEyeIcon from './BordEyeIcon';
import BordFacebookIcon from './BordFacebookIcon';
import BordFastForwardIcon from './BordFastForwardIcon';
import BordFeatherIcon from './BordFeatherIcon';
import BordFigma1Icon from './BordFigma1Icon';
import BordFigmaIcon from './BordFigmaIcon';
import BordFileMinusIcon from './BordFileMinusIcon';
import BordFilePlusIcon from './BordFilePlusIcon';
import BordFileTextIcon from './BordFileTextIcon';
import BordFileIcon from './BordFileIcon';
import BordFilmIcon from './BordFilmIcon';
import BordFilterMailCircleIcon from './BordFilterMailCircleIcon';
import BordFilterIcon from './BordFilterIcon';
import BordFlagIcon from './BordFlagIcon';
import BordFolderMinusIcon from './BordFolderMinusIcon';
import BordFolderPlusIcon from './BordFolderPlusIcon';
import BordFolderIcon from './BordFolderIcon';
import BordFramerIcon from './BordFramerIcon';
import BordFrownIcon from './BordFrownIcon';
import BordGiftIcon from './BordGiftIcon';
import BordGitBranchIcon from './BordGitBranchIcon';
import BordGitCommitIcon from './BordGitCommitIcon';
import BordGitPullRequestIcon from './BordGitPullRequestIcon';
import BordGithubIcon from './BordGithubIcon';
import BordGitlabIcon from './BordGitlabIcon';
import BordGlobeIcon from './BordGlobeIcon';
import BordGridIcon from './BordGridIcon';
import BordHardDriveIcon from './BordHardDriveIcon';
import BordHashIcon from './BordHashIcon';
import BordHeadphonesIcon from './BordHeadphonesIcon';
import BordHeartIcon from './BordHeartIcon';
import BordHelpCircleIcon from './BordHelpCircleIcon';
import BordHexagonIcon from './BordHexagonIcon';
import BordHomeIcon from './BordHomeIcon';
import BordImageIcon from './BordImageIcon';
import BordInboxIcon from './BordInboxIcon';
import BordInfoIcon from './BordInfoIcon';
import BordInstagramIcon from './BordInstagramIcon';
import BordItalicIcon from './BordItalicIcon';
import BordKeyIcon from './BordKeyIcon';
import BordLayersIcon from './BordLayersIcon';
import BordLayoutIcon from './BordLayoutIcon';
import BordLifeBuoyIcon from './BordLifeBuoyIcon';
import BordLink2Icon from './BordLink2Icon';
import BordLinkIcon from './BordLinkIcon';
import BordLinkedinIcon from './BordLinkedinIcon';
import BordListIcon from './BordListIcon';
import BordLoaderIcon from './BordLoaderIcon';
import BordLockIcon from './BordLockIcon';
import BordLogInIcon from './BordLogInIcon';
import BordLogOutIcon from './BordLogOutIcon';
import BordMailIcon from './BordMailIcon';
import BordMapIcon from './BordMapIcon';
import BordMaximize2Icon from './BordMaximize2Icon';
import BordMaximizeIcon from './BordMaximizeIcon';
import BordMehIcon from './BordMehIcon';
import BordMenuIcon from './BordMenuIcon';
import BordMessageCircleIcon from './BordMessageCircleIcon';
import BordMessageSquareIcon from './BordMessageSquareIcon';
import BordMicOffIcon from './BordMicOffIcon';
import BordMicIcon from './BordMicIcon';
import BordMinimize2Icon from './BordMinimize2Icon';
import BordMinimizeIcon from './BordMinimizeIcon';
import BordMinusCircleIcon from './BordMinusCircleIcon';
import BordMinusSquareIcon from './BordMinusSquareIcon';
import BordMinusIcon from './BordMinusIcon';
import BordMonitorIcon from './BordMonitorIcon';
import BordMoonIcon from './BordMoonIcon';
import BordMoreHorizontalIcon from './BordMoreHorizontalIcon';
import BordMoreVerticalIcon from './BordMoreVerticalIcon';
import BordMousePointerIcon from './BordMousePointerIcon';
import BordMoveIcon from './BordMoveIcon';
import BordMusicIcon from './BordMusicIcon';
import BordNavigation2Icon from './BordNavigation2Icon';
import BordNavigationIcon from './BordNavigationIcon';
import BordNotificationOffIcon from './BordNotificationOffIcon';
import BordNotificationIcon from './BordNotificationIcon';
import BordOctagonIcon from './BordOctagonIcon';
import BordPackageIcon from './BordPackageIcon';
import BordPaperclipIcon from './BordPaperclipIcon';
import BordPauseCircleIcon from './BordPauseCircleIcon';
import BordPauseIcon from './BordPauseIcon';
import BordPenToolIcon from './BordPenToolIcon';
import BordPercentIcon from './BordPercentIcon';
import BordPhoneCallIcon from './BordPhoneCallIcon';
import BordPhoneForwardedIcon from './BordPhoneForwardedIcon';
import BordPhoneIncomingIcon from './BordPhoneIncomingIcon';
import BordPhoneMissedIcon from './BordPhoneMissedIcon';
import BordPhoneOffIcon from './BordPhoneOffIcon';
import BordPhoneOutgoingIcon from './BordPhoneOutgoingIcon';
import BordPhoneIcon from './BordPhoneIcon';
import BordPieChartIcon from './BordPieChartIcon';
import BordPlayCircleIcon from './BordPlayCircleIcon';
import BordPlayIcon from './BordPlayIcon';
import BordPlusCircleIcon from './BordPlusCircleIcon';
import BordPlusSquareIcon from './BordPlusSquareIcon';
import BordPlusIcon from './BordPlusIcon';
import BordPocketIcon from './BordPocketIcon';
import BordPowerIcon from './BordPowerIcon';
import BordPrinterIcon from './BordPrinterIcon';
import BordRadioIcon from './BordRadioIcon';
import BordRefreshCcwIcon from './BordRefreshCcwIcon';
import BordRefreshCwIcon from './BordRefreshCwIcon';
import BordRepeatIcon from './BordRepeatIcon';
import BordRewindIcon from './BordRewindIcon';
import BordRotateCcwIcon from './BordRotateCcwIcon';
import BordRotateCwIcon from './BordRotateCwIcon';
import BordRssIcon from './BordRssIcon';
import BordSaveIcon from './BordSaveIcon';
import BordScissorsIcon from './BordScissorsIcon';
import BordSearchIcon from './BordSearchIcon';
import BordSendIcon from './BordSendIcon';
import BordServerIcon from './BordServerIcon';
import BordSettingsIcon from './BordSettingsIcon';
import BordShare2Icon from './BordShare2Icon';
import BordShareIcon from './BordShareIcon';
import BordShieldOffIcon from './BordShieldOffIcon';
import BordShieldIcon from './BordShieldIcon';
import BordShoppingBagIcon from './BordShoppingBagIcon';
import BordShoppingCartIcon from './BordShoppingCartIcon';
import BordShuffleIcon from './BordShuffleIcon';
import BordSidebarIcon from './BordSidebarIcon';
import BordSkipBackIcon from './BordSkipBackIcon';
import BordSkipForwardIcon from './BordSkipForwardIcon';
import BordSlackIcon from './BordSlackIcon';
import BordSlashIcon from './BordSlashIcon';
import BordSlidersIcon from './BordSlidersIcon';
import BordSmartphoneIcon from './BordSmartphoneIcon';
import BordSmileIcon from './BordSmileIcon';
import BordSpeakerIcon from './BordSpeakerIcon';
import BordSquareIcon from './BordSquareIcon';
import BordStarIcon from './BordStarIcon';
import BordStopCircleIcon from './BordStopCircleIcon';
import BordSunIcon from './BordSunIcon';
import BordSunriseIcon from './BordSunriseIcon';
import BordSunsetIcon from './BordSunsetIcon';
import BordTabletIcon from './BordTabletIcon';
import BordTagIcon from './BordTagIcon';
import BordTargetIcon from './BordTargetIcon';
import BordTerminalIcon from './BordTerminalIcon';
import BordThermometerIcon from './BordThermometerIcon';
import BordThumbsDownIcon from './BordThumbsDownIcon';
import BordThumbsUpIcon from './BordThumbsUpIcon';
import BordToggleLeftIcon from './BordToggleLeftIcon';
import BordToggleRightIcon from './BordToggleRightIcon';
import BordToolIcon from './BordToolIcon';
import BordTrash2Icon from './BordTrash2Icon';
import BordTrashIcon from './BordTrashIcon';
import BordTrelloIcon from './BordTrelloIcon';
import BordTrendingDownIcon from './BordTrendingDownIcon';
import BordTrendingUpIcon from './BordTrendingUpIcon';
import BordTriangleIcon from './BordTriangleIcon';
import BordTruckIcon from './BordTruckIcon';
import BordTvIcon from './BordTvIcon';
import BordTwitchIcon from './BordTwitchIcon';
import BordTwitterIcon from './BordTwitterIcon';
import BordTypeIcon from './BordTypeIcon';
import BordUmbrellaIcon from './BordUmbrellaIcon';
import BordUnderlineIcon from './BordUnderlineIcon';
import BordUnlockIcon from './BordUnlockIcon';
import BordUploadCloudIcon from './BordUploadCloudIcon';
import BordUploadIcon from './BordUploadIcon';
import BordUserAddIcon from './BordUserAddIcon';
import BordUserCheckIcon from './BordUserCheckIcon';
import BordUserMinusIcon from './BordUserMinusIcon';
import BordUserPlusIcon from './BordUserPlusIcon';
import BordUserRemoveIcon from './BordUserRemoveIcon';
import BordUserXIcon from './BordUserXIcon';
import BordUserIcon from './BordUserIcon';
import BordUsersIcon from './BordUsersIcon';
import BordVideoOffIcon from './BordVideoOffIcon';
import BordVideoIcon from './BordVideoIcon';
import BordVoicemailIcon from './BordVoicemailIcon';
import BordVolume1Icon from './BordVolume1Icon';
import BordVolume2Icon from './BordVolume2Icon';
import BordVolumeXIcon from './BordVolumeXIcon';
import BordVolumeIcon from './BordVolumeIcon';
import BordWatchIcon from './BordWatchIcon';
import BordWifiOffIcon from './BordWifiOffIcon';
import BordWifiIcon from './BordWifiIcon';
import BordWindIcon from './BordWindIcon';
import BordWipingIcon from './BordWipingIcon';
import BordXCircleIcon from './BordXCircleIcon';
import BordXOctagonIcon from './BordXOctagonIcon';
import BordXSquareIcon from './BordXSquareIcon';
import BordXIcon from './BordXIcon';
import BordYoutubeIcon from './BordYoutubeIcon';
import BordZapOffIcon from './BordZapOffIcon';
import BordZapIcon from './BordZapIcon';
import BordZoomInIcon from './BordZoomInIcon';
import BordZoomOutIcon from './BordZoomOutIcon';
import BordMapPinIcon from './BordMapPinIcon';
import BordArrowHeadUpIcon from './BordArrowHeadUpIcon';
import BordArrowHeadLeftIcon from './BordArrowHeadLeftIcon';
import BordArrowHeadRightIcon from './BordArrowHeadRightIcon';
import BordArrowHeadDownIcon from './BordArrowHeadDownIcon';
import BordLogoMaster from './BordLogoMaster';

export const listOfBordOneToneIcons: {
  [key in BORD_ONE_TONE_ICONS]: FunctionComponent<ComponentProps<'svg'>>;
} = {
  activity: BordActivityIcon,
  airplay: BordAirplayIcon,
  alertCircleWarning: BordAlertCircleWarningIcon,
  alertOctagonWarning: BordAlertOctagonWarningIcon,
  alertTriangleWarning: BordAlertTriangleWarningIcon,
  alignCenter: BordAlignCenterIcon,
  alignJustify: BordAlignJustifyIcon,
  alignLeft: BordAlignLeftIcon,
  alignRight: BordAlignRightIcon,
  anchor: BordAnchorIcon,
  aperture: BordApertureIcon,
  archive: BordArchiveIcon,
  arrowDownCircle: BordArrowDownCircleIcon,
  arrowDownLeft: BordArrowDownLeftIcon,
  arrowDownRight: BordArrowDownRightIcon,
  arrowDown: BordArrowDownIcon,
  arrowLeftCircle: BordArrowLeftCircleIcon,
  arrowLeft: BordArrowLeftIcon,
  arrowRightCircle: BordArrowRightCircleIcon,
  arrowRight: BordArrowRightIcon,
  arrowUpCircle: BordArrowUpCircleIcon,
  arrowUpLeft: BordArrowUpLeftIcon,
  arrowUpRight: BordArrowUpRightIcon,
  arrowUp: BordArrowUpIcon,
  atSign: BordAtSignIcon,
  award: BordAwardIcon,
  barChart2: BordBarChart2Icon,
  barChart: BordBarChartIcon,
  barCode2: BordBarCode2Icon,
  batteryCharging: BordBatteryChargingIcon,
  battery: BordBatteryIcon,
  bluetooth: BordBluetoothIcon,
  bold: BordBoldIcon,
  bookOpen: BordBookOpenIcon,
  book: BordBookIcon,
  bookmark: BordBookmarkIcon,
  bord: BordBordIcon,
  box: BordBoxIcon,
  briefcase: BordBriefcaseIcon,
  building3: BordBuilding3Icon,
  calendar: BordCalendarIcon,
  cameraOff: BordCameraOffIcon,
  camera: BordCameraIcon,
  cast: BordCastIcon,
  checkCircle: BordCheckCircleIcon,
  checkSquare: BordCheckSquareIcon,
  check: BordCheckIcon,
  chevronsDown: BordChevronsDownIcon,
  chevronsLeft: BordChevronsLeftIcon,
  chevronsRight: BordChevronsRightIcon,
  chevronsUp: BordChevronsUpIcon,
  chrome: BordChromeIcon,
  circle: BordCircleIcon,
  clipboard: BordClipboardIcon,
  clock: BordClockIcon,
  cloudDrizzle: BordCloudDrizzleIcon,
  cloudLightning: BordCloudLightningIcon,
  cloudOff: BordCloudOffIcon,
  cloudRain: BordCloudRainIcon,
  cloudSnow: BordCloudSnowIcon,
  cloud: BordCloudIcon,
  code: BordCodeIcon,
  codepen: BordCodepenIcon,
  codesandbox: BordCodesandboxIcon,
  coffee: BordCoffeeIcon,
  columns: BordColumnsIcon,
  command: BordCommandIcon,
  compass: BordCompassIcon,
  copy: BordCopyIcon,
  cornerDownLeft: BordCornerDownLeftIcon,
  cornerDownRight: BordCornerDownRightIcon,
  cornerLeftDown: BordCornerLeftDownIcon,
  cornerLeftUp: BordCornerLeftUpIcon,
  cornerRightDown: BordCornerRightDownIcon,
  cornerRightUp: BordCornerRightUpIcon,
  cornerUpLeft: BordCornerUpLeftIcon,
  cornerUpRight: BordCornerUpRightIcon,
  cpu: BordCpuIcon,
  creditCard: BordCreditCardIcon,
  crop: BordCropIcon,
  crosshair: BordCrosshairIcon,
  database: BordDatabaseIcon,
  delete: BordDeleteIcon,
  disc: BordDiscIcon,
  dollarSign: BordDollarSignIcon,
  downloadCloud: BordDownloadCloudIcon,
  download: BordDownloadIcon,
  droplet: BordDropletIcon,
  edit2: BordEdit2Icon,
  edit3: BordEdit3Icon,
  edit: BordEditIcon,
  externalLink: BordExternalLinkIcon,
  eyeOff: BordEyeOffIcon,
  eye: BordEyeIcon,
  facebook: BordFacebookIcon,
  fastForward: BordFastForwardIcon,
  feather: BordFeatherIcon,
  figma1: BordFigma1Icon,
  figma: BordFigmaIcon,
  fileMinus: BordFileMinusIcon,
  filePlus: BordFilePlusIcon,
  fileText: BordFileTextIcon,
  file: BordFileIcon,
  film: BordFilmIcon,
  filterMailCircle: BordFilterMailCircleIcon,
  filter: BordFilterIcon,
  flag: BordFlagIcon,
  folderMinus: BordFolderMinusIcon,
  folderPlus: BordFolderPlusIcon,
  folder: BordFolderIcon,
  framer: BordFramerIcon,
  frown: BordFrownIcon,
  gift: BordGiftIcon,
  gitBranch: BordGitBranchIcon,
  gitCommit: BordGitCommitIcon,
  gitPullRequest: BordGitPullRequestIcon,
  github: BordGithubIcon,
  gitlab: BordGitlabIcon,
  globe: BordGlobeIcon,
  grid: BordGridIcon,
  hardDrive: BordHardDriveIcon,
  hash: BordHashIcon,
  headphones: BordHeadphonesIcon,
  heart: BordHeartIcon,
  helpCircle: BordHelpCircleIcon,
  hexagon: BordHexagonIcon,
  home: BordHomeIcon,
  image: BordImageIcon,
  inbox: BordInboxIcon,
  info: BordInfoIcon,
  instagram: BordInstagramIcon,
  italic: BordItalicIcon,
  key: BordKeyIcon,
  layers: BordLayersIcon,
  layout: BordLayoutIcon,
  lifeBuoy: BordLifeBuoyIcon,
  link2: BordLink2Icon,
  link: BordLinkIcon,
  linkedin: BordLinkedinIcon,
  list: BordListIcon,
  loader: BordLoaderIcon,
  lock: BordLockIcon,
  logIn: BordLogInIcon,
  logOut: BordLogOutIcon,
  logoMaster: BordLogoMaster,
  mail: BordMailIcon,
  mapPin: BordMapPinIcon,
  map: BordMapIcon,
  maximize2: BordMaximize2Icon,
  maximize: BordMaximizeIcon,
  meh: BordMehIcon,
  menu: BordMenuIcon,
  messageCircle: BordMessageCircleIcon,
  messageSquare: BordMessageSquareIcon,
  micOff: BordMicOffIcon,
  mic: BordMicIcon,
  minimize2: BordMinimize2Icon,
  minimize: BordMinimizeIcon,
  minusCircle: BordMinusCircleIcon,
  minusSquare: BordMinusSquareIcon,
  minus: BordMinusIcon,
  monitor: BordMonitorIcon,
  moon: BordMoonIcon,
  moreHorizontal: BordMoreHorizontalIcon,
  moreVertical: BordMoreVerticalIcon,
  mousePointer: BordMousePointerIcon,
  move: BordMoveIcon,
  music: BordMusicIcon,
  navigation2: BordNavigation2Icon,
  navigation: BordNavigationIcon,
  notificationOff: BordNotificationOffIcon,
  notification: BordNotificationIcon,
  octagon: BordOctagonIcon,
  package: BordPackageIcon,
  paperclip: BordPaperclipIcon,
  pauseCircle: BordPauseCircleIcon,
  pause: BordPauseIcon,
  penTool: BordPenToolIcon,
  percent: BordPercentIcon,
  phoneCall: BordPhoneCallIcon,
  phoneForwarded: BordPhoneForwardedIcon,
  phoneIncoming: BordPhoneIncomingIcon,
  phoneMissed: BordPhoneMissedIcon,
  phoneOff: BordPhoneOffIcon,
  phoneOutgoing: BordPhoneOutgoingIcon,
  phone: BordPhoneIcon,
  pieChart: BordPieChartIcon,
  playCircle: BordPlayCircleIcon,
  play: BordPlayIcon,
  plusCircle: BordPlusCircleIcon,
  plusSquare: BordPlusSquareIcon,
  plus: BordPlusIcon,
  pocket: BordPocketIcon,
  power: BordPowerIcon,
  printer: BordPrinterIcon,
  radio: BordRadioIcon,
  refreshCcw: BordRefreshCcwIcon,
  refreshCw: BordRefreshCwIcon,
  repeat: BordRepeatIcon,
  rewind: BordRewindIcon,
  rotateCcw: BordRotateCcwIcon,
  rotateCw: BordRotateCwIcon,
  rss: BordRssIcon,
  save: BordSaveIcon,
  scissors: BordScissorsIcon,
  search: BordSearchIcon,
  send: BordSendIcon,
  server: BordServerIcon,
  settings: BordSettingsIcon,
  share2: BordShare2Icon,
  share: BordShareIcon,
  shieldOff: BordShieldOffIcon,
  shield: BordShieldIcon,
  shoppingBag: BordShoppingBagIcon,
  shoppingCart: BordShoppingCartIcon,
  shuffle: BordShuffleIcon,
  sidebar: BordSidebarIcon,
  skipBack: BordSkipBackIcon,
  skipForward: BordSkipForwardIcon,
  slack: BordSlackIcon,
  slash: BordSlashIcon,
  sliders: BordSlidersIcon,
  smartphone: BordSmartphoneIcon,
  smile: BordSmileIcon,
  speaker: BordSpeakerIcon,
  square: BordSquareIcon,
  star: BordStarIcon,
  stopCircle: BordStopCircleIcon,
  sun: BordSunIcon,
  sunrise: BordSunriseIcon,
  sunset: BordSunsetIcon,
  tablet: BordTabletIcon,
  tag: BordTagIcon,
  target: BordTargetIcon,
  terminal: BordTerminalIcon,
  thermometer: BordThermometerIcon,
  thumbsDown: BordThumbsDownIcon,
  thumbsUp: BordThumbsUpIcon,
  toggleLeft: BordToggleLeftIcon,
  toggleRight: BordToggleRightIcon,
  tool: BordToolIcon,
  trash2: BordTrash2Icon,
  trash: BordTrashIcon,
  trello: BordTrelloIcon,
  trendingDown: BordTrendingDownIcon,
  trendingUp: BordTrendingUpIcon,
  triangle: BordTriangleIcon,
  truck: BordTruckIcon,
  tv: BordTvIcon,
  twitch: BordTwitchIcon,
  twitter: BordTwitterIcon,
  type: BordTypeIcon,
  umbrella: BordUmbrellaIcon,
  underline: BordUnderlineIcon,
  unlock: BordUnlockIcon,
  uploadCloud: BordUploadCloudIcon,
  upload: BordUploadIcon,
  userAdd: BordUserAddIcon,
  userCheck: BordUserCheckIcon,
  userMinus: BordUserMinusIcon,
  userPlus: BordUserPlusIcon,
  userRemove: BordUserRemoveIcon,
  userX: BordUserXIcon,
  user: BordUserIcon,
  users: BordUsersIcon,
  videoOff: BordVideoOffIcon,
  video: BordVideoIcon,
  voicemail: BordVoicemailIcon,
  volume1: BordVolume1Icon,
  volume2: BordVolume2Icon,
  volumeX: BordVolumeXIcon,
  volume: BordVolumeIcon,
  watch: BordWatchIcon,
  wifiOff: BordWifiOffIcon,
  wifi: BordWifiIcon,
  wind: BordWindIcon,
  wiping: BordWipingIcon,
  xCircle: BordXCircleIcon,
  xOctagon: BordXOctagonIcon,
  xSquare: BordXSquareIcon,
  x: BordXIcon,
  youtube: BordYoutubeIcon,
  zapOff: BordZapOffIcon,
  zap: BordZapIcon,
  zoomIn: BordZoomInIcon,
  zoomOut: BordZoomOutIcon,
  arrowHeadUp: BordArrowHeadUpIcon,
  arrowHeadLeft: BordArrowHeadLeftIcon,
  arrowHeadRight: BordArrowHeadRightIcon,
  arrowHeadDown: BordArrowHeadDownIcon,
};
