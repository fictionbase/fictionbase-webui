import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from "../src/aws-exports";
import { createTodo, updateTodo, deleteTodo } from '../src/graphql/mutations';
Amplify.configure(awsconfig);

import { listTodos } from '../src/graphql/queries';



export default function Home() {

  const todo = { name: "My first todo", description: "Hello world!" };
  /* create a todo */
  API.graphql(graphqlOperation(createTodo, {input: todo}));

  async function test() {
      const todos = await API.graphql(graphqlOperation(listTodos));
      console.table(todos)
  }

  test()

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>fictionbase is Application Tracking tool</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      </section>
    </Layout>
  )
}
