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

// packages/avm-ui/src/components/card/card.less
var card_default = ".adm-card {\n  background: #ffffff;\n  border-radius: 8px;\n  border: solid 0.5px #eeeeee;\n}\n.adm-card-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-bottom: 0.5px solid #eeeeee;\n}\n.adm-card-header-title {\n  font-size: 16px;\n  line-height: 1.4;\n  font-weight: 400;\n  color: #333;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.adm-card-header-desc {\n  font-size: 12px;\n  color: #999;\n  margin-top: 8px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.adm-card-header-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 14px 16px;\n}\n.adm-card-header-prefix {\n  margin-left: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.adm-card-header-extra {\n  margin-right: 16px;\n  flex-shrink: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #999;\n}\n.adm-card-body {\n  padding: 12px 16px;\n  color: #666;\n  font-size: 14px;\n}\n";

// packages/avm-ui/src/components/card/card.tsx
var classPrefix = `adm-card`;
var Card = class extends Component {
  render = (props) => {
    const renderHeader = () => {
      const { title, extra, prefix, titleDesc } = props;
      if (!(title || extra)) {
        return null;
      }
      return <div className={classNames(`${classPrefix}-header`, props.headerClassName)} style={props.headerStyle} onClick={props.onHeaderClick}>
        {prefix && <div className={`${classPrefix}-header-prefix`}>{prefix}</div>}
        {title.children ? title : <div className={`${classPrefix}-header-content`}>
          {title && <text className={`${classPrefix}-header-title`}>{title}</text>}
          {titleDesc && <text className={`${classPrefix}-header-desc`}>{titleDesc}</text>}
        </div>}
        {props.extra && <text className={`${classPrefix}-header-extra`}>{props.extra}</text>}
      </div>;
    };
    const renderBody = () => {
      if (!props.children) {
        return null;
      }
      let children = "";
      props.children.map((item) => {
        if (typeof item === "string") {
          children = <text class={props.bodyClassName}>{item}</text>;
        } else {
          children = props.children;
        }
      });
      return <div className={classNames(`${classPrefix}-body`, props.bodyClassName)} style={props.bodyStyle} onClick={props.onBodyClick}>{children}</div>;
    };
    return <div className={classPrefix} onClick={props.onClick} style={props.style}>
      {renderHeader()}
      {renderBody()}
    </div>;
  };
  css = () => card_default;
};

// packages/avm-ui/src/components/card/index.ts
var card_default2 = Card;
avm.define("avm-card", Card);
export {
  card_default2 as default
};
