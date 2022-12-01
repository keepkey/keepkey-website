import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef, memo } from 'react';
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import HeroSimple from '../components/hero-simple';
const pageTitle = "Application Waltkthrough";
import binanceIcon from 'public/images/coins/binancecoin.png'
import ethIcon from 'public/images/coins/ethereum.png'
import bchIcon from 'public/images/coins/bitcoin-cash.png'
import litecoinIcon from 'public/images/coins/litecoin.png'
import dashIcon from 'public/images/coins/dash.png'
// import btgIcon from 'public/images/coins/btg.png'
import bitcoin from 'public/images/coins/bitcoin.png'
import dogecoin from 'public/images/coins/dogecoin.png'
import ripple from 'public/images/coins/ripple.png'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import walletVertical from "*.png";


type Person = {
    Blockchain: string
    BlockchainIcon: any
    firmwareSupport: boolean
    HDwalletSupport: boolean
    RestSupport: boolean
    WalletConnectSupport: boolean
    DesktopSupport: boolean
}

const defaultData: Person[] = [
    {
        Blockchain: "Bitcoin",
        BlockchainIcon: bitcoin,
        firmwareSupport: true,
        HDwalletSupport: true,
        RestSupport: true,
        WalletConnectSupport: true,
        DesktopSupport: true,
    },
    {
        Blockchain: "litecoin",
        BlockchainIcon: litecoinIcon,
        firmwareSupport: true,
        HDwalletSupport: true,
        RestSupport: true,
        WalletConnectSupport: true,
        DesktopSupport: true,
    },
    {
        Blockchain: "dogecoin",
        BlockchainIcon: dogecoin,
        firmwareSupport: true,
        HDwalletSupport: true,
        RestSupport: true,
        WalletConnectSupport: true,
        DesktopSupport: true,
    },
    {
        Blockchain: "bnb (native)",
        BlockchainIcon: binanceIcon,
        firmwareSupport: true,
        HDwalletSupport: true,
        RestSupport: true,
        WalletConnectSupport: true,
        DesktopSupport: false,
    },
    {
        Blockchain: "bnb (BSC)",
        BlockchainIcon: binanceIcon,
        firmwareSupport: true,
        HDwalletSupport: true,
        RestSupport: true,
        WalletConnectSupport: true,
        DesktopSupport: false,
    },
    {
        Blockchain: "Ripple",
        BlockchainIcon: ripple,
        firmwareSupport: true,
        HDwalletSupport: true,
        RestSupport: true,
        WalletConnectSupport: true,
        DesktopSupport: false,
    },
    {
        Blockchain: "Bitcoin Cash",
        BlockchainIcon: bchIcon,
        firmwareSupport: true,
        HDwalletSupport: true,
        RestSupport: true,
        WalletConnectSupport: true,
        DesktopSupport: false,
    },
    // {
    //     Blockchain: "Bitcoin Cash",
    //     BlockchainIcon: binanceIcon,
    //     firmwareSupport: true,
    //     HDwalletSupport: true,
    //     RestSupport: true,
    //     WalletConnectSupport: true,
    //     DesktopSupport: false,
    // },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.accessor('BlockchainIcon', {
        cell: info => <Image src={info.getValue()} alt='keepkey api' objectFit="cover" quality={100} height="60px" width="60px" objectPosition="center" priority={true}></Image>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('Blockchain', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.firmwareSupport, {
        id: 'firmwareSupport',
        cell: info => <i>{info.getValue().toString()}</i>,
        header: () => <span>firmwareSupport</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.HDwalletSupport, {
        id: 'HDwalletSupport',
        cell: info => <i>{info.getValue().toString()}</i>,
        header: () => <span>HDwalletSupport</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.RestSupport, {
        id: 'RestSupport',
        cell: info => <i>{info.getValue().toString()}</i>,
        header: () => <span>HDwalletSupport</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.RestSupport, {
        id: 'WalletConnectSupport',
        cell: info => <i>{info.getValue().toString()}</i>,
        header: () => <span>HDwalletSupport</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.DesktopSupport, {
        id: 'DesktopSupport',
        cell: info => <i>{info.getValue().toString()}</i>,
        header: () => <span>DesktopSupport</span>,
        footer: info => info.column.id,
    }),
]

export default function DesktopGuide() {
    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <HeroSimple
                heroBgImg={heroBgImage}
                pageTitle={pageTitle}
            />
            <Main />
        </>
    )
}

const Main = () => {
    const [data, setData] = React.useState(() => [...defaultData])
    const [search, setSearch] = React.useState("")
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const applyFilter = function(){
        console.log("applyFilter: ",data)
        setData([...defaultData])
        for(let i = 0; i < data.length; i++){
            let entry = data[i]

            //trim entry
            if( entry.Blockchain.indexOf(search) >= 0){
                console.log("in search: ",search)
                setData(data.splice(i, 1))
            } else {
                console.log("not in search")
            }
        }
    }

    return (
        <section className="container">
            <div className="p-2">
                    <Input
                        onChange={applyFilter}
                        type='email' />
                <br/>
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
                <div className="h-4" />
            </div>

        </section>
    )
}