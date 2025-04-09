import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';

export default function SocialScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Social Feed</Text>
        </View>

        {[
          {
            id: 1,
            user: {
              name: 'Sarah Johnson',
              avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
            },
            content: 'Just completed a 5k run! Personal best time 🏃‍♀️',
            image: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=500&h=300&fit=crop',
            likes: 24,
            comments: 6,
          },
          {
            id: 2,
            user: {
              name: 'Mike Chen',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
            },
            content: 'Morning yoga session to start the day right 🧘‍♂️',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop',
            likes: 18,
            comments: 3,
          },
        ].map(post => (
          <View key={post.id} style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
              <Text style={styles.userName}>{post.user.name}</Text>
            </View>
            
            <Image source={{ uri: post.image }} style={styles.postImage} />
            
            <Text style={styles.postContent}>{post.content}</Text>
            
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Heart size={20} color="#666" />
                <Text style={styles.actionText}>{post.likes}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <MessageCircle size={20} color="#666" />
                <Text style={styles.actionText}>{post.comments}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <Share2 size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  title: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#1a1a1a',
  },
  post: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postContent: {
    padding: 16,
    fontSize: 16,
    color: '#1a1a1a',
    fontFamily: 'Inter_400Regular',
  },
  postActions: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    marginLeft: 6,
    color: '#666',
    fontFamily: 'Inter_400Regular',
  },
});