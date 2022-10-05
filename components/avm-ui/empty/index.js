// packages/avm-ui/src/components/empty/empty.less
var empty_default = ".adm-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.adm-empty-image-container {\n  display: flex;\n  justify-content: center;\n}\n.adm-empty-image-container-image {\n  width: 64px;\n}\n.adm-empty-description {\n  font-size: 14px;\n  color: #999;\n}\n";

// packages/avm-ui/src/components/empty/empty.tsx
var classPrefix = `adm-empty`;
var defaultProps = {
  imageWidth: "160px",
  imageHeight: "160px",
  imgSrc: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/d84edd4065e42cbca6e3ca62f6273ed4.png",
  descMargin: "6px 0 20px"
};
var Empty = class extends Component {
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    let { imgSrc, imageWidth, imageHeight, descMargin } = props;
    const imageNode = () => {
      return <img src={imgSrc} alt="empty-img" style={{ width: imageWidth, height: imageHeight }} />;
    };
    return <div className={classPrefix}>
      <div className={`${classPrefix}-image-container`}>{imageNode()}</div>
      {props.description && <span className={`${classPrefix}-description`} style={{ margin: descMargin }}>{props.description}</span>}
    </div>;
  };
  css = () => empty_default;
};

// packages/avm-ui/src/components/empty/index.ts
var empty_default2 = Empty;
avm.define("avm-empty", Empty);
export {
  empty_default2 as default
};
