import { Flex, Theme } from '@radix-ui/themes';
import './App.css';
import { NavigationTabs } from './components/NavigationTabs';

function App() {
  return (
    <Theme appearance="dark">
      <Flex direction="column">
        <NavigationTabs />
      </Flex>
    </Theme>
  );
}

export default App;
