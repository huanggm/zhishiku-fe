import React, { Component } from 'react'
import { Button } from 'antd'
import { ClipLoader } from 'react-spinners'

import 'easymde/dist/easymde.min.css'
import EasyMDE from 'easymde'

import RepoList from '../../components/RepoList'

export default class RepoListPage extends Component {
  constructor(props) {
    super(props)
    this.mdeRef = React.createRef()
    this.onSave = this.onSave.bind(this)

    console.log("this.props.match", this.props.match)
  }

  componentDidMount() {
    this.mde = new EasyMDE({
      element: this.mdeRef.current,
      spellChecker: false,
      shortcuts: {
        save: 'Cmd-S',
      },
      toolbar: [
        'link', 'image', 'table', '|', 'preview', 'side-by-side', 'fullscreen', 'guide', '|',
        {
          name: 'save',
          action: this.onSave,
          className: 'fa fa-save',
          title: 'Save Article',
        },
      ],
    })
    this.mde.toggleFullScreen()
    console.log(this.mde.toggleFullScreen)
  }

  onSave(editor) {
    const content = editor.value()
    console.log(content)
    // this.props.dispatch(saveArticle(content))
  }

  render() {
    return (
      <div>
        <textarea ref={this.mdeRef}></textarea>
      </div>
    )
  }
}
