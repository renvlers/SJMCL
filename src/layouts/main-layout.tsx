import { Flex } from "@chakra-ui/react";
import HeadNavBar from "@/components/head-navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex
      direction="column"
      h="100vh"
      bgImg="url('/images/Jǫkull-3.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <HeadNavBar />
      {children}
    </Flex>
  );
};

export default MainLayout;
