import React, { Component } from 'react'
import { Modal, Input, Select, Icon, Tag, Tooltip } from 'antd'
import PropTypes from 'prop-types'

const { Option } = Select

class EditorModal extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      inputVisible: false,
      inputValue: '',
    }
  }

  getTags = tags => {
    return tags.map((tag, index) => {
      const isLongTag = tag.length > 20
      const tagElem = (
        <Tag key={tag} closable={true} onClose={() => this.handleClose(tag)}>
          {isLongTag ? `${tag.slice(0, 20)}...` : tag}
        </Tag>
      )
      return isLongTag ? (
        <Tooltip title={tag} key={tag}>
          {tagElem}
        </Tooltip>
      ) : (
        tagElem
      )
    })
  }

  getTagBtn = (inputVisible, inputValue) => {
    return inputVisible ? (
      <Input
        ref={this.inputRef}
        type="text"
        size="small"
        style={{ width: 78 }}
        value={inputValue}
        onChange={this.handleInputChange}
        onBlur={this.handleInputBlur}
        onPressEnter={this.handleInputConfirm}
      />
    ) : (
      <Tag
        onClick={this.showInput}
        style={{ background: '#fff', borderStyle: 'dashed' }}
      >
        <Icon type="plus" /> New Tag
      </Tag>
    )
  }

  handleInputConfirm = () => {
    const { inputValue } = this.state
    if (inputValue) {
      this.setState({ inputValue: '' })
      this.props.onTagAdd(inputValue)
    }
  }

  handleInputBlur = () => {
    const { inputValue } = this.state
    this.setState({ inputValue: '', inputVisible: false })
    if (inputValue) {
      this.props.onTagAdd(inputValue)
    }
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.inputRef.current.focus())
  }

  handleClose = removedTag => {
    this.props.onTagRemove(removedTag)
  }

  render() {
    const {
      visible,
      repos,
      article,
      onRepoChange,
      onPathChange,
      onClickSave,
      onClickCancel,
    } = this.props
    const { inputVisible, inputValue } = this.state
    return (
      <div>
        <Modal
          title="保存文章"
          visible={visible}
          onOk={onClickSave}
          onCancel={onClickCancel}
          okText="确认"
          cancelText="取消"
        >
          <div style={{ marginBottom: 16 }}>
            <Input
              addonBefore={
                <Select style={{ width: 90 }} onChange={onRepoChange}>
                  {repos.map(repo => (
                    <Option key={repo.name}>{repo.name}</Option>
                  ))}
                </Select>
              }
              addonAfter=".md"
              value={article.path}
              onChange={onPathChange}
            />
          </div>
          <div>
            {this.getTags(article.tags)}
            {this.getTagBtn(inputVisible, inputValue)}
          </div>
        </Modal>
      </div>
    )
  }
}

EditorModal.propTypes = {
  visible: PropTypes.bool,
  repos: PropTypes.array,
  article: PropTypes.object,
  onRepoChange: PropTypes.func,
  onPathChange: PropTypes.func,
  onTagAdd: PropTypes.func,
  onTagRemoved: PropTypes.func,
  onClickSave: PropTypes.func,
  onClickCancel: PropTypes.func,
}

export default EditorModal
