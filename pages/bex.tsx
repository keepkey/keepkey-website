import React, { useEffect } from "react";
import {
    Box,
    Heading,
    Text,
    Container,
    VStack,
    HStack,
    Divider,
    List,
    ListItem,
    ListIcon,
    Button,
    Image as ChakraImage,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Head from "next/head";
import heroBgImage from "public/images/bex/PromoBig.png";
import bexPagesImage from "public/images/bex/bex-pages.png";
import dappsImage from "public/images/bex/keepkey-bex-uni.png";

const pageTitle = "KeepKey Browser Extension";
const subTitle = "The most advanced way to use your KeepKey.";
const ctaLink =
    "https://chromewebstore.google.com/detail/keepkey-client/dajbdedapcflmaaojleehmafomgjcdoh?authuser=0&hl=en";

export default function IntegrationGuide() {
    return (
        <>
            <Head>
                <title>{pageTitle} | KeepKey</title>
            </Head>
            <HeroSection />
            <Main />
        </>
    );
}

const HeroSection = () => {
    return (
        <Box position="relative" textAlign="center" color="white">
            <ChakraImage
                src={heroBgImage.src}
                alt="KeepKey Browser Extension Hero"
                width="100%"
                height="auto"
                objectFit="cover"
                maxH="600px"
                w="100%"
            />
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg="rgba(0, 0, 0)"
                p={6}
                borderRadius="md"
            >
                <Heading as="h1" size="2xl" mb={4}>
                    {pageTitle}
                </Heading>
                <Text fontSize="xl" mb={6}>
                    {subTitle}
                </Text>
                <NextLink href={ctaLink} passHref>
                    <Button
                        as="a"
                        size="lg"
                        colorScheme="teal"
                        bg="teal.500"
                        color="white"
                        px={8}
                        py={4}
                        _hover={{ bg: "teal.600" }}
                        fontSize="lg"
                        aria-label="Try Now"
                    >
                        Try Now
                    </Button>
                </NextLink>
            </Box>
        </Box>
    );
};

const Main = () => {
    useEffect(() => {
        // Any startup logic can be added here
    }, []);

    return (
        <Container maxW="container.lg" py={12}>
            {/* Introduction Section */}
            <VStack spacing={6} align="start" mb={12}>
                <Heading as="h2" size="xl">
                    What is the KeepKey Browser Extension?
                </Heading>
                <Text fontSize="lg">
                    The KeepKey Browser Extension is a powerful tool that integrates seamlessly with your web browser, providing enhanced functionality and security for managing your cryptocurrency assets. Unlike traditional wallet interfaces, this extension offers a unified platform to interact with decentralized applications (dApps), manage your digital assets, and ensure your transactions are secure.
                </Text>
            </VStack>

            <Divider />

            {/* Browser Extensions Overview */}
            <VStack spacing={6} align="start" my={12}>
                <Heading as="h2" size="lg">
                    Understanding Browser Extensions in Crypto
                </Heading>
                <Text>
                    Browser extensions play a crucial role in the cryptocurrency ecosystem by bridging the gap between your web browser and your crypto assets. They enable users to interact directly with dApps, manage wallets, and perform transactions without leaving the browser environment.
                </Text>
                <List spacing={3} mt={4}>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Seamless Integration:</strong> Easily connect your wallet to various dApps without navigating away from your browser.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Enhanced Security:</strong> Protect your private keys with hardware wallets, ensuring your assets remain safe.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Improved User Experience:</strong> Streamlined interfaces and intuitive designs make managing crypto simpler than ever.
                    </ListItem>
                </List>
            </VStack>

            <Divider />

            {/* window.ethereum Section */}
            <VStack spacing={6} align="start" my={12}>
                <Heading as="h2" size="lg">
                    What is <code>window.ethereum</code>?
                </Heading>
                <Text>
                    <code>window.ethereum</code> is a JavaScript object injected into the browser by Ethereum-compatible wallets, such as MetaMask or the KeepKey Browser Extension. It allows web applications to interact with the Ethereum blockchain directly from the browser.
                </Text>
                <Text>
                    With <code>window.ethereum</code>, dApps can request users to connect their wallets, initiate transactions, and access blockchain data, enabling a more interactive and decentralized web experience.
                </Text>
            </VStack>

            <Divider />

            {/* Features Section */}
            <VStack spacing={6} align="start" my={12}>
                <Heading as="h2" size="lg">
                    Key Features of the KeepKey Browser Extension
                </Heading>
                <List spacing={4} mt={4}>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Unified Asset Management:</strong> View and manage all your digital assets in one centralized interface, including real-time balances and transaction histories.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Secure dApp Connectivity:</strong> Connect to your favorite decentralized applications with confidence, knowing your transactions are protected by hardware-level security.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Customizable Notifications:</strong> Stay informed with real-time alerts on market movements, transaction confirmations, and other critical events.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Intuitive User Interface:</strong> Navigate through your crypto portfolio with ease, thanks to a clean and user-friendly design.
                    </ListItem>
                </List>
            </VStack>

            <Divider />

            {/* Comparison with WalletConnect */}
            <VStack spacing={6} align="start" my={12}>
                <Heading as="h2" size="lg">
                    KeepKey Browser Extension vs. WalletConnect
                </Heading>
                <Text>
                    While both the KeepKey Browser Extension and WalletConnect aim to facilitate interactions between users and dApps, they operate differently and offer unique advantages.
                </Text>
                <HStack spacing={8} align="start" mt={4} flexWrap="wrap">
                    {/* KeepKey Browser Extension */}
                    <Box flex="1" minW="300px" mb={4}>
                        <Heading as="h3" size="md" mb={2}>
                            KeepKey Browser Extension
                        </Heading>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color="teal.500" />
                                Direct browser integration for seamless dApp interactions.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color="teal.500" />
                                Hardware wallet support ensures enhanced security.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color="teal.500" />
                                Centralized asset management within the browser.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color="teal.500" />
                                Customizable settings and real-time notifications.
                            </ListItem>
                        </List>
                    </Box>
                    {/* WalletConnect */}
                    <Box flex="1" minW="300px" mb={4}>
                        <Heading as="h3" size="md" mb={2}>
                            WalletConnect
                        </Heading>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color="teal.500" />
                                Connects mobile wallets to dApps via QR codes or deep linking.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color="teal.500" />
                                Supports a wide range of wallets across different platforms.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color="teal.500" />
                                Does not require a browser extension, promoting cross-platform compatibility.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color="teal.500" />
                                Primarily focuses on mobile wallet integration.
                            </ListItem>
                        </List>
                    </Box>
                </HStack>
                <Text mt={4}>
                    In summary, the KeepKey Browser Extension offers a more integrated and secure experience for desktop users by combining the functionality of a browser extension with the security of a hardware wallet. On the other hand, WalletConnect provides flexibility for mobile users by enabling wallet connections across various platforms without the need for browser-specific extensions.
                </Text>
            </VStack>

            <Divider />

            {/* Why Choose KeepKey Browser Extension */}
            <VStack spacing={6} align="start" my={12}>
                <Heading as="h2" size="lg">
                    Why Choose the KeepKey Browser Extension?
                </Heading>
                <List spacing={4} mt={4}>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Superior Security:</strong> Leveraging hardware wallet integration ensures that your private keys never leave your device, providing top-notch security against potential threats.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Enhanced User Experience:</strong> A sleek and intuitive interface makes managing your crypto assets effortless, whether youre a seasoned trader or a newcomer.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Comprehensive Asset Support:</strong> Manage a wide variety of cryptocurrencies and tokens all in one place, with real-time updates and detailed transaction histories.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="teal.500" />
                        <strong>Dedicated Support:</strong> Access to a robust support system ensures that any issues or queries you have are promptly addressed by our team.
                    </ListItem>
                </List>
            </VStack>

            <Divider />

            {/* Visual Showcase */}
            <VStack spacing={6} align="start" my={12}>
                <Heading as="h2" size="lg">
                    See It in Action
                </Heading>
                <Text>
                    Experience the seamless integration and powerful features of the KeepKey Browser Extension through our intuitive interface.
                </Text>
                <Box mt={4}>
                    <ChakraImage
                        src={dappsImage.src}
                        alt="Connecting to dApps with KeepKey"
                        width={800}
                        height="auto"
                        objectFit="cover"
                        borderRadius="md"
                        boxShadow="lg"
                        w="100%"
                    />
                </Box>
            </VStack>

            <Divider />

            {/* Get Started Section */}
            <VStack spacing={6} align="center" my={12}>
                <Heading as="h2" size="lg">
                    Get Started with the KeepKey Browser Extension
                </Heading>
                <Text fontSize="lg" textAlign="center">
                    Ready to take control of your cryptocurrency management with enhanced security and seamless dApp integration? Download the KeepKey Browser Extension today and elevate your crypto experience.
                </Text>
                <NextLink href={ctaLink} passHref>
                    <Button
                        as="a"
                        size="lg"
                        colorScheme="teal"
                        bg="teal.500"
                        color="white"
                        px={8}
                        py={4}
                        _hover={{ bg: "teal.600" }}
                        fontSize="lg"
                        aria-label="Try Now"
                    >
                        Try Now
                    </Button>
                </NextLink>
            </VStack>
        </Container>
    );
};
