// packages/avm-ui/src/components/steps/steps.less
var steps_default = ".adm-steps {\n  width: 100%;\n}\n.adm-steps-horizontal {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 8px 0;\n}\n.adm-steps-vertical {\n  height: 100%;\n  padding: 8px 16px;\n}\n.adm-step {\n  align-items: center;\n  position: relative;\n}\n.adm-step-indicator {\n  display: flex;\n  align-items: center;\n}\n.adm-step-content {\n  width: 95%;\n}\n.adm-step-title {\n  color: #333;\n  width: 100%;\n  font-size: 14px;\n  line-height: 20px;\n}\n.adm-step-title-error {\n  color: #f00;\n}\n.adm-step-title-horizontal {\n  text-align: center;\n}\n.adm-step-description {\n  width: 100%;\n  white-space: wrap;\n  font-size: 12px;\n  color: #999;\n  line-height: 16px;\n}\n.adm-step-description-error {\n  color: #f00;\n}\n.adm-step-description-horizontal {\n  text-align: center;\n}\n.adm-step-horizontal {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.adm-step-horizontal-indicator {\n  flex: 1;\n  width: 100%;\n  height: 24px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.adm-step-horizontal-line {\n  flex: 1;\n  height: 1px;\n  background: #e8e8e8;\n  left: 50%;\n  width: 100%;\n}\n.adm-step-horizontal-content {\n  padding-top: 8px;\n}\n.adm-step-horizontal-content-description {\n  margin-top: 4px;\n}\n.adm-step-vertical {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.adm-step-vertical-indicator {\n  position: absolute;\n  width: 24px;\n  height: 100%;\n  margin-right: 8px;\n  display: flex;\n  flex-direction: column;\n}\n.adm-step-vertical-line {\n  flex: 1;\n  width: 1px;\n  background: #e8e8e8;\n  height: 100%;\n}\n.adm-step-vertical-dot {\n  margin-top: 6px;\n}\n.adm-step-vertical-content {\n  flex: auto;\n  margin: 0 0 15px 32px;\n}\n.adm-step-vertical-content-description {\n  padding-top: 4px;\n}\n.adm-step-line {\n  position: absolute;\n}\n.adm-step-line-wait {\n  background: #ddd;\n}\n.adm-step-line-finish {\n  background: #9ac200;\n}\n.adm-step-line-error {\n  background: #f00;\n}\n.adm-step-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 4px;\n  z-index: 6;\n  background-color: #ddd;\n}\n.adm-step-dot-wait {\n  background-color: #ddd;\n}\n.adm-step-dot-process {\n  background-color: #9ac200;\n}\n.adm-step-dot-finish {\n  background-color: #9ac200;\n}\n.adm-step-dot-error {\n  background-color: #f00;\n}\n.adm-step-dottext {\n  display: block;\n  width: 16px;\n  height: 16px;\n  text-align: center;\n  line-height: 16px;\n  border-radius: 8px;\n  font-size: 11px;\n  z-index: 6;\n  color: #fff;\n}\n.adm-step-dottext-wait {\n  background: #ddd;\n}\n.adm-step-dottext-error {\n  background: #f00;\n}\n.adm-step-dottext-process {\n  background: #9ac200;\n}\n.adm-step-dottext-finish {\n  background: #9ac200;\n}\n";

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

// packages/avm-ui/src/components/steps/step.tsx
var classPrefix = `adm-step`;
var Step = class extends Component {
  render = (props) => {
    const {
      title = "\u6807\u9898\u6587\u5B57",
      description = "\u6B65\u9AA4\u7684\u8BE6\u60C5\u63CF\u8FF0",
      status = "wait",
      direction,
      curIndex,
      totalLen,
      isDot = false
    } = props;
    const titleCls = classNames(`${classPrefix}-title`, `${classPrefix}-title-${status}`, `${classPrefix}-title-${direction}`);
    const descCls = classNames(`${classPrefix}-description`, `${classPrefix}-description-${status}`, `${classPrefix}-${direction}-content-description`, `${classPrefix}-description-${direction}`);
    const dotCls = classNames(`${classPrefix}-dot`, `${classPrefix}-dot-${status}`, `${classPrefix}-${direction}-dot`);
    const dotEle = <text className={classNames(`${classPrefix}-dottext`, `${classPrefix}-dottext-${status}`)}>{curIndex + 1}</text>;
    const verticalLineStyle = {};
    if (direction === "vertical") {
      verticalLineStyle["top"] = props.icon ? props.iconHeight : "8px";
    }
    return <div className={classNames(`${classPrefix}`, `${classPrefix}-${direction}`)}>
      <div className={classNames(`${classPrefix}-indicator`, `${classPrefix}-${direction}-indicator`)}>
        {props.icon ? props.icon : isDot ? <div className={dotCls} /> : dotEle}
        {curIndex !== totalLen - 1 && <div className={classNames(`${classPrefix}-line`, `${classPrefix}-${direction}-line`, `${classPrefix}-line-${status}`)} style={verticalLineStyle} />}
      </div>
      <div className={classNames(`${classPrefix}-content`, `${classPrefix}-${direction}-content`)}>
        {formatLabel(title, titleCls)}
        {!!description && formatLabel(description, descCls)}
      </div>
    </div>;
  };
};

// packages/avm-ui/src/components/steps/steps.tsx
var classPrefix2 = `adm-steps`;
var defaultProps = {
  current: 0,
  direction: "horizontal"
};
var Steps = class extends Component {
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const { direction, current } = props;
    const list = props.children.map((item) => {
      return {
        ...item.attributes,
        children: item.children
      };
    });
    const stemItem = list.map((item, index) => {
      let { status } = item;
      if (index < current) {
        status = status || "finish";
      } else if (index === current) {
        status = status || "process";
      } else {
        status = status || "wait";
      }
      return <Step {...item} status={status} direction={direction} totalLen={list.length} curIndex={index} />;
    });
    return <div className={classNames(classPrefix2, `${classPrefix2}-${direction}`)}>{stemItem}</div>;
  };
  css = () => steps_default;
};

// packages/avm-ui/src/components/steps/index.ts
var steps_default2 = attachPropertiesToComponent(Steps, {
  Step
});
avm.define("avm-steps", Steps);
avm.define("avm-step", Step);
export {
  steps_default2 as default
};
