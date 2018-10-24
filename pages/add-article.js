import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Layout from '../components/layout'

class AddArticle extends React.Component {

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }


  render() {

    const apiKey = process.env.TINY_MCE_API_KEY

    return (
      <Layout>
        <div>
          <h1>Add an Article</h1>
          <Editor 
            apiKey={apiKey}
            initialValue="<p>Enter your Article here...</p>" 
            init={{
              plugins: 'link image code',
              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code' }}
            onChange={this.handleEditorChange} 
          />
        </div>
      </Layout>

    )
  }
}

export default AddArticle