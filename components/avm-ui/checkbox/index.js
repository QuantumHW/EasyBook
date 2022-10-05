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

// packages/avm-ui/src/utils/attach-properties-to-component.ts
function attachPropertiesToComponent(component, properties) {
  const ret = component;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}

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

// packages/avm-ui/src/components/checkbox/myCheckbox.tsx
var classPrefix2 = `adm-checkbox`;
var MyCheckbox = class extends Component {
  data = {
    checked: this.props.checked
  };
  setChecked = () => {
    if (!this.props.indeterminate) {
      this.data.checked = !this.data.checked;
      this.props.onChange?.(this.data.checked);
    }
  };
  render = (props) => {
    const {
      iconSize = "17px",
      fontSize = "16px",
      gap = "8px",
      disabled = false,
      id,
      block = false,
      isLastEle,
      isGroup,
      descIsOneLineShow,
      isTwoHeadArrange
    } = this.props;
    const boxCls = classNames(classPrefix2, {
      [`${classPrefix2}-checked`]: this.data.checked && !disabled,
      [`${classPrefix2}-disabled`]: disabled,
      [`${classPrefix2}-block`]: block,
      [`${classPrefix2}-two-headarrange`]: isTwoHeadArrange,
      [`${classPrefix2}-text-has-bottomborder`]: isTwoHeadArrange
    });
    const iconStyle = {
      width: iconSize,
      height: iconSize,
      lineHeight: iconSize
    };
    const childStyles = {
      fontSize,
      paddingLeft: isTwoHeadArrange ? 0 : gap
    };
    const defaultEleIcons = <text style={{ ...iconStyle, fontSize: `${Number(iconSize.replace("px", "")) - 5}px`, marginLeft: isTwoHeadArrange && descIsOneLineShow ? "8px" : 0 }} className={classNames(`${classPrefix2}-icon`, {
      [`${classPrefix2}-icon-checked`]: this.data.checked && !disabled,
      [`${classPrefix2}-icon-indeterminate`]: props.indeterminate,
      [`${classPrefix2}-icon-disabled`]: disabled,
      [`${classPrefix2}-icon-disabled-checked`]: disabled && this.data.checked
    })}>{this.data.checked ? <Icon type="CheckOutline" /> : props.indeterminate ? <text className={`${classPrefix2}-indeterminate-text`} /> : ""}</text>;
    const iconEles = props.icon && props.selectedIcon ? this.data.checked ? props.selectedIcon.children ? props.selectedIcon : <img src={props.selectedIcon} style={{ width: iconSize, height: iconSize }} /> : props.icon.children ? props.icon : <img src={props.icon} style={{ width: iconSize, height: iconSize }} /> : defaultEleIcons;
    const textCls = classNames(`${classPrefix2}-text`, {
      [`${classPrefix2}-text-has-bottomborder`]: !isTwoHeadArrange && isGroup && !isLastEle,
      [`${classPrefix2}-desc-onelineshow`]: descIsOneLineShow
    });
    const labelContent = <view className={textCls}>
      {formatLabel(props.children, classNames(`${classPrefix2}-text-content`, {
        [`${classPrefix2}-desc-onelineshow-content`]: descIsOneLineShow
      }), childStyles)}
      {props.description && <span className={classNames(`${classPrefix2}-text-description`, {
        [`${classPrefix2}-desc-onelineshow-desc`]: descIsOneLineShow
      })} style={{ paddingLeft: isTwoHeadArrange ? 0 : gap }}>{props.description}</span>}
    </view>;
    return <label className={boxCls} style={{ ...props.style }} onClick={() => {
      !disabled && this.setChecked();
    }} id={id}>
      {!isTwoHeadArrange && iconEles}
      {props.children && labelContent}
      {isTwoHeadArrange && iconEles}
    </label>;
  };
};

// packages/avm-ui/src/components/checkbox/checkbox.less
var checkbox_default = ".adm-checkbox {\n  display: inline-flex;\n  flex-direction: row;\n  vertical-align: text-bottom;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n  padding: 0 16px;\n}\n.adm-checkbox-two-headarrange {\n  justify-content: space-between;\n}\n.adm-checkbox-icon {\n  border-radius: 2px;\n  border: 1px solid #ddd;\n  color: #fff;\n  background: #fff;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.adm-checkbox-icon-checked {\n  background: #9AC200;\n  border: 1px solid #9AC200;\n}\n.adm-checkbox-icon-disabled {\n  background: #f2f2f2;\n}\n.adm-checkbox-icon-disabled-checked {\n  background: #ddd;\n  color: #fefefe;\n}\n.adm-checkbox-icon-indeterminate {\n  border-color: #9AC200;\n}\n.adm-checkbox-block {\n  display: flex;\n}\n.adm-checkbox-content {\n  flex: none;\n}\n.adm-checkbox-text {\n  flex: 1;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.adm-checkbox-text-has-bottomborder {\n  border-bottom: 1px solid #e8e8e8;\n}\n.adm-checkbox-text-content {\n  flex: 1;\n  flex-wrap: wrap;\n}\n.adm-checkbox-text-description {\n  flex: 1;\n  flex-wrap: wrap;\n  font-size: 12px;\n  color: #999;\n  padding-top: 8px;\n}\n.adm-checkbox-desc-onelineshow {\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.adm-checkbox-desc-onelineshow-content {\n  flex: 1;\n}\n.adm-checkbox-desc-onelineshow-desc {\n  flex: none;\n  padding-top: 0;\n  font-size: 14px;\n  max-width: 100px;\n  text-align: right;\n}\n.adm-checkbox-indeterminate-text {\n  width: 10px;\n  height: 10px;\n  background: #9AC200;\n}\n";

// packages/avm-ui/src/components/checkbox/checkbox.tsx
var Checkbox = class extends Component {
  data = {
    checked: !!(this.props.defaultChecked || this.props.checked || this.props.defaultValue && this.props.defaultValue.includes(this.props.value))
  };
  setChecked = (val) => {
    if (!!!this.props.indeterminate) {
      this.data.checked = val;
      if (this.data.checked) {
        this.props.check?.(this.props.value);
      } else {
        this.props.uncheck?.(this.props.value);
      }
      this.props.handleChange?.(this.data.checked);
    }
  };
  render = (props) => {
    const {
      label,
      disabled,
      block,
      icon,
      selectedIcon,
      value,
      id,
      iconSize,
      fontSize,
      gap,
      indeterminate,
      isLastEle = false,
      isGroup = false,
      description,
      descIsOneLineShow = false,
      isTwoHeadArrange = false
    } = props;
    return <MyCheckbox descIsOneLineShow={descIsOneLineShow} isTwoHeadArrange={isTwoHeadArrange} description={description} indeterminate={indeterminate} isLastEle={isLastEle} isGroup={isGroup} icon={icon} selectedIcon={selectedIcon} checked={this.data.checked} value={value} onChange={(checked) => this.setChecked(checked)} disabled={disabled} id={id} iconSize={iconSize} fontSize={fontSize} gap={gap} block={block}>{props.children.length && props.children[0] ? props.children : label || "\u9009\u9879"}</MyCheckbox>;
  };
  css = () => checkbox_default;
};

// packages/avm-ui/src/components/checkbox/checkboxGroup.tsx
var defaultProps = {
  disabled: false
};
var CheckboxGroup = class extends Component {
  data = {
    checkList: [],
    hasChecked: false
  };
  setCheckList = (val, props) => {
    this.data.checkList = val;
    this.data.hasChecked = true;
    props.handleChange?.(val);
  };
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const { defaultValue, disabled } = props;
    const list = props.children.map((item) => {
      return {
        ...item.attributes,
        children: item.children
      };
    });
    if (defaultValue && !this.data.hasChecked) {
      this.data.checkList = defaultValue;
    }
    const listEle = list.map((item, index) => {
      return <Checkbox {...item} isGroup={true} isLastEle={index === list.length - 1} defaultValue={defaultValue} checkedList={this.data.checkList} disabled={item.disabled || disabled} check={(val) => {
        this.setCheckList([...this.data.checkList, val], props);
      }} uncheck={(val) => {
        this.setCheckList(this.data.checkList.filter((v) => v !== val), props);
      }}>{item.label}</Checkbox>;
    });
    return <div>{listEle}</div>;
  };
};

// packages/avm-ui/src/components/checkbox/index.ts
var checkbox_default2 = attachPropertiesToComponent(Checkbox, {
  Group: CheckboxGroup
});
avm.define("avm-checkbox", Checkbox);
avm.define("avm-checkbox-group", CheckboxGroup);
export {
  checkbox_default2 as default
};
