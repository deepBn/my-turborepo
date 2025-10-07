import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const AppLayout = () => {
  return (
    <GluestackUIProvider>
      <Stack />
    </GluestackUIProvider>
  );
};

export default AppLayout;
