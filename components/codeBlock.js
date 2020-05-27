import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import vsDark from 'prism-react-renderer/themes/vsDark';
import Notification from '../components/notification';

export default ({ children }) => {
  const scope = { Notification };

  return (
    <LiveProvider code={children} scope={scope} theme={vsDark}>
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  );
};
