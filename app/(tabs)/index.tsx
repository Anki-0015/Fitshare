import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, TrendingUp, Award } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome back, Alex!</Text>
          <Text style={styles.subtitle}>Ready for today's workout?</Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Weekly Progress</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressBars}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <View key={`${day}-${index}`} style={styles.progressBarContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { height: `${[70, 85, 60, 90, 75, 40, 0][index]}%` },
                    ]}
                  />
                </View>
                <Text style={styles.progressDay}>{day}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Calendar size={24} color="#007AFF" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statCard}>
            <TrendingUp size={24} color="#007AFF" />
            <Text style={styles.statNumber}>324</Text>
            <Text style={styles.statLabel}>Minutes</Text>
          </View>
          <View style={styles.statCard}>
            <Award size={24} color="#007AFF" />
            <Text style={styles.statNumber}>5.2k</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Workouts</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.workoutScroll}>
            {[
              {
                id: 1,
                title: 'Full Body HIIT',
                trainer: 'Sarah Johnson',
                duration: '30 min',
                image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=500&h=300&fit=crop'
              },
              {
                id: 2,
                title: 'Yoga Flow',
                trainer: 'Mike Chen',
                duration: '45 min',
                image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop'
              }
            ].map(workout => (
              <TouchableOpacity key={workout.id} style={styles.workoutCard}>
                <Image source={{ uri: workout.image }} style={styles.workoutImage} />
                <View style={styles.workoutInfo}>
                  <Text style={styles.workoutTitle}>{workout.title}</Text>
                  <Text style={styles.workoutTrainer}>{workout.trainer}</Text>
                  <View style={styles.workoutMeta}>
                    <Text style={styles.workoutDuration}>{workout.duration}</Text>
                    <View style={styles.workoutDifficulty}>
                      <Text style={styles.workoutDifficultyText}>Intermediate</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {[
            { id: 1, title: 'Morning Run', time: '8:30 AM', duration: '32 min' },
            { id: 2, title: 'Strength Training', time: 'Yesterday', duration: '45 min' },
          ].map(activity => (
            <View key={activity.id} style={styles.activityItem}>
              <View style={styles.activityInfo}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
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
  greeting: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  progressCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    color: '#007AFF',
  },
  progressBars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 140,
  },
  progressBarContainer: {
    alignItems: 'center',
  },
  progressBar: {
    width: 8,
    height: 100,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    width: '100%',
    backgroundColor: '#007AFF',
    position: 'absolute',
    bottom: 0,
    borderRadius: 4,
  },
  progressDay: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 16,
    width: '30%',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#1a1a1a',
    marginTop: 8,
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  workoutScroll: {
    marginLeft: -4,
  },
  workoutCard: {
    width: 280,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  workoutImage: {
    width: '100%',
    height: 160,
  },
  workoutInfo: {
    padding: 16,
  },
  workoutTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  workoutTrainer: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  workoutMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  workoutDuration: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Inter_600SemiBold',
  },
  workoutDifficulty: {
    backgroundColor: '#f0f9ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  workoutDifficultyText: {
    fontSize: 12,
    color: '#007AFF',
    fontFamily: 'Inter_600SemiBold',
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  activityTime: {
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