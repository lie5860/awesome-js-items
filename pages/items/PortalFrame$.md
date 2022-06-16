## 传送门窗口
通过portal api建立一个隔离环境。

## 效果
import PortalFrameDemo from './PortalFrameDemo';

<PortalFrameDemo />

```jsx
function Demo() {
  const [state, setState] = useState(false);
  const [times, setTimes] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTimes((t) => t + 1);
    }, 500);
  }, []);
  return (
    <div style={{height: 250}}>
      <span
        onMouseOver={() => {
          setState(true);
        }}
        onMouseLeave={() => {
          setState(false);
        }}
      >
        鼠标放在这上面
      </span>
      <div/>
      {state && <PortalFrame>{times}</PortalFrame>}
    </div>
  );
}
```
## Dashboard

Here is a simple online codesandbox demo of an Ant Design component to show the usage of Ant Design React.

import FirstExample from './FirstExample';

<FirstExample />

Follow the steps below to play around with Ant Design yourself:
