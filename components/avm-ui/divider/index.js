// packages/avm-ui/src/components/divider/divider.less
var divider_default = ".adm-divider {\n  align-items: center;\n  margin: 16px 0;\n  font-size: 12px;\n  flex-direction: row;\n  width: 100%;\n  color: #333;\n}\n.adm-divider-content {\n  flex: none;\n  padding: 0 16px;\n}\n";

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

// packages/avm-ui/src/components/divider/divider.tsx
var classPrefix = `adm-divider`;
var defaultProps = {
  contentPosition: "center",
  color: "#999999",
  borderColor: "#eeeeee",
  borderStyle: "solid",
  borderTopWidth: "1px"
};
var Divider = class extends Component {
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const { color, borderStyle, borderColor, borderTopWidth, contentPosition, children } = props;
    const fontContentSty = {
      color,
      flex: "none"
    };
    const dividerLineSty = {
      borderStyle,
      borderColor,
      borderTopWidth,
      flex: "auto"
    };
    const dividerLeftSty = Object.assign({
      maxWidth: contentPosition === "left" ? "10%" : "auto"
    }, dividerLineSty);
    const dividerRightSty = Object.assign({
      maxWidth: contentPosition === "right" ? "10%" : "auto"
    }, dividerLineSty);
    return <div className={classNames(classPrefix, `${classPrefix}-${contentPosition}`)}>
      <div style={dividerLeftSty} />
      <text className={`${classPrefix}-content`} style={fontContentSty}>{children && children.length ? children : "\u5206\u5272\u7EBF"}</text>
      <div style={dividerRightSty} />
    </div>;
  };
  css = () => divider_default;
};

// packages/avm-ui/src/components/divider/index.ts
var divider_default2 = Divider;
avm.define("avm-divider", Divider);
export {
  divider_default2 as default
};
