import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import HeroSimple from '../components/hero-simple';
const pageTitle = "KeepKey Coin Support";
import bitcoin from 'public/images/coins/bitcoin.png'
import {
    InputGroup,
    InputLeftElement,
    Input,
    Table,
    Thead,
    Tbody,
    Box,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Flex,
    Tooltip,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Avatar,
    Link,
    useDisclosure
} from '@chakra-ui/react'

import { Search2Icon } from '@chakra-ui/icons'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel
} from '@tanstack/react-table'
import Client from '@pioneer-platform/pioneer-client'
//const spec = "https://pioneers.dev/spec/swagger.json"
let spec = "http://127.0.0.1:9001/spec/swagger.json"

const columnHelper = createColumnHelper<any>()

const columns = [
    columnHelper.accessor('image', {
        cell: info => <Image
            src={info.getValue()}
            alt='keepkey api'
            objectFit="cover"
            quality={100}
            height="40px"
            width="40px"
            objectPosition="center"
            priority={true}
        >
        </Image>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('rank', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('symbol', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('blockchain', {
        id: 'blockchain',
        cell: info => <i>{info.getValue().toString()}</i>,
        header: () => <span>blockchain</span>,
        footer: info => info.column.id,
    }),
    // columnHelper.accessor('description', {
    //     id: 'description',
    //     cell: info => <i>{info.getValue().toString()}</i>,
    //     header: () => <span>description</span>,
    //     footer: info => info.column.id,
    // }),
    columnHelper.accessor('explorer', {
        id: 'explorer',
        cell: info => <i>{info.getValue().toString()}</i>,
        header: () => <span>website</span>,
        footer: info => info.column.id,
    }),
    // columnHelper.accessor('explorer', {
    //     id: 'explorer',
    //     cell: info => <i>{info.getValue().toString()}</i>,
    //     header: () => <span>explorer</span>,
    //     footer: info => info.column.id,
    // }),
    // columnHelper.accessor(row => row.HDwalletSupport, {
    //     id: 'HDwalletSupport',
    //     cell: info => <i>{info.getValue().toString()}</i>,
    //     header: () => <span>HDwalletSupport</span>,
    //     footer: info => info.column.id,
    // }),
    // columnHelper.accessor(row => row.RestSupport, {
    //     id: 'RestSupport',
    //     cell: info => <i>{info.getValue().toString()}</i>,
    //     header: () => <span>HDwalletSupport</span>,
    //     footer: info => info.column.id,
    // }),
    // columnHelper.accessor(row => row.RestSupport, {
    //     id: 'WalletConnectSupport',
    //     cell: info => <i>{info.getValue().toString()}</i>,
    //     header: () => <span>HDwalletSupport</span>,
    //     footer: info => info.column.id,
    // }),
    // columnHelper.accessor(row => row.DesktopSupport, {
    //     id: 'DesktopSupport',
    //     cell: info => <i>{info.getValue().toString()}</i>,
    //     header: () => <span>DesktopSupport</span>,
    //     footer: info => info.column.id,
    // }),
]

export default function DesktopGuide() {
    const onStart = async function () {
        let config = { queryKey: 'key:public', spec }
        let Api = new Client(spec, config)
        let api = await Api.init()
        //get globals
        let globals = await api.Globals()
        console.log("globals: ", globals.data)
        setAssets(globals.data.info.assets)
        setBlockchains(globals.data.info.blockchains)
    }

    const [assets, setAssets] = useState('...');
    const [blockchains, setBlockchains] = useState('...');

    // onStart()
    useEffect(() => {
        onStart()
    }, [])

    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <HeroSimple
                heroBgImg={heroBgImage}
                pageTitle={pageTitle}
                assets={assets}
                blockchains={blockchains}
            />
            <Main />
        </>
    )
}

const Main = () => {
    const [data, setData] = React.useState(() => placeholderData)

    const [query, setQuery] = useState();
    const [timeOut, setTimeOut] = useState(null);
    // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10); // Set your desired page size
    const [totalAssetsCount, setTotalAssetsCount] = useState(0);
    const [selectedBlockchain, setSelectedBlockchain] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);

    // Pagination effect
    // useEffect(() => {
    //     // Fetch new data based on currentPage
    //     fetchPageData(currentPage, pageSize);
    // }, [currentPage, pageSize]);

    // Search effect
    useEffect(() => {
        if (query !== null) {
            search(query);
            setCurrentPage(0); // Reset to first page
        }
    }, [query]);

    const selectBlockchain = (blockchain) => {
        setSelectedBlockchain(blockchain);
        onOpen();
    };

    function debounce(func, wait) {
        let timeout;

        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    let abortController = new AbortController();

    const fetchPageData = async (page, pageSize) => {
        setIsLoading(true);
        abortController.abort(); // Abort previous requests
        abortController = new AbortController();

        try {
            let skip = page * pageSize;
            let config = { queryKey: 'key:public', spec };
            let Api = new Client(spec, config);
            let api = await Api.init();

            let response = await api.ListAssetsPageniate({ limit: pageSize, skip: skip });

            if (page === 0) {
                setData(response.data); // If it's the first page, replace the data
            } else {
                setData(existingData => [...existingData, ...response.data]); // Append new data
            }

            setCurrentPage(page);
            setTotalAssetsCount(response.totalCount || totalAssetsCount);
            setIsLoading(false);
        } catch (error) {
            if (error.name !== 'AbortError') {
                // Handle error
            }
        }
    }


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            pagination: {
                pageIndex: currentPage,
                pageSize: pageSize,
            },
        },
    })

    // Add pagination controls
    const handlePrevPage = () => {
        setCurrentPage(old => Math.max(old - 1, 0));
    };

    const handleNextPage = () => {
        const nextPage = currentPage + 1;
        const dataAlreadyLoaded = nextPage * pageSize < data.length;

        console.log(`Current Page: ${currentPage}, Next Page: ${nextPage}, Data Loaded: ${dataAlreadyLoaded}`);

        if (!dataAlreadyLoaded) {
            fetchPageData(nextPage, pageSize);
        } else {
            setCurrentPage(nextPage);
        }
    };

    const onStart = async function () {
        let config = { queryKey: 'key:public', spec }
        let Api = new Client(spec, config)
        let api = await Api.init()
        console.log("checkpoint2")
        let KeepKeyPage1 = await api.ListAssetsPageniate({ limit: 1000, skip: 0 })
        console.log("KeepKeyPage1: ", KeepKeyPage1.data)
        setData(KeepKeyPage1.data)

        let globals = await api.Globals()
        console.log("globals: ", globals.data)
        setTotalAssetsCount(globals.data.info.assets)
    }

    const handleKeyPress = (event) => {
        if (timeOut) {
            clearTimeout(timeOut);
        }
        let newQuery = event.target.value;
        setTimeOut(setTimeout(() => {
            search(newQuery);
        }, 1000));
    };

    const search = async (query) => {
        if (query) {
            let config = { queryKey: 'key:public', spec };
            let Api = new Client(spec, config);
            let api = await Api.init();

            let searchResults = await api.SearchByName(query);
            setData(searchResults.data);
            setTotalAssetsCount(searchResults.totalCount); // Update based on search results
            setCurrentPage(0); // Reset to the first page
        }
    };

    const onClear = async () => {
        setQuery(null)
    };

    // onStart()
    useEffect(() => {
        onStart()
    }, [])


    const totalPages = Math.ceil(totalAssetsCount / pageSize);

    // Usage
    const debouncedNextPage = debounce(handleNextPage, 300);

    return (

        <section className="container">
            <Modal isOpen={isOpen} onClose={onClose} size="4xl"> {/* Adjust modal size */}
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Blockchain Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {selectedBlockchain && (
                            <Box overflowX="auto"> {/* Add a Box with horizontal scroll */}
                                <Table variant="simple" size="sm" border="1px" borderColor="gray.200">
                                    <Tbody>
                                        <Tr>
                                            <Td border="1px" borderColor="gray.200">Name</Td>
                                            <Td border="1px" borderColor="gray.200">{selectedBlockchain.name}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td border="1px" borderColor="gray.200">caip</Td>
                                            <Td border="1px" borderColor="gray.200">
                                                <Flex>
                                                    <Text>{selectedBlockchain.caip}</Text>
                                                </Flex>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td border="1px" borderColor="gray.200">
                                                <Avatar src={selectedBlockchain.image} size="xl" />
                                            </Td>
                                            <Td border="1px" borderColor="gray.200" whiteSpace="normal" wordBreak="break-word">
                                                {selectedBlockchain.description}
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td border="1px" borderColor="gray.200">Chain</Td>
                                            <Td border="1px" borderColor="gray.200">
                                                <Text>{selectedBlockchain.chainId}</Text>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td border="1px" borderColor="gray.200">Symbol</Td>
                                            <Td border="1px" borderColor="gray.200">{selectedBlockchain.symbol}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td border="1px" borderColor="gray.200">Blockchain</Td>
                                            <Td border="1px" borderColor="gray.200">{selectedBlockchain.blockchain}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td border="1px" borderColor="gray.200">Explorer</Td>
                                            <Td border="1px" borderColor="gray.200">
                                                <Link href={selectedBlockchain.explorer} isExternal>
                                                    {selectedBlockchain.explorer}
                                                </Link>
                                            </Td>
                                        </Tr>
                                        {/* Add more fields as necessary */}
                                    </Tbody>
                                </Table>
                            </Box>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <p className="text-xl leading-relaxed lg:leading-relaxed mb-8 tracking-wide mb-10">
                KeepKey supports an ever-growing list of cryptocurrencies and digital assets.
                <br />
                Use the following page to search for assets, blockchains and dapps that you can use with your KeepKey.
            </p>
            <div>
                <Flex alignItems="center" gap='3' flexWrap="wrap" w="100%">
                    {placeholderData.map((coin, index) => (
                        <Tooltip key={index} placement="top" label={coin.blockchain} bg='gray.900' borderRadius={4} textTransform="capitalize">
                            <Button
                                variant="outline"
                                py={7}
                                minW="75px"
                                maxW="120px"
                                flex="1"
                            >
                                <Image
                                    src={coin.image}
                                    alt='keepkey api'
                                    objectFit="contain"
                                    height="40px"
                                    width="40px"
                                    quality={100}
                                    objectPosition="center"
                                    priority={true}
                                >
                                </Image>
                            </Button>
                        </Tooltip>
                    ))}
                </Flex>
                {/* <h2>Search For Asset</h2> */}

                <InputGroup my={6}>
                    <InputLeftElement
                        pointerEvents='none'
                        boxSize="12"
                    >
                    <Search2Icon color='gray.300' />
                    </InputLeftElement>
                    <Input
                        placeholder="Search for asset"
                        size='lg'
                        onFocus={onClear}
                        value={query}
                        onChange={handleKeyPress}
                        type='search'
                    />
                </InputGroup>
            </div>
            <TableContainer>
                <Table variant="simple" size="sm">
                    <Thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <Th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {table.getRowModel().rows.map(row => (
                            <Tr key={row.id} onClick={() => selectBlockchain(row.original)}>
                                {row.getVisibleCells().map(cell => (
                                    <Td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Flex justifyContent="space-between" my={4}>
                    <Button onClick={handlePrevPage} disabled={currentPage >= totalPages - 1 || isLoading}>Previous</Button>
                    <Text>Page {currentPage + 1} of {totalPages} Total</Text> {/* Display current page and total pages */}
                    <Button onClick={handleNextPage} disabled={currentPage >= totalPages - 1 || isLoading}>Next</Button>
                </Flex>
            </TableContainer>

        </section>
    )
}

/*
    Sortable

    UTXO

    EVM (Ethereum)

    Tendermint (Cosmos)


 */

const placeholderData = [
    {
        "_id": "63a517575213610013d97186",
        "name": "UTXO",
        "type": "coin",
        "tags": [
            "bitcoin",
            "isAsset",
            "isNative",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport"
        ],
        "blockchain": "bitcoin",
        "symbol": "BTC",
        "decimals": 8,
        "image": "https://pioneers.dev/coins/bitcoin.png",
        "facts": [
            "{payload: \"{\"name\":\"Bitcoin\",\"website\":\"https://bit…}"
        ],
        "description": "Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.",
        "website": "https://bitcoin.org",
        "explorer": "https://blockchain.info",
        "price": 21882,
        "rank": 1
    },
]

