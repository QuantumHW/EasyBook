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

// packages/avm-ui/src/components/icon/icon.config.json
var fontName = "avm-icon";
var startUnicode = 6e4;
var defaultCode = 8;

// packages/avm-ui/src/components/icon/icon.json
var props = [
  {
    name: "name",
    tip: "\u56FE\u6807\u540D\u79F0",
    type: "string",
    enum: [
      "AaOutline",
      "AddCircleOutline",
      "AddOutline",
      "AddressBookFill",
      "AddSquareOutline",
      "AlipayCircleFill",
      "AlipaySquareFill",
      "AntOutline",
      "ApiCloudlogo",
      "AppOutline",
      "AppstoreOutline",
      "ArrowDownCircleOutline",
      "ArrowsAltOutline",
      "AudioFill",
      "AudioMutedOutline",
      "AudioOutline",
      "BankcardOutline",
      "BellMuteOutline",
      "BellOutline",
      "BillOutline",
      "CalculatorOutline",
      "CalendarOutline",
      "CameraOutline",
      "ChatAddOutline",
      "ChatCheckOutline",
      "ChatWrongOutline",
      "CheckCircleFill",
      "CheckCircleOutline",
      "CheckOutline",
      "CheckShieldFill",
      "CheckShieldOutline",
      "ClockCircleFill",
      "ClockCircleOutline",
      "CloseCircleFill",
      "CloseCircleOutline",
      "CloseOutline",
      "CloseShieldOutline",
      "CollectMoneyOutline",
      "CompassOutline",
      "ContentOutline",
      "CouponOutline",
      "DeleteOutline",
      "DownCircleOutline",
      "DownFill",
      "DownlandOutline",
      "DownOutline",
      "EditFill",
      "EditSFill",
      "EditSOutline",
      "EnvironmentOutline",
      "ExclamationCircleFill",
      "ExclamationCircleOutline",
      "ExclamationOutline",
      "ExclamationShieldFill",
      "ExclamationShieldOutline",
      "ExclamationTriangleOutline",
      "EyeFill",
      "EyeInvisibleFill",
      "EyeInvisibleOutline",
      "EyeOutline",
      "FaceRecognitionOutline",
      "FileOutline",
      "FileWrongOutline",
      "FillinOutline",
      "FilterOutline",
      "FingerdownOutline",
      "FireFill",
      "FlagOutline",
      "FolderOutline",
      "ForbidFill",
      "FrownFill",
      "FrownOutline",
      "GiftOutline",
      "GlobalOutline",
      "HandPayCircleOutline",
      "HeartFill",
      "HeartOutline",
      "HistogramOutline",
      "InformationCircleFill",
      "InformationCircleOutline",
      "KeyOutline",
      "KoubeiFill",
      "KoubeiOutline",
      "LeftOutline",
      "LikeOutline",
      "LinkOutline",
      "LocationFill",
      "LocationOutline",
      "LockFill",
      "LockOutline",
      "LoopOutline",
      "MailFill",
      "MailOpenOutline",
      "MailOutline",
      "MessageFill",
      "MessageOutline",
      "MinusCircleOutline",
      "MinusOutline",
      "MoreOutline",
      "MovieOutline",
      "PayCircleOutline",
      "PhonebookFill",
      "PhonebookOutline",
      "PhoneFill",
      "PictureOutline",
      "PicturesOutline",
      "PictureWrongOutline",
      "PieOutline",
      "PlayOutline",
      "QuestionCircleFill",
      "QuestionCircleOutline",
      "ReceiptOutline",
      "ReceivePaymentOutline",
      "RedoOutline",
      "RightOutline",
      "ScanCodeOutline",
      "ScanningFaceOutline",
      "ScanningOutline",
      "SearchOutline",
      "SendOutline",
      "SetOutline",
      "ShopbagOutline",
      "ShrinkOutline",
      "SmileFill",
      "SmileOutline",
      "SoundMuteFill",
      "SoundMuteOutline",
      "SoundOutline",
      "StarFill",
      "StarOutline",
      "StopOutline",
      "SystemQRcodeOutline",
      "TagOutline",
      "TeamFill",
      "TeamOutline",
      "TextDeletionOutline",
      "TextOutline",
      "TransportQRcodeOutline",
      "TravelOutline",
      "TruckOutline",
      "Uiwinbox",
      "UndoOutline",
      "UnlockOutline",
      "UnorderedListOutline",
      "UpCircleOutline",
      "UploadOutline",
      "UpOutline",
      "UserAddOutline",
      "UserCircleOutline",
      "UserContactOutline",
      "UserOutline",
      "UserSetOutline",
      "VideoOutline",
      "Y1",
      "Y10",
      "Y11",
      "Y12",
      "Y13",
      "Y14",
      "Y15",
      "Y16",
      "Y17",
      "Y18",
      "Y19",
      "Y2",
      "Y20",
      "Y21",
      "Y22",
      "Y23",
      "Y24",
      "Y25",
      "Y26",
      "Y27",
      "Y28",
      "Y29",
      "Y3",
      "Y30",
      "Y31",
      "Y32",
      "Y33",
      "Y34",
      "Y35",
      "Y36",
      "Y37",
      "Y38",
      "Y39",
      "Y4",
      "Y40",
      "Y41",
      "Y42",
      "Y43",
      "Y44",
      "Y45",
      "Y46",
      "Y47",
      "Y48",
      "Y49",
      "Y5",
      "Y50",
      "Y51",
      "Y52",
      "Y53",
      "Y54",
      "Y55",
      "Y56",
      "Y57",
      "Y58",
      "Y59",
      "Y6",
      "Y60",
      "Y61",
      "Y62",
      "Y63",
      "Y64",
      "Y65",
      "Y66",
      "Y67",
      "Y68",
      "Y69",
      "Y7",
      "Y70",
      "Y71",
      "Y72",
      "Y73",
      "Y74",
      "Y75",
      "Y76",
      "Y77",
      "Y78",
      "Y79",
      "Y8",
      "Y80",
      "Y81",
      "Y82",
      "Y83",
      "Y84",
      "Y85",
      "Y86",
      "Y87",
      "Y88",
      "Y89",
      "Y9",
      "Y90",
      "ZCheck",
      "ZCheckBox",
      "ZCheckFilling",
      "ZCheckHalf"
    ],
    default: "ApiCloudlogo"
  },
  {
    name: "color",
    tip: "\u989C\u8272",
    type: "string",
    propType: "color",
    default: "#666"
  },
  {
    name: "size",
    tip: "\u5C3A\u5BF8",
    type: "number",
    default: 32
  }
];

// packages/avm-ui/src/components/icon/icon.tsx
var classPrefix = `adm-icon`;
var name = "avm-icon";
var Icon = class extends Component {
  css = () => {
    return `
    @font-face {
      font-family: "${fontName}"; 
      src: url('https://apicloud-data-standard.oss-cn-beijing.aliyuncs.com/ttf/avm-icon.ttf') format('truetype'), url('../../components/avm-ui/icon/avm-icon.ttf') format('truetype');
    }
    .${classPrefix} {font-family: ${fontName};font-size:32px;color:#666;align-self: center;}`;
  };
  render = (props2) => {
    let name2 = props2.name || props2.type;
    if (/\d/.test(name2)) {
      name2.replace(/(\d)/);
    }
    if (props2.size) {
      props2.fontSize = typeof props2.size === "number" ? props2.size + "px" : props2.size.replace("px", "") + "px";
    }
    let { code = defaultCode } = props2;
    if (name2) {
      const [{ enum: icons }] = props;
      code = icons.indexOf(name2);
      if (code === -1) {
        code = -4644;
      }
    }
    code += startUnicode;
    return <text role={classPrefix} char={name2} style={{ ...props2 }} class={`${classPrefix} ${classPrefix}-font-icon-text ${props2.class || props2.className || ""}`}>{String.fromCharCode(code) || props2.children}</text>;
  };
};
avm.define(name, Icon);

// packages/avm-ui/src/components/icon/index.ts
var Icon_default = Icon;

// packages/avm-ui/src/components/notice-bar/notice-bar.tsx
var classPrefix2 = `adm-notice-bar`;
var defaultProps = {
  color: "default",
  delay: 2e3,
  speed: 50,
  size: "default",
  isShowLeftIcon: false
};
var colorsObj = {
  default: {
    bgColor: "#f4f8e5",
    borderColor: "#f4f8e5",
    textColor: "#9AC200"
  },
  alert: {
    bgColor: "#FFFBE8",
    borderColor: "#FFFBE8",
    textColor: "#FA6400"
  },
  error: {
    bgColor: "#FBE7E7",
    borderColor: "#FBE7E7",
    textColor: "#E02020"
  },
  info: {
    bgColor: "#E8EFFA",
    borderColor: "#E8EFFA",
    textColor: "#1677FF"
  }
};
var NoticeBar = class extends Component {
  data = {
    visible: true
  };
  setVisible = (status) => {
    this.data.visible = status;
  };
  render = (props2) => {
    props2 = Object.assign({}, defaultProps, props2);
    if (!this.data.visible)
      return null;
    const curTheme = colorsObj[props2.color];
    const bgColor = props2.bgColor || curTheme.bgColor;
    const textColor = props2.textColor || curTheme.textColor;
    const borderColor = props2.borderColor || curTheme.borderColor;
    const leftCls = classNames(`${classPrefix2}-left`, `${classPrefix2}-left-${props2.color}`, `${classPrefix2}-left-${props2.size}`);
    const leftIcon = {
      default: "#9AC200",
      error: "#E02020",
      info: "#1677FF",
      alert: "#FA6400"
    };
    const leftEle = "icon" in props2 ? props2.icon : <Icon_default name="SoundOutline" {...{ color: props2.textColor || leftIcon[props2.color] }} />;
    const contentInnerCls = classNames(`${classPrefix2}-content-inner`, `${classPrefix2}-content-inner-${props2.size}`, `${classPrefix2}-content-inner-${props2.color}`);
    const textStyle = {
      color: textColor,
      paddingRight: "4px"
    };
    const boxStyle = {
      background: bgColor,
      "border": `1px solid ${borderColor}`
    };
    return <div className={classNames(classPrefix2, `${classPrefix2}-${props2.color}`, `${classPrefix2}-${props2.size}`)} style={boxStyle}>
      {props2.isShowLeftIcon && formatLabel(leftEle, leftCls, textStyle)}
      <view className={`${classPrefix2}-content`}>{formatLabel(props2.content || "\u901A\u544A\u680F\u5185\u5BB9", contentInnerCls, textStyle)}</view>
      {(props2.closeable || props2.extra) && <view className={`${classPrefix2}-right`}>
        {props2.extra && formatLabel(props2.extra, `${classPrefix2}-right-${props2.color} ${classPrefix2}-right-${props2.size}`, textStyle)}
        {props2.closeable && <view onClick={() => {
          this.setVisible(false);
          props2.handleClose?.();
        }} style={textStyle}><Icon_default name="CloseOutline" color={props2.textColor} /></view>}
      </view>}
    </div>;
  };
  css = () => {
    return `
    .adm-notice-bar {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border: none;
    }
    .adm-notice-bar-default {
      height: 40px;
      line-height: 40px;
    }
    .adm-notice-bar-small {
      height: 32px;
      line-height: 32px;
    }
    .adm-notice-bar-left {
      flex-shrink: 0;
      margin-right: 8px;
    }
    .adm-notice-bar-left-default {
      font-size: 14px;
    }
    .adm-notice-bar-left-small {
      font-size: 13px;
    }
    .adm-notice-bar-content {
      flex: 1;
      overflow: hidden;
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .adm-notice-bar-content-inner {
      width: 100%;
      transition-timing-function: linear;
      position: absolute;
      padding: 0 4px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: block;
    }
    .adm-notice-bar-content-inner-default {
      font-size: 14px;
    }
    .adm-notice-bar-content-inner-small {
      font-size: 13px;
    }
    .adm-notice-bar-right {
      flex-shrink: 0;
      margin-left: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .adm-notice-bar-right-default {
      font-size: 14px;
    }
    .adm-notice-bar-right-small {
      font-size: 13px;
    }
    `;
  };
};

// packages/avm-ui/src/components/notice-bar/index.ts
var notice_bar_default = NoticeBar;
avm.define("avm-notice-bar", NoticeBar);
export {
  notice_bar_default as default
};
