import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Award, Calendar, TrendingUp } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>Profile</Text>
            <TouchableOpacity>
              <Settings size={24} color="#1a1a1a" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop' }}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Alex Thompson</Text>
            <Text style={styles.bio}>Fitness enthusiast | Runner 🏃‍♂️</Text>
          </View>

          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>156</Text>
              <Text style={styles.statLabel}>Workouts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>32</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>48</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.achievementsScroll}>
            {[
              { id: 1, title: '30 Day Streak', icon: Calendar },
              { id: 2, title: 'Power Lifter', icon: TrendingUp },
              { id: 3, title: 'Early Bird', icon: Award },
            ].map(achievement => (
              <View key={achievement.id} style={styles.achievementCard}>
                <achievement.icon size={24} color="#007AFF" />
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {[
            { id: 1, title: 'Morning Run', date: 'Today', duration: '32 min' },
            { id: 2, title: 'HIIT Workout', date: 'Yesterday', duration: '45 min' },
            { id: 3, title: 'Yoga Flow', date: '2 days ago', duration: '60 min' },
          ].map(activity => (
            <View key={activity.id} style={styles.activityItem}>
              <View>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDate}>{activity.date}</Text>
              </View>
              <Text style={styles.activityDuration}>{activity.duration}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#1a1a1a',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#1a1a1a',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  achievementsScroll: {
    marginLeft: -4,
  },
  achievementCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    width: 120,
  },
  achievementTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  activityDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
    fontFamily: 'Inter_400Regular',
  },
  activityDuration: {
    fontSize: 14,
    color: '#007AFF',
    fontFamily: 'Inter_600SemiBold',
  },
});