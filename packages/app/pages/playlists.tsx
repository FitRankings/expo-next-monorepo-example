import React from 'react';
import { Platform } from 'react-native';

import createStackNavigator from 'app/navigation/create-stack-navigator';
import PlaylistsScreen from 'app/screens/playlists';
import PlaylistScreen from 'app/screens/playlist';
import NewPlaylistScreen from 'app/screens/new-playlist';

const PlaylistsStack = createStackNavigator();

function PlaylistsNavigator() {
  return (
    <PlaylistsStack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerStyle: {
          // Similar to `headerShadowVisible` but for web
          // @ts-ignore
          borderBottomWidth: 0
        }
      }}
    >
      <PlaylistsStack.Group>
        <PlaylistsStack.Screen
          name="/playlists"
          component={PlaylistsScreen}
          options={{ title: 'Playlists', headerTitle: 'Playlists' }}
        />
        <PlaylistsStack.Screen
          name="/playlist"
          component={PlaylistScreen}
          options={{ title: 'Playlist', headerTitle: 'Playlist' }}
        />
      </PlaylistsStack.Group>
      <PlaylistsStack.Group
        screenOptions={{
          headerShown: false,
          presentation: Platform.OS === 'ios' ? 'formSheet' : 'transparentModal'
        }}
      >
        <PlaylistsStack.Screen
          name="/playlists?modal=new-playlist"
          component={NewPlaylistScreen}
        />
      </PlaylistsStack.Group>
    </PlaylistsStack.Navigator>
  );
}

export default PlaylistsNavigator;