import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AppTabs from '../components/app-tabs';

type AppItem = {
  name: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  image?: ImageSourcePropType;
};

const apps: Record<string, AppItem[]> = {
  WORK: [
    {
      name: 'Approve Now',
      description:
        'Approve managers of pending requests and allow managers to approve requests from internal tools',
      icon: 'checkmark-circle',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/approve_now.png'),
    },
    {
      name: 'Reward',
      description:
        'Send colleagues a thank you note or reward Gold for exceptional contribution',
      icon: 'gift-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/reward.png'),
    },
    {
      name: 'Discipline',
      description:
        'Send a discipline warning to subordinates for violation of codes of conduct',
      icon: 'hammer-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/discipline.png'),
    },
    {
      name: 'Learning',
      description:
        'A library of mandatory and suggested learning courses; check-in and send feedback for each course',
      icon: 'school-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/learning.png'),
    },
    {
      name: 'My Tasks',
      description: '',
      icon: 'clipboard-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/my_tasks.png'),
    },
  ],

  UTILITIES: [
    {
      name: 'FPT Care',
      description: '',
      icon: 'medical-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/fpt_care.png'),
    },
    {
      name: 'Events',
      description:
        'Register, check-in, check-out, send feedback to company events and programs',
      icon: 'calendar-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/events.png'),
    },
    {
      name: 'Survey',
      description:
        'Conduct and collect responses for company-wide or department-wide surveys',
      icon: 'document-text-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/survey.png'),
    },
    {
      name: 'FPT Dating',
      description: 'Dating feature.',
      icon: 'heart-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/dating.png'),
    },
    {
      name: 'Payslip',
      description: '',
      icon: 'wallet-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/payslip.png'),
    },
    {
      name: 'Birthday',
      description:
        'Your birthday is a special moment. We are very happy to send the best wishes for you.',
      icon: 'gift-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/birthday.png'),
    },
  ],

  NEWS: [
    {
      name: 'News',
      description:
        'A collection of latest news and notable events around the company',
      icon: 'newspaper-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/news.png'),
    },
    {
      name: 'Star Ave',
      description:
        'Recognize notable achievements within a business unit or within FPT',
      icon: 'medal-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/star_ave.png'),
    },
  ],

  WIKI: [
    {
      name: 'Employee Info',
      description:
        'Basic, non-confidential employee information (name, gender, department, etc.)',
      icon: 'people-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/employee_info.png'),
    },
  ],

  GAME: [
    {
      name: 'Game',
      description: 'Community-engaging games with Gold as rewards',
      icon: 'game-controller-outline',
      color: '#E8F1FF',
      image: require('../../assets/images/tabIcons/game.png'),
    },
  ],
};

const sections = ['WORK', 'UTILITIES', 'NEWS', 'WIKI', 'GAME'];

function AppIcon({
  icon,
  color,
  image,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  image?: ImageSourcePropType;
}) {
  return (
    <View style={[styles.appIcon, { backgroundColor: color }]}>
      {image ? (
        <Image
          source={image}
          style={styles.iconImage}
          resizeMode="contain"
        />
      ) : (
        <Ionicons
          name={icon}
          size={25}
          color="#1677D2"
        />
      )}
    </View>
  );
}

function AppRow({ app }: { app: AppItem }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.appRow,
        pressed && styles.pressed,
      ]}
      onPress={() => {}}
    >
      <AppIcon
        icon={app.icon}
        color={app.color}
        image={app.image}
      />

      <View style={styles.appInfo}>
        <Text style={styles.appName}>
          {app.name}
        </Text>

        {app.description !== '' && (
          <Text
            style={styles.appDescription}
            numberOfLines={2}
          >
            {app.description}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const filteredSections = sections
    .map((section) => ({
      name: section,
      apps: apps[section].filter((app) =>
        app.name
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.apps.length > 0);

  return (
    <SafeAreaView style={styles.container}>

      {/* Search Header */}
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={16}
            color="#B3B3B3"
          />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Type to search here"
            placeholderTextColor="#B3B3B3"
            style={styles.searchInput}
          />
        </View>

        <Pressable
          style={styles.gridButton}
          onPress={() => {}}
        >
          <Ionicons
            name="grid-outline"
            size={20}
            color="#888888"
          />
        </Pressable>
      </View>

      {/* Page Title */}
      <View>
        <Text style={styles.pageTitle}>
          All Apps
        </Text>
      </View>

      {/* Apps List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {filteredSections.map((section) => (
          <View
            key={section.name}
            style={styles.section}
          >
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {section.name}
              </Text>
            </View>

            {section.apps.map((app) => (
              <AppRow
                key={app.name}
                app={app}
              />
            ))}
          </View>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 7,
    gap: 8,
  },

  searchBox: {
    flex: 1,
    height: 34,
    backgroundColor: '#F1F1F1',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 12,
    color: '#555555',
    marginLeft: 6,
    paddingVertical: 0,
  },

  gridButton: {
    width: 28,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 15,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingBottom: 20,
  },

  section: {
    marginBottom: 4,
  },

  sectionHeader: {
    backgroundColor: '#EEEEEE',
    height: 25,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },

  sectionTitle: {
    fontSize: 10,
    color: '#777777',
    fontWeight: '500',
  },

  appRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 9,
    minHeight: 61,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EEEEEE',
  },

  appIcon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  iconImage: {
    width: 30,
    height: 30,
  },

  appInfo: {
    flex: 1,
  },

  appName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 3,
  },

  appDescription: {
    fontSize: 9,
    lineHeight: 12,
    color: '#777777',
  },

  pressed: {
    opacity: 0.65,
    backgroundColor: '#F5F9FF',
  },
});