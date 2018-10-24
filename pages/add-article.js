import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Layout from '../components/layout'

class AddArticle extends React.Component {

  state = {
    article: ""
  }

  handleEditorChange = (e) => {
    const content = e.target.getContent()
    this.setState({article: content});
  }


  render() {

    const apiKey = process.env.TINY_MCE_API_KEY

    return (
      <Layout>
        <div>
          <h1>Add an Article</h1>
          <Editor 
            id='add-article'
            apiKey={apiKey} 
            initialValue="<p>Enter your Article here...</p>" 
            init={{
              plugins: ['advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
                'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                'save table contextmenu directionality emoticons template paste textcolor'],
              toolbar: 'formatselect fontsizeselect forecolor backcolor | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image media emoticons | preview',
              branding: false
            }}
            onChange={this.handleEditorChange} 
          />
        </div>
      </Layout>

    )
  }
}

export default AddArticle