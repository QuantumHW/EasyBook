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

// packages/avm-ui/src/components/tag/tag.less
var tag_default = ".adm-tag {\n  font-weight: normal;\n  display: block;\n  white-space: nowrap;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n.adm-tag-row {\n  flex-flow: row;\n  margin: 1px;\n}\n.adm-tag-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.adm-tag-wrapper-disabled {\n  opacity: 0.3;\n}\n.adm-tag-round {\n  border-radius: 100px;\n}\n.adm-tag-close {\n  font-size: 10px;\n}\n";

// packages/avm-ui/src/components/tag/tag.tsx
var classPrefix = `adm-tag`;
var colorRecord = {
  primary: "#9AC200",
  success: "#00b578",
  warning: "#ff8f1f",
  danger: "#ff3141"
};
var defaultProps = {
  color: "primary",
  fill: "solid",
  round: false,
  size: "middle",
  borderRadius: "2px",
  isDelete: false,
  isDisabled: false
};
var sizeMappings = {
  small: {
    padding: "0 3px",
    heights: "16px",
    fontSize: "10px",
    maxWidth: "104px",
    minWidth: "26px",
    closeIconRight: "3px"
  },
  middle: {
    padding: "0 4px",
    heights: "18px",
    fontSize: "12px",
    maxWidth: "108px",
    minWidth: "32px",
    closeIconRight: "4px"
  },
  large: {
    padding: "0 5px",
    heights: "22px",
    fontSize: "14px",
    maxWidth: "128px",
    minWidth: "38px",
    closeIconRight: "5px"
  }
};
var Tag = class extends Component {
  data = {
    isShowTag: true
  };
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const color = colorRecord[props.color] ?? props.color;
    const wrapperStyles = {};
    wrapperStyles["border"] = `1px solid ${props.borderColor ?? color}`;
    wrapperStyles["height"] = sizeMappings[props.size].heights;
    if (props.fill === "outline") {
      sizeMappings[props.size]["color"] = props.textColor ?? color;
    } else {
      wrapperStyles["background"] = props.bgColor ?? color;
      sizeMappings[props.size]["color"] = props.textColor ?? "#fff";
    }
    if (props.borderRadius && !props.round) {
      wrapperStyles["borderRadius"] = props.borderRadius;
    }
    return <view className={`${classPrefix}-row`}><view className={classNames(`${classPrefix}-wrapper`, {
      [`${classPrefix}-wrapper-disabled`]: props.isDisabled,
      [`${classPrefix}-round`]: props.round
    })} style={{ ...wrapperStyles, display: this.data.isShowTag ? "flex" : "none" }}>
      <span style={{ ...sizeMappings[props.size] }} onClick={props.handleClick} className={classPrefix}>{props.children}</span>
      {props.isDelete && <span className={`${classPrefix}-close`} style={{ color: sizeMappings[props.size].color, paddingRight: sizeMappings[props.size].closeIconRight }} onClick={() => {
        !props.isDisabled && (this.data.isShowTag = false);
      }}>{"\u2715"}</span>}
    </view></view>;
  };
  css = () => tag_default;
};

// packages/avm-ui/src/components/tag/index.ts
var tag_default2 = Tag;
avm.define("avm-tag", Tag);
export {
  tag_default2 as default
};
