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

// packages/avm-ui/src/components/radio/myRadio.tsx
var classPrefix = `adm-radio`;
var MyRadio = class extends Component {
  data = {
    checked: this.props.checked || false
  };
  setChecked = () => {
    if (!this.data.checked) {
      this.data.checked = !this.data.checked;
      this.props.onChange?.(this.data.checked);
    }
  };
  render = (props) => {
    const {
      fontSize = "16px",
      gap = "8px",
      iconSize = "18px",
      disabled = false,
      block = false,
      icon,
      selectedIcon,
      isGroup,
      isLastEle,
      descIsOneLineShow,
      isTwoHeadArrange
    } = this.props;
    const boxCls = classNames(classPrefix, props.className, {
      [`${classPrefix}-checked`]: this.data.checked,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-block`]: block,
      [`${classPrefix}-two-headarrange`]: isTwoHeadArrange,
      [`${classPrefix}-text-has-bottomborder`]: isTwoHeadArrange
    });
    const iconStyles = {
      width: iconSize,
      height: iconSize
    };
    const childStyles = {
      fontSize,
      paddingLeft: isTwoHeadArrange ? 0 : gap
    };
    const defaultEleIcons = <view className={classNames(`${classPrefix}-icon`, {
      [`${classPrefix}-icon-checked`]: this.data.checked,
      [`${classPrefix}-icon-disabled`]: disabled
    })} style={iconStyles}>{this.data.checked && <text className={classNames(`${classPrefix}-icon-inner`, {
      [`${classPrefix}-icon-inner-disabled`]: disabled
    })} />}</view>;
    const iconEles = icon && selectedIcon ? this.data.checked ? selectedIcon : icon : defaultEleIcons;
    const textCls = classNames(`${classPrefix}-text`, {
      [`${classPrefix}-text-disabled`]: disabled,
      [`${classPrefix}-text-has-bottomborder`]: !isTwoHeadArrange && isGroup && !isLastEle,
      [`${classPrefix}-desc-onelineshow`]: descIsOneLineShow
    });
    const labelContent = <view className={textCls}>
      {formatLabel(props.children, classNames(`${classPrefix}-text-content`, {
        [`${classPrefix}-desc-onelineshow-content`]: descIsOneLineShow
      }), childStyles)}
      {props.description && <span className={classNames(`${classPrefix}-text-description`, {
        [`${classPrefix}-desc-onelineshow-desc`]: descIsOneLineShow
      })} style={{ paddingLeft: isTwoHeadArrange ? 0 : gap }}>{props.description}</span>}
    </view>;
    return <label className={boxCls} style={{ ...props.style }} onClick={() => {
      !disabled && this.setChecked();
    }}>
      {!isTwoHeadArrange && iconEles}
      {props.children && labelContent}
      {isTwoHeadArrange && iconEles}
    </label>;
  };
};

// packages/avm-ui/src/components/radio/radio.less
var radio_default = ".adm-radio {\n  display: inline-flex;\n  flex-direction: row;\n  vertical-align: text-bottom;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n}\n.adm-radio-two-headarrange {\n  justify-content: space-between;\n}\n.adm-radio-icon {\n  border-radius: 50%;\n  border: 1px solid #ddd;\n  align-items: center;\n  justify-content: center;\n}\n.adm-radio-icon-inner {\n  width: 55%;\n  height: 55%;\n  border-radius: 50%;\n  background: #9AC200;\n}\n.adm-radio-icon-inner-disabled {\n  background: #ddd;\n}\n.adm-radio-icon-checked {\n  border: 1px solid #9AC200;\n}\n.adm-radio-icon-disabled {\n  background: #f2f2f2;\n  border-color: #ddd;\n}\n.adm-radio-block {\n  display: flex;\n}\n.adm-radio-content {\n  flex: none;\n}\n.adm-radio-text {\n  flex: 1;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.adm-radio-text-has-bottomborder {\n  border-bottom: 1px solid #e8e8e8;\n}\n.adm-radio-text-content {\n  flex: 1;\n  flex-wrap: wrap;\n}\n.adm-radio-text-description {\n  flex: 1;\n  flex-wrap: wrap;\n  font-size: 12px;\n  color: #999;\n  padding-top: 8px;\n}\n.adm-radio-text-disabled {\n  color: #bbb;\n}\n.adm-radio-desc-onelineshow {\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.adm-radio-desc-onelineshow-content {\n  flex: 1;\n}\n.adm-radio-desc-onelineshow-desc {\n  flex: none;\n  padding-top: 0;\n  font-size: 14px;\n  max-width: 100px;\n  text-align: right;\n}\n";

// packages/avm-ui/src/components/radio/radio.tsx
var defaultProps = {
  defaultChecked: false
};
var Radio = class extends Component {
  data = {
    checked: this.props.checked || this.props.defaultChecked || false
  };
  setChecked = (check) => {
    this.data.checked = check;
    this.props.radioChange?.(this.props.value);
  };
  render = (props) => {
    this.props = Object.assign({}, defaultProps, props);
    const {
      label,
      RadioGroupContext,
      style,
      id,
      fontSize,
      gap,
      iconSize,
      value,
      radioChange,
      icon,
      selectedIcon,
      description,
      isGroup,
      isLastEle,
      descIsOneLineShow = false,
      isTwoHeadArrange = false
    } = this.props;
    const groupContext = RadioGroupContext;
    let disabled = this.props.disabled || (groupContext ? groupContext.disabled : false);
    if (groupContext && value !== void 0) {
      this.data.checked = groupContext.value.includes(value);
      this.setChecked = (checked) => {
        if (checked) {
          groupContext.check(value);
        } else {
          groupContext.uncheck(value);
        }
        radioChange?.(checked);
      };
    }
    return <MyRadio isGroup={isGroup} isLastEle={isLastEle} descIsOneLineShow={descIsOneLineShow} isTwoHeadArrange={isTwoHeadArrange} description={description} style={style} checked={this.data.checked} icon={icon} selectedIcon={selectedIcon} value={value} onChange={(checked) => this.setChecked(checked)} disabled={disabled} id={id} fontSize={fontSize} iconSize={iconSize} gap={gap}>{props.children.length && props.children[0] ? props.children : label || "\u5355\u9009\u9879"}</MyRadio>;
  };
  css = () => radio_default;
};

// packages/avm-ui/src/components/radio/group.tsx
var defaultProps2 = {
  disabled: false,
  defaultValue: null
};
var Group = class extends Component {
  data = {
    value: this.props.value || this.props.defaultValue
  };
  setValue = (val) => {
    this.data.value = val;
    this.props.groupChange && this.props.groupChange(val);
  };
  render = (props) => {
    props = Object.assign({}, defaultProps2, props);
    const RadioGroupContext = {
      value: this.data.value === null ? [] : [this.data.value],
      check: (v) => {
        this.setValue(v);
      },
      uncheck: () => {
      },
      disabled: props.disabled
    };
    const eles = props.children.map((ele, index) => <Radio {...ele.attributes} RadioGroupContext={RadioGroupContext} isGroup={true} isLastEle={index === props.children.length - 1}>{ele.children}</Radio>);
    return <div>{eles}</div>;
  };
};

// packages/avm-ui/src/components/radio/index.ts
var radio_default2 = attachPropertiesToComponent(Radio, {
  Group
});
avm.define("avm-radio", Radio);
avm.define("avm-radio-group", Group);
export {
  radio_default2 as default
};
