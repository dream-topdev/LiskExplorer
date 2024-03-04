import "../../../polyfills";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Address, createPublicClient, formatEther, http } from "viem";
import { mainnet } from "viem/chains";
import {
  useWalletConnectModal,
  WalletConnectModal,
} from "@walletconnect/modal-react-native";
import { Button, Text } from "react-native-paper";
import TabScreenWrapper from "../../components/TabScreenWrapper";
import { scaleVertical } from "../../helpers/scale";
import { LiskInlineInfo } from "../../components/LiskInlineInfo";

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

const projectId = "0f976aef910621720b5b10287e6d39e8";

const providerMetadata = {
  name: "LiskChallenge",
  description: "LightCurve Challenging project",
  url: "https://liskchallenge.com/",
  icons: ["https://liskchallenge.com/"],
  redirect: {
    native: "liskchallenge://",
    universal: "liskchallenge.com",
  },
};

export const EthereumInfoScreen = () => {
  const [blockNumber, setBlockNumber] = useState(0n);
  const [gasPrice, setGasPrice] = useState(0n);

  const {
    open,
    isConnected,
    provider,
    address: wcAddress,
  } = useWalletConnectModal();
  const address = wcAddress as Address | undefined;
  useEffect(() => {
    const getNetworkData = async () => {
      const [blockNumber, gasPrice] = await Promise.all([
        publicClient.getBlockNumber(),
        publicClient.getGasPrice(),
      ]);
      setBlockNumber(blockNumber);
      setGasPrice(gasPrice);
    };

    getNetworkData();
  }, []);
  return (
    <TabScreenWrapper includePadding title="Ethereum Mainnet">
      <View style={styles.container}>
        <LiskInlineInfo label="Block number" value={String(blockNumber)} />
        <LiskInlineInfo
          label="Gas price"
          value={`${formatEther(gasPrice)} ETH`}
        />
        {isConnected && (
          <View style={styles.block}>
            <LiskInlineInfo
              label="Address"
              value={`${address}`}
              copyEnabled
            />
          </View>
        )}
        <View style={styles.block}>
          {isConnected ? (
            <Button onPress={() => provider?.disconnect()}>
              Disconnect
            </Button>
          ) : (
            <Button onPress={() => open()}>Connect</Button>
          )}
        </View>

        <WalletConnectModal
          projectId={projectId}
          providerMetadata={providerMetadata}
        />
      </View>
    </TabScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scaleVertical(8),
  },
  block: {
    marginTop: scaleVertical(32),
  },
});
