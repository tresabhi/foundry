import { Tabs } from '@radix-ui/themes';

export function NavigationTabs() {
  return (
    <Tabs.Root value="define">
      <Tabs.List>
        <Tabs.Trigger value="define">Define</Tabs.Trigger>
        <Tabs.Trigger value="sketch">Sketch</Tabs.Trigger>
        <Tabs.Trigger value="extrude">Extrude</Tabs.Trigger>
        <Tabs.Trigger value="shade">Shade</Tabs.Trigger>
        <Tabs.Trigger value="assemble">Assemble</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}
