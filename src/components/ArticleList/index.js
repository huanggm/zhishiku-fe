import React from 'react'
import { List, Avatar, Spin, Button } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'

export default ({
  articles,
  loading,
  hasMore,
  onFetchArticles,
  onDeleteArticle,
}) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={onFetchArticles}
      hasMore={!loading && hasMore}
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
            <div>
              <Button type="danger" onClick={onDeleteArticle(article)}>
                删除
              </Button>
            </div>
          </List.Item>
        )}
      >
        {loading && hasMore && <Spin />}
      </List>
    </InfiniteScroll>
  )
}
