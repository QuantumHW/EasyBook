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

// packages/avm-ui/src/utils/with-default-props.tsx
function mergeProps(defaultProps4, props) {
  return Object.assign({}, defaultProps4, props);
}

// packages/avm-ui/src/components/dropdown/item.tsx
var DropdownItem = class extends Component {
  render = (props) => {
    return <div>{props.children}</div>;
  };
};

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

// packages/avm-ui/src/utils/use-should-render.tsx
function useShouldRender(active, forceRender, destroyOnClose) {
  const initialized = active;
  if (forceRender)
    return true;
  if (active)
    return true;
  if (!initialized)
    return false;
  return !destroyOnClose;
}

// packages/avm-ui/src/components/mask/mask.tsx
var classPrefix = `adm-mask`;
var opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75
};
var defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: "black",
  opacity: "default",
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ["click"]
};
var Mask = class extends Component {
  render = (p) => {
    const props = mergeProps(defaultProps, p);
    const opacity = opacityRecord[props.opacity] ?? props.opacity;
    const rgb = props.color === "white" ? "255, 255, 255" : "0, 0, 0";
    const background = `rgba(${rgb}, ${opacity})`;
    const shouldRender = useShouldRender(props.visible, props.forceRender, props.destroyOnClose);
    return <div className={classPrefix} style={{
      ...props.style,
      background,
      display: props.visible ? "flex" : "none"
    }}>
      {props.onMaskClick && <div className={`${classPrefix}-aria-button`} role="button" aria-label="Mask" onClick={props.onMaskClick} />}
      <div className={`${classPrefix}-content`} onClick={props.onMaskClick}>{shouldRender && props.children}</div>
    </div>;
  };
  css = () => {
    return `:root {
      --adm-color-primary: #9AC200;
      --adm-color-success: #7FA000;
      --adm-color-warning: #FFA600;
      --adm-color-danger: #FA6400;
      --adm-color-white: #ffffff;
      --adm-color-weak: #999999;
      --adm-color-light: #cccccc;
      --adm-border-color: #eeeeee;
      --adm-font-size-main: 13px;
      --adm-color-text: #333333;
      --adm-font-family:
        -apple-system,
        blinkmacsystemfont,
        "Helvetica Neue",
        helvetica,
        segoe ui,
        arial,
        roboto,
        "PingFang SC",
        "miui",
        "Hiragino Sans GB",
        "Microsoft Yahei",
        sans-serif;
    }
    .adm-mask {
      --z-index: var(--adm-mask-z-index, 1000);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: var(--z-index);
      display: block;
      width: 100%;
      height: 100%;
    }
    .adm-mask-aria-button {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .adm-mask-content {
      height: 100%;
      z-index: 1;
    }`;
  };
};

// packages/avm-ui/src/components/mask/index.ts
var Mask_default = Mask;
avm.define("avm-mask", Mask);

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
var classPrefix2 = `adm-icon`;
var Icon = class extends Component {
  css = () => {
    return `
    @font-face {
      font-family: "${fontName}"; 
      src: url('https://apicloud-data-standard.oss-cn-beijing.aliyuncs.com/ttf/avm-icon.ttf') format('truetype'), url('../../components/avm-ui/icon/avm-icon.ttf') format('truetype');
    }
    .${classPrefix2} {font-family: ${fontName};font-size:32px;color:#666;}`;
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
    return <text style={{ ...props }} class={`${classPrefix2} ${classPrefix2}-font-icon-text ${props.class || props.className || ""}`}>{char}</text>;
  };
};
Icon = __decorateClass([
  tag("avm-icon")
], Icon);

// packages/avm-ui/src/components/icon/index.ts
var Icon_default = Icon;

// packages/avm-ui/src/components/popup/popup.tsx
var classPrefix3 = `adm-popup`;
var defaultProps2 = {
  position: "bottom",
  visible: false,
  getContainer: () => document.body,
  mask: true,
  stopPropagation: ["click"],
  bodyStyle: {},
  isTitle: false,
  titleText: "\u6807\u9898"
};
var Popup = class extends Component {
  data = {
    visible: this.props.visible
  };
  setVisible = (visible) => {
    if (visible) {
      this.props.afterShow && this.props.afterShow();
    }
    this.data.visible = visible;
  };
  render = (props) => {
    this.props = Object.assign({}, defaultProps2, props);
    this.data.visible = props.visible;
    let {
      zIndex = 1e3,
      bodyClassName,
      position,
      forceRender = false,
      destroyOnClose = false,
      stopPropagation,
      handleClick,
      mask,
      maskClick,
      maskClassName,
      maskStyle,
      bodyStyle,
      children,
      isTitle,
      titleText,
      isBack,
      handleClose,
      handleBack,
      tipText,
      isFooterBtn,
      footBtnClick,
      bodyHeight,
      bodyWidth
    } = this.props;
    if (["top", "bottom"].includes(position)) {
      !bodyHeight && (bodyHeight = "375px");
      bodyStyle = { ...bodyStyle, height: bodyHeight };
    }
    if (["left", "right"].includes(position)) {
      !bodyWidth && (bodyWidth = "311px");
      bodyStyle = { ...bodyStyle, width: bodyWidth };
    }
    const bodyCls = classNames(`${classPrefix3}-body`, bodyClassName, `${classPrefix3}-body-position-${position}`);
    const shouldRender = useShouldRender(this.data.visible, forceRender, destroyOnClose);
    return <div className={classNames(classPrefix3, props.className)} onClick={() => {
      handleClick && handleClick();
    }} style={{ display: this.data.visible ? "flex" : "none", zIndex }}>
      {mask && <Mask_default visible={props.visible} onMaskClick={() => {
        maskClick && maskClick();
      }} className={maskClassName} style={maskStyle} disableBodyScroll={false} stopPropagation={stopPropagation} />}
      <div className={bodyCls} style={{
        ...bodyStyle,
        zIndex: zIndex + 10
      }}>
        {isTitle && <div className={`${classPrefix3}-title`}>
          {isBack && <div className={`${classPrefix3}-title-back`} onClick={() => {
            handleBack && handleBack();
          }}>
            <Icon_default code={59988} fontSize="18" color="#bbb" />
            <span className={`${classPrefix3}-title-back-text`}>{"\u8FD4\u56DE"}</span>
          </div>}
          <div className={`${classPrefix3}-title-con`}>
            <span className={`${classPrefix3}-title-text`}>{titleText}</span>
            {tipText && <div title={tipText}><Icon_default code={59940} fontSize="18" color="#bbb" /></div>}
          </div>
          <div onClick={() => {
            handleClose && handleClose();
          }}><Icon_default code={59940} fontSize="18" color="#bbb" /></div>
        </div>}
        {shouldRender && formatLabel(children)}
        {isFooterBtn && <div className={`${classPrefix3}-footer`}><button onClick={() => {
          footBtnClick && footBtnClick();
        }} className={`${classPrefix3}-footer-btn`}>{"\u786E\u5B9A"}</button></div>}
      </div>
    </div>;
  };
  css = () => {
    return `
      .adm-popup {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .adm-popup-body {
        position: absolute;
        background-color: #fff;
      }
      .adm-popup-body-position-bottom {
        width: 100%;
        bottom: 0;
        left: 0;
        border-radius: 12px 12px 0 0;
      }
      .adm-popup-body-position-top {
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 0 0 12px 12px;
      }
      .adm-popup-body-position-left {
        height: 100%;
        top: 0;
        left: 0;
      }
      .adm-popup-body-position-right {
        height: 100%;
        top: 0;
        right: 0;
      }
      .adm-popup-title {
        display: flex;
        flex-direction: row;
        height: 50px;
        align-items: center;
        padding: 0 16px;
      }
      .adm-popup-title-con {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .adm-popup-title-text {
        text-align: center;
        font-size: 16px;
        color: #333330;
        font-weight: 500;
        margin-right: 6px;
      }
      .adm-popup-title-back {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .adm-popup-title-back-text {
        font-size: 15px;
        color: #BBBBBB;
        padding-left: 8px;
      }
      .adm-popup-footer {
        position: absolute;
        bottom: 8px;
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .adm-popup-footer-btn {
        width: 95%;
        height: 44px;
        background: #9AC200;
        border-radius: 4px;
        color: #fff;
        border: none;
      }
    `;
  };
};

// packages/avm-ui/src/components/dropdown/dropdown.tsx
var classPrefix4 = `adm-dropdown`;
var defaultProps3 = {
  defaultActiveKey: null,
  closeOnMaskClick: true,
  closeOnClickAway: true,
  activeKey: "",
  arrow: <Icon code={59948} />
};
var Dropdown = class extends Component {
  data = {
    visible: false,
    children: [],
    activeKey: this.props.activeKey || this.props.defaultActiveKey,
    list: [],
    isActived: true
  };
  setVisible = (v, key) => {
    if (key === this.data.activeKey) {
      this.data.visible = false;
      this.data.activeKey = "";
    } else {
      this.props.onChange?.(key);
      this.props.children.forEach((item) => {
        if (item.key === key) {
          this.data.list = item.children;
        }
      });
      this.data.visible = v;
      this.data.activeKey = key;
    }
  };
  render = (props) => {
    props = mergeProps(defaultProps3, props);
    console.log(props, 123123123);
    const { children } = props;
    if (props.activeKey && this.data.isActived) {
      this.data.visible = true;
      this.data.isActived = false;
      this.props.children.forEach((item) => {
        if (item.key === this.data.activeKey) {
          this.data.list = item.children;
        }
      });
    } else if (props.defaultActiveKey && this.data.isActived) {
      this.data.visible = true;
      this.data.isActived = false;
      this.props.children.forEach((item) => {
        if (item.key === this.data.activeKey) {
          this.data.list = item.children;
        }
      });
    }
    this.data.children = children;
    return <div className="container">
      <div className={classPrefix4}>{children.map((item) => {
        return <div {...item.attributes} className={`${classPrefix4}-item`} onClick={this.setVisible.bind(this, true, item.key)}>
          <span className={classNames(`${classPrefix4}-default`, {
            [`${classPrefix4}-active`]: item.key === this.data.activeKey,
            [`${classPrefix4}-default`]: item.key !== this.data.activeKey
          })}>{item.attributes.title}</span>
          <div className={classNames("", {
            ["container-icon"]: item.key === this.data.activeKey,
            ["default-icon"]: item.key !== this.data.activeKey
          })}>{props.arrow}</div>
        </div>;
      })}</div>
      <Popup isTitle={false} className="pop" visible={this.data.visible} position="top" onMaskClick={() => {
        if (props.closeOnMaskClick && props.closeOnClickAway) {
          this.setVisible(false, "");
          this.data.list = [];
          this.data.visible = false;
        }
      }}><DropdownItem className={`${classPrefix4}-item`} onClick={this.setVisible.bind(this, true)}>{this.data.list}</DropdownItem></Popup>
    </div>;
  };
  css = () => {
    return `
    :root {
      --adm-color-primary: #9AC200;
      --adm-color-success: #7FA000;
      --adm-color-warning: #FFA600;
      --adm-color-danger: #FA6400;
      --adm-color-white: #ffffff;
      --adm-color-weak: #999999;
      --adm-color-light: #cccccc;
      --adm-border-color: #eeeeee;
      --adm-font-size-main: 13px;
      --adm-color-text: #333333;
      --adm-font-family:
        -apple-system,
        blinkmacsystemfont,
        "Helvetica Neue",
        helvetica,
        segoe ui,
        arial,
        roboto,
        "PingFang SC",
        "miui",
        "Hiragino Sans GB",
        "Microsoft Yahei",
        sans-serif;
    }
    .container {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .pop {
      position: absolute;
      width: 100%;
      top: 50px;
      height: 100%;
    }
    .adm-dropdown {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-top: 1px solid var(--adm-border-color);
      border-bottom: 1px solid var(--adm-border-color);
    }
    .adm-dropdown-item {
      flex: 1;
      flex-direction: row;
      padding: 12px;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      cursor: pointer;
    }
    .adm-dropdown-default {
      color: #000;
    }
    .adm-dropdown-active {
      color: #9AC200;
    }
    .adm-dropdown .container-icon {
      transform: rotate(180deg) translateY(0px);
      transition: all 0.2s ease;
    }
    .adm-dropdown .adm-icon {
      font-size: 8px;
    }
    .adm-dropdown .default-icon {
      transition: all 0.2s ease;
      transform: rotate(0deg) translateY(1px);
    }
    .adm-popup {
      top: 50px;
    }
    .adm-popup-body-position-top {
      padding: 12px;
    }
    

    .adm-mask {
      --z-index: var(--adm-mask-z-index, 1000);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: var(--z-index);
      display: block;
      width: 100%;
      height: 100%;
    }
    .adm-mask-aria-button {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .adm-mask-content {
      height: 100%;
      z-index: 1;
    }
    
    .adm-popup {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .adm-popup-body {
      position: absolute;
      background-color: #fff;
    }
    .adm-popup-body-position-bottom {
      width: 100%;
      bottom: 0;
      left: 0;
    }
    .adm-popup-body-position-top {
      width: 100%;
      top: 0;
      left: 0;
    }
    .adm-popup-body-position-left {
      height: 100%;
      top: 0;
      left: 0;
    }
    .adm-popup-body-position-right {
      height: 100%;
      top: 0;
      right: 0;
    }
    
    `;
  };
};

// packages/avm-ui/src/components/dropdown/index.ts
var dropdown_default = Dropdown;
avm.define("avm-dropdown", Dropdown);
avm.define("avm-dropdown-item", DropdownItem);
export {
  dropdown_default as default
};
