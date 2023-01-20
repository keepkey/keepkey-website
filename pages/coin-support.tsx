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
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Flex,
    Tooltip
} from '@chakra-ui/react'

import { Search2Icon } from '@chakra-ui/icons'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import Client from '@pioneer-platform/pioneer-client'
const spec = "https://pioneers.dev/spec/swagger.json"
//let spec = "http://127.0.0.1:9001/spec/swagger.json"

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

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const onStart = async function () {
        let config = { queryKey: 'key:public', spec }
        let Api = new Client(spec, config)
        let api = await Api.init()
        console.log("checkpoint2")
        let KeepKeyPage1 = await api.SearchAssetsPageniate({ limit: 100, skip: 0 })
        console.log("KeepKeyPage1: ", KeepKeyPage1.data)
        setData(KeepKeyPage1.data)
    }


    const handleKeyPress = (event) => {
        if (timeOut) {
            clearTimeout(timeOut);
        }
        setQuery(event.target.value);
        setTimeOut(setTimeout(() => {
            search(query);
        }, 1000));
    }

    const search = async (query) => {
        // console.log("event: ",event.target.value)
        console.log("query: ", query)
        // let searchNew = event.target.value
        // setSearch(searchNew)

        let config = { queryKey: 'key:public', spec }
        let Api = new Client(spec, config)
        let api = await Api.init()

        let KeepKeyPage1 = await api.SearchByName(query)
        console.log("KeepKeyPage1: ", KeepKeyPage1.data)
        setData(KeepKeyPage1.data)
    };

    const onClear = async () => {
        setQuery("")
    };


    // onStart()
    useEffect(() => {
        onStart()
    }, [])


    return (
        <section className="container">
            <p className="text-xl leading-relaxed lg:leading-relaxed mb-8 tracking-wide mb-10">
                KeepKey supports an ever-growing list of cryptocurrencies and digital assets.
                <br />
                Use the following page to search for assets, blockchains and dapps that you can use with your KeepKey.
            </p>
            <div>
                <Flex alignItems="center" gap='3' w="100%">
                    {placeholderData.map(coin => (
                        <Tooltip placement="top" label={coin.blockchain} bg='gray.900' borderRadius={4} textTransform="capitalize">
                            <Button
                                key={coin.id}
                                variant="outline"
                                py={7}
                                w="100%"
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
                        children={<Search2Icon color='gray.300' />}
                        boxSize="12"
                    />
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
                            <Tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <Td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

        </section>
    )
}

const placeholderData = [
    {
        "_id": "63a517575213610013d97186",
        "name": "bitcoin",
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
    {
        "_id": "63a3d1655213610013d97126",
        "name": "tethertoken",
        "type": "AVALANCHE",
        "tags": [
            "avalanchec",
            "isAsset",
            "isToken",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport",
            "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"
        ],
        "blockchain": "avalanchec",
        "symbol": "USDt",
        "decimals": 6,
        "image": "https://pioneers.dev/coins/tethertoken.png",
        "facts": [
            "{payload: \"{\"contract\":\"0x9702230A8Ea53601f5cD2dc00…}"
        ],
        "description": "Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.",
        "website": "https://tether.to/",
        "explorer": "https://snowtrace.io/address/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
        "id": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
        "price": 0.995658,
        "rank": 3
    },
    {
        "_id": "63a3d1625213610013d97116",
        "name": "binance coin (portal)",
        "type": "AVALANCHE",
        "tags": [
            "avalanchec",
            "isAsset",
            "isToken",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport",
            "0x442F7f22b1EE2c842bEAFf52880d4573E9201158"
        ],
        "blockchain": "avalanchec",
        "symbol": "BNB",
        "decimals": 18,
        "image": "https://pioneers.dev/coins/binance-coin-(portal).png",
        "facts": [
            "{payload: \"{\"contract\":\"0x442F7f22b1EE2c842bEAFf528…}"
        ],
        "description": "Cross Chain Portal Bridged Token",
        "website": "https://www.binance.com/",
        "explorer": "https://snowtrace.io/address/0x442F7f22b1EE2c842bEAFf52880d4573E9201158",
        "id": "0x442F7f22b1EE2c842bEAFf52880d4573E9201158",
        "price": 281,
        "rank": 5
    },
    {
        "_id": "63a3d1695213610013d97139",
        "name": "sol (portal)",
        "type": "AVALANCHE",
        "tags": [
            "avalanchec",
            "isAsset",
            "isToken",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport",
            "0xFE6B19286885a4F7F55AdAD09C3Cd1f906D2478F"
        ],
        "blockchain": "avalanchec",
        "symbol": "SOL",
        "decimals": 9,
        "image": "https://pioneers.dev/coins/sol-(portal).png",
        "facts": [
            "{payload: \"{\"contract\":\"0xFE6B19286885a4F7F55AdAD09…}"
        ],
        "description": "Cross Chain Portal Bridged Token",
        "website": "https://solana.com/",
        "explorer": "https://snowtrace.io/address/0xFE6B19286885a4F7F55AdAD09C3Cd1f906D2478F",
        "id": "0xFE6B19286885a4F7F55AdAD09C3Cd1f906D2478F",
        "price": 35.78,
        "rank": 9
    },
    {
        "_id": "63a517595213610013d97195",
        "name": "dogecoin",
        "type": "coin",
        "tags": [
            "doge",
            "isAsset",
            "isNative",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport"
        ],
        "blockchain": "doge",
        "symbol": "DOGE",
        "decimals": 8,
        "image": "https://pioneers.dev/coins/dogecoin.png",
        "facts": [
            "{payload: \"{\"name\":\"Dogecoin\",\"website\":\"http://dog…}"
        ],
        "description": "Dogecoin is an open source peer-to-peer digital currency, favored by Shiba Inus worldwide. Introduced as a joke currency on 6 December 2013, Dogecoin quickly developed its own online community.",
        "website": "http://dogecoin.com",
        "explorer": "https://blockchair.com/dogecoin",
        "price": 0.069887,
        "rank": 10
    },
    {
        "_id": "63a517565213610013d97181",
        "name": "avalanche c-chain",
        "type": "coin",
        "tags": [
            "avalanchec",
            "isAsset",
            "isNative",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport"
        ],
        "blockchain": "avalanchec",
        "symbol": "AVAX",
        "decimals": 18,
        "image": "https://pioneers.dev/coins/avalanche-c-chain.png",
        "facts": [
            "{payload: \"{\"name\":\"Avalanche C-Chain\",\"website\":\"h…}"
        ],
        "description": "Avalanche is an open-source platform for launching highly decentralized applications, new financial primitives, and new interoperable blockchains. This is the C-Chain, the default smart contract blockchain on Avalanche that enables the creation of any Ethereum-compatible smart contracts.",
        "website": "http://avax.network",
        "explorer": "https://explorer.avax.network",
        "price": 21.68,
        "rank": 15
    },
    {
        "_id": "63a517585213610013d9718e",
        "name": "ethereum classic",
        "type": "coin",
        "tags": [
            "classic",
            "isAsset",
            "isNative",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport"
        ],
        "blockchain": "classic",
        "symbol": "ETC",
        "decimals": 18,
        "image": "https://pioneers.dev/coins/ethereum-classic.png",
        "facts": [
            "{payload: \"{\"name\":\"Ethereum Classic\",\"website\":\"ht…}"
        ],
        "description": "Ethereum Classic is an open-source, public, blockchain-based distributed computing platform featuring smart contract functionality.It is a continuation of the original Ethereum blockchain.",
        "website": "https://ethereumclassic.org/",
        "explorer": "https://blockscout.com/etc/mainnet/",
        "price": 36.69,
        "rank": 19
    },
    {
        "_id": "63a517595213610013d9718f",
        "name": "cosmos",
        "type": "coin",
        "tags": [
            "cosmos",
            "isAsset",
            "isNative",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport"
        ],
        "blockchain": "cosmos",
        "symbol": "ATOM",
        "decimals": 6,
        "image": "https://pioneers.dev/coins/cosmos.png",
        "facts": [
            "{payload: \"{\"name\":\"Cosmos\",\"website\":\"https://cosm…}"
        ],
        "description": "Cosmos is a secure & scalable blockchain ecosystem where thousands of dApps interoperate to create the foundation for a new token economy.",
        "website": "https://cosmos.network/",
        "explorer": "https://www.mintscan.io/",
        "price": 10.35,
        "rank": 28
    },
    {
        "_id": "63a517575213610013d97187",
        "name": "bitcoin cash",
        "type": "coin",
        "tags": [
            "bitcoincash",
            "isAsset",
            "isNative",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport"
        ],
        "blockchain": "bitcoincash",
        "symbol": "BCH",
        "decimals": 8,
        "image": "https://pioneers.dev/coins/bitcoin-cash.png",
        "facts": [
            "{payload: \"{\"name\":\"Bitcoin Cash\",\"website\":\"https:…}"
        ],
        "description": "Bitcoin ABC is an electronic cash platform that allows peer-to-peer online cash payments. It is a fork (a copy in a way) of Bitcoin (BTC).",
        "website": "https://bitcoincash.org/",
        "explorer": "https://blockchair.com/bitcoin-cash",
        "price": 120.93,
        "rank": 32
    },
    {
        "_id": "63a3d1685213610013d97135",
        "name": "frax",
        "type": "AVALANCHE",
        "tags": [
            "avalanchec",
            "isAsset",
            "isToken",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport",
            "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64"
        ],
        "blockchain": "avalanchec",
        "symbol": "FRAX",
        "decimals": 18,
        "image": "https://pioneers.dev/coins/frax.png",
        "facts": [
            "{payload: \"{\"contract\":\"0xD24C2Ad096400B6FBcd2ad8B2…}"
        ],
        "description": "Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.",
        "website": "https://frax.finance/",
        "explorer": "https://snowtrace.io/address/0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
        "id": "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
        "price": 0.960858,
        "rank": 43
    },
    {
        "_id": "63a5175a5213610013d9719a",
        "name": "eos",
        "type": "coin",
        "tags": [
            "eos",
            "isAsset",
            "isNative",
            "KeepKeySupport",
            "DappSupport",
            "WalletConnectSupport"
        ],
        "blockchain": "eos",
        "symbol": "EOS",
        "decimals": 4,
        "image": "https://pioneers.dev/coins/eos.png",
        "facts": [
            "{payload: \"{\"name\":\"EOS\",\"website\":\"https://eos.io\"…}"
        ],
        "description": "EOS is a cryptocurrency token and blockchain that operates as a smart contract platform for the deployment of decentralized applications and decentralized autonomous corporations.",
        "website": "https://eos.io",
        "explorer": "https://bloks.io/",
        "price": 1.31,
        "rank": 45
    }
]

