import React, { Component, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text } from '@chakra-ui/react'
import Axios from "axios";
import Head from 'next/head'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import HeroSimple from '../components/hero-simple';
const pageTitle = "Blog";
const subTitle = "Keep up to date with the latest content from KeepKey"

// let mediumURL =
//     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@highlander_35968";

let mediumURL =
    "https://medium.com/@highlander_35968/latest?format=json";

export default function IntegrationGuide() {

    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <HeroSimple
                heroBgImg={heroBgImage}
                pageTitle={pageTitle}
                subTitle={subTitle}
            />
            <Main />
        </>
    )
}


const Main = () => {
    const [articlesNews, setArticlesNews] = useState([])
    const [articlesUsers, setArticlesUsers] = useState([])
    const [articlesDevelopers, setArticlesDevelopers] = useState([])

    let onStart = async function () {
        try {

            const getPosts = async (userId, page) => {
                const response = await Axios.get(`https://api.medium.com/v1/users/${userId}/posts?limit=20&page=${page}`);
                return response.data;
            };
            const getAllPosts = async (userId) => {
                let page = 1;
                let posts = [];
                let morePosts = true;

                while (morePosts) {
                    const response = await getPosts(userId, page);
                    posts = posts.concat(response.posts);
                    page++;

                    // If there are no more posts, set morePosts to false and break out of loop
                    if (response.posts.length === 0) {
                        morePosts = false;
                    }
                }

                return posts;
            };
            let response = await getAllPosts('@highlander_35968')

            // let response = await Axios.get(mediumURL);
            console.log(response);
            // console.log(response.data);
            //
            // const avatar = response.data.feed.image;
            // const profileLink = response.data.feed.link;
            // const res = response.data.items;
            // const posts = response.data.items
            // console.log({ avatar, profileLink, posts })
            // // let articlesNews = posts.filter(post => post.categories.includes("news", "keepkey"));
            // // let articlesUsers = posts.filter(post => post.categories.includes('cryptocurrency',"keepkey"));
            // let articlesDevelopers = posts.filter(post => post.categories.includes("keepkey"));
            // articlesDevelopers = articlesDevelopers.reverse();
            //
            //
            // // setArticlesNews(articlesNews)
            // // setArticlesUsers(articlesUsers)
            // setArticlesDevelopers(articlesDevelopers)

            //user articles
            //developer articles
            //news articles

        } catch (e) {
            console.error(e)
        }
    }
    // onStart()
    useEffect(() => {
        onStart()
    }, []) //once on startup

    return (

        <section className="container">
            {articlesDevelopers.map(article => (
                <div key={article.title}>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        mb="8"
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src={article.thumbnail}
                            alt='Article Image'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>{article.title}</Heading>
                                <Text><small>published: {article.pubDate}</small></Text>
                                <Text py='2'>
                                    {article.tags}
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button
                                    onClick={() => window.open(article.link, '_blank')}
                                    variant='solid' colorScheme='blue'>
                                    Read More
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </div>
            ))}

        </section>
    )
}