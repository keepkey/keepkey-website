import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import HeroSimple from '../components/hero-simple';
const pageTitle = "KeepKey Coin Support";
import bitcoin from 'public/images/coins/bitcoin.png'

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
            height="60px"
            width="60px"
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
    const onStart = async function(){
        let config = { queryKey: 'key:public', spec }
        let Api = new Client(spec, config)
        let api = await Api.init()
        //get globals
        let globals = await api.Globals()
        console.log("globals: ",globals.data)
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
    const [data, setData] = React.useState(() => [{
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
        "description": "Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.",
        "website": "https://bitcoin.org",
        "explorer": "https://blockchain.info"
    }])
    const [query, setQuery] = useState('bitcoin...');
    const [timeOut, setTimeOut] = useState(null);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const onStart = async function(){
        let config = { queryKey: 'key:public', spec }
        let Api = new Client(spec, config)
        let api = await Api.init()
        console.log("checkpoint2")
        let KeepKeyPage1 = await api.SearchAssetsPageniate({limit:100,skip:0})
        console.log("KeepKeyPage1: ",KeepKeyPage1.data)
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
        console.log("query: ",query)
        // let searchNew = event.target.value
        // setSearch(searchNew)

        let config = { queryKey: 'key:public', spec }
        let Api = new Client(spec, config)
        let api = await Api.init()

        let KeepKeyPage1 = await api.SearchByName(query)
        console.log("KeepKeyPage1: ",KeepKeyPage1.data)
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
            <div>
                KeepKey supports an ever-growing list of cryptocurrencies and digital assets.
                <br/>
                Use the following page to search for assets blockchains and dapps that you can use with your KeepKey.
                <br/>
                <br/>
            </div>
            <div className="grid grid-cols-3 2 ">
                <div className="">
                    <h2>Search For Asset</h2>
                    <input
                        onFocus={onClear}
                        value={query}
                        onChange={handleKeyPress}
                        type='search'
                        style={{border: '2px solid black', padding: '15px'}}
                    />
                </div>
                <div className="self-center">
                    <table>
                        <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                        </thead>
                        <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    )
}