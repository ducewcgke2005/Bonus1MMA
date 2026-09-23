import { Ionicons } from '@expo/vector-icons';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// ================= PROFILE ICONS =================
import MyProfileIcon from '../../assets/images/profileIcons/my_profile.svg';
import SettingsIcon from '../../assets/images/profileIcons/settings.svg';
import SupportIcon from '../../assets/images/profileIcons/support.svg';
import FaqIcon from '../../assets/images/profileIcons/faq.svg';
import AdminIcon from '../../assets/images/profileIcons/admin.svg';
import LogoutIcon from '../../assets/images/profileIcons/logout.svg';

// ================= MENU DATA =================

const menuItems = [
    {
        title: 'My Profile',
        icon: MyProfileIcon,
    },
    {
        title: 'Settings',
        icon: SettingsIcon,
    },
    {
        title: 'Support',
        icon: SupportIcon,
    },
    {
        title: 'FAQ',
        icon: FaqIcon,
    },
    {
        title: 'Admin',
        icon: AdminIcon,
    },
    {
        title: 'Logout',
        icon: LogoutIcon,
    },
];

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                {/* ================= BANNER ================= */}
                <View style={styles.banner}>
                    <View
                        style={[
                            styles.building,
                            styles.buildingOne,
                        ]}
                    />

                    <View
                        style={[
                            styles.building,
                            styles.buildingTwo,
                        ]}
                    />

                    <View
                        style={[
                            styles.building,
                            styles.buildingThree,
                        ]}
                    />

                    <View
                        style={[
                            styles.building,
                            styles.buildingFour,
                        ]}
                    />

                    <View style={styles.bannerCircle} />
                </View>

                {/* ================= AVATAR ================= */}
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>K</Text>
                    </View>

                    <Pressable style={styles.cameraButton}>
                        <Ionicons
                            name="camera"
                            size={19}
                            color="#FFFFFF"
                        />
                    </Pressable>
                </View>

                {/* ================= USER INFORMATION ================= */}
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>
                        Phạm Quang Khang (KHANGPQ3)
                    </Text>

                    <Text style={styles.department}>
                        (BM SE)
                    </Text>
                </View>

                {/* ================= MENU ================= */}
                <View style={styles.menu}>
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Pressable
                                key={item.title}
                                style={({ pressed }) => [
                                    styles.menuItem,
                                    pressed && styles.pressed,
                                ]}
                                onPress={() => {}}
                            >
                                {/* SVG MENU ICON */}
                                <Icon
                                    width={25}
                                    height={25}
                                />

                                <Text style={styles.menuText}>
                                    {item.title}
                                </Text>

                                {/* RIGHT ARROW */}
                                {item.title !== 'Logout' && (
                                    <Ionicons
                                        name="chevron-forward"
                                        size={22}
                                        color="#888888"
                                        style={styles.arrow}
                                    />
                                )}
                            </Pressable>
                        );
                    })}
                </View>

                {/* ================= VERSION ================= */}
                <View style={styles.version}>
                    <Text style={styles.versionText}>
                        myFPT Version 5.9.10
                    </Text>

                    <Text style={styles.versionText}>
                        Copyright @ FPT Software 2021
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// ================= STYLES =================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    content: {
        paddingBottom: 15,
    },

    /* ================= BANNER ================= */

    banner: {
        height: 150,
        marginHorizontal: 32,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: '#3985E9',
        overflow: 'hidden',
        position: 'relative',
    },

    bannerCircle: {
        position: 'absolute',
        width: 300,
        height: 170,
        borderRadius: 170,
        backgroundColor: '#4D94EC',
        top: 15,
        right: -40,
        opacity: 0.7,
    },

    building: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#64A0EE',
        opacity: 0.75,
    },

    buildingOne: {
        width: 75,
        height: 100,
        left: 0,
    },

    buildingTwo: {
        width: 60,
        height: 70,
        left: 90,
    },

    buildingThree: {
        width: 65,
        height: 105,
        right: 80,
    },

    buildingFour: {
        width: 85,
        height: 125,
        right: 0,
    },

    /* ================= AVATAR ================= */

    avatarContainer: {
        alignItems: 'center',
        marginTop: -65,
        height: 150,
        justifyContent: 'flex-start',
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 80,
        backgroundColor: '#E3F3FD',
        borderWidth: 5,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatarText: {
        fontSize: 82,
        fontWeight: '500',
        color: '#159BD7',
        lineHeight: 90,
    },

    cameraButton: {
        position: 'absolute',
        right: '35%',
        bottom: 30,
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#888888',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },

    /* ================= USER INFO ================= */

    userInfo: {
        alignItems: 'center',
        marginTop: -20,
        marginBottom: 25,
        paddingHorizontal: 15,
    },

    userName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111111',
        textAlign: 'center',
    },

    department: {
        fontSize: 16,
        color: '#666666',
        marginTop: 3,
    },

    /* ================= MENU ================= */

    menu: {
        marginHorizontal: 32,
    },

    menuItem: {
        minHeight: 65,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        paddingHorizontal: 0,
    },

    menuText: {
        fontSize: 17,
        color: '#111111',
        marginLeft: 18,
        fontWeight: '400',
    },

    arrow: {
        marginLeft: 'auto',
    },

    pressed: {
        opacity: 0.6,
        backgroundColor: '#F7F7F7',
    },

    /* ================= VERSION ================= */

    version: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15,
    },

    versionText: {
        fontSize: 10,
        color: '#999999',
        marginBottom: 6,
    },
});