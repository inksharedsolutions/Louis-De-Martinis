import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/final-book1.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'louis-demartiniz',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Louis De Martinis" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `RESCUE`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                    A small group of highly skilled mercenaries who report directly to the vice president are sent anywhere in the world to defend America's interests. Their mission can be rescuing a scientist in a Chinese prison to eliminating a bomber inside Iran.
                                    </p>
                                 
                                    `,
                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/rescue-louis-de-martinis/1139210057?ean=9781648953453',
                                    amazon: 'https://www.amazon.com/Rescue-Louis-Martinis-ebook/dp/B092M9M6JX/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1618256650&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Rescue-Louis-Martinis/dp/1648953441/ref=sr_1_1?dchild=1&keywords=9781648953446&qid=1618256650&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/rescue-louis-de-martinis/1139210057?ean=9781648953446',
                                    booksamillion: 'https://www.booksamillion.com/p/Rescue/Louis-De-Martinis/9781648953446?id=8158356429268',
                                    // goodreads: 'https://www.goodreads.com/book/show/59049441-the-five?ac=1&from_search=true&qid=HHr03haLov&rank=1',
                                }
                            }}
                        />













                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;