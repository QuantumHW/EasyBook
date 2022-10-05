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

// packages/avm-ui/src/components/input/input.less
var input_default = ".adm-input-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  max-height: 100%;\n}\n.adm-input-wrapper-warning {\n  border-bottom: 0.5px solid #f00;\n}\n.adm-input {\n  flex: 1;\n  box-sizing: border-box;\n  max-height: 100%;\n  line-height: 1.5;\n  background: transparent;\n  border: 0;\n  outline: none;\n  appearance: none;\n  min-height: 1.5em;\n}\n.adm-input-disabled {\n  pointer-events: none;\n  opacity: 1;\n}\n.adm-input-read-only {\n  pointer-events: none;\n}\n.adm-input-counter {\n  font-size: 16px;\n  color: #bbb;\n}\n.adm-input-clear {\n  height: 100%;\n  flex: none;\n  margin-left: 8px;\n  padding: 3px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.adm-input-clear-icon {\n  width: 16px;\n  height: 16px;\n}\n";

// packages/avm-ui/src/components/input/input.tsx
var classPrefix2 = `adm-input`;
var defaultProps = {
  defaultValue: "",
  fontSize: "16px",
  color: "#333",
  placeholderColor: "#bbb",
  disabledColor: "#999",
  textAlign: "left",
  type: "text"
};
var Input = class extends Component {
  data = {
    value: this.props.value || this.props.defaultValue,
    hasFocus: false
  };
  setValue = (val) => {
    this.data.value = val;
    this.props.handleChange?.(this.data.value);
  };
  setHasFocus = (state) => {
    this.data.hasFocus = state;
  };
  render = (props2) => {
    this.props = Object.assign({}, defaultProps, props2);
    const {
      id,
      color,
      fontSize,
      disabledColor,
      textAlign,
      placeholderColor,
      placeholderClass,
      disabled,
      readOnly,
      placeholder = "\u8BF7\u8F93\u5165\u6587\u672C",
      maxLength,
      minLength,
      max,
      min,
      clearable,
      enterPress,
      onKeyDown,
      onFocus,
      onBlur,
      onKeyUp,
      handleClear,
      autoComplete = "on",
      enterKeyHint,
      pattern,
      type,
      autoCapitalize,
      autoCorrect,
      keyboardType,
      confirmType,
      showCount,
      warning,
      borderStyle
    } = this.props;
    const handleKeydown = (e) => {
      if (enterPress && (e.code === "Enter" || e.keyCode === 13)) {
        enterPress(e);
      }
      onKeyDown?.(e);
    };
    const iptStyles = {
      fontSize,
      color: disabled ? disabledColor : warning ? "#f00" : color,
      textAlign
    };
    return <div className={classNames(`${classPrefix2}-wrapper`, {
      [`${classPrefix2}-wrapper-warning`]: warning
    })} {...props2} style={{ margin: 0, padding: "14px 0", ...borderStyle }}>
      <input id={id} value={this.data.value} className={classNames(classPrefix2, {
        [`${classPrefix2}-disabled`]: disabled,
        [`${classPrefix2}-readOnly`]: readOnly
      })} style={iptStyles} placeholder-style={`color: ${placeholderColor}`} placeholder-class={placeholderClass} placeholder={placeholder} disabled={!!(disabled || readOnly)} max={max} min={min} maxlength={maxLength} minlength={minLength} keyboard-type={keyboardType} confirm-type={confirmType} autoComplete={autoComplete} enterKeyHint={enterKeyHint} pattern={pattern} type={type} autoCapitalize={autoCapitalize} autoCorrect={autoCorrect} onKeyDown={handleKeydown} onKeyUp={onKeyUp} onInput={(e) => {
        this.setValue(e.detail.value);
      }} onChange={(e) => {
        this.setValue(e.detail.value);
      }} onFocus={(e) => {
        this.setHasFocus(true);
        onFocus?.(e);
      }} onBlur={(e) => {
        !clearable ? this.setHasFocus(false) : setTimeout(() => {
          this.setHasFocus(false);
        }, 300);
        onBlur?.(e);
      }} />
      {showCount && <div className={`${classPrefix2}-counter`}>
        {this.data.value ? this.data.value.length : 0}
        {"/"}
        {maxLength}
      </div>}
      {clearable && !!this.data.value && this.data.hasFocus && <div className={`${classPrefix2}-clear`} onClick={() => {
        this.setValue("");
        handleClear?.();
      }}><Icon_default name="CloseCircleOutline" size={16} /></div>}
    </div>;
  };
  css = () => input_default;
};

// packages/avm-ui/src/components/input/index.ts
var input_default2 = Input;
avm.define("avm-input", Input);
export {
  input_default2 as default
};
