import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";

const IndexPage = () => {
    const { site: { siteMetadata: { author } } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <Layout title='Home'>
            <h1 className='text-muted'>Hello</h1>
            <p>I am {author}, a full stack developer from Pune, India</p>
            <p>Need a developer?<Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage;
