import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import { usePathname, useRouter } from 'expo-router';

import HomeIcon from '../../assets/images/tabIcons/home.svg';
import HomeActiveIcon from '../../assets/images/tabIcons/home_active.svg';

import AllAppsIcon from '../../assets/images/tabIcons/allapps.svg';
import AllAppsActiveIcon from '../../assets/images/tabIcons/allapps_active.svg';

import GoldIcon from '../../assets/images/tabIcons/gold.svg';
import GoldActiveIcon from '../../assets/images/tabIcons/gold_active.svg';

import GameIcon from '../../assets/images/tabIcons/game.svg';
import GameActiveIcon from '../../assets/images/tabIcons/game_active.svg';

import ProfileIcon from '../../assets/images/tabIcons/profile.svg';
import ProfileActiveIcon from '../../assets/images/tabIcons/profile_active.svg';

const tabs = [
  {
    name: 'home',
    label: 'Home',
    icon: HomeIcon,
    activeIcon: HomeActiveIcon,
  },
  {
    name: 'index',
    label: 'All Apps',
    icon: AllAppsIcon,
    activeIcon: AllAppsActiveIcon,
  },
  {
    name: 'gold',
    label: 'Gold',
    icon: GoldIcon,
    activeIcon: GoldActiveIcon,
  },
  {
    name: 'game',
    label: 'Game',
    icon: GameIcon,
    activeIcon: GameActiveIcon,
  },
  {
    name: 'profile',
    label: 'Profile',
    icon: ProfileIcon,
    activeIcon: ProfileActiveIcon,
  },
];

export default function AppTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === '/' || pathname.endsWith('/index')) {
      return 'index';
    }

    if (pathname.includes('/profile')) {
      return 'profile';
    }

    if (pathname.includes('/gold')) {
      return 'gold';
    }

    if (pathname.includes('/game')) {
      return 'game';
    }

    if (pathname.includes('/home')) {
      return 'home';
    }

    return 'index';
  };

  const activeTab = getActiveTab();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;

        const Icon = isActive ? tab.activeIcon : tab.icon;

        return (
          <Pressable
            key={tab.name}
            style={styles.tab}
            onPress={() => router.push(
              tab.name === 'index'
                ? '/'
                : `/${tab.name}`
            )}
          >
            <View
              style={[
                styles.iconContainer,
                isActive && styles.activeIconContainer,
              ]}
            >
              <Icon
                width={24}
                height={24}
              />
            </View>

            <Text
              style={[
                styles.label,
                isActive && styles.activeLabel,
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingBottom: 4,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    width: 44,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },

  activeIconContainer: {
    backgroundColor: '#E8F1FF',
  },

  label: {
    marginTop: 2,
    fontSize: 11,
    color: '#666666',
  },

  activeLabel: {
    color: '#1677D2',
    fontWeight: '600',
  },
});