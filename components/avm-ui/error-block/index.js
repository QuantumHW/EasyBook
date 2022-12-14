var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// packages/avm-ui/src/components/error-block/error-block.less
var error_block_default = ".adm-error-block {\n  box-sizing: border-box;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 16px;\n  background: #fff;\n}\n.adm-error-block-image {\n  max-width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.adm-error-block-description {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.adm-error-block-description-title {\n  line-height: 1.4;\n  font-size: 15px;\n  color: #999;\n}\n.adm-error-block-description-subtitle {\n  line-height: 1.4;\n  font-size: 12px;\n  color: #999;\n  margin-top: 8px;\n}\n.adm-error-block-content {\n  margin-top: 12px;\n}\n.adm-error-block-full-page {\n  margin-top: 45%;\n}\n.adm-error-block-full-page-description {\n  margin-top: 20px;\n  font-size: 13px;\n}\n.adm-error-block-full-page-description-title {\n  font-size: 20px;\n  color: #333;\n}\n";

// packages/avm-ui/src/utils/format-label.tsx
var checkLabelType = (ele) => {
  return Object.prototype.toString.call(ele);
};
var formatLabel = (ele, cls, style = {}) => {
  if (checkLabelType(ele) === "[object Array]") {
    return ele.map((el) => {
      return formatLabel(el, cls, style);
    });
  }
  return checkLabelType(ele) === "[object String]" ? <span className={cls} style={style}>{ele}</span> : <div className={cls} style={style}>{ele}</div>;
};

// packages/avm-ui/src/components/icon/icon.config.json
var fontName = "avm-icon";

// packages/avm-ui/src/utils/tag.ts
function tag(name) {
  return function(target) {
    avm.define(name, target);
  };
}

// packages/avm-ui/src/components/icon/icons.json
var icons = {
  AaOutline: "\uEA01",
  AddCircleOutline: "\uEA02",
  AddOutline: "\uEA03",
  AddressBookFill: "\uEA04",
  AddSquareOutline: "\uEA05",
  AlipayCircleFill: "\uEA06",
  AlipaySquareFill: "\uEA07",
  AntOutline: "\uEA08",
  ApiCloudlogo: "\uEA09",
  AppOutline: "\uEA0A",
  AppstoreOutline: "\uEA0B",
  ArrowDownCircleOutline: "\uEA0C",
  ArrowsAltOutline: "\uEA0D",
  AudioFill: "\uEA0E",
  AudioMutedOutline: "\uEA0F",
  AudioOutline: "\uEA10",
  BankcardOutline: "\uEA11",
  BellMuteOutline: "\uEA12",
  BellOutline: "\uEA13",
  BillOutline: "\uEA14",
  CalculatorOutline: "\uEA15",
  CalendarOutline: "\uEA16",
  CameraOutline: "\uEA17",
  ChatAddOutline: "\uEA18",
  ChatCheckOutline: "\uEA19",
  ChatWrongOutline: "\uEA1A",
  CheckCircleFill: "\uEA1B",
  CheckCircleOutline: "\uEA1C",
  CheckOutline: "\uEA1D",
  CheckShieldFill: "\uEA1E",
  CheckShieldOutline: "\uEA1F",
  ClockCircleFill: "\uEA20",
  ClockCircleOutline: "\uEA21",
  CloseCircleFill: "\uEA22",
  CloseCircleOutline: "\uEA23",
  CloseOutline: "\uEA24",
  CloseShieldOutline: "\uEA25",
  CollectMoneyOutline: "\uEA26",
  CompassOutline: "\uEA27",
  ContentOutline: "\uEA28",
  CouponOutline: "\uEA29",
  DeleteOutline: "\uEA2A",
  DownCircleOutline: "\uEA2B",
  DownFill: "\uEA2C",
  DownlandOutline: "\uEA2D",
  DownOutline: "\uEA2E",
  EditFill: "\uEA2F",
  EditSFill: "\uEA30",
  EditSOutline: "\uEA31",
  EnvironmentOutline: "\uEA32",
  ExclamationCircleFill: "\uEA33",
  ExclamationCircleOutline: "\uEA34",
  ExclamationOutline: "\uEA35",
  ExclamationShieldFill: "\uEA36",
  ExclamationShieldOutline: "\uEA37",
  ExclamationTriangleOutline: "\uEA38",
  EyeFill: "\uEA39",
  EyeInvisibleFill: "\uEA3A",
  EyeInvisibleOutline: "\uEA3B",
  EyeOutline: "\uEA3C",
  FaceRecognitionOutline: "\uEA3D",
  FileOutline: "\uEA3E",
  FileWrongOutline: "\uEA3F",
  FillinOutline: "\uEA40",
  FilterOutline: "\uEA41",
  FingerdownOutline: "\uEA42",
  FireFill: "\uEA43",
  FlagOutline: "\uEA44",
  FolderOutline: "\uEA45",
  ForbidFill: "\uEA46",
  FrownFill: "\uEA47",
  FrownOutline: "\uEA48",
  GiftOutline: "\uEA49",
  GlobalOutline: "\uEA4A",
  HandPayCircleOutline: "\uEA4B",
  HeartFill: "\uEA4C",
  HeartOutline: "\uEA4D",
  HistogramOutline: "\uEA4E",
  InformationCircleFill: "\uEA4F",
  InformationCircleOutline: "\uEA50",
  KeyOutline: "\uEA51",
  KoubeiFill: "\uEA52",
  KoubeiOutline: "\uEA53",
  LeftOutline: "\uEA54",
  LikeOutline: "\uEA55",
  LinkOutline: "\uEA56",
  LocationFill: "\uEA57",
  LocationOutline: "\uEA58",
  LockFill: "\uEA59",
  LockOutline: "\uEA5A",
  LoopOutline: "\uEA5B",
  MailFill: "\uEA5C",
  MailOpenOutline: "\uEA5D",
  MailOutline: "\uEA5E",
  MessageFill: "\uEA5F",
  MessageOutline: "\uEA60",
  MinusCircleOutline: "\uEA61",
  MinusOutline: "\uEA62",
  MoreOutline: "\uEA63",
  MovieOutline: "\uEA64",
  PayCircleOutline: "\uEA65",
  PhonebookFill: "\uEA66",
  PhonebookOutline: "\uEA67",
  PhoneFill: "\uEA68",
  PictureOutline: "\uEA69",
  PicturesOutline: "\uEA6A",
  PictureWrongOutline: "\uEA6B",
  PieOutline: "\uEA6C",
  PlayOutline: "\uEA6D",
  QuestionCircleFill: "\uEA6E",
  QuestionCircleOutline: "\uEA6F",
  ReceiptOutline: "\uEA70",
  ReceivePaymentOutline: "\uEA71",
  RedoOutline: "\uEA72",
  RightOutline: "\uEA73",
  ScanCodeOutline: "\uEA74",
  ScanningFaceOutline: "\uEA75",
  ScanningOutline: "\uEA76",
  SearchOutline: "\uEA77",
  SendOutline: "\uEA78",
  SetOutline: "\uEA79",
  ShopbagOutline: "\uEA7A",
  ShrinkOutline: "\uEA7B",
  SmileFill: "\uEA7C",
  SmileOutline: "\uEA7D",
  SoundMuteFill: "\uEA7E",
  SoundMuteOutline: "\uEA7F",
  SoundOutline: "\uEA80",
  StarFill: "\uEA81",
  StarOutline: "\uEA82",
  StopOutline: "\uEA83",
  SystemQRcodeOutline: "\uEA84",
  TagOutline: "\uEA85",
  TeamFill: "\uEA86",
  TeamOutline: "\uEA87",
  TextDeletionOutline: "\uEA88",
  TextOutline: "\uEA89",
  TransportQRcodeOutline: "\uEA8A",
  TravelOutline: "\uEA8B",
  TruckOutline: "\uEA8C",
  Uiwinbox: "\uEA8D",
  UndoOutline: "\uEA8E",
  UnlockOutline: "\uEA8F",
  UnorderedListOutline: "\uEA90",
  UpCircleOutline: "\uEA91",
  UploadOutline: "\uEA92",
  UpOutline: "\uEA93",
  UserAddOutline: "\uEA94",
  UserCircleOutline: "\uEA95",
  UserContactOutline: "\uEA96",
  UserOutline: "\uEA97",
  UserSetOutline: "\uEA98",
  VideoOutline: "\uEA99",
  Y1: "\uEA9A",
  Y10: "\uEA9B",
  Y11: "\uEA9C",
  Y12: "\uEA9D",
  Y13: "\uEA9E",
  Y14: "\uEA9F",
  Y15: "\uEAA0",
  Y16: "\uEAA1",
  Y17: "\uEAA2",
  Y18: "\uEAA3",
  Y19: "\uEAA4",
  Y2: "\uEAA5",
  Y20: "\uEAA6",
  Y21: "\uEAA7",
  Y22: "\uEAA8",
  Y23: "\uEAA9",
  Y24: "\uEAAA",
  Y25: "\uEAAB",
  Y26: "\uEAAC",
  Y27: "\uEAAD",
  Y28: "\uEAAE",
  Y29: "\uEAAF",
  Y3: "\uEAB0",
  Y30: "\uEAB1",
  Y31: "\uEAB2",
  Y32: "\uEAB3",
  Y33: "\uEAB4",
  Y34: "\uEAB5",
  Y35: "\uEAB6",
  Y36: "\uEAB7",
  Y37: "\uEAB8",
  Y38: "\uEAB9",
  Y39: "\uEABA",
  Y4: "\uEABB",
  Y40: "\uEABC",
  Y41: "\uEABD",
  Y42: "\uEABE",
  Y43: "\uEABF",
  Y44: "\uEAC0",
  Y45: "\uEAC1",
  Y46: "\uEAC2",
  Y47: "\uEAC3",
  Y48: "\uEAC4",
  Y49: "\uEAC5",
  Y5: "\uEAC6",
  Y50: "\uEAC7",
  Y51: "\uEAC8",
  Y52: "\uEAC9",
  Y53: "\uEACA",
  Y54: "\uEACB",
  Y55: "\uEACC",
  Y56: "\uEACD",
  Y57: "\uEACE",
  Y58: "\uEACF",
  Y59: "\uEAD0",
  Y6: "\uEAD1",
  Y60: "\uEAD2",
  Y61: "\uEAD3",
  Y62: "\uEAD4",
  Y63: "\uEAD5",
  Y64: "\uEAD6",
  Y65: "\uEAD7",
  Y66: "\uEAD8",
  Y67: "\uEAD9",
  Y68: "\uEADA",
  Y69: "\uEADB",
  Y7: "\uEADC",
  Y70: "\uEADD",
  Y71: "\uEADE",
  Y72: "\uEADF",
  Y73: "\uEAE0",
  Y74: "\uEAE1",
  Y75: "\uEAE2",
  Y76: "\uEAE3",
  Y77: "\uEAE4",
  Y78: "\uEAE5",
  Y79: "\uEAE6",
  Y8: "\uEAE7",
  Y80: "\uEAE8",
  Y81: "\uEAE9",
  Y82: "\uEAEA",
  Y83: "\uEAEB",
  Y84: "\uEAEC",
  Y85: "\uEAED",
  Y86: "\uEAEE",
  Y87: "\uEAEF",
  Y88: "\uEAF0",
  Y89: "\uEAF1",
  Y9: "\uEAF2",
  Y90: "\uEAF3"
};

// packages/avm-ui/src/components/icon/icon.tsx
var classPrefix = `adm-icon`;
var Icon = class extends Component {
  css = () => {
    return `
    @font-face {
      font-family: "${fontName}"; 
      src: url('https://apicloud-data-standard.oss-cn-beijing.aliyuncs.com/ttf/avm-icon.ttf') format('truetype'), url('../../components/avm-ui/icon/avm-icon.ttf') format('truetype');
    }
    .${classPrefix} {font-family: ${fontName};font-size:32px;color:#666;}`;
  };
  render = (props) => {
    let name = props.name || props.type;
    if (/\d/.test(name)) {
      name.replace(/(\d)/);
    }
    if (props.size) {
      props.fontSize = typeof props.size === "number" ? props.size + "px" : props.size.replace("px", "") + "px";
    }
    const char = props.code ? String.fromCharCode(props.code) || props.children : icons[name || "ApiCloudlogo"];
    return <text style={{ ...props }} class={`${classPrefix} ${classPrefix}-font-icon-text ${props.class || props.className || ""}`}>{char}</text>;
  };
};
Icon = __decorateClass([
  tag("avm-icon")
], Icon);

// packages/avm-ui/src/utils/classnames.ts
function classNames(...args) {
  const cls = [];
  args.forEach((arg) => {
    if (typeof arg === "string") {
      cls.push(arg);
    } else if (Object.prototype.toString.call(arg) === "[object Object]") {
      for (const argKey in arg) {
        arg[argKey] && cls.push(argKey);
      }
    } else if (arg) {
      console.log(`arg ${arg} type not support`);
    }
  });
  return cls.join(" ");
}

// packages/avm-ui/src/components/error-block/error-block.tsx
var classPrefix2 = `adm-error-block`;
var ErrorBlockText = {
  default: {
    title: "\u9875\u9762\u9047\u5230\u4E00\u4E9B\u5C0F\u95EE\u9898",
    description: "\u5F85\u4F1A\u6765\u8BD5\u8BD5"
  },
  busy: {
    title: "\u524D\u65B9\u62E5\u5835",
    description: "\u5237\u65B0\u8BD5\u8BD5"
  },
  disconnected: {
    title: "\u7F51\u7EDC\u6709\u70B9\u5FD9",
    description: "\u52A8\u52A8\u624B\u6307\u5E2E\u5FD9\u4FEE\u590D"
  },
  empty: {
    title: "\u6CA1\u6709\u627E\u5230\u4F60\u9700\u8981\u7684\u4E1C\u897F",
    description: "\u627E\u627E\u5176\u4ED6\u7684\u5427"
  }
};
var defaultProps = {
  status: "default",
  imageWidth: "100px",
  imageHeight: "100px",
  imageWidthFullPage: "200px",
  imageHeightFullPage: "200px"
};
var ErrorBlock = class extends Component {
  render = (props) => {
    this.props = Object.assign({}, defaultProps, props);
    const {
      status,
      description,
      title,
      image,
      fullPage,
      children,
      imageWidth,
      imageHeight,
      imageHeightFullPage,
      imageWidthFullPage
    } = this.props;
    const contentPack = ErrorBlockText[status];
    const des = "description" in this.props ? description : contentPack.description;
    const errTitle = "title" in props ? title : contentPack.title;
    const imageStyles = {
      width: fullPage ? imageWidthFullPage : imageWidth,
      height: fullPage ? imageHeightFullPage : imageHeight
    };
    let imageNode = <Icon code={59976} fontSize="80px" className={`${classPrefix2}-image-img`} color="rgb(221, 221, 221)" />;
    if (image) {
      if (typeof image === "string") {
        imageNode = <img src={image} className={`${classPrefix2}-image-img`} style={{ width: imageStyles.width, height: imageStyles.height }} />;
      } else {
        imageNode = image;
      }
    }
    const errTitleCls = classNames(`${classPrefix2}-description-title`, {
      [`${classPrefix2}-full-page-description-title`]: fullPage
    });
    return <div className={classNames(classPrefix2, {
      [`${classPrefix2}-full-page`]: fullPage
    })} style={{}}>
      <div className={`${classPrefix2}-image`} style={imageStyles}>{imageNode}</div>
      <div className={classNames(`${classPrefix2}-description`, {
        [`${classPrefix2}-full-page-description`]: fullPage
      })}>
        {formatLabel(errTitle, errTitleCls)}
        {formatLabel(des, `${classPrefix2}-description-subtitle`)}
      </div>
      {children && formatLabel(children, `${classPrefix2}-content`)}
    </div>;
  };
  css = () => error_block_default;
};

// packages/avm-ui/src/components/error-block/index.ts
var error_block_default2 = ErrorBlock;
avm.define("avm-error-block", ErrorBlock);
export {
  error_block_default2 as default
};
