import React from 'react'
import { List, message, Avatar, Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'

export default ({ articles, hasMore, loading, onFetchArticles }) => {
  function loadMore(a,b,c,d) {
    console.log('abcd: ', a, b, c, d)
    !loading && hasMore && onFetchArticles()
  }
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<Spin key='spin' />}
      >
        <List
          dataSource={articles}
          renderItem={article => (
            <List.Item key={article._id}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{article.path}</a>}
                description={article.owner}
              />
              <div>{article.content}</div>
            </List.Item>
          )}
        >
          {/* {loading && hasMore && (
              <Spin />
          )} */}
        </List>
      </InfiniteScroll>
    </div>
  )
}
