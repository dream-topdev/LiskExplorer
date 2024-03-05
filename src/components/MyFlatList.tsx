import React from 'react';
import { ActivityIndicator, FlatList, FlatListProps, StyleSheet, View } from 'react-native';

import { Colors } from '../constants/colors';
import { scaleVertical } from '../helpers/scale';

export type MyFlatListDataType = {
  id: string;
} & any;

type Props = {
  isLoading?: boolean;
  data: MyFlatListDataType[];
} & FlatListProps<MyFlatListDataType>;

const MyFlatList = React.forwardRef<FlatList, Props>(
  ({ isLoading = false, data, ...props }: Props, ref) => {    

    return isLoading && data.length === 0 ? (
      <ActivityIndicator color={Colors.blue} size="large" />
    ) : (
      <View style={styles.container}>
        <FlatList
          testID='test-myflatlist'
          ref={ref}
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1 }}
          {...props}
        />
        {isLoading && (
          <View
            testID='test-loading-indicator'
            style={[
              styles.loadingContainer,
              {
                backgroundColor: Colors.overlay,
              },
            ]}>
            <ActivityIndicator color={Colors.blue} size="large" />
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: scaleVertical(12),
  },
  loadingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyFlatList;
