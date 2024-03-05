import { render } from "@testing-library/react-native";
import { Text } from "react-native";

import MyFlatList, {
  MyFlatListDataType,
} from "../../src/components/MyFlatList";

const mockItemList = [
  {
    id: 1,
    label: "Test 1",
  },
  {
    id: 2,
    label: "Test 2",
  },
];

describe("MyFlatList", () => {
  const renderItem = ({ item }: { item: MyFlatListDataType }) => (
    <Text key={item.id} testID="flatListItem">
      {item.label}
    </Text>
  );
  it("should show empty list", () => {
    const { queryByText } = render(
      <MyFlatList data={[]} renderItem={renderItem} />
    );
    const itemText = queryByText("Test");
    expect(itemText).toBeNull();
  });
  it("should show child items", () => {
    const { queryAllByTestId } = render(
      <MyFlatList data={mockItemList} renderItem={renderItem} />
    );
    const children = queryAllByTestId("flatListItem");

    // Assert
    expect(children.length).toBe(2);
  });
  it("should show loading indicator", () => {
    const { queryByTestId } = render(
      <MyFlatList
        data={mockItemList}
        renderItem={renderItem}
        isLoading={true}
      />
    );
    const indicator = queryByTestId("test-loading-indicator");

    // Assert
    expect(indicator).toBeDefined();
  });
});
