import { 
  Card,
  Flex, 
  Heading,
  Highlight,
  HStack,
  Icon,
  Tab,
  TabList,
  Tabs,
  Text
} from '@chakra-ui/react';
import { 
  LuZap,
  LuBox,
  LuUserCircle2,
  LuSettings
} from "react-icons/lu";
import { useRouter } from 'next/router';

import styles from './head-navbar.module.css';

const HeadNavBar = () => {
  const router = useRouter();

  const navList = [
    { icon: LuZap, label: '启动', path: '/launch' },
    { icon: LuBox, label: '游戏', path: '/games' },
    { icon: LuUserCircle2, label: '账户', path: '/accounts' },
    { icon: LuSettings, label: '设置', path: '/settings' },
  ]

  const selectedIndex = navList.findIndex((item) =>
    router.pathname.startsWith(item.path)
  );

  return (
    <Flex justify="center" p={4}>
      <Card className={styles['card-blur']} px={8} py={2}>
        <HStack spacing={4}>
          <Heading size="md" className={styles.title}>
            <Highlight query="L" styles={{ color: "blue.600" }}>
              SJMCL
            </Highlight>
          </Heading>
          <Tabs
            variant="soft-rounded"
            size="sm"
            index={selectedIndex}
            onChange={(index) => { router.push(navList[index].path) }}
          >
            <TabList>
              {navList.map((item, index) => (
                <Tab key={item.path} fontWeight={selectedIndex === index ? '600' : 'normal'}>
                  <HStack spacing={2}>
                    <Icon as={item.icon} />
                    <Text>{item.label}</Text>
                  </HStack>
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </HStack>
      </Card>
    </Flex>
  )
}

export default HeadNavBar;